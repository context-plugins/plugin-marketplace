<!-- Generated file — do not edit; regenerated with the SDK. -->

# ListTagsForResource — operations

Accessor: `client.ListTagsForResource` · Source: `src/AwsXRay/Api/ListTagsForResource.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListTagsForResourceInvoke

- **Auth**: `options.Sigv4`
- **Signature**: `ListTagsForResourceInvoke(ListTagsForResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `ListTagsForResourceResponse`
- **Error**: `ApiException<ListTagsForResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `ListTagsForResourceOperationRequest` | `src/AwsXRay/Requests/ListTagsForResource/ListTagsForResourceOperationRequest.cs` |
| `ListTagsForResourceRequest` | `src/AwsXRay/Models/ListTagsForResourceRequest.cs` |
| `ListTagsForResourceResponse` | `src/AwsXRay/Models/ListTagsForResourceResponse.cs` |
| `ListTagsForResourceError` | `src/AwsXRay/Errors/ListTagsForResourceError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ResourceNotFoundException` | `src/AwsXRay/Models/ResourceNotFoundException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

