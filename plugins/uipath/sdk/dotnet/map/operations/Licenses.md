<!-- Generated file — do not edit; regenerated with the SDK. -->

# Licenses — operations

Accessor: `client.Licenses` · Source: `src/UiPath/Api/Licenses.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetGroupLicenseAllocation

- **Server group**: `DefaultUiPathPlatformManagementAuditLogsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `GetGroupLicenseAllocation(GetGroupLicenseAllocationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationName`, `AccountId`, `GroupId`
- **Returns**: `GroupLicenseAllocation`
- **Error**: `ApiException<GetGroupLicenseAllocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [401, 404] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetGroupLicenseAllocationRequest` | `src/UiPath/Requests/Licenses/GetGroupLicenseAllocationRequest.cs` |
| `GroupLicenseAllocation` | `src/UiPath/Models/GroupLicenseAllocation.cs` |
| `GetGroupLicenseAllocationError` | `src/UiPath/Errors/GetGroupLicenseAllocationError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

### UpdateGroupLicenseAllocation

- **Server group**: `DefaultUiPathPlatformManagementAuditLogsApi`
- **Auth**: `options.BearerAuth`
- **Signature**: `UpdateGroupLicenseAllocation(UpdateGroupLicenseAllocationOperationRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `OrganizationName`, `AccountId`, `GroupId`, `Body`
- **Returns**: `GroupLicenseAllocation`
- **Error**: `ApiException<UpdateGroupLicenseAllocationError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseUiPathPlatformManagementAuditLogsApi([NotNullWhen(true)] out ErrorResponseUiPathPlatformManagementAuditLogsApi? value)` [400, 401] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `UpdateGroupLicenseAllocationOperationRequest` | `src/UiPath/Requests/Licenses/UpdateGroupLicenseAllocationOperationRequest.cs` |
| `UpdateGroupLicenseAllocationRequest` | `src/UiPath/Models/UpdateGroupLicenseAllocationRequest.cs` |
| `GroupLicenseAllocation` | `src/UiPath/Models/GroupLicenseAllocation.cs` |
| `UpdateGroupLicenseAllocationError` | `src/UiPath/Errors/UpdateGroupLicenseAllocationError.cs` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `src/UiPath/Models/ErrorResponseUiPathPlatformManagementAuditLogsApi.cs` |

