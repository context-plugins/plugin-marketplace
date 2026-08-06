# SDK map — deepgram (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | deepgram |
| Root namespace/module | `RestApi` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `da04afa` (`da04afae97eedbdb283f897d337e7300d27c5388`, tagged `da04afa`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/deepgram-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using RestApi;
using RestApi.Servers; // ServerEnvironment lives here

var options = new RestApiClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new RestApiClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddRestApiClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`RestApiClient.cs`.

<!-- crawler:client-options -->
All `RestApiClientOptions` properties (source: `RestApiClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `ApiKeyAuth` | `string?` |
| `JwtAuth` | `string?` |

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

- `RestApiClient(HttpClient httpClient, RestApiClientOptions options)`
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
| `ApiError` — abstract base of all 50 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **50 operations**, **50 are Case A (typed)** and **0 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (24 groups, 50 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `AgentV1SettingsThinkModels` | 1 | [map/operations/AgentV1SettingsThinkModels.md](map/operations/AgentV1SettingsThinkModels.md) |
| `AuthV1Tokens` | 1 | [map/operations/AuthV1Tokens.md](map/operations/AuthV1Tokens.md) |
| `ListenV1Media` | 1 | [map/operations/ListenV1Media.md](map/operations/ListenV1Media.md) |
| `ManageV1Models` | 2 | [map/operations/ManageV1Models.md](map/operations/ManageV1Models.md) |
| `ManageV1Projects` | 5 | [map/operations/ManageV1Projects.md](map/operations/ManageV1Projects.md) |
| `ManageV1ProjectsBillingBalances` | 2 | [map/operations/ManageV1ProjectsBillingBalances.md](map/operations/ManageV1ProjectsBillingBalances.md) |
| `ManageV1ProjectsBillingBreakdown` | 1 | [map/operations/ManageV1ProjectsBillingBreakdown.md](map/operations/ManageV1ProjectsBillingBreakdown.md) |
| `ManageV1ProjectsBillingFields` | 1 | [map/operations/ManageV1ProjectsBillingFields.md](map/operations/ManageV1ProjectsBillingFields.md) |
| `ManageV1ProjectsBillingPurchases` | 1 | [map/operations/ManageV1ProjectsBillingPurchases.md](map/operations/ManageV1ProjectsBillingPurchases.md) |
| `ManageV1ProjectsKeys` | 4 | [map/operations/ManageV1ProjectsKeys.md](map/operations/ManageV1ProjectsKeys.md) |
| `ManageV1ProjectsMembers` | 2 | [map/operations/ManageV1ProjectsMembers.md](map/operations/ManageV1ProjectsMembers.md) |
| `ManageV1ProjectsMembersInvites` | 3 | [map/operations/ManageV1ProjectsMembersInvites.md](map/operations/ManageV1ProjectsMembersInvites.md) |
| `ManageV1ProjectsMembersScopes` | 2 | [map/operations/ManageV1ProjectsMembersScopes.md](map/operations/ManageV1ProjectsMembersScopes.md) |
| `ManageV1ProjectsModels` | 2 | [map/operations/ManageV1ProjectsModels.md](map/operations/ManageV1ProjectsModels.md) |
| `ManageV1ProjectsRequests` | 2 | [map/operations/ManageV1ProjectsRequests.md](map/operations/ManageV1ProjectsRequests.md) |
| `ManageV1ProjectsUsage` | 1 | [map/operations/ManageV1ProjectsUsage.md](map/operations/ManageV1ProjectsUsage.md) |
| `ManageV1ProjectsUsageBreakdown` | 1 | [map/operations/ManageV1ProjectsUsageBreakdown.md](map/operations/ManageV1ProjectsUsageBreakdown.md) |
| `ManageV1ProjectsUsageFields` | 1 | [map/operations/ManageV1ProjectsUsageFields.md](map/operations/ManageV1ProjectsUsageFields.md) |
| `ReadV1Text` | 1 | [map/operations/ReadV1Text.md](map/operations/ReadV1Text.md) |
| `SelfHostedV1DistributionCredentials` | 4 | [map/operations/SelfHostedV1DistributionCredentials.md](map/operations/SelfHostedV1DistributionCredentials.md) |
| `SpeakV1Audio` | 1 | [map/operations/SpeakV1Audio.md](map/operations/SpeakV1Audio.md) |
| `SpeakV2Audio` | 1 | [map/operations/SpeakV2Audio.md](map/operations/SpeakV2Audio.md) |
| `VoiceAgentConfigurations` | 5 | [map/operations/VoiceAgentConfigurations.md](map/operations/VoiceAgentConfigurations.md) |
| `VoiceAgentVariables` | 5 | [map/operations/VoiceAgentVariables.md](map/operations/VoiceAgentVariables.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 139 | [`AgentConfigurationV1` … `UsageV1ResponseResolution`](map/models/records-1-Ag-Us.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 32 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 73 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `RestApi` |
| Operation controllers (`Api/`) | `RestApi.Api` |
| Records (`Models/`) | `RestApi.Models` |
| Enums (`Models/Enums/`) | `RestApi.Models.Enums` |
| Unions (`Models/AnyOf/`, `Models/OneOf/`) | `RestApi.Models.AnyOf` |
| Error classes (`Errors/`) | `RestApi.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `RestApiClientOptions` (source: `RestApiClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `ApiKeyAuth` | `string?` | Use <c>Authorization: Token &lt;API_KEY&gt;</c> Example: <c>Authorization: Token 12345abcdef</c> |
| `JwtAuth` | `string?` | Use <c>Authorization: Bearer &lt;JWT&gt;</c> Example: <c>Authorization: Bearer eyJhbGciOiJ...</c> |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`, `ServerEnvironment.Environment2`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
