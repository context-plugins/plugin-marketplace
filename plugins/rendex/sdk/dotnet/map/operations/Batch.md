<!-- Generated file — do not edit; regenerated with the SDK. -->

# Batch — operations

Accessor: `client.Batch` · Source: `src/Rendex/Api/Batch.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### PostScreenshotBatch

- **Auth**: `options.BearerAuth`
- **Signature**: `PostScreenshotBatch(PostScreenshotBatchRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `BatchResponse`
- **Error**: `ApiException<PostScreenshotBatchError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `PostScreenshotBatchRequest` | `src/Rendex/Requests/Batch/PostScreenshotBatchRequest.cs` |
| `BatchRequest` | `src/Rendex/Models/BatchRequest.cs` |
| `BatchResponse` | `src/Rendex/Models/BatchResponse.cs` |
| `PostScreenshotBatchError` | `src/Rendex/Errors/PostScreenshotBatchError.cs` |
| `ErrorResponseModel` | `src/Rendex/Models/ErrorResponseModel.cs` |

