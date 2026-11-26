---
name: dotnet-client-initialization
description: Load before constructing an APIMatic .NET SDK client in C#, registering it in a service container, or writing the factory that builds it — the client options class, HttpClient ownership and lifetime, dependency-injection registration in ASP.NET Core, and inbound webhooks.
---

# Initializing an APIMatic .NET SDK client

This applies to **any** APIMatic-generated .NET SDK. Replace placeholders with the real names from the
SDK you are using:

- `{Api}Client` — the single public client class (e.g. `FooClient`).
- `{Api}ClientOptions` — its options class.
- `{RootNamespace}` — the SDK's root namespace, used in `using` directives. This can differ from the NuGet
  package id (you install by the package id but `using` the namespace).

## Shape of the client

APIMatic .NET SDKs expose **one public client class** constructed from an `HttpClient` and an options
object:

```csharp
public {Api}Client(HttpClient httpClient, {Api}ClientOptions options)
```

Operations hang off **controller properties** (`client.{ApiGroup}.{Operation}(...)`) or sit directly on the
client (`client.{Operation}(...)`). Take them from the contract sheet (grounded from the SDK map/source), not
a decompiled or reflected view of the installed package — see `dotnet-calling-endpoints`.

The options class always carries these knobs (auth properties vary per API — see
`dotnet-authentication`):

```csharp
public class {Api}ClientOptions
{
    public ServerEnvironment Environment { get; set; } = ServerEnvironment.Default();
    public RetryOptions Retry { get; set; } = RetryOptions.Default();
    public LoggingOptions Logging { get; set; } = new();
    public ServerOptions Server { get; set; } = new();
    public IReadOnlyList<SdkHook> Hooks { get; set; } = [];   // request/response observation —
                                                              //   see dotnet-configuration-resilience § Hooks
    // + one nullable credentials property per auth scheme the API declares, and — for a static
    //   scheme — a nullable {Scheme}Provider delegate asked on every request (see dotnet-authentication)
}
```

`Logging` is a **built-in** request/response logger: under `Add{Api}Client` it is **already on**; on a client
you construct yourself a `{API}_LOG` environment variable — `{API}` being the SDK name in upper snake case — can
turn it on, unredacted JSON bodies included. Set `Logging.LoggerFactory` explicitly either way.
**dotnet-configuration-resilience** covers
`Retry`, `Logging`, `Server` / `Environment` (including **overriding the base URL**) and pagination.

## Direct instantiation

```csharp
using {RootNamespace};
using {RootNamespace}.Servers;

var options = new {Api}ClientOptions
{
    Environment = ServerEnvironment.Default(),   // pick the environment your API exposes
    // ...set the auth credentials property your API uses, or leave it null and set its
    //    {API}_* environment variable instead (see dotnet-authentication)
};

var httpClient = new HttpClient();               // reuse a single long-lived instance
var client = new {Api}Client(httpClient, options);
```

### HttpClient lifetime

The SDK does **not** own the `HttpClient` — you provide it. Reuse one instance for the app's lifetime
(or use `IHttpClientFactory`); do not create one per request. Attach custom `HttpMessageHandler`s here for
logging, proxies, or custom TLS (see `dotnet-configuration-resilience`).

**Keep the SDK client long-lived too.** Its constructor builds and owns the retry pipelines (from
`options.Retry`), the logger (reading `{API}_LOG`) and the auth schemes — for OAuth2 the scheme
holds the access-token cache, so a fresh client starts with an empty cache and **pays a token request on its
first call**. Reuse one SDK client for the app's lifetime; construct per request only where credentials
genuinely differ per request, and expect the token fetch.

## Choosing the server / base URL

Select the environment with `options.Environment = ServerEnvironment.{Environment}` — one constant per
environment (e.g. `ServerEnvironment.Production`, or region constants). Base-URL and templated-parameter
overrides live at `options.Server.{ServerName}.{Environment}`, NOT directly on `ServerOptions` — see
**dotnet-configuration-resilience**. The constants and template parameters come from the contract sheet
(grounded from the SDK map/source).

## Dependency injection (ASP.NET Core / generic host)

Every APIMatic .NET SDK ships a `ServiceCollection` extension named `Add{Api}Client`. It wires an
`IHttpClientFactory`-managed `HttpClient` — resolving the **default, unnamed** factory client — and captures
the `options` you configure **once, at registration** (so the callback may read `IConfiguration` or
environment variables, but **not** scoped services):

