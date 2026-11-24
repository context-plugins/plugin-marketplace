<!-- Generated file — do not edit; regenerated with the SDK. -->

# Chat — operations

Accessor: `client.Chat` · Source: `src/Instacart/Api/Chat.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetChatMessages

- **Auth**: `options.BearerAuth`
- **Signature**: `GetChatMessages(GetChatMessagesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`
- **Returns**: `ChatMessagesResponse`
- **Error**: `ApiException<GetChatMessagesError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetChatMessagesRequest` | `src/Instacart/Requests/Chat/GetChatMessagesRequest.cs` |
| `ChatMessagesResponse` | `src/Instacart/Models/ChatMessagesResponse.cs` |
| `GetChatMessagesError` | `src/Instacart/Errors/GetChatMessagesError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

### SendChatMessage

- **Auth**: `options.BearerAuth`
- **Signature**: `SendChatMessage(SendChatMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrderId`, `Body`
- **Returns**: `ChatMessage`
- **Error**: `ApiException<SendChatMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendChatMessageRequest` | `src/Instacart/Requests/Chat/SendChatMessageRequest.cs` |
| `SendMessageRequest` | `src/Instacart/Models/SendMessageRequest.cs` |
| `ChatMessage` | `src/Instacart/Models/ChatMessage.cs` |
| `SendChatMessageError` | `src/Instacart/Errors/SendChatMessageError.cs` |
| `Error` | `src/Instacart/Models/Error.cs` |

