# SDK map — Spotify Web API (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | Spotify Web API |
| Root namespace/module | `SpotifyWebApi` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `41b7923` (`41b79232f3d1b85796b475208bf8390ebc30ab1a`, tagged `41b7923`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/spotify-web-api-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using SpotifyWebApi;
using SpotifyWebApi.Servers; // ServerEnvironment lives here

var options = new SpotifyWebApiClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new SpotifyWebApiClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddSpotifyWebApiClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`SpotifyWebApiClient.cs`.

<!-- crawler:client-options -->
All `SpotifyWebApiClientOptions` properties (source: `SpotifyWebApiClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `Oauth20` | `OAuth2AuthorizationCodeCredentials?` |
| `Oauth20TokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>?` |

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

- `SpotifyWebApiClient(HttpClient httpClient, SpotifyWebApiClientOptions options)`
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
| `ApiError` — abstract base of all 89 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **138 operations**, **138 are Case A (typed)** and **0 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (15 groups, 138 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `Albums` | 9 | [map/operations/Albums.md](map/operations/Albums.md) |
| `Artists` | 10 | [map/operations/Artists.md](map/operations/Artists.md) |
| `Audiobooks` | 7 | [map/operations/Audiobooks.md](map/operations/Audiobooks.md) |
| `CategoriesApi` | 3 | [map/operations/CategoriesApi.md](map/operations/CategoriesApi.md) |
| `Chapters` | 3 | [map/operations/Chapters.md](map/operations/Chapters.md) |
| `Episodes` | 7 | [map/operations/Episodes.md](map/operations/Episodes.md) |
| `Genres` | 1 | [map/operations/Genres.md](map/operations/Genres.md) |
| `Library` | 29 | [map/operations/Library.md](map/operations/Library.md) |
| `MarketsApi` | 1 | [map/operations/MarketsApi.md](map/operations/MarketsApi.md) |
| `Player` | 15 | [map/operations/Player.md](map/operations/Player.md) |
| `Playlists` | 16 | [map/operations/Playlists.md](map/operations/Playlists.md) |
| `Search` | 1 | [map/operations/Search.md](map/operations/Search.md) |
| `Shows` | 7 | [map/operations/Shows.md](map/operations/Shows.md) |
| `Tracks` | 17 | [map/operations/Tracks.md](map/operations/Tracks.md) |
| `Users` | 12 | [map/operations/Users.md](map/operations/Users.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 129 | [`AlbumBase` … `UsersPlaylistsRequest`](map/models/records-1-Al-Us.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 4 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 18 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `SpotifyWebApi` |
| Operation controllers (`Api/`) | `SpotifyWebApi.Api` |
| Records (`Models/`) | `SpotifyWebApi.Models` |
| Enums (`Models/Enums/`) | `SpotifyWebApi.Models.Enums` |
| Unions (`Models/AnyOf/`, `Models/OneOf/`) | `SpotifyWebApi.Models.AnyOf` |
| Error classes (`Errors/`) | `SpotifyWebApi.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `SpotifyWebApiClientOptions` (source: `SpotifyWebApiClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `Oauth20` | `OAuth2AuthorizationCodeCredentials?` | Spotify supports OAuth 2.0 for authenticating all API requests. |
| `Oauth20TokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>?` | — |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`, `ServerEnvironment.Environment2`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
