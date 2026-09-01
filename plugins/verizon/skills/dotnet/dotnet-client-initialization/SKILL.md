---
name: dotnet-client-initialization
description: Creating and registering an APIMatic-generated .NET SDK client in C# — construction, the builder/options shape, HttpClient ownership and lifetime, and dependency-injection registration in ASP.NET Core. Load before wiring the client into an application's service container or writing the factory that builds it.
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

Operations are exposed on the client. Most are grouped under **controller properties** (one per API resource
group) and called `client.{ApiGroup}.{Operation}(...)` — for example, a `Widgets` controller's
`ListWidgets` operation is `client.Widgets.ListWidgets(...)`. An operation that belongs to no group sits
**directly on the client**, called `client.{Operation}(...)`. The available controller properties (and any
direct operations) come from the contract sheet (grounded from the SDK map/source),
not a decompiled or reflected view of the installed package. See `dotnet-calling-endpoints`.

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
    // + one nullable credentials property per auth scheme the API declares, and — for an OAuth2
    //   scheme — a nullable {Scheme}TokenStrategy hook alongside it (see dotnet-authentication)
}
```

`Logging` is a real property, not a placeholder — the SDK has a **built-in** request/response logger, and
what an unset `Logging.LoggerFactory` means depends on how the client is built. Under `Add{Api}Client` the
extension fills it from the container's `ILoggerFactory`, so logging is **already on** at your host's level.
On a client you construct yourself it falls through to a `{APICLIENTTYPENAME}_LOG` environment variable that
can switch logging — including unredacted JSON request bodies — on from outside your code. Set it
explicitly either way; **dotnet-configuration-resilience** has the full table. Tuning these knobs — `Retry` (retries, backoff, per-attempt timeout), `Logging`, and
`Server` / `Environment` (server selection and **overriding the base URL**), plus pagination — is covered in
**dotnet-configuration-resilience**.

## Direct instantiation

```csharp
using {RootNamespace};
using {RootNamespace}.Servers;

var options = new {Api}ClientOptions
{
    Environment = ServerEnvironment.Default(),   // pick the environment your API exposes
    // ...set the auth credentials property your API uses (see dotnet-authentication)
};

