<!-- Generated file — do not edit; regenerated with the SDK. -->

# DeleteGroup — operations

Accessor: `client.DeleteGroup` · Source: `src/AwsXRay/Api/DeleteGroup.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DeleteGroupInvoke

- **Auth**: `options.Sigv4`
- **Signature**: `DeleteGroupInvoke(DeleteGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `object`
- **Error**: `ApiException<DeleteGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DeleteGroupOperationRequest` | `src/AwsXRay/Requests/DeleteGroup/DeleteGroupOperationRequest.cs` |
| `DeleteGroupRequest` | `src/AwsXRay/Models/DeleteGroupRequest.cs` |
| `DeleteGroupError` | `src/AwsXRay/Errors/DeleteGroupError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

