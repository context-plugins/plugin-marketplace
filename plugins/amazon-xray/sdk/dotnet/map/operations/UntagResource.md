<!-- Generated file — do not edit; regenerated with the SDK. -->

# UntagResource — operations

Accessor: `client.UntagResource` · Source: `src/AwsXRay/Api/UntagResource.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### UntagResourceInvoke

- **Auth**: `options.Sigv4`
- **Signature**: `UntagResourceInvoke(UntagResourceOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<UntagResourceError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetResourceNotFoundException([NotNullWhen(true)] out ResourceNotFoundException? value)` [404] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UntagResourceOperationRequest` | `src/AwsXRay/Requests/UntagResource/UntagResourceOperationRequest.cs` |
| `UntagResourceRequest` | `src/AwsXRay/Models/UntagResourceRequest.cs` |
| `UntagResourceError` | `src/AwsXRay/Errors/UntagResourceError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ResourceNotFoundException` | `src/AwsXRay/Models/ResourceNotFoundException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

