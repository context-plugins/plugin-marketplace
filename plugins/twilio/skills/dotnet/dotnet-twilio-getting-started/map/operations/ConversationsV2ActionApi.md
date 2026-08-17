<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV2ActionApi — operations

Accessor: `client.ConversationsV2ActionApi` · Source: `Api/ConversationsV2ActionApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateConversationAction

- **Server group**: `Default7`
- **Signature**: `CreateConversationAction(string conversationId, V2ConversationsActionsRequest body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV2Action`
- **Error**: `SdkException<CreateConversationActionError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `V2ConversationsActionsRequest` | `Models/OneOf/V2ConversationsActionsRequest.cs` |
| `ConversationsV2Action` | `Models/ConversationsV2Action.cs` |
| `CreateConversationActionError` | `Errors/CreateConversationActionError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### FetchConversationAction

- **Server group**: `Default7`
- **Signature**: `FetchConversationAction(string conversationId, string actionId, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV2Action`
- **Error**: `SdkException<FetchConversationActionError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationsV2Action` | `Models/ConversationsV2Action.cs` |
| `FetchConversationActionError` | `Errors/FetchConversationActionError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

