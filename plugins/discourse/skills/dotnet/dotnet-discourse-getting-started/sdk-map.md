# SDK map — discourse (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | discourse |
| Root namespace/module | `DiscourseApiDocumentation` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `75314ef` (`75314ef1ebdbf3af30db00db050257a9fc27add8`, tagged `75314ef`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/discourse-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using DiscourseApiDocumentation;
using DiscourseApiDocumentation.Servers; // ServerEnvironment lives here

var options = new DiscourseApiDocumentationClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new DiscourseApiDocumentationClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddDiscourseApiDocumentationClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`DiscourseApiDocumentationClient.cs`.

<!-- crawler:client-options -->
All `DiscourseApiDocumentationClientOptions` properties (source: `DiscourseApiDocumentationClientOptions.cs`):

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

- `DiscourseApiDocumentationClient(HttpClient httpClient, DiscourseApiDocumentationClientOptions options)`
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
Of **110 operations**, **0 are Case A (typed)** and **110 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (16 groups, 110 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `Admin` | 11 | [map/operations/Admin.md](map/operations/Admin.md) |
| `Backups` | 4 | [map/operations/Backups.md](map/operations/Backups.md) |
| `Badges` | 5 | [map/operations/Badges.md](map/operations/Badges.md) |
| `Categories` | 6 | [map/operations/Categories.md](map/operations/Categories.md) |
| `DiscourseCalendarEvents` | 2 | [map/operations/DiscourseCalendarEvents.md](map/operations/DiscourseCalendarEvents.md) |
| `Groups` | 9 | [map/operations/Groups.md](map/operations/Groups.md) |
| `Invites` | 4 | [map/operations/Invites.md](map/operations/Invites.md) |
| `Notifications` | 2 | [map/operations/Notifications.md](map/operations/Notifications.md) |
| `Posts` | 8 | [map/operations/Posts.md](map/operations/Posts.md) |
| `PrivateMessages` | 3 | [map/operations/PrivateMessages.md](map/operations/PrivateMessages.md) |
| `Search` | 1 | [map/operations/Search.md](map/operations/Search.md) |
| `Site` | 2 | [map/operations/Site.md](map/operations/Site.md) |
| `Tags` | 6 | [map/operations/Tags.md](map/operations/Tags.md) |
| `Topics` | 15 | [map/operations/Topics.md](map/operations/Topics.md) |
| `Uploads` | 7 | [map/operations/Uploads.md](map/operations/Uploads.md) |
| `Users` | 25 | [map/operations/Users.md](map/operations/Users.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 250 | [`AccessControl` … `LatestJsonResponse`](map/models/records-1-Ac-La.md) · [`LatestPost` … `TopicFlagType`](map/models/records-2-La-To.md) · [`TopicList` … `UserTips`](map/models/records-3-To-Us.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 0 | [map/models/unions.md](map/models/unions.md) |
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
| Client & options (root) | `DiscourseApiDocumentation` |
| Operation controllers (`Api/`) | `DiscourseApiDocumentation.Api` |
| Records (`Models/`) | `DiscourseApiDocumentation.Models` |
| Enums (`Models/Enums/`) | `DiscourseApiDocumentation.Models.Enums` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** No credentials properties were detected on `DiscourseApiDocumentationClientOptions` — confirm the auth scheme in `dotnet-authentication` and the options class source.

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
