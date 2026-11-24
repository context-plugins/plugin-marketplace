<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppEvents — operations

Accessor: `client.AppEvents` · Source: `src/Applike/Api/AppEvents.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostAppEventBatch

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `PostAppEventBatch(PostAppEventBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IReadOnlyList<BatchErrorResponse>`
- **Error**: `ApiException<PostAppEventBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 500] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [502] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostAppEventBatchRequest` | `src/Applike/Requests/AppEvents/PostAppEventBatchRequest.cs` |
| `AppEventBatch` | `src/Applike/Models/AppEventBatch.cs` |
| `BatchErrorResponse` | `src/Applike/Models/BatchErrorResponse.cs` |
| `PostAppEventBatchError` | `src/Applike/Errors/PostAppEventBatchError.cs` |
| `ErrorResponseModel` | `src/Applike/Models/ErrorResponseModel.cs` |

