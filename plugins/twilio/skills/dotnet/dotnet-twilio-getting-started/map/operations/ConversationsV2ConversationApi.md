<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV2ConversationApi — operations

Accessor: `client.ConversationsV2ConversationApi` · Source: `Api/ConversationsV2ConversationApi.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateConversationWithConfig

- **Server group**: `Default7`
- **Signature**: `CreateConversationWithConfig(V2ConversationsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ConversationsV2Conversation`
- **Error**: `SdkException<CreateConversationWithConfigError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 409, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `V2ConversationsRequest` | `Models/V2ConversationsRequest.cs` |
| `ConversationsV2Conversation` | `Models/ConversationsV2Conversation.cs` |
| `CreateConversationWithConfigError` | `Errors/CreateConversationWithConfigError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### DeleteConversationAsync

- **Server group**: `Default7`
- **Signature**: `DeleteConversationAsync(string sid, string? idempotencyKey, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `idempotencyKey` — nullable, no default → **must pass explicitly**
- **Returns**: `ConversationsV2OperationAccepted`
- **Error**: `SdkException<DeleteConversationAsyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 409, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationsV2OperationAccepted` | `Models/ConversationsV2OperationAccepted.cs` |
| `DeleteConversationAsyncError` | `Errors/DeleteConversationAsyncError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### FetchConversation2

- **Server group**: `Default7`
- **Signature**: `FetchConversation2(string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV2Conversation`
- **Error**: `SdkException<FetchConversation2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationsV2Conversation` | `Models/ConversationsV2Conversation.cs` |
| `FetchConversation2Error` | `Errors/FetchConversation2Error.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### ListConversationByAccount

- **Server group**: `Default7`
- **Signature**: `ListConversationByAccount(IReadOnlyList<Status31>? status, string? channelId, string? pageToken, int? pageSize = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `status` — nullable, no default → **must pass explicitly**
  - `channelId` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = `50`
- **Query params (wire ← C#)**: `status` ← `status`, `channelId` ← `channelId`, `pageSize` ← `pageSize`, `pageToken` ← `pageToken`
- **Returns**: `V2ConversationsResponse`
- **Error**: `SdkException<ListConversationByAccountError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `Status31` | `Models/Enums/Status31.cs` |
| `V2ConversationsResponse` | `Models/V2ConversationsResponse.cs` |
| `ListConversationByAccountError` | `Errors/ListConversationByAccountError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### PatchConversationById

- **Server group**: `Default7`
- **Signature**: `PatchConversationById(string sid, V2ConversationsRequest2? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ConversationsV2Conversation`
- **Error**: `SdkException<PatchConversationByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `V2ConversationsRequest2` | `Models/V2ConversationsRequest2.cs` |
| `ConversationsV2Conversation` | `Models/ConversationsV2Conversation.cs` |
| `PatchConversationByIdError` | `Errors/PatchConversationByIdError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### UpdateConversationById

- **Server group**: `Default7`
- **Signature**: `UpdateConversationById(string sid, V2ConversationsRequest1? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ConversationsV2Conversation`
- **Error**: `SdkException<UpdateConversationByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `V2ConversationsRequest1` | `Models/V2ConversationsRequest1.cs` |
| `ConversationsV2Conversation` | `Models/ConversationsV2Conversation.cs` |
| `UpdateConversationByIdError` | `Errors/UpdateConversationByIdError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

