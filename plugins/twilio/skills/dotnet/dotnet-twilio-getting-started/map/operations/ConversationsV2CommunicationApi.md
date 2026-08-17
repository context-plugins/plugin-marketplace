<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV2CommunicationApi — operations

Accessor: `client.ConversationsV2CommunicationApi` · Source: `Api/ConversationsV2CommunicationApi.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateCommunicationInConversation

- **Server group**: `Default7`
- **Signature**: `CreateCommunicationInConversation(string conversationSid, V2ConversationsCommunicationsRequest? body, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `body` — nullable, no default → **must pass explicitly**
- **Returns**: `ConversationsV2Communication`
- **Error**: `SdkException<CreateCommunicationInConversationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `V2ConversationsCommunicationsRequest` | `Models/V2ConversationsCommunicationsRequest.cs` |
| `ConversationsV2Communication` | `Models/ConversationsV2Communication.cs` |
| `CreateCommunicationInConversationError` | `Errors/CreateCommunicationInConversationError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### FetchCommunication

- **Server group**: `Default7`
- **Signature**: `FetchCommunication(string conversationSid, string sid, RequestOptions? requestOptions = null, CancellationToken ct = default)`
- **Returns**: `ConversationsV2Communication`
- **Error**: `SdkException<FetchCommunicationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `ConversationsV2Communication` | `Models/ConversationsV2Communication.cs` |
| `FetchCommunicationError` | `Errors/FetchCommunicationError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

### ListCommunicationByConversation

- **Server group**: `Default7`
- **Signature**: `ListCommunicationByConversation(string conversationSid, string? channelId, string? pageToken, int? pageSize = 50, RequestOptions? requestOptions = null, CancellationToken ct = default)`
  - `channelId` — nullable, no default → **must pass explicitly**
  - `pageToken` — nullable, no default → **must pass explicitly**
  - defaults: `pageSize` = `50`
- **Query params (wire ← C#)**: `channelId` ← `channelId`, `pageSize` ← `pageSize`, `pageToken` ← `pageToken`
- **Returns**: `V2ConversationsCommunicationsResponse`
- **Error**: `SdkException<ListCommunicationByConversationError>` — **Case A (typed)**
- **Error accessors**: `TryGetAccountsCallsRecordingsSidJson201041408Error1(out AccountsCallsRecordingsSidJson201041408Error1)` [400, 404, 429, 500, 503] · `TryGetRawError(out RawError)` [fallback]

| Type | Source |
| --- | --- |
| `V2ConversationsCommunicationsResponse` | `Models/V2ConversationsCommunicationsResponse.cs` |
| `ListCommunicationByConversationError` | `Errors/ListCommunicationByConversationError.cs` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `Models/AccountsCallsRecordingsSidJson201041408Error1.cs` |