```csharp
using {RootNamespace};
using {RootNamespace}.Servers;   // ServerEnvironment lives here, not in the root namespace

builder.Services.Add{Api}Client(options =>
{
    options.Environment = ServerEnvironment.Default();
    // options.{Scheme} = new {Scheme}Credentials { ... };
});
```

⚠ **The extension registers the client as a `singleton`.** It calls `CreateClient()` *once* and holds that
`HttpClient` for the process lifetime, so `IHttpClientFactory`'s handler rotation never applies to it and a
DNS change is never picked up — the app keeps calling a decommissioned IP after a provider fails over, until
a restart. A transient registration avoids stale DNS but pays a fresh, empty OAuth token cache per
resolution (see the lifetime note above). The fix: set `PooledConnectionLifetime` on the primary handler so
the pool recycles connections on a timer, and keep the SDK client long-lived. Registering yourself over a
named `HttpClient` (below) gives you the same control plus an unshared pipeline.

To attach custom `DelegatingHandler`s (logging, proxies, custom TLS) under this DI registration, configure
the **default, unnamed** factory client it resolves — e.g.
`services.AddHttpClient(Options.DefaultName).AddHttpMessageHandler(() => new MyHandler());`. Note what that
means: the default client is shared with **every other unnamed `CreateClient()` consumer in the app**, so a
timeout or handler you set for this SDK changes their behaviour too. To avoid that, register the client
yourself over a **named** `HttpClient` — the same shape the extension uses, minus the shared surface. See
**dotnet-configuration-resilience**.

### Registering over a named `HttpClient`

The full shape. **Set `Timeout`**: the default `100s` bounds one attempt, and a hung provider costs ~100s on
a `POST` and ~407s on a `GET` (see **dotnet-configuration-resilience** § *Bounding a call*):

```csharp
using {RootNamespace};

const string ClientName = "{Api}";   // your own constant — keeps this pipeline off the shared default client

services.AddHttpClient(ClientName, c =>
    {
        // SET THIS. Default 100s. Bounds one ATTEMPT, not the whole call.
        // See dotnet-configuration-resilience > Bounding a call.
        c.Timeout = TimeSpan.FromSeconds(10);
    })
    // .AddHttpMessageHandler<MyHandler>()          // logging / custom policy, scoped to this SDK
    .ConfigurePrimaryHttpMessageHandler(() => new SocketsHttpHandler
    {
        PooledConnectionLifetime = TimeSpan.FromMinutes(5)   // needed if the client below is a singleton
    });

services.AddSingleton(sp =>
{
    var httpClient = sp.GetRequiredService<IHttpClientFactory>().CreateClient(ClientName);
    var options = new {Api}ClientOptions { /* environment, server, credentials */ };
    return new {Api}Client(httpClient, options);   // configure options BEFORE constructing
});
```

`PooledConnectionLifetime` keeps DNS fresh behind a long-lived client; `Timeout` stops a hung provider holding
the request. Set both.

Then inject it:

```csharp
public sealed class MyService({Api}Client client)
{
    public Task DoWork() => client.{ApiGroup}.{Operation}(/* ... */);
}
```

## Inbound webhooks — what `Core/Webhooks/` does and does not give you

Every SDK ships `Core/Webhooks/`: `WebhookRequest` (`FromStream`, `FromBytes`, `TryGetHeader` — a
body-and-headers holder) and the `public abstract` `WebhookEventParser<TEvent>` and `WebhookEvent<…>`.
**`WebhookEventParser<TEvent>.Parse` verifies nothing** — it checks the body is a JSON object and builds the
event; it is a deserializer, not a security boundary.

If the SDK has a `{RootNamespace}.Webhooks` namespace, it holds a concrete `{Api}WebhookParser`, registered
by `services.Add{Api}Webhooks()`. If that namespace also holds a public `{Api}WebhookSignatureVerifier`,
verify with its `bool Verify(WebhookRequest)` before you parse: it is built from `WebhookOptions` (`Secret`,
`TimeProvider`, and `ReplayTolerance` where present) and registered by
`services.Add{Api}WebhookSignatureVerifier(o => o.Secret = ...)`; its constructor throws
`InvalidOperationException` on a blank `Secret`. Without that class, verification is yours to write against
the provider's published scheme — `Core/Webhooks/Signing/SignatureVerifier` is `internal` and cannot be
called from your code.

## Next

- Configure authentication → **dotnet-authentication**
- Make your first call → **dotnet-calling-endpoints**
- Tune retries/timeouts/logging → **dotnet-configuration-resilience**
