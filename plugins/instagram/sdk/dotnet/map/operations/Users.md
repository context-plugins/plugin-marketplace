<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/Instagram/Api/Users.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetBusinessDiscovery

- **Signature**: `GetBusinessDiscovery(GetBusinessDiscoveryRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `Fields`, `AccessToken`
- **Query params (wire ← C#)**: `fields` ← `Fields`, `access_token` ← `AccessToken`
- **Returns**: `BusinessDiscoveryResponse`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetBusinessDiscoveryRequest` | `src/Instagram/Requests/Users/GetBusinessDiscoveryRequest.cs` |
| `BusinessDiscoveryResponse` | `src/Instagram/Models/BusinessDiscoveryResponse.cs` |

### GetUser

- **Signature**: `GetUser(GetUserRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `UserId`, `AccessToken`
- **Query params (wire ← C#)**: `access_token` ← `AccessToken`, `fields` ← `Fields`
- **Returns**: `User`
- **Error**: `ApiException<RawError>` — **Case B**

| Type | Source |
| --- | --- |
| `GetUserRequest` | `src/Instagram/Requests/Users/GetUserRequest.cs` |
| `User` | `src/Instagram/Models/User.cs` |

