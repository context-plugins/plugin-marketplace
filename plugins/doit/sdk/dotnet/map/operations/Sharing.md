<!-- Generated file — do not edit; regenerated with the SDK. -->

# Sharing — operations

Accessor: `client.Sharing` · Source: `src/DoiT/Api/Sharing.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetResourcePermission

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `GetResourcePermission(GetResourcePermissionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceType`, `ResourceId`
- **Returns**: `ResourcePermissionsResponse`
- **Error**: `ApiException<GetResourcePermissionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetResourcePermissionRequest` | `src/DoiT/Requests/Sharing/GetResourcePermissionRequest.cs` |
| `ResourceType` | `src/DoiT/Models/Enums/ResourceType.cs` |
| `ResourcePermissionsResponse` | `src/DoiT/Models/ResourcePermissionsResponse.cs` |
| `GetResourcePermissionError` | `src/DoiT/Errors/GetResourcePermissionError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

### UpdateResourcePermission

- **Auth**: `options.ApiKey` OR (`options.TenantId` AND `options.ApiKey`)
- **Signature**: `UpdateResourcePermission(UpdateResourcePermissionRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `ResourceType`, `ResourceId`
- **Returns**: `ResourcePermissionsResponse`
- **Error**: `ApiException<UpdateResourcePermissionError>` — **Case A (typed)**
- **Error accessors**: `TryGetError([NotNullWhen(true)] out Error? value)` [400, 401, 403, 404, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateResourcePermissionRequest` | `src/DoiT/Requests/Sharing/UpdateResourcePermissionRequest.cs` |
| `ResourceType` | `src/DoiT/Models/Enums/ResourceType.cs` |
| `SharingV1Request` | `src/DoiT/Models/SharingV1Request.cs` |
| `ResourcePermissionsResponse` | `src/DoiT/Models/ResourcePermissionsResponse.cs` |
| `UpdateResourcePermissionError` | `src/DoiT/Errors/UpdateResourcePermissionError.cs` |
| `Error` | `src/DoiT/Models/Error.cs` |

