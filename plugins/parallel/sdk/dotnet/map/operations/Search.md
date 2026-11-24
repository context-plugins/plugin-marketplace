<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.Search` · Source: `src/ParallelSdk/Api/Search.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### V1SearchV1SearchPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `V1SearchV1SearchPost(V1SearchV1SearchPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `V1SearchResponse`
- **Error**: `ApiException<V1SearchV1SearchPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `V1SearchV1SearchPostRequest` | `src/ParallelSdk/Requests/Search/V1SearchV1SearchPostRequest.cs` |
| `V1SearchRequest` | `src/ParallelSdk/Models/V1SearchRequest.cs` |
| `V1SearchResponse` | `src/ParallelSdk/Models/V1SearchResponse.cs` |
| `V1SearchV1SearchPostError` | `src/ParallelSdk/Errors/V1SearchV1SearchPostError.cs` |
| `ErrorResponseModel` | `src/ParallelSdk/Models/ErrorResponseModel.cs` |