var httpClient = new HttpClient();               // reuse a single long-lived instance
var client = new {Api}Client(httpClient, options);
```

### HttpClient lifetime

The SDK does **not** own the `HttpClient` — you provide it. Reuse one instance for the app's lifetime
(or use `IHttpClientFactory`); do not create one per request. Attach custom `HttpMessageHandler`s here for
logging, proxies, or custom TLS (see `dotnet-configuration-resilience`).

**Keep both the `HttpClient` and the SDK client long-lived — the client is not a stateless wrapper.** The
only thing you hand it is the HTTP pipeline; its constructor builds the rest and then owns it:

- the **resilience pipelines** — two Polly pipelines are eagerly built from `options.Retry`;
- the **logger** — constructed here, which is also where the `{APICLIENTTYPENAME}_LOG` environment variable
  is read;
- the **auth schemes**, and for an OAuth2 SDK the auth scheme *is* the access-token cache — an instance
  field on the scheme object.

That last one is the reason a per-request client is a real cost rather than a stylistic one: a fresh client
starts with an empty token cache, so **every resolution pays a token request on its first call**. Three
calls through three transient clients is three token round-trips where a shared client makes one.

Reuse one `HttpClient` (or let `IHttpClientFactory` own it) *and* one SDK client for the app's lifetime.
Construct per request only where you genuinely need different credentials per request — and then expect the
token fetch.

## Choosing the server / base URL

Environments are modeled as a `ServerEnvironment` string-enum with one constant per environment the API
defines (e.g. `ServerEnvironment.Production`, or region constants). Select one on `options.Environment`.
Overriding a templated parameter or the base URL is nested **per server AND per environment** —
`options.Server.{ServerName}.{Environment}.BaseUrl` (with any templated params at the same level), NOT
directly on `ServerOptions`. **dotnet-configuration-resilience** documents this in full and owns
server / base-URL configuration. The exact constants and template parameters for your API come from the
contract sheet (grounded from the SDK map/source).

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

⚠ **The extension registers the client as a `singleton`, and that has a consequence worth planning for.**
A singleton calls `CreateClient()` *once* and holds that `HttpClient` for the process lifetime, so
`IHttpClientFactory`'s handler rotation never applies to it and a DNS change is cached indefinitely — the
classic symptom is an app that keeps calling a decommissioned IP after a provider fails over, and only a
restart fixes it. (A transient registration avoids *this* problem — each resolution takes a fresh `HttpClient` and the
pooled pipeline stays rotated — but it buys stale-DNS safety with a fresh, empty OAuth token cache per
resolution, so it is a trade, not a fix. See the lifetime note above.)

The actual fix is cheap: set `PooledConnectionLifetime` on the primary handler so the pool recycles
connections on a timer, and keep the SDK client long-lived. Registering yourself over a named `HttpClient`
(below) gives you the same control plus an unshared pipeline. Confirm the registration in the extension rather than trusting this paragraph if your SDK was
generated by a different version — it is one line, and the contract sheet carries it.

To attach custom `DelegatingHandler`s (logging, proxies, custom TLS) under this DI registration, configure
the **default, unnamed** factory client it resolves — e.g.
`services.AddHttpClient(Options.DefaultName).AddHttpMessageHandler(() => new MyHandler());`. Note what that
means: the default client is shared with **every other unnamed `CreateClient()` consumer in the app**, so a
timeout or handler you set for this SDK changes their behaviour too. To avoid that, register the client
yourself over a **named** `HttpClient` — the same shape the extension uses, minus the shared surface. See
**dotnet-configuration-resilience**.

### Registering over a named `HttpClient`

The full shape. **`Timeout` is not optional to think about** — the default is `100s`, which matches the SDK's
own per-attempt retry timeout. On defaults a hung provider costs you ~100s on a `POST` and **~407s on a
`GET`**, because the SDK's per-attempt timeout is itself a retry trigger on the retryable verbs (see
**dotnet-configuration-resilience**). Either number is an outage, not a timeout:

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

Both knobs above are load-bearing and they answer different failures: `PooledConnectionLifetime` keeps DNS
fresh behind a long-lived client, and `Timeout` stops a hung provider from holding a request, a pooled connection and the caller open (~100s,
and ~407s on a retryable verb — see **dotnet-configuration-resilience**). Setting
only the first is the common mistake — it looks like the resilience box is ticked.

Then inject it:

```csharp
public sealed class MyService({Api}Client client)
{
    public Task DoWork() => client.{ApiGroup}.{Operation}(/* ... */);
}
```

## Inbound webhooks — what `Core/Webhooks/` does and does not give you

Every emitted SDK ships a `Core/Webhooks/` tree: `WebhookRequest`, `WebhookEvent<…>`,
`WebhookEventParser<…>`, and a `Signing/` folder holding `SignatureVerifier`. Three facts about it, verified
on both sampled 4.0.0 SDKs, decide whether any of it is usable:

- **`SignatureVerifier` is `internal sealed`, with no `InternalsVisibleTo`.** You cannot call it, construct
  it, or subclass it from your code. It is fully implemented — HMAC, digest encodings, replay tolerance —
  and on both samples it has **zero callers**.
- **`WebhookEventParser<TEvent>.Parse` verifies nothing.** It parses the body with `JsonDocument.Parse`,
  checks the root is a JSON object, and hands off to an abstract `CreateEvent`. The name reads like a
  security boundary; it is a deserializer.
- **`WebhookEventParser` and `WebhookEvent` are `public abstract`, and neither sampled SDK generates a
  concrete subclass**, because neither spec declares webhook events. The public machinery has nothing to
  instantiate — a base class waiting on generated code that was never emitted.

So on an SDK with no generated events, signature verification is yours to write, against the provider's
published scheme. `WebhookRequest` remains useful on its own — `FromStream`, `FromBytes`, `TryGetHeader`
give you a body-and-headers holder to verify against — but it computes nothing for you.

> **Not settled by either sample.** Whether a spec that *does* declare webhook events generates a concrete
> parser, and whether that generated parser calls the internal `SignatureVerifier`, is unknown here — no
> sampled SDK exercises it. An `internal` verifier is exactly what you would expect if generated code is
> its intended caller, so do not read "verification happens outside the SDK" as a property of the
> generator. It is what is true when no events were generated. Look for a `WebhookEvent` subclass in the
> emitted tree before assuming either way.

## Next

- Configure authentication → **dotnet-authentication**
- Make your first call → **dotnet-calling-endpoints**
- Tune retries/timeouts/logging → **dotnet-configuration-resilience**
