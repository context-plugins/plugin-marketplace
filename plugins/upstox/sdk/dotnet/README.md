# Upstox

[![Built with APIMatic][apimatic-badge]][apimatic-url] [![License: MIT][license-badge]][license-url]

The Upstox SDK for .NET provides access to the Upstox REST APIs from .NET applications.

> [!TIP]
> **Looking for a specific signature, model, enum, or error type?** This SDK ships a generated,
> machine-readable **[SDK map](sdk-map.md)** — a lookup index of the SDK's entire C# surface. Consult it
> **before** grepping or scanning the source tree; it answers most contract questions directly and,
> when a source file is genuinely needed, names the exact one to open. Details under [SDK map](#sdk-map).

Historical Candle Data V3

---

## Installation

Add the .NET SDK as a project reference into your solution:

```bash
dotnet add reference <path-to-sdk>/src/Upstox/Upstox.csproj
```

The project takes its build settings from the files around it, so reference it in place. Building from source needs the .NET 10 SDK (C# 14); the package itself targets netstandard2.0.

The assembly embeds its PDB, so stack traces carry SDK file and line numbers.

---

## Building from source

```bash
dotnet pack src/Upstox/Upstox.csproj -c Release
```

Release packs come from CI, where `CI=true` makes the build deterministic; to reproduce that locally add `-p:ContinuousIntegrationBuild=true`.

The generator never emits `Directory.Build.targets`, so a customer-owned one at the repo root is MSBuild's auto-imported customization seam. It imports after the props and the project body into every project under the root, so put SDK-only settings under `<PropertyGroup Condition="'$(MSBuildProjectName)' == 'Upstox'">`.

It overrides every property the SDK reads when targets run (package metadata, `Version`, `AssemblyVersion`, compiler warnings, package references, which under central package management use `VersionOverride`). It cannot change values the SDK derives earlier: `TargetFramework(s)`, `AssemblyName` and output paths stay generator settings; turning off `GenerateDocumentationFile` also needs `<DocumentationFile />`; a `ContinuousIntegrationBuild` set there also needs `<DeterministicSourcePaths>true</DeterministicSourcePaths>`.

The SDK's props files are a boundary: a parent repository's `Directory.Build.props` does not apply, while a parent `Directory.Build.targets` does.

APIMatic's delivery tools do not yet preserve `Directory.Build.targets` across regeneration — list it in `.codegenignore` when publishing to GitHub.

---

## Quick Start

### Dependency Injection

Register the client with `IServiceCollection` and resolve it from the container. The `HttpClient` is managed by `IHttpClientFactory`. Configure the client's behavior through [UpstoxClientOptions](src/Upstox/UpstoxClientOptions.cs).

```csharp
services.AddUpstoxClient(options =>
{
    options.Oauth2 =
        new OAuth2AuthorizationCodeCredentials
        {
            ClientId = "YOUR_CLIENT_ID",
            RedirectUri = "YOUR_REDIRECT_URI",
            PromptForAuthorizationCode = (authUrl, ct) => Task.FromResult(""),
        };
    options.Environment = ServerEnvironment.Production;
    // TODO: configure more client options here
});
```

### Direct Instantiation

Create the client by passing an `HttpClient` you manage yourself. Configure the client's behavior through [UpstoxClientOptions](src/Upstox/UpstoxClientOptions.cs).

```csharp
var httpClient = new HttpClient();
// TODO: configure more client options here
var options = new UpstoxClientOptions
{
    Oauth2 = new OAuth2AuthorizationCodeCredentials
    {
        ClientId = "YOUR_CLIENT_ID",
        RedirectUri = "YOUR_REDIRECT_URI",
        PromptForAuthorizationCode = (authUrl, ct) => Task.FromResult(""),
    },
    Environment = ServerEnvironment.Production,
};
var client = new UpstoxClient(httpClient, options);
```

### Credentials, tokens and 401s

Every credential is an option on `UpstoxClientOptions`.

OAuth2 credentials (`OAuth2AuthorizationCodeCredentials`) are exchanged for a token the SDK caches and renews before it expires. The authorization-code grant holds one token and requests every scope its flow declares, so one consent covers every operation; it keeps the refresh token the server issues and uses it to renew silently. Setting `Scope` on the credentials replaces that with one token requested with that value, and an empty `Scope` requests none. Set it to the scopes your client is registered for whenever the API declares more than it grants you: the default asks for the whole catalogue, and an authorization server that enforces per-client scope registration answers `invalid_scope` to that request.

When a server answers `401 Unauthorized`:

- An OAuth2-authenticated call drops the rejected token, obtains a new one and is sent again, once, under every retry setting including `RetryOptions.Disabled()`. The retry is logged as `attempt 1/1: 401 Unauthorized`; `RetryOptions.OnRetry` is not called for it. A second `401` is returned to you.

A request whose body cannot be re-sent (a stream upload) is never retried either, but its `401` still drops the cached token, so the next call recovers. A hook that replaces the `Authorization` header makes the token comparison miss; the one retry still happens.

### Required and optional auth

An operation sends only the credentials its API declares. If a required credential is not configured, the call fails before anything is sent with an `AuthSchemeException` that names the scheme (`… requires the Oauth2 scheme, which is not configured.`). A credential that is set but blank is treated as configured and sent as-is: the SDK checks presence, never content.

### Credentials from environment variables

`Oauth2` has no environment default. The only environment variable the client reads is for logging:

| Option | Environment variables |
| --- | --- |
| logging | `UPSTOX_LOG` = `info`, `debug` or `trace` (read only when no `ILoggerFactory` is set; `AddUpstoxClient` always supplies the container's) |

Hosted applications that already use the .NET options pattern can bind the whole options object from `IConfiguration`, which picks up environment variables through the configuration provider (`Upstox__Oauth2__ClientId`, and so on):

```csharp
services.AddUpstoxClient(options => configuration.GetSection("Upstox").Bind(options));
```

---

## Usage

For code examples and error responses, see [API Reference](api-reference.md).

## Enums

Every enum the spec declares is a sealed record with one `public static readonly` member per value (`Category.Ind`), a JSON converter, and a `Match` that makes handling exhaustive: one `on{Member}` arm per known value, then `otherwise`, which receives the raw wire value the server sent when it is one this SDK does not declare.

```csharp
var label = received.Match(onInd: () => "Ind", onHni: () => "Hni", otherwise: raw => $"undeclared ({raw})");
```

Prefer named arguments as above. The arms are positional, in the order the spec lists its values, and a regenerated SDK that adds or moves a value changes the `Match` signature: a positional call site compiled against the old shape either stops compiling or, if the assembly is not rebuilt, throws `MissingMethodException` at the first call, and a reordered value can rebind a positional argument to a different member without any diagnostic. Treat an added or moved enum value as a breaking change of that enum. Code that must survive regeneration untouched compares instead of matching: `received == Category.Ind` or `received.Is(rawValue)` against a raw wire value; neither reopens construction.

A value the SDK does not declare still round-trips: `IsKnownValue()` tells you whether it is one of the generated members, and sending the instance back echoes the server's own casing. You cannot construct an undeclared value yourself — there is no public factory — so a typo cannot compile; resolve a raw value with `Category.TryGetKnownValue("IND", out var known)`.

A spec value whose name would collide with the enum's own name, with a member every enum inherits or generates (such as `Value`, `Match` or `IsKnownValue`), or with a member of `object` takes a `Member` suffix — a value `value` becomes `ValueMember` — and the other members keep their plain names.

## SDK map

This SDK ships a generated **SDK map** — [`sdk-map.md`](sdk-map.md) plus the [`map/`](map/) pages — a deterministic, lookup-oriented table of contents of the SDK's C# surface, generated by APIMatic alongside this SDK.

**Read it before scanning the source.** Whether you are an AI coding assistant or searching by hand, the map answers "what is the exact …" by lookup for every call-level contract, and for anything it does not carry it names the one file that does — so you never have to search the source tree:

- **[`sdk-map.md`](sdk-map.md)** — the index: client construction, servers/auth, the options/retry reference, the SDK-wide defaults the operation rows rely on, and link tables into [`map/`](map/).
- **[`map/operations/`](map/operations/)** — one page per controller: the exact C# signature, the return type, the error type with its typed `TryGet…` accessors, and pagination — plus, per operation, a **Type sources** table naming the file that declares every type that operation mentions.

Model shapes — record fields with their JSON wire names, enum member names and wire values, `OneOf`/`AnyOf` union variants — are **not** duplicated in the map. Take the path from the operation's Type sources table and read the declaring file; it is the single source of truth and cannot go stale against the code.

**Each operation row states what is specific to that operation.** The SDK-wide defaults are stated once in [`sdk-map.md`](sdk-map.md) — throw-only (no `Result`-style no-throw variants), no pagination, the four fixed `RawError` accessors, the `Default` server group — and a row appears only where its operation departs from one. A row silent on pagination is telling you that operation has none.

The **HTTP verb and route**, and the endpoint's **behavioural prose**, live on the operation itself, in the source file named at the top of its operations page. Read them there when something needs them — wiring a mock, reading a provider log, or settling a rule about what you must pass.

**Workflow:** look the fact up in the map → where the map leaves something ambiguous, open the **one** source file the row names → the compiler is the backstop (a name that isn't in the map won't build). Don't scan or grep the tree to find things — the map is the locator.

### Which one to reach for

The map and the [API Reference](api-reference.md) answer different questions, and the map is generated from this SDK's source so it stays in lockstep with the code it describes.

| Use | For |
| --- | --- |
| **[`sdk-map.md`](sdk-map.md) + [`map/`](map/)** | Traversing the SDK and working out its surface — locating the operation you need (this SDK exposes **101 operations**), its exact signature and request record, the shape and JSON wire names of the models it takes and returns, which error type it throws and how to read it, and the source file behind any of it. This is the index to consume the SDK from, and the one to reach for first. |
| **[`api-reference.md`](api-reference.md)** | Usage guidance for a single operation once you know which one you want — a runnable code sample, a link to its request record, and the error responses it can return. |

## Error Handling

Operations throw when the server answers with an error status. `TError` is the operation's error type from the spec — `RawError` (the status code plus the raw body) when the spec declares none.

```csharp
using Upstox.Core.Exceptions;   // the exception family
using Upstox.Errors;            // generated error types such as GetBrokerageError
using Upstox.Requests.Charge;   // request records such as GetBrokerageRequest

try
{
    var response = await client.Charge.GetBrokerage(new GetBrokerageRequest
    {
        InstrumentToken = "NSE_EQ|INE848E01016",
        Quantity = 10,
        Product = "I",
        TransactionType = "BUY",
        Price = 123.1d,
    });
}
catch (ApiException<GetBrokerageError> ex)
{
    // "GET <server>/v2/charges/brokerage returned 400 (BadRequest)."
    Console.Error.WriteLine(ex.Message);
    if (ex.Error.TryGetApiGatewayErrorResponse(out var apiGatewayErrorResponse))
    {
        // TODO: handle 'apiGatewayErrorResponse' of type ApiGatewayErrorResponse
    }
}
```

`Match` on an error type is exhaustive: one `on{Arm}` arm per body the operation declares, each receiving the parsed body, and a last `otherwise` arm that receives the `RawError` (status code plus raw body) of a status the operation does not declare, such as a gateway's 502. An arm is a body, not a status: statuses that share a body share an arm, and the status itself is on `result.StatusCode` or `ex.StatusCode`. `TryGet{Arm}` reads one arm when that is all you need, as in the `catch` above; `TryGetRawError` is the accessor behind `otherwise`.

Prefer named arguments, as with enums and unions: the arms are positional, in the order of their names, and a regenerated SDK whose operation gains or loses an error body changes the `Match` signature — a positional call site stops compiling or, if the assembly is not rebuilt, throws `MissingMethodException` at the first call. Treat an added or removed error body as a breaking change of that error type. A status added for a body the operation already declares changes nothing. Code that must survive regeneration untouched uses the `TryGet{Arm}` accessors instead.

Everything the SDK raises for a call derives from `SdkException`, which carries the failed call's `Method` and `RequestUri`. Every message starts with that call, and the underlying cause is always `InnerException`.

| Exception | When | Extra members |
| --- | --- | --- |
| `ApiException<TError>` | The server answered with an error status | `Error`, plus `StatusCode`, `Headers` and `ContentType` from `ApiException` |
| `ResponseDeserializationException` | A response body did not match the type the spec declares | `TargetType`, plus the `ApiException` members |
| `SdkConnectionException` | The request could not be sent, or the response body could not be read |  |
| `SdkTimeoutException` | An attempt, the transport, or a Server-Sent Events stream went silent (derives from `SdkConnectionException`) | `Timeout` |
| `AuthSchemeException` | A required credential is not configured, or could not be applied — for example the OAuth2 token endpoint refused it | `SchemeFailures` |

Catch from specific to general: `ApiException` means the server answered, `SdkConnectionException` means it did not, and `SdkException` is everything the SDK raises. Your own cancellation surfaces as the usual `OperationCanceledException`, never wrapped.

---

## Best Practices

> [!TIP]
> Use a **single `UpstoxClient` instance** for the lifetime of your application and
> reuse it across all requests. Creating a new instance per request might exhaust the
> connection pool.

> [!TIP]
> Let the SDK own timeouts. `RetryOptions.Timeout` bounds **each attempt** (default 100 s)
> and a timed-out attempt is retried under the configured retry policy before it surfaces as
> `SdkTimeoutException`; `Retry-After` response headers are honored when the server sends them.
> Set `HttpClient.Timeout` to `Timeout.InfiniteTimeSpan` (or comfortably above
> `RetryOptions.Timeout`) so the transport does not race the SDK — a transport-level timeout
> surfaces as the same `SdkTimeoutException` but cannot be retried.

> [!TIP]
> The SDK reads time only through `UpstoxClientOptions.TimeProvider` (default
> `TimeProvider.System`): retry backoff, `Retry-After`, the SSE idle timeout, OAuth2 token
> expiry and the logged request durations all follow it. Under `AddUpstoxClient` a
> `TimeProvider` registered in the container is picked up automatically, and setting the
> option explicitly wins. To fake time in your own tests use a provider that implements
> timers, such as `FakeTimeProvider` from `Microsoft.Extensions.TimeProvider.Testing`, so
> retries and idle timeouts advance with it.

## License

This SDK is distributed under the [MIT License](https://licenses.nuget.org/MIT).

---

## Support

Refer to the [API reference](api-reference.md) for detailed information on available operations with code samples.

---

[license-url]: https://licenses.nuget.org/MIT
[license-badge]: https://img.shields.io/badge/License-MIT-blue.svg
[apimatic-url]: https://www.apimatic.io
[apimatic-badge]: https://img.shields.io/badge/Built%20with-APIMatic-blue.svg
