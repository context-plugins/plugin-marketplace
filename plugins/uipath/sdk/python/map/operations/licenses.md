<!-- Generated file — do not edit; regenerated with the SDK. -->

# Licenses — operations

Accessor: `client.licenses` · Source: `ui_path/apis/licenses.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.licenses.get_group_license_allocation

- **Route**: `GET /{organizationName}/la/api/account/{accountId}/user-license/group/{groupId}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_platform_management_audit_logs_api`
- **Signature**: `def get_group_license_allocation(organization_name: str, account_id: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_name`, `account_id`, `group_id`
- **Params**: `organization_name` — path `organizationName` · `account_id` — path `accountId` · `group_id` — path `groupId`
- **Returns (parsed)**: `GroupLicenseAllocation`
- **Returns (raw)**: `ApiResult[GroupLicenseAllocation, GetGroupLicenseAllocationErrorBody]`
- **Error**: `GetGroupLicenseAllocationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GroupLicenseAllocation` | `ui_path/models/group_license_allocation.py` |
| `GetGroupLicenseAllocationErrorBody` | `ui_path/errors/get_group_license_allocation_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.licenses.update_group_license_allocation

- **Route**: `PUT /{organizationName}/la/api/account/{accountId}/user-license/group/{groupId}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_platform_management_audit_logs_api`
- **Signature**: `def update_group_license_allocation(organization_name: str, account_id: str, group_id: str, body: UpdateGroupLicenseAllocationRequest | UpdateGroupLicenseAllocationRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_name`, `account_id`, `group_id`, `body`
- **Params**: `organization_name` — path `organizationName` · `account_id` — path `accountId` · `group_id` — path `groupId` · `body` — JSON body
- **Returns (parsed)**: `GroupLicenseAllocation`
- **Returns (raw)**: `ApiResult[GroupLicenseAllocation, UpdateGroupLicenseAllocationErrorBody]`
- **Error**: `UpdateGroupLicenseAllocationErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UpdateGroupLicenseAllocationRequest` | `ui_path/models/update_group_license_allocation_request.py` |
| `UpdateGroupLicenseAllocationRequestDict` | `ui_path/models/update_group_license_allocation_request.py` |
| `GroupLicenseAllocation` | `ui_path/models/group_license_allocation.py` |
| `UpdateGroupLicenseAllocationErrorBody` | `ui_path/errors/update_group_license_allocation_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

