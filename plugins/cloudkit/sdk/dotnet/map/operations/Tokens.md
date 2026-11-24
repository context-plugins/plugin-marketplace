<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tokens — operations

Accessor: `client.Tokens` · Source: `src/CloudKit/Api/Tokens.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### CreateToken

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `CreateToken(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### RegisterToken

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `RegisterToken(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

