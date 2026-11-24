<!-- Generated file — do not edit; regenerated with the SDK. -->

# Changes — operations

Accessor: `client.Changes` · Source: `src/CloudKit/Api/Changes.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DatabaseChanges

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `DatabaseChanges(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### ZoneRecordChanges

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `ZoneRecordChanges(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

