<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.Groups` · Source: `src/AwsXRay/Api/Groups.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetGroups

- **Auth**: `options.Sigv4`
- **Signature**: `GetGroups(GetGroupsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `GetGroupsResult`
- **Error**: `ApiException<GetGroupsError>` — **Case A (typed)**
- **Error accessors**: `TryGetInvalidRequestException([NotNullWhen(true)] out InvalidRequestException? value)` [400] · `TryGetThrottledException([NotNullWhen(true)] out ThrottledException? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupsRequest` | `src/AwsXRay/Requests/Groups/GetGroupsRequest.cs` |
| `GroupsRequest` | `src/AwsXRay/Models/GroupsRequest.cs` |
| `GetGroupsResult` | `src/AwsXRay/Models/GetGroupsResult.cs` |
| `GetGroupsError` | `src/AwsXRay/Errors/GetGroupsError.cs` |
| `InvalidRequestException` | `src/AwsXRay/Models/InvalidRequestException.cs` |
| `ThrottledException` | `src/AwsXRay/Models/ThrottledException.cs` |

