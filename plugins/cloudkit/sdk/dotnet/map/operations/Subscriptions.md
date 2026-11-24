<!-- Generated file — do not edit; regenerated with the SDK. -->

# Subscriptions — operations

Accessor: `client.Subscriptions` · Source: `src/CloudKit/Api/Subscriptions.cs` · 3 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### ListSubscriptions

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `ListSubscriptions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### LookupSubscriptions

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `LookupSubscriptions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

### ModifySubscriptions

- **Auth**: `options.CloudKitApiToken` OR `options.ServerToServer`
- **Signature**: `ModifySubscriptions(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RawError>` — **Case B**

