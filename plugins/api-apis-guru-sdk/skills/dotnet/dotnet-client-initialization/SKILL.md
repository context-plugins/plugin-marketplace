---
name: dotnet-client-initialization
description: Initialize an APIMatic-generated C#/.NET API client — you construct it from an HttpClient you supply (the SDK doesn't own it; reuse one long-lived instance or an IHttpClientFactory, not one per request) plus an options object, choose a server environment/base URL, and DI-register via the generated AddHotelBookingClient extension. Use the moment you write `new HotelBookingClient(...)`, build its options, pick an environment, set up the HttpClient/client lifetime, or register the client in dependency injection — load it even after reading the constructor in the SDK source, since the signature shows the arguments but not the lifetime/reuse rules or DI wiring.
---

# Initializing an APIMatic .NET SDK client

This applies to **any** APIMatic-generated .NET SDK. Replace placeholders with the real names from the
SDK you are using:

- `HotelBookingClient` — the single public client class (e.g. `FooClient`).
- `HotelBookingClientOptions` — its options class.
- `HotelBooking` — the SDK's root namespace, used in `using` directives. This can differ from the NuGet
  package id (you install by the package id but `using` the namespace).

## Shape of the client

APIMatic .NET SDKs expose **one public client class** constructed from an `HttpClient` and an options
object:

```csharp
public HotelBookingClient(HttpClient httpClient, HotelBookingClientOptions options)
```

Operations are exposed on the client. Most are grouped under **controller properties** (one per API resource
group) and called `client.{ApiGroup}.{Operation}(...)` — for example, a `Widgets` controller's
`ListWidgets` operation is `client.Widgets.ListWidgets(...)`. An operation that belongs to no group sits
**directly on the client**, called `client.{Operation}(...)`. Open the client class **in the SDK source**
(not a decompiled or reflected view of the installed package) to see the available controller properties
(and any direct operations). See `dotnet-calling-endpoints`.

The options class always carries these knobs (auth properties vary per API — see
`dotnet-authentication`):

```csharp
public class HotelBookingClientOptions
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
using HotelBooking;
using HotelBooking.Servers;

var options = new HotelBookingClientOptions
{
    Environment = ServerEnvironment.Default(),   // pick the environment your API exposes
    // ...set the auth credentials property your API uses (see dotnet-authentication)
};

var httpClient = new HttpClient();               // reuse a single long-lived instance
var client = new HotelBookingClient(httpClient, options);
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
defines (e.g. `ServerEnvironment.Production`, or region constants). `ServerOptions` holds the base-URL
templates and any templated parameters (such as a subdomain). Set the environment on options, and
override template parameters via `Server` when the base URL contains placeholders:

```csharp
var options = new HotelBookingClientOptions
{
    Environment = ServerEnvironment.Default(),
    Server = new ServerOptions
    {
        // e.g. Production = new ProductionOptions { ... templated params ... }
    }
};
```

Inspect the SDK's `Servers/ServerEnvironment.cs` and `ServerOptions.cs` for the exact constants and
template parameters of your API.

## Dependency injection (ASP.NET Core / generic host)

Every APIMatic .NET SDK ships a `ServiceCollection` extension named `AddHotelBookingClient`, which registers the
client (transient) and wires an `IHttpClientFactory`-managed `HttpClient` (it resolves the **default,
unnamed** factory client, and the `options` you configure are captured once at registration):

```csharp
using HotelBooking;

builder.Services.AddHotelBookingClient(options =>
{
    options.Environment = ServerEnvironment.Default();
    // options.{Scheme} = new {Scheme}Credentials { ... };
});
```

To attach custom `DelegatingHandler`s (logging, proxies, custom TLS) under this DI registration, configure
the **default, unnamed** factory client it resolves — e.g.
`services.AddHttpClient(Options.DefaultName).AddHttpMessageHandler(() => new MyHandler());`. See
**dotnet-configuration-resilience**.

Then inject it:

```csharp
public sealed class MyService(HotelBookingClient client)
{
    public Task DoWork() => client.{ApiGroup}.{Operation}(/* ... */);
}
```

## Next

- Configure authentication → **dotnet-authentication**
- Make your first call → **dotnet-calling-endpoints**
- Tune retries/timeouts/logging → **dotnet-configuration-resilience**
