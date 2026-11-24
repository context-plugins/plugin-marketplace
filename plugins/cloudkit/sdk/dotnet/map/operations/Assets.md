<!-- Generated file — do not edit; regenerated with the SDK. -->

# Assets — operations

Accessor: `client.Assets` · Source: `src/CloudKit/Api/Assets.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### RereferenceAssets

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `RereferenceAssets(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### UploadAssets

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `UploadAssets(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

