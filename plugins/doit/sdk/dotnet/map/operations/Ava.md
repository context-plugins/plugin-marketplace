<!-- Generated file — do not edit; regenerated with the SDK. -->

# Ava — operations

Accessor: `client.Ava` · Source: `src/DoiT/Api/Ava.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AskAvaStreaming

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `AskAvaStreaming(AskAvaStreamingRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IAsyncEnumerable<string>`
- **Error**: `ApiException<AskAvaStreamingError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AskAvaStreamingRequest` | `src/DoiT/Requests/Ava/AskAvaStreamingRequest.cs` |
| `AvaAskRequest` | `src/DoiT/Models/AvaAskRequest.cs` |
| `AskAvaStreamingError` | `src/DoiT/Errors/AskAvaStreamingError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### AskAvaSync

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `AskAvaSync(AskAvaSyncRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `AvaAskSyncResponse`
- **Error**: `ApiException<AskAvaSyncError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AskAvaSyncRequest` | `src/DoiT/Requests/Ava/AskAvaSyncRequest.cs` |
| `AvaAskSyncRequest` | `src/DoiT/Models/AvaAskSyncRequest.cs` |
| `AvaAskSyncResponse` | `src/DoiT/Models/AvaAskSyncResponse.cs` |
| `AskAvaSyncError` | `src/DoiT/Errors/AskAvaSyncError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### AvaFeedback

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `AvaFeedback(AvaFeedbackOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AvaFeedbackError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AvaFeedbackOperationRequest` | `src/DoiT/Requests/Ava/AvaFeedbackOperationRequest.cs` |
| `AvaFeedbackRequest` | `src/DoiT/Models/AvaFeedbackRequest.cs` |
| `AvaFeedbackError` | `src/DoiT/Errors/AvaFeedbackError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### DeleteAvaConversation

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `DeleteAvaConversation(DeleteAvaConversationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ConversationId`
- **Query params (wire ← C#)**: `conversationId` ← `ConversationId`
- **Returns**: `void` (Task)
- **Error**: `ApiException<DeleteAvaConversationError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteAvaConversationRequest` | `src/DoiT/Requests/Ava/DeleteAvaConversationRequest.cs` |
| `DeleteAvaConversationError` | `src/DoiT/Errors/DeleteAvaConversationError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

