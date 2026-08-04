# SDK map — Twilio APIs (.NET)

> A generated table-of-contents for this SDK. Consult this map and its sub-pages to learn signatures, error
> types, enum values, and server/auth wiring **by lookup** — open a source file only for a full method/model
> body the map doesn't carry. The compiler is the backstop: a wrong name fails to build.

| | |
|---|---|
| SDK display name | Twilio APIs |
| Root namespace/module | `TwilioApis` |
<!-- gen:stamp -->
| Target framework(s) | `netstandard2.0` (C# `LangVersion 14`, `Nullable enable`) |
| Source commit (spec stamp) | `bc6ea7b` (`bc6ea7b3734ba32949326fa3b0f7ccef66133819`, tagged `bc6ea7b`) |
<!-- /gen:stamp -->
| Generator | APIMatic |
| Repo | https://github.com/context-plugins/twilio-apis-csharp-sdk (branch `main`) |

Staleness check: if the SDK is regenerated, the source commit stamp above changes (the SDK repo and this
plugin regenerate together). If a lookup here fails to compile, trust the compiler and re-read the source
file linked in the row.

---

## Getting a client

```csharp
using TwilioApis;
using TwilioApis.Servers; // ServerEnvironment lives here

var options = new TwilioApisClientOptions
{
    // Set the credentials properties for the scheme(s) this API uses — see Servers & auth below.
    // Environment selects the server environment; see Servers & auth below.
};
var client = new TwilioApisClient(httpClient, options); // httpClient: System.Net.Http.HttpClient
```

DI alternative (`ServiceCollectionExtensions.cs`):

```csharp
services.AddTwilioApisClient(o =>
{
    // set credentials / environment on o here
});
```

Every API group is a property on the client (e.g. `client.Customers`). Source:
`TwilioApisClient.cs`.

<!-- crawler:client-options -->
All `TwilioApisClientOptions` properties (source: `TwilioApisClientOptions.cs`):

| Property | Type |
|---|---|
| `Environment` | `ServerEnvironment` |
| `Retry` | `RetryOptions` |
| `Logging` | `LoggingOptions` |
| `Server` | `ServerOptions` |
| `AccountSidAuthToken` | `BasicAuthCredentials?` |

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

- `TwilioApisClient(HttpClient httpClient, TwilioApisClientOptions options)`
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
| `ApiError` — abstract base of all 1 typed error classes in `Errors/` | `TryGetRawError(out RawError error): bool` | `Core/ErrorResponse/ApiError.cs` |
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
Of **195 operations**, **1 are Case A (typed)** and **194 are Case B (raw)**.
<!-- /crawler:op-stats -->

---

## Operations — by controller (58 groups, 195 operations)

Each links to a sub-page with one row per operation (HTTP, signature with must-pass-explicitly params, return
type, error Case A/B + accessors, pagination).

<!-- crawler:ops-table -->
| Controller (`client.X`) | Ops | Page |
|---|---:|---|
| `AccountsV1AuthTokenPromotion` | 1 | [map/operations/AccountsV1AuthTokenPromotion.md](map/operations/AccountsV1AuthTokenPromotion.md) |
| `AccountsV1Aws` | 5 | [map/operations/AccountsV1Aws.md](map/operations/AccountsV1Aws.md) |
| `AccountsV1BulkConsents` | 1 | [map/operations/AccountsV1BulkConsents.md](map/operations/AccountsV1BulkConsents.md) |
| `AccountsV1BulkContacts` | 1 | [map/operations/AccountsV1BulkContacts.md](map/operations/AccountsV1BulkContacts.md) |
| `AccountsV1MessagingGeopermissions` | 2 | [map/operations/AccountsV1MessagingGeopermissions.md](map/operations/AccountsV1MessagingGeopermissions.md) |
| `AccountsV1PublicKey` | 5 | [map/operations/AccountsV1PublicKey.md](map/operations/AccountsV1PublicKey.md) |
| `AccountsV1Safelist` | 3 | [map/operations/AccountsV1Safelist.md](map/operations/AccountsV1Safelist.md) |
| `AccountsV1SecondaryAuthToken` | 2 | [map/operations/AccountsV1SecondaryAuthToken.md](map/operations/AccountsV1SecondaryAuthToken.md) |
| `ChatV3Channel` | 1 | [map/operations/ChatV3Channel.md](map/operations/ChatV3Channel.md) |
| `ConversationsV1AddressConfiguration` | 5 | [map/operations/ConversationsV1AddressConfiguration.md](map/operations/ConversationsV1AddressConfiguration.md) |
| `ConversationsV1Binding` | 3 | [map/operations/ConversationsV1Binding.md](map/operations/ConversationsV1Binding.md) |
| `ConversationsV1Configuration` | 4 | [map/operations/ConversationsV1Configuration.md](map/operations/ConversationsV1Configuration.md) |
| `ConversationsV1Conversation` | 10 | [map/operations/ConversationsV1Conversation.md](map/operations/ConversationsV1Conversation.md) |
| `ConversationsV1ConversationWithParticipants` | 2 | [map/operations/ConversationsV1ConversationWithParticipants.md](map/operations/ConversationsV1ConversationWithParticipants.md) |
| `ConversationsV1Credential` | 5 | [map/operations/ConversationsV1Credential.md](map/operations/ConversationsV1Credential.md) |
| `ConversationsV1DeliveryReceipt` | 4 | [map/operations/ConversationsV1DeliveryReceipt.md](map/operations/ConversationsV1DeliveryReceipt.md) |
| `ConversationsV1Message` | 10 | [map/operations/ConversationsV1Message.md](map/operations/ConversationsV1Message.md) |
| `ConversationsV1Notification` | 2 | [map/operations/ConversationsV1Notification.md](map/operations/ConversationsV1Notification.md) |
| `ConversationsV1Participant` | 10 | [map/operations/ConversationsV1Participant.md](map/operations/ConversationsV1Participant.md) |
| `ConversationsV1ParticipantConversation` | 2 | [map/operations/ConversationsV1ParticipantConversation.md](map/operations/ConversationsV1ParticipantConversation.md) |
| `ConversationsV1Role` | 10 | [map/operations/ConversationsV1Role.md](map/operations/ConversationsV1Role.md) |
| `ConversationsV1Service` | 4 | [map/operations/ConversationsV1Service.md](map/operations/ConversationsV1Service.md) |
| `ConversationsV1User` | 10 | [map/operations/ConversationsV1User.md](map/operations/ConversationsV1User.md) |
| `ConversationsV1UserConversation` | 8 | [map/operations/ConversationsV1UserConversation.md](map/operations/ConversationsV1UserConversation.md) |
| `ConversationsV1Webhook` | 14 | [map/operations/ConversationsV1Webhook.md](map/operations/ConversationsV1Webhook.md) |
| `NotifyV1Binding` | 4 | [map/operations/NotifyV1Binding.md](map/operations/NotifyV1Binding.md) |
| `NotifyV1Notification` | 1 | [map/operations/NotifyV1Notification.md](map/operations/NotifyV1Notification.md) |
| `NotifyV1Service` | 1 | [map/operations/NotifyV1Service.md](map/operations/NotifyV1Service.md) |
| `Sms` | 1 | [map/operations/Sms.md](map/operations/Sms.md) |
| `TaskrouterV1Activity` | 5 | [map/operations/TaskrouterV1Activity.md](map/operations/TaskrouterV1Activity.md) |
| `TaskrouterV1Event` | 2 | [map/operations/TaskrouterV1Event.md](map/operations/TaskrouterV1Event.md) |
| `TaskrouterV1Task` | 5 | [map/operations/TaskrouterV1Task.md](map/operations/TaskrouterV1Task.md) |
| `TaskrouterV1TaskChannel` | 5 | [map/operations/TaskrouterV1TaskChannel.md](map/operations/TaskrouterV1TaskChannel.md) |
| `TaskrouterV1TaskQueue` | 5 | [map/operations/TaskrouterV1TaskQueue.md](map/operations/TaskrouterV1TaskQueue.md) |
| `TaskrouterV1TaskQueueBulkRealTimeStatistics` | 1 | [map/operations/TaskrouterV1TaskQueueBulkRealTimeStatistics.md](map/operations/TaskrouterV1TaskQueueBulkRealTimeStatistics.md) |
| `TaskrouterV1TaskQueueCumulativeStatistics` | 1 | [map/operations/TaskrouterV1TaskQueueCumulativeStatistics.md](map/operations/TaskrouterV1TaskQueueCumulativeStatistics.md) |
| `TaskrouterV1TaskQueueRealTimeStatistics` | 1 | [map/operations/TaskrouterV1TaskQueueRealTimeStatistics.md](map/operations/TaskrouterV1TaskQueueRealTimeStatistics.md) |
| `TaskrouterV1TaskQueuesStatistics` | 1 | [map/operations/TaskrouterV1TaskQueuesStatistics.md](map/operations/TaskrouterV1TaskQueuesStatistics.md) |
| `TaskrouterV1TaskQueueStatistics` | 1 | [map/operations/TaskrouterV1TaskQueueStatistics.md](map/operations/TaskrouterV1TaskQueueStatistics.md) |
| `TaskrouterV1TaskReservation` | 3 | [map/operations/TaskrouterV1TaskReservation.md](map/operations/TaskrouterV1TaskReservation.md) |
| `TaskrouterV1Worker` | 5 | [map/operations/TaskrouterV1Worker.md](map/operations/TaskrouterV1Worker.md) |
| `TaskrouterV1WorkerChannel` | 3 | [map/operations/TaskrouterV1WorkerChannel.md](map/operations/TaskrouterV1WorkerChannel.md) |
| `TaskrouterV1WorkerReservation` | 3 | [map/operations/TaskrouterV1WorkerReservation.md](map/operations/TaskrouterV1WorkerReservation.md) |
| `TaskrouterV1WorkersCumulativeStatistics` | 1 | [map/operations/TaskrouterV1WorkersCumulativeStatistics.md](map/operations/TaskrouterV1WorkersCumulativeStatistics.md) |
| `TaskrouterV1WorkersRealTimeStatistics` | 1 | [map/operations/TaskrouterV1WorkersRealTimeStatistics.md](map/operations/TaskrouterV1WorkersRealTimeStatistics.md) |
| `TaskrouterV1WorkersStatistics` | 1 | [map/operations/TaskrouterV1WorkersStatistics.md](map/operations/TaskrouterV1WorkersStatistics.md) |
| `TaskrouterV1WorkerStatistics` | 1 | [map/operations/TaskrouterV1WorkerStatistics.md](map/operations/TaskrouterV1WorkerStatistics.md) |
| `TaskrouterV1Workflow` | 5 | [map/operations/TaskrouterV1Workflow.md](map/operations/TaskrouterV1Workflow.md) |
| `TaskrouterV1WorkflowCumulativeStatistics` | 1 | [map/operations/TaskrouterV1WorkflowCumulativeStatistics.md](map/operations/TaskrouterV1WorkflowCumulativeStatistics.md) |
| `TaskrouterV1WorkflowRealTimeStatistics` | 1 | [map/operations/TaskrouterV1WorkflowRealTimeStatistics.md](map/operations/TaskrouterV1WorkflowRealTimeStatistics.md) |
| `TaskrouterV1WorkflowStatistics` | 1 | [map/operations/TaskrouterV1WorkflowStatistics.md](map/operations/TaskrouterV1WorkflowStatistics.md) |
| `TaskrouterV1Workspace` | 5 | [map/operations/TaskrouterV1Workspace.md](map/operations/TaskrouterV1Workspace.md) |
| `TaskrouterV1WorkspaceCumulativeStatistics` | 1 | [map/operations/TaskrouterV1WorkspaceCumulativeStatistics.md](map/operations/TaskrouterV1WorkspaceCumulativeStatistics.md) |
| `TaskrouterV1WorkspaceRealTimeStatistics` | 1 | [map/operations/TaskrouterV1WorkspaceRealTimeStatistics.md](map/operations/TaskrouterV1WorkspaceRealTimeStatistics.md) |
| `TaskrouterV1WorkspaceStatistics` | 1 | [map/operations/TaskrouterV1WorkspaceStatistics.md](map/operations/TaskrouterV1WorkspaceStatistics.md) |
| `VerifyV2Service` | 1 | [map/operations/VerifyV2Service.md](map/operations/VerifyV2Service.md) |
| `VerifyV2Verification` | 1 | [map/operations/VerifyV2Verification.md](map/operations/VerifyV2Verification.md) |
| `VerifyV2VerificationCheck` | 1 | [map/operations/VerifyV2VerificationCheck.md](map/operations/VerifyV2VerificationCheck.md) |
<!-- /crawler:ops-table -->

---

## Models

<!-- gen:models-table -->
| Group | Count | Page |
|---|---:|---|
| Records (plain `record` data models) | 127 | [`AccessToken` … `Workspace`](map/models/records-1-Ac-Wo.md) · [`WorkspaceCumulativeStatistics` … `WorkspaceStatistics`](map/models/records-2-Wo-Wo.md) |
| Unions (`OneOf` / `AnyOf`) — variant factories + `TryGet…` | 0 + 0 | [map/models/unions.md](map/models/unions.md) |
| Enums (`StringEnum<T>` / `IntEnum<T>`) — literal C# member names + wire values | 81 | [map/models/enums.md](map/models/enums.md) |
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
| Client & options (root) | `TwilioApis` |
| Operation controllers (`Api/`) | `TwilioApis.Api` |
| Records (`Models/`) | `TwilioApis.Models` |
| Enums (`Models/Enums/`) | `TwilioApis.Models.Enums` |
| Error classes (`Errors/`) | `TwilioApis.Errors` |
<!-- /gen:namespaces -->

---

## Servers & auth

<!-- crawler:servers-auth -->
**Auth.** The scheme(s) this API uses surface as credentials properties on `TwilioApisClientOptions` (source: `TwilioApisClientOptions.cs`) — set them before constructing the client; load `dotnet-authentication` for the wiring:

| Property | Type | Notes (from the source XML docs) |
|---|---|---|
| `AccountSidAuthToken` | `BasicAuthCredentials?` | — |

**Environments.** `options.Environment` is a `ServerEnvironment` (`Servers/ServerEnvironment.cs`) with members: `ServerEnvironment.Production`, `ServerEnvironment.Environment2`, `ServerEnvironment.Environment3`, `ServerEnvironment.Environment4`, `ServerEnvironment.Environment5`, `ServerEnvironment.Environment6`, `ServerEnvironment.Environment7`. Base-URL templates and override points live under `Servers/` and `options.Server`.
<!-- /crawler:servers-auth -->
