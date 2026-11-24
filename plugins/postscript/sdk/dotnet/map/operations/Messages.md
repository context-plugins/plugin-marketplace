<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.Messages` · Source: `src/Postscript/Api/Messages.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateMessage

- **Auth**: `options.Sec0`
- **Signature**: `CreateMessage(CreateMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ApiV2MessageRequestsResponse`
- **Error**: `ApiException<CreateMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateMessageRequest` | `src/Postscript/Requests/Messages/CreateMessageRequest.cs` |
| `ApiV2MessageRequestsRequest` | `src/Postscript/Models/ApiV2MessageRequestsRequest.cs` |
| `ApiV2MessageRequestsResponse` | `src/Postscript/Models/ApiV2MessageRequestsResponse.cs` |
| `CreateMessageError` | `src/Postscript/Errors/CreateMessageError.cs` |

### GetMessageRequest

- **Auth**: `options.Sec0`
- **Signature**: `GetMessageRequest(GetMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV2MessageRequestsResponse`
- **Error**: `ApiException<GetMessageRequestError>` — **Case A (typed)**
- **Error accessors**: `TryGetAnonymousObject([NotNullWhen(true)] out object? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetMessageRequest` | `src/Postscript/Requests/Messages/GetMessageRequest.cs` |
| `ApiV2MessageRequestsResponse` | `src/Postscript/Models/ApiV2MessageRequestsResponse.cs` |
| `GetMessageRequestError` | `src/Postscript/Errors/GetMessageRequestError.cs` |

### GetSentMessage

- **Auth**: `options.Sec0`
- **Signature**: `GetSentMessage(GetSentMessageRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `ApiV2SentMessagesResponse`
- **Error**: `ApiException<GetSentMessageError>` — **Case A (typed)**
- **Error accessors**: `TryGetApiV2SentMessages400Error1([NotNullWhen(true)] out ApiV2SentMessages400Error1? value)` [400] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSentMessageRequest` | `src/Postscript/Requests/Messages/GetSentMessageRequest.cs` |
| `ApiV2SentMessagesResponse` | `src/Postscript/Models/ApiV2SentMessagesResponse.cs` |
| `GetSentMessageError` | `src/Postscript/Errors/GetSentMessageError.cs` |
| `ApiV2SentMessages400Error1` | `src/Postscript/Models/ApiV2SentMessages400Error1.cs` |

