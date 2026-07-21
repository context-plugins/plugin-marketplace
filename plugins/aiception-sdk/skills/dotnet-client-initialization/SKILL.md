---
name: dotnet-client-initialization
description: Construct and configure an APIMatic-generated C#/.NET SDK client — build it with the fluent new AIceptionInteractiveClient.Builder()...Build() pattern (or AIceptionInteractiveClient.FromConfiguration from IConfiguration / CreateFromEnvironment from env vars), choose an Environment enum value and base-URL Server, set the HttpClient timeout / supply your own HttpClient via .HttpClientConfig, reach controllers through client properties, and reuse the immutable, thread-safe client for the process lifetime. Use the moment you write new AIceptionInteractiveClient.Builder(), build from configuration, pick an environment, set up the HttpClient/client lifetime, or wire the client into DI — load it even after reading the constructor in the source, since the signature shows the builder methods but not the build-then-immutable shape, the reuse rules, or that the client owns its HttpClient.
---

# Initializing an APIMatic C#/.NET SDK client

This applies to **any** APIMatic-generated C#/.NET SDK (APIMATIC v3.0). Replace placeholders with the real
names from the SDK you are using:

- `AIceptionInteractive.Standard` — the root namespace (e.g. `MultiAuthSample.Standard`).
- `AIceptionInteractiveClient` — the client class (e.g. `MultiAuthSampleClient`).
- `{Resource}Controller` — a controller accessor **property** on the client.

## The shape: a fluent Builder, then an immutable client

APIMatic .NET SDKs do **not** take a plain constructor. You chain setters on a nested `Builder` and call
`.Build()`, which returns the immutable client:

```csharp
using AIceptionInteractive.Standard;
using AIceptionInteractive.Standard.Authentication;

AIceptionInteractiveClient client = new AIceptionInteractiveClient.Builder()
    // auth — see dotnet-authentication
    .{Scheme}Credentials(new {Scheme}Model.Builder(/* ... */).Build())
    .Environment(Environment.Production)          // see "Environment" below
    .HttpClientConfig(config => config.Timeout(TimeSpan.FromSeconds(60)))
    .Build();
```

Every `Builder` method returns the `Builder`, so calls chain in any order; `.Build()` snapshots the
configuration. The exact set of setters is per-API — open the nested `Builder` class in `AIceptionInteractiveClient.cs`.
Common ones:

| Builder method | Sets |
| --- | --- |
| `.Environment(Environment env)` | the API environment (selects the base URL) |
| `.HttpClientConfig(Action<HttpClientConfiguration.Builder>)` | timeout, retries, proxy, custom `HttpClient` (see dotnet-configuration-resilience) |
| `.{Scheme}Credentials({Scheme}Model)` | one per auth scheme the API uses (see dotnet-authentication) |
| `.HttpCallback(HttpCallback)` | request/response callback hook (see dotnet-configuration-resilience) |
| other setters | API-specific server/global params (e.g. `.Port(...)`, a global header/token) — check the source |

> The default `Environment` and any server parameters come from the `Builder`'s field initializers — read
> them in `AIceptionInteractiveClient.cs` rather than assuming (e.g. one sample defaults to `Environment.Testing`).

## From IConfiguration

Most SDKs generate a `FromConfiguration` entry point that binds an `IConfigurationSection` (JSON file, env
vars, any .NET config provider). Missing values fall back to SDK defaults:

```csharp
using Microsoft.Extensions.Configuration;

var configuration = new ConfigurationBuilder()
    .AddJsonFile("config.json")
    .AddEnvironmentVariables()
    .Build();

AIceptionInteractiveClient client = AIceptionInteractiveClient.FromConfiguration(configuration.GetSection("AIceptionInteractive"));
```

`AIceptionInteractiveClient.Builder.FromConfiguration(section)` returns a `Builder` instead, so you can override specific
properties in code before `.Build()`. The config keys mirror the builder setters (`Environment`,
`HttpClientConfig`, each `{Scheme}Credentials` block) — see the SDK's
`doc/configuration-based-initialization.md` for the exact JSON shape.

## From environment variables

