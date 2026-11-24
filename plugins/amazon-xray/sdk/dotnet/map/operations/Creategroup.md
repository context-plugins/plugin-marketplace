<!-- Generated file — do not edit; regenerated with the SDK. -->

# Creategroup — operations

Accessor: `client.Creategroup` · Source: `src/AwsXRay/Api/Creategroup.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateGroup

- **Auth**: `options.Sigv4`
- **Signature**: `CreateGroup(CreateGroupOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `CreateGroupResult`
- **Error**: `ApiException<CreateGroupError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `CreateGroupOperationRequest` | `src/AwsXRay/Requests/Creategroup/CreateGroupOperationRequest.cs` |
| `CreateGroupRequest` | `src/AwsXRay/Models/CreateGroupRequest.cs` |
| `CreateGroupResult` | `src/AwsXRay/Models/CreateGroupResult.cs` |
| `CreateGroupError` | `src/AwsXRay/Errors/CreateGroupError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

