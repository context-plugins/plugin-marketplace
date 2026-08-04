# SDK map — Payquicker (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | Payquicker |
| Root namespace/module | `PqApiV2` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `97e6f97` (`97e6f9780409125a9693f544cb242fa1fdf7c231`, tagged `97e6f97`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/payquicker-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using PqApiV2;
using PqApiV2.Servers; // ServerEnvironment lives here

var options = new PqApiV2ClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new PqApiV2Client(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddPqApiV2Client(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`PqApiV2Client.cs`.

<!-- crawler:client-options -->
All `PqApiV2ClientOptions` properties (source: `PqApiV2ClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `ServerCredentials` | `OAuth2ClientCredentials?` |
| `ServerTokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>?` |
| `Clientside` | `string?` |

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

- `PqApiV2Client(HttpClient httpClient, PqApiV2ClientOptions options)`
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
| `ApiError` — abstract base of all 79 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **79 operations**, **79 are Case A (typed)** and **0 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (18 groups, 79 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `Accounts` | 1 | [map/operations/Accounts.md](map/operations/Accounts.md) |
| `Agreements` | 3 | [map/operations/Agreements.md](map/operations/Agreements.md) |
| `Authorizations` | 2 | [map/operations/Authorizations.md](map/operations/Authorizations.md) |
| `Balances` | 2 | [map/operations/Balances.md](map/operations/Balances.md) |
| `Compliance` | 2 | [map/operations/Compliance.md](map/operations/Compliance.md) |
| `Documents` | 7 | [map/operations/Documents.md](map/operations/Documents.md) |
| `Instruments` | 8 | [map/operations/Instruments.md](map/operations/Instruments.md) |
| `Invitations` | 6 | [map/operations/Invitations.md](map/operations/Invitations.md) |
| `Jobs` | 11 | [map/operations/Jobs.md](map/operations/Jobs.md) |
| `PrepaidCards` | 6 | [map/operations/PrepaidCards.md](map/operations/PrepaidCards.md) |
| `Programs` | 2 | [map/operations/Programs.md](map/operations/Programs.md) |
| `Receipts` | 3 | [map/operations/Receipts.md](map/operations/Receipts.md) |
| `SensitiveCardOperations` | 5 | [map/operations/SensitiveCardOperations.md](map/operations/SensitiveCardOperations.md) |
| `Statements` | 3 | [map/operations/Statements.md](map/operations/Statements.md) |
| `Transfers` | 6 | [map/operations/Transfers.md](map/operations/Transfers.md) |
| `UserEvents` | 2 | [map/operations/UserEvents.md](map/operations/UserEvents.md) |
| `Users` | 5 | [map/operations/Users.md](map/operations/Users.md) |
| `WebhooksSubscriptions` | 5 | [map/operations/WebhooksSubscriptions.md](map/operations/WebhooksSubscriptions.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 321 | [`AccountBase` … `IndividualUserInvitation`](map/models/records-1-Ac-In.md) · [`InvitationBase` … `PrepaidCardDataTextResult`](map/models/records-2-In-Pr.md) · [`PrepaidCardDataTokenBase` … `UserEventCancelledWebhookRequest`](map/models/records-3-Pr-Us.md) · [`UserEventCompletedWebhookRequest` … `WebhookSubscriptionResult`](map/models/records-4-Us-We.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 11 + 12 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 35 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `PqApiV2` |
| Operation controllers (`Api/`) | `PqApiV2.Api` |
| Records (`Models/`) | `PqApiV2.Models` |
| Enums (`Models/Enums/`) | `PqApiV2.Models.Enums` |
| Unions (`Models/AnyOf/`, `Models/OneOf/`) | `PqApiV2.Models.AnyOf` · `PqApiV2.Models.OneOf` |
| Error classes (`Errors/`) | `PqApiV2.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `PqApiV2ClientOptions` (source: `PqApiV2ClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `ServerCredentials` | `OAuth2ClientCredentials?` | — |
| `ServerTokenStrategy` | `IOAuth2TokenStrategy<OAuth2ClientCredentials>?` | — |
| `Clientside` | `string?` | Client side operation bearer token. |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`, `ServerEnvironment.Sandbox`, `ServerEnvironment.Uat`, `ServerEnvironment.Development`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
