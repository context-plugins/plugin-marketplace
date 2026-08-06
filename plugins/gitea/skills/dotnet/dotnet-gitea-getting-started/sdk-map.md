# SDK map — gitea (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | gitea |
| Root namespace/module | `GiteaApi` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `6e1d667` (`6e1d667900f5b1e7b2b54003893cf570ad4f7961`, tagged `6e1d667`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/gitea-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using GiteaApi;
using GiteaApi.Servers; // ServerEnvironment lives here

var options = new GiteaApiClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new GiteaApiClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddGiteaApiClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`GiteaApiClient.cs`.

<!-- crawler:client-options -->
All `GiteaApiClientOptions` properties (source: `GiteaApiClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `AccessToken` | `string?` |
| `AuthorizationHeaderToken` | `string?` |
| `BasicAuth` | `BasicAuthCredentials?` |
| `SudoHeader` | `string?` |
| `SudoParam` | `string?` |
| `Totpheader` | `string?` |
| `Token` | `string?` |

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

- `GiteaApiClient(HttpClient httpClient, GiteaApiClientOptions options)`
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
| `ApiError` — abstract base of all 426 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **483 operations**, **427 are Case A (typed)** and **56 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (9 groups, 483 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `Admin` | 32 | [map/operations/Admin.md](map/operations/Admin.md) |
| `IssueApi` | 72 | [map/operations/IssueApi.md](map/operations/IssueApi.md) |
| `Miscellaneous` | 14 | [map/operations/Miscellaneous.md](map/operations/Miscellaneous.md) |
| `Notification` | 7 | [map/operations/Notification.md](map/operations/Notification.md) |
| `OrganizationApi` | 67 | [map/operations/OrganizationApi.md](map/operations/OrganizationApi.md) |
| `PackageApi` | 9 | [map/operations/PackageApi.md](map/operations/PackageApi.md) |
| `RepositoryApi` | 202 | [map/operations/RepositoryApi.md](map/operations/RepositoryApi.md) |
| `Settings` | 4 | [map/operations/Settings.md](map/operations/Settings.md) |
| `UserApi` | 76 | [map/operations/UserApi.md](map/operations/UserApi.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 221 | [`AccessTokenRepresentsAnApiAccessToken` … `IssueTemplate`](map/models/records-1-Ac-Is.md) · [`Label` … `WikiPageMetaData`](map/models/records-2-La-Wi.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 0 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 45 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `GiteaApi` |
| Operation controllers (`Api/`) | `GiteaApi.Api` |
| Records (`Models/`) | `GiteaApi.Models` |
| Enums (`Models/Enums/`) | `GiteaApi.Models.Enums` |
| Error classes (`Errors/`) | `GiteaApi.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `GiteaApiClientOptions` (source: `GiteaApiClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `AccessToken` | `string?` | This authentication option is deprecated for removal in Gitea 1.23. Please use AuthorizationHeaderToken instead. |
| `AuthorizationHeaderToken` | `string?` | API tokens must be prepended with "token" followed by a space. |
| `BasicAuth` | `BasicAuthCredentials?` | — |
| `SudoHeader` | `string?` | Sudo API request as the user provided as the key. Admin privileges are required. |
| `SudoParam` | `string?` | Sudo API request as the user provided as the key. Admin privileges are required. |
| `Totpheader` | `string?` | Must be used in combination with BasicAuth if two-factor authentication is enabled. |
| `Token` | `string?` | This authentication option is deprecated for removal in Gitea 1.23. Please use AuthorizationHeaderToken instead. |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
