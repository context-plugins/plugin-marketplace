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
direct operations) come from the contract sheet (the SDK helper agent grounds it from the SDK map/source),
not a decompiled or reflected view of the installed package. See `dotnet-calling-endpoints`.

The options class always carries these knobs (auth properties vary per API — see
`dotnet-authentication`):

```csharp
public class {Api}ClientOptions
{
    public ServerEnvironment Environment { get; set; } = ServerEnvironment.Default();
    public RetryOptions Retry { get; set; } = RetryOptions.Default();
    public ServerOptions Server { get; set; } = new();
    // + one nullable credentials property per auth scheme the API declares
}
```

Tuning these knobs — `Retry` (retries, backoff, per-attempt timeout) and `Server` / `Environment` (server
selection and **overriding the base URL**), plus pagination and logging — is covered in
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

The client itself is also meant to be **long-lived** — construct it once and reuse it for the app's
lifetime (it's just lightweight controller wrappers over the shared HTTP pipeline). Don't build a new
client per request or per call.

## Choosing the server / base URL

Environments are modeled as a `ServerEnvironment` string-enum with one constant per environment the API
defines (e.g. `ServerEnvironment.Production`, or region constants). Select one on `options.Environment`.
Overriding a templated parameter or the base URL is nested **per server AND per environment** —
`options.Server.{ServerName}.{Environment}.BaseUrl` (with any templated params at the same level), NOT
directly on `ServerOptions`. **dotnet-configuration-resilience** documents this in full and owns
server / base-URL configuration. The exact constants and template parameters for your API come from the
contract sheet (the SDK helper agent grounds them from the SDK map/source).

## Dependency injection (ASP.NET Core / generic host)

Every APIMatic .NET SDK ships a `ServiceCollection` extension named `Add{Api}Client`. It wires an
`IHttpClientFactory`-managed `HttpClient` — resolving the **default, unnamed** factory client — and captures
the `options` you configure **once, at registration** (so the callback may read `IConfiguration` or
environment variables, but **not** scoped services):

```csharp
using {RootNamespace};

builder.Services.Add{Api}Client(options =>
{
    options.Environment = ServerEnvironment.Default();
    // options.{Scheme} = new {Scheme}Credentials { ... };
});
```

**Check which lifetime it registers — that decides whether handler rotation ever reaches you.** Generated
extensions differ here, and the two are not equivalent. A **transient** client is harmless: each resolution
takes a fresh `HttpClient` from the factory, so the pooled handler pipeline stays shared and rotated. A
**singleton** client calls `CreateClient()` *once* and holds that `HttpClient` for the process lifetime — so
`IHttpClientFactory`'s handler rotation never applies to it and a DNS change is cached indefinitely. Read
the extension (or take it from the contract sheet) rather than assuming; if it is a singleton and the
process is long-lived, set `PooledConnectionLifetime` on the primary handler, or register the client
yourself instead of using the extension.

To attach custom `DelegatingHandler`s (logging, proxies, custom TLS) under this DI registration, configure
the **default, unnamed** factory client it resolves — e.g.
`services.AddHttpClient(Options.DefaultName).AddHttpMessageHandler(() => new MyHandler());`. Note what that
means: the default client is shared with **every other unnamed `CreateClient()` consumer in the app**, so a
timeout or handler you set for this SDK changes their behaviour too. To avoid that, register the client
yourself over a **named** `HttpClient` — the same shape the extension uses, minus the shared surface. See
**dotnet-configuration-resilience**.

### Registering over a named `HttpClient`

The full shape. **`Timeout` is not optional to think about** — the default is `100s`, which matches the SDK's
own per-attempt retry timeout, so on defaults a hung provider costs you ~100s before anything gives way. That
is an outage, not a timeout:

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
fresh behind a long-lived client, and `Timeout` stops a hung provider from pinning a request thread. Setting
only the first is the common mistake — it looks like the resilience box is ticked.

Then inject it:

```csharp
public sealed class MyService({Api}Client client)
{
    public Task DoWork() => client.{ApiGroup}.{Operation}(/* ... */);
}
```

## Next

- Configure authentication → **dotnet-authentication**
- Make your first call → **dotnet-calling-endpoints**
- Tune retries/timeouts/logging → **dotnet-configuration-resilience**
