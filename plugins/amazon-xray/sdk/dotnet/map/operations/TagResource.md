<!-- Generated file — do not edit; regenerated with the SDK. -->

# TagResource — operations

Accessor: `client.TagResource` · Source: `src/AwsXRay/Api/TagResource.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### TagResourceInvoke

- **Auth**: `options.Sigv4`
- **Signature**: `TagResourceInvoke(TagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<TagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `TagResourceOperationRequest` | `src/AwsXRay/Requests/TagResource/TagResourceOperationRequest.cs` |
| `TagResourceRequest` | `src/AwsXRay/Models/TagResourceRequest.cs` |
| `TagResourceError` | `src/AwsXRay/Errors/TagResourceError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ResourceNotFoundException` | `src/AwsXRay/Models/ResourceNotFoundException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

