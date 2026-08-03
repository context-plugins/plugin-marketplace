# SDK map — PokeApi (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | PokeApi |
| Root namespace/module | `PokApi` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `ff9553e` (`ff9553ecfb343db2c2c2a71900ce4da12bf1eb0d`, tagged `ff9553e`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/pokeapi-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using PokApi;
using PokApi.Servers; // ServerEnvironment lives here

var options = new PokApiClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new PokApiClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddPokApiClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`PokApiClient.cs`.

<!-- crawler:client-options -->
All `PokApiClientOptions` properties (source: `PokApiClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |

`RetryOptions` members (source: `Core/Configuration/RetryOptions.cs`; build a full instance — all members are `required` — or start from `RetryOptions.Default()`):

| Member | Type |
|---|---|
| `StatusCodesToRetry` | `IReadOnlyList<HttpStatusCode>` |
| `HttpMethodsToRetry` | `IReadOnlyList<HttpMethod>` |
| `MaxRetries` | `int` |
| `Delay` | `TimeSpan` |
| `Timeout` | `TimeSpan?` |
| `BackOffFactor` | `int` |
| `UseExponentialBackoff` | `bool` |
| `MaxJitter` | `TimeSpan` |
| `OnRetry` | `Action<RetryAttempt>?` |

Client constructor(s):

- `PokApiClient(HttpClient httpClient, PokApiClientOptions options)`
<!-- /crawler:client-options -->

---

## Error-handling model (read once — applies to every operation)

Operations are **throw-based**. On an error status the SDK throws `SdkException<TError>`
(`Core/Exceptions/SdkException.cs`) exposing `.Error` of type `TError`. There are two cases:

- **Case A — typed error.** `TError` is a generated `…Error : ApiError` class with status-specific
  `TryGet…(out …)` accessors (returns `true` when that shape is present) plus the inherited
  `TryGetRawError(out RawError)` fallback. The per-operation rows name the exact `TryGet…` methods and the HTTP
  status each maps to.
- **Case B — raw error.** `TError` is `RawError` (`Core/ErrorResponse/RawError.cs`): `StatusCode`,
  `ReadAsString()`, `ReadAsJson<T>()`, `ReadAsBytes()`.

<!-- gen:error-core -->
Core error types (`Core/ErrorResponse/`) — public members with their **declared types**, verbatim from source:

| Type | Public members | Source |
|---|---|---|
| `ApiError` — abstract base of all 0 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
| `RawError` | `StatusCode: HttpStatusCode` · `ReadAsBytes(): ReadOnlyMemory<byte>` · `ReadAsString(): string` · `ReadAsJson<T>(): T?` | `Core/ErrorResponse/RawError.cs` |

Typed-error payload shapes (the `out` types in each operation page's error-accessor cells) are ordinary records/unions: field names, declared types, and JSON wire names live on the records pages / `unions.md` like any other model.
<!-- /gen:error-core -->

```csharp
try { var resp = await client.{ApiGroup}.{Operation}(body); }
catch (SdkException<{Operation}Error> ex)              // Case A
{
    if (ex.Error.TryGetSomeShape(out var typed))      { /* handle that status */ }
    else if (ex.Error.TryGetRawError(out var raw))    { /* other statuses */ }
}
catch (SdkException<RawError> ex)                     // Case B
{
    var status = ex.Error.StatusCode;
    var body   = ex.Error.ReadAsString();
}
```

<!-- crawler:op-stats -->
**No-throw ("`…Result`") variants: absent across this SDK** — every operation is throw-only.
Of **98 operations**, **0 are Case A (typed)** and **98 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (11 groups, 98 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `Berries` | 6 | [map/operations/Berries.md](map/operations/Berries.md) |
| `Contests` | 6 | [map/operations/Contests.md](map/operations/Contests.md) |
| `Encounters` | 7 | [map/operations/Encounters.md](map/operations/Encounters.md) |
| `Evolution` | 4 | [map/operations/Evolution.md](map/operations/Evolution.md) |
| `Games` | 8 | [map/operations/Games.md](map/operations/Games.md) |
| `Items` | 10 | [map/operations/Items.md](map/operations/Items.md) |
| `LocationApi` | 8 | [map/operations/LocationApi.md](map/operations/LocationApi.md) |
| `Machines` | 2 | [map/operations/Machines.md](map/operations/Machines.md) |
| `Moves` | 12 | [map/operations/Moves.md](map/operations/Moves.md) |
| `PokemonApi` | 32 | [map/operations/PokemonApi.md](map/operations/PokemonApi.md) |
| `Utility` | 3 | [map/operations/Utility.md](map/operations/Utility.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 319 | [`Ability` … `PokemonEntry`](map/models/records-1-Ab-Po.md) · [`PokemonFormDetail` … `VersionSummary`](map/models/records-2-Po-Ve.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 0 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 0 | [map/models/enums.md](map/models/enums.md) |
<!-- /gen:models-table -->

Model conventions: records are immutable with `init`-only setters; `required` properties must be set in the
object initializer; nullable (`T?`) properties are optional. Each record field is listed as
`CSharpName (wire_name): Type` — the parenthesized name is the JSON wire name (`[JsonPropertyName]`).
Unions wrap `Optional<T>` variants — construct via a static factory or implicit
conversion, read back via `TryGet…(out …)`. Enums are **not** C# enums — build with `Type.FromValue("wire")`
or the static members (enums.md lists the literal member names: `SomeEnum.SomeMember`, not
`SomeEnum.some_member`).

<!-- gen:namespaces -->
Namespaces by content type (add `using` accordingly):

| Contents | Namespace(s) |
|---|---|
| Client & options (root) | `PokApi` |
| Operation controllers (`Api/`) | `PokApi.Api` |
| Records (`Models/`) | `PokApi.Models` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** No credentials properties were detected on `PokApiClientOptions` — confirm the auth scheme in `dotnet-authentication` and the options class source.

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
