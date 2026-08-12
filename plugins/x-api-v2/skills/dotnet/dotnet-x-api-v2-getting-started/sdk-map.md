# SDK map — x-api-v2 (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | x-api-v2 |
| Root namespace/module | `XApiV2` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `a64ff94` (`a64ff943b1e172104d732797e8431745acfd15cf`, tagged `a64ff94`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/x-api-v2-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using XApiV2;
using XApiV2.Servers; // ServerEnvironment lives here

var options = new XApiV2ClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new XApiV2Client(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddXApiV2Client(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`XApiV2Client.cs`.

<!-- crawler:client-options -->
All `XApiV2ClientOptions` properties (source: `XApiV2ClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `BearerToken` | `string?` |
| `Oauth2UserToken` | `OAuth2AuthorizationCodeCredentials?` |
| `Oauth2UserTokenTokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>?` |

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

- `XApiV2Client(HttpClient httpClient, XApiV2ClientOptions options)`
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
Of **172 operations**, **0 are Case A (typed)** and **172 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (21 groups, 172 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `AccountActivity` | 5 | [map/operations/AccountActivity.md](map/operations/AccountActivity.md) |
| `Activity` | 5 | [map/operations/Activity.md](map/operations/Activity.md) |
| `Articles` | 2 | [map/operations/Articles.md](map/operations/Articles.md) |
| `Broadcasts` | 7 | [map/operations/Broadcasts.md](map/operations/Broadcasts.md) |
| `Chat` | 16 | [map/operations/Chat.md](map/operations/Chat.md) |
| `Communities` | 2 | [map/operations/Communities.md](map/operations/Communities.md) |
| `CommunityNotes` | 5 | [map/operations/CommunityNotes.md](map/operations/CommunityNotes.md) |
| `Compliance` | 3 | [map/operations/Compliance.md](map/operations/Compliance.md) |
| `Connections` | 4 | [map/operations/Connections.md](map/operations/Connections.md) |
| `DirectMessages` | 9 | [map/operations/DirectMessages.md](map/operations/DirectMessages.md) |
| `General` | 1 | [map/operations/General.md](map/operations/General.md) |
| `Lists` | 9 | [map/operations/Lists.md](map/operations/Lists.md) |
| `MediaApi` | 11 | [map/operations/MediaApi.md](map/operations/MediaApi.md) |
| `NewsApi` | 2 | [map/operations/NewsApi.md](map/operations/NewsApi.md) |
| `Posts` | 14 | [map/operations/Posts.md](map/operations/Posts.md) |
| `Spaces` | 6 | [map/operations/Spaces.md](map/operations/Spaces.md) |
| `StreamApi` | 18 | [map/operations/StreamApi.md](map/operations/StreamApi.md) |
| `Trends` | 2 | [map/operations/Trends.md](map/operations/Trends.md) |
| `UsageApi` | 1 | [map/operations/UsageApi.md](map/operations/UsageApi.md) |
| `Users` | 42 | [map/operations/Users.md](map/operations/Users.md) |
| `Webhooks` | 8 | [map/operations/Webhooks.md](map/operations/Webhooks.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 538 | [`ActivityStreamResponse` … `FieldHydrationFailureProblem`](map/models/records-1-Ac-Fi.md) · [`FieldUnauthorizedProblem` … `RepostPostResponseData`](map/models/records-2-Fi-Re.md) · [`ResourceNotFoundProblem` … `WebhookConfig`](map/models/records-3-Re-We.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 2 + 20 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 70 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `XApiV2` |
| Operation controllers (`Api/`) | `XApiV2.Api` |
| Records (`Models/`) | `XApiV2.Models` |
| Enums (`Models/Enums/`) | `XApiV2.Models.Enums` |
| Unions (`Models/AnyOf/`, `Models/OneOf/`) | `XApiV2.Models.AnyOf` · `XApiV2.Models.OneOf` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `XApiV2ClientOptions` (source: `XApiV2ClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `BearerToken` | `string?` | — |
| `Oauth2UserToken` | `OAuth2AuthorizationCodeCredentials?` | — |
| `Oauth2UserTokenTokenStrategy` | `IOAuth2RefreshableTokenStrategy<OAuth2AuthorizationCodeCredentials>?` | — |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
