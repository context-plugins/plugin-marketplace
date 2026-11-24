<!-- Generated file — do not edit; regenerated with the SDK. -->

# Groups — operations

Accessor: `client.groups` · Source: `ui_path/apis/groups.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.groups.create_group

- **Route**: `POST /{organizationName}/identity_/api/Group`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_platform_management_audit_logs_api`
- **Signature**: `def create_group(organization_name: str, body: CreateGroupRequest | CreateGroupRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_name`, `body`
- **Params**: `organization_name` — path `organizationName` · `body` — JSON body
- **Returns (parsed)**: `Group`
- **Returns (raw)**: `ApiResult[Group, CreateGroupErrorBody]`
- **Error**: `CreateGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateGroupRequest` | `ui_path/models/create_group_request.py` |
| `CreateGroupRequestDict` | `ui_path/models/create_group_request.py` |
| `Group` | `ui_path/models/group.py` |
| `CreateGroupErrorBody` | `ui_path/errors/create_group_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.groups.get_group

- **Route**: `GET /{organizationName}/identity_/api/Group/{partitionGlobalId}/{groupId}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_platform_management_audit_logs_api`
- **Signature**: `def get_group(organization_name: str, partition_global_id: str, group_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_name`, `partition_global_id`, `group_id`
- **Params**: `organization_name` — path `organizationName` · `partition_global_id` — path `partitionGlobalId` · `group_id` — path `groupId`
- **Returns (parsed)**: `Group`
- **Returns (raw)**: `ApiResult[Group, GetGroupErrorBody]`
- **Error**: `GetGroupErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Group` | `ui_path/models/group.py` |
| `GetGroupErrorBody` | `ui_path/errors/get_group_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

### client.groups.list_groups

- **Route**: `GET /{organizationName}/identity_/api/Group/{partitionGlobalId}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_platform_management_audit_logs_api`
- **Signature**: `def list_groups(organization_name: str, partition_global_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_name`, `partition_global_id`
- **Params**: `organization_name` — path `organizationName` · `partition_global_id` — path `partitionGlobalId`
- **Returns (parsed)**: `IdentityApiGroupResponse`
- **Returns (raw)**: `ApiResult[IdentityApiGroupResponse, ListGroupsErrorBody]`
- **Error**: `ListGroupsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathPlatformManagementAuditLogsApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IdentityApiGroupResponse` | `ui_path/models/identity_api_group_response.py` |
| `ListGroupsErrorBody` | `ui_path/errors/list_groups_error.py` |
| `ErrorResponseUiPathPlatformManagementAuditLogsApi` | `ui_path/models/error_response_ui_path_platform_management_audit_logs_api.py` |

