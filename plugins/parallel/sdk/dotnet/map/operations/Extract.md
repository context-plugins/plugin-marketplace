<!-- Generated file — do not edit; regenerated with the SDK. -->

# Extract — operations

Accessor: `client.Extract` · Source: `src/ParallelSdk/Api/Extract.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ExtractV1ExtractPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `ExtractV1ExtractPost(ExtractV1ExtractPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1ExtractResponse`
- **Error**: `ApiException<ExtractV1ExtractPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ExtractV1ExtractPostRequest` | `src/ParallelSdk/Requests/Extract/ExtractV1ExtractPostRequest.cs` |
| `V1ExtractRequest` | `src/ParallelSdk/Models/V1ExtractRequest.cs` |
| `V1ExtractResponse` | `src/ParallelSdk/Models/V1ExtractResponse.cs` |
| `ExtractV1ExtractPostError` | `src/ParallelSdk/Errors/ExtractV1ExtractPostError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