Some SDKs also generate an internal `CreateFromEnvironment()` that reads `{API_UPPER}_...` variables (e.g.
`{API_UPPER}_ENVIRONMENT`, `{API_UPPER}_USERNAME`). Grep `CreateFromEnvironment` in `AIceptionInteractiveClient.cs` for
the exact variable names this SDK reads (they are derived from the API name and per-scheme credential
fields).

## Accessing controllers

Operations are grouped under **controller properties** on the client — one per API resource group. Each is
lazily created and cached. Get it, then call the operation (see **dotnet-calling-endpoints**):

```csharp
var ctrl = client.{Resource}Controller;
var result = await ctrl.{Operation}Async(/* ... */);
```

Open `AIceptionInteractiveClient.cs` for the full list of controller properties.

## Choosing the environment / base URL

Environments are values of the generated `Environment` **C# enum** in the root namespace (e.g.
`Environment.Production`, `Environment.Testing`). The client maps each `Environment` to one or more
`Server` base URLs internally; you select the environment, not a free-form URL:

```csharp
AIceptionInteractiveClient client = new AIceptionInteractiveClient.Builder()
    .Environment(Environment.Production)
    .Build();
```

`Environment` may collide with `System.Environment` — alias it
(`using Environment = AIceptionInteractive.Standard.Environment;`) when both are in scope. To point the SDK at a mock
or proxy that the `Environment` values don't cover, see **dotnet-testing** (inject an `HttpClient`) and
**dotnet-configuration-resilience**. `client.GetBaseUri()` returns the resolved base URL for sanity checks.

## Custom HttpClient / timeout

The SDK builds and **owns** its `HttpClient`. Set the timeout, or supply your own pre-configured
`HttpClient` (for a proxy, custom `HttpMessageHandler`, or shared connection pool), through
`.HttpClientConfig`:

```csharp
AIceptionInteractiveClient client = new AIceptionInteractiveClient.Builder()
    .HttpClientConfig(config => config
        .Timeout(TimeSpan.FromSeconds(30))          // default is per-API (often 100s)
        .HttpClientInstance(myHttpClient))          // supply your own HttpClient
    .Build();
```

When you pass `HttpClientInstance`, by default the SDK still applies its own timeout/retry settings on top;
pass the overload's `overrideHttpClientConfiguration: false` to leave your `HttpClient` untouched — confirm
in `HttpClientConfiguration`. Retries also live here — see **dotnet-configuration-resilience**.

## Client lifetime and reuse

The client is **immutable after `.Build()`** and **thread-safe**. Construct it **once** at application
startup and reuse the single instance for the process lifetime — do **not** build a new client per request
(that throws away the pooled `HttpClient`'s connections and any cached OAuth token, and risks socket
exhaustion).

```csharp
// startup — construct once:
static readonly AIceptionInteractiveClient Api = new AIceptionInteractiveClient.Builder()
    .{Scheme}Credentials(/* ... */)
    .Environment(Environment.Production)
    .Build();

// request handlers / services — reuse the shared instance:
var result = await Api.{Resource}Controller.{Operation}Async(/* ... */);
```

To produce a variant with a few settings changed (e.g. attach a freshly fetched OAuth token), call
`client.ToBuilder()` to get a `Builder` seeded from the current client, change what you need, and
`.Build()` a new instance — don't mutate the existing one.

## Dependency injection

These SDKs ship **no** `AddAIceptionInteractiveClient` DI extension. Register the client yourself as a **singleton** so
the single long-lived instance (and its `HttpClient`) is shared:

```csharp
services.AddSingleton(sp =>
    AIceptionInteractiveClient.FromConfiguration(
        sp.GetRequiredService<IConfiguration>().GetSection("AIceptionInteractive")));
```

Then inject `AIceptionInteractiveClient` (or your own narrow interface wrapping it) into consumers. If you want the
SDK to use a factory-managed `HttpClient`, resolve one from `IHttpClientFactory` and pass it via
`.HttpClientConfig(c => c.HttpClientInstance(...))` in the singleton factory.

## Next

- Configure authentication → **dotnet-authentication**
- Make your first call → **dotnet-calling-endpoints**
- Tune retries/timeouts/transport → **dotnet-configuration-resilience**
