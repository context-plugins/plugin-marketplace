<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.Users` · Source: `src/CloudKit/Api/Users.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CallerUser

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `CallerUser(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### DiscoverUsers

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `DiscoverUsers(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### LookupUsersByEmail

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `LookupUsersByEmail(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### LookupUsersById

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `LookupUsersById(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

