<!-- Generated file — do not edit; regenerated with the SDK. -->

# Messages — operations

Accessor: `client.Messages` · Source: `src/Givebutter/Api/Messages.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### MessagesIndex

- **Auth**: `options.Http`
- **Signature**: `MessagesIndex(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `V1MessagesResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `V1MessagesResponse` | `src/Givebutter/Models/V1MessagesResponse.cs` |

### MessagesShow

- **Auth**: `options.Http`
- **Signature**: `MessagesShow(MessagesShowRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Message`
- **Returns**: `MessageResource`
- **Error**: `ApiException<MessagesShowError>` — **Case A (typed)**
- **Error accessors**: `TryGetModelNotFoundException1([NotNullWhen(true)] out ModelNotFoundException1? value)` [404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `MessagesShowRequest` | `src/Givebutter/Requests/Messages/MessagesShowRequest.cs` |
| `MessageResource` | `src/Givebutter/Models/MessageResource.cs` |
| `MessagesShowError` | `src/Givebutter/Errors/MessagesShowError.cs` |
| `ModelNotFoundException1` | `src/Givebutter/Models/ModelNotFoundException1.cs` |

