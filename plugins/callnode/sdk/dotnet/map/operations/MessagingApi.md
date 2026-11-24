<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingApi — operations

Accessor: `client.MessagingApi` · Source: `src/CallNode/Api/MessagingApi.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetMessage

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `GetMessage(GetMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Message`
- **Error**: `ApiException<GetMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMessageRequest` | `src/CallNode/Requests/MessagingApi/GetMessageRequest.cs` |
| `Message` | `src/CallNode/Models/Message.cs` |
| `GetMessageError` | `src/CallNode/Errors/GetMessageError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

### SendMessage

- **Auth**: `options.ApiKeyAuth` AND `options.TimestampAuth` AND `options.SignatureAuth`
- **Signature**: `SendMessage(SendMessageOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SendMessageResponse`
- **Error**: `ApiException<SendMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SendMessageOperationRequest` | `src/CallNode/Requests/MessagingApi/SendMessageOperationRequest.cs` |
| `SendMessageRequest` | `src/CallNode/Models/SendMessageRequest.cs` |
| `SendMessageResponse` | `src/CallNode/Models/SendMessageResponse.cs` |
| `SendMessageError` | `src/CallNode/Errors/SendMessageError.cs` |
| `Error` | `src/CallNode/Models/Error.cs` |

