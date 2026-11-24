<!-- Generated file — do not edit; regenerated with the SDK. -->

# AccessToken — operations

Accessor: `client.AccessToken` · Source: `src/Buildkite/Api/AccessToken.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetAccessToken

- **Auth**: `options.BearerAuth`
- **Signature**: `GetAccessToken(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### RevokeAccessToken

- **Auth**: `options.BearerAuth`
- **Signature**: `RevokeAccessToken(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

