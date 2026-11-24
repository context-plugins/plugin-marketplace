<!-- Generated file — do not edit; regenerated with the SDK. -->

# UpdateGroup — operations

Accessor: `client.UpdateGroup` · Source: `src/AwsXRay/Api/UpdateGroup.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### UpdateGroupInvoke

- **Auth**: `options.Sigv4`
- **Signature**: `UpdateGroupInvoke(UpdateGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `UpdateGroupResult`
- **Error**: `ApiException<UpdateGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGroupOperationRequest` | `src/AwsXRay/Requests/UpdateGroup/UpdateGroupOperationRequest.cs` |
| `UpdateGroupRequest` | `src/AwsXRay/Models/UpdateGroupRequest.cs` |
| `UpdateGroupResult` | `src/AwsXRay/Models/UpdateGroupResult.cs` |
| `UpdateGroupError` | `src/AwsXRay/Errors/UpdateGroupError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

