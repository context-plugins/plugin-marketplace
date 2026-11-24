<!-- Generated file — do not edit; regenerated with the SDK. -->

# ResponsesApi — operations

Accessor: `client.ResponsesApi` · Source: `src/ParallelSdk/Api/ResponsesApi.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateResponseV1ResponsesPost

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `CreateResponseV1ResponsesPost(CreateResponseV1ResponsesPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `ResponseModel`
- **Error**: `ApiException<CreateResponseV1ResponsesPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateResponseV1ResponsesPostRequest` | `src/ParallelSdk/Requests/ResponsesApi/CreateResponseV1ResponsesPostRequest.cs` |
| `ResponseCreateRequest` | `src/ParallelSdk/Models/ResponseCreateRequest.cs` |
| `ResponseModel` | `src/ParallelSdk/Models/ResponseModel.cs` |
| `CreateResponseV1ResponsesPostError` | `src/ParallelSdk/Errors/CreateResponseV1ResponsesPostError.cs` |
| `HttpValidationError` | `src/ParallelSdk/Models/HttpValidationError.cs` |

