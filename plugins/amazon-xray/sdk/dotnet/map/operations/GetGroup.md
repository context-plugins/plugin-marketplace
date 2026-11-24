<!-- Generated file — do not edit; regenerated with the SDK. -->

# GetGroup — operations

Accessor: `client.GetGroup` · Source: `src/AwsXRay/Api/GetGroup.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetGroupInvoke

- **Auth**: `options.Sigv4`
- **Signature**: `GetGroupInvoke(GetGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetGroupResult`
- **Error**: `ApiException<GetGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupOperationRequest` | `src/AwsXRay/Requests/GetGroup/GetGroupOperationRequest.cs` |
| `GetGroupRequest` | `src/AwsXRay/Models/GetGroupRequest.cs` |
| `GetGroupResult` | `src/AwsXRay/Models/GetGroupResult.cs` |
| `GetGroupError` | `src/AwsXRay/Errors/GetGroupError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

