<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tags — operations

Accessor: `client.Tags` · Source: `src/AmazonFreeRtos/Api/Tags.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListTagsForResource

- **Auth**: `options.AwsSigV4`
- **Signature**: `ListTagsForResource(ListTagsForResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`
- **Returns**: `TagsResponse`
- **Error**: `ApiException<ListTagsForResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForResourceRequest` | `src/AmazonFreeRtos/Requests/Tags/ListTagsForResourceRequest.cs` |
| `TagsResponse` | `src/AmazonFreeRtos/Models/TagsResponse.cs` |
| `ListTagsForResourceError` | `src/AmazonFreeRtos/Errors/ListTagsForResourceError.cs` |
| `ErrorResponseModel` | `src/AmazonFreeRtos/Models/ErrorResponseModel.cs` |

### TagResource

- **Auth**: `options.AwsSigV4`
- **Signature**: `TagResource(TagResourceRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceArn`, `Body`
- **Returns**: `void` (Task)
- **Error**: `ApiException<TagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResourceRequest` | `src/AmazonFreeRtos/Requests/Tags/TagResourceRequest.cs` |
| `TagsRequest` | `src/AmazonFreeRtos/Models/TagsRequest.cs` |
| `TagResourceError` | `src/AmazonFreeRtos/Errors/TagResourceError.cs` |
| `ErrorResponseModel` | `src/AmazonFreeRtos/Models/ErrorResponseModel.cs` |

