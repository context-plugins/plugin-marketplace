<!-- Generated file — do not edit; regenerated with the SDK. -->

# Zones — operations

Accessor: `client.Zones` · Source: `src/CloudKit/Api/Zones.cs` · 4 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListZones

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `ListZones(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### LookupZones

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `LookupZones(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### ModifyZones

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `ModifyZones(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### ZoneChanges

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `ZoneChanges(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

