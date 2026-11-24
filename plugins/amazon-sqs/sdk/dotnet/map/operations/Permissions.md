<!-- Generated file — do not edit; regenerated with the SDK. -->

# Permissions — operations

Accessor: `client.Permissions` · Source: `src/AmazonSqs/Api/Permissions.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### AddPermission

- **Auth**: `options.Sigv4`
- **Signature**: `AddPermission(AddPermissionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<AddPermissionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `AddPermissionOperationRequest` | `src/AmazonSqs/Requests/Permissions/AddPermissionOperationRequest.cs` |
| `XAmzTargetAmazonSimpleQueueServicePermissionsApi` | `src/AmazonSqs/Models/Enums/XAmzTargetAmazonSimpleQueueServicePermissionsApi.cs` |
| `AddPermissionError` | `src/AmazonSqs/Errors/AddPermissionError.cs` |

### RemovePermission

- **Auth**: `options.Sigv4`
- **Signature**: `RemovePermission(RemovePermissionOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `XAmzTarget`
- **Returns**: `void` (Task)
- **Error**: `ApiException<RemovePermissionError>` — **Case A (typed)**
- **Error accessors**: `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [400, 403, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `RemovePermissionOperationRequest` | `src/AmazonSqs/Requests/Permissions/RemovePermissionOperationRequest.cs` |
| `XAmzTarget1AmazonSimpleQueueServicePermissionsApi` | `src/AmazonSqs/Models/Enums/XAmzTarget1AmazonSimpleQueueServicePermissionsApi.cs` |
| `RemovePermissionError` | `src/AmazonSqs/Errors/RemovePermissionError.cs` |

