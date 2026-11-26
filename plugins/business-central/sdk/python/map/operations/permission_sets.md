<!-- Generated file — do not edit; regenerated with the SDK. -->

# PermissionSets — operations

Accessor: `client.permission_sets` · Source: `dynamics_365_business_central/apis/permission_sets.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.permission_sets.create_user_permission

- **Route**: `POST /companies({company_id})/users({user_id})/userPermissions`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def create_user_permission(company_id: UUID, user_id: UUID, body: CompaniesApiUsersApiUserPermissionsRequest | CompaniesApiUsersApiUserPermissionsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `user_id`, `body`
- **Params**: `company_id` — path · `user_id` — path · `body` — JSON body
- **Returns (parsed)**: `UserPermission`
- **Returns (raw)**: `ApiResult[UserPermission, CreateUserPermissionErrorBody]`
- **Error**: `CreateUserPermissionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiUsersApiUserPermissionsRequest` | `dynamics_365_business_central/models/companies_api_users_api_user_permissions_request.py` |
| `CompaniesApiUsersApiUserPermissionsRequestDict` | `dynamics_365_business_central/models/companies_api_users_api_user_permissions_request.py` |
| `UserPermission` | `dynamics_365_business_central/models/user_permission.py` |
| `CreateUserPermissionErrorBody` | `dynamics_365_business_central/errors/create_user_permission_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.permission_sets.list_permission_sets

- **Route**: `GET /companies({company_id})/permissionSets`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def list_permission_sets(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path
- **Returns (parsed)**: `CompaniesApiPermissionSetsResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiPermissionSetsResponse, ListPermissionSetsErrorBody]`
- **Error**: `ListPermissionSetsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiPermissionSetsResponse` | `dynamics_365_business_central/models/companies_api_permission_sets_response.py` |
| `ListPermissionSetsErrorBody` | `dynamics_365_business_central/errors/list_permission_sets_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.permission_sets.list_user_permissions

- **Route**: `GET /companies({company_id})/users({user_id})/userPermissions`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def list_user_permissions(company_id: UUID, user_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `user_id`
- **Params**: `company_id` — path · `user_id` — path
- **Returns (parsed)**: `CompaniesApiUsersApiUserPermissionsResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiUsersApiUserPermissionsResponse, ListUserPermissionsErrorBody]`
- **Error**: `ListUserPermissionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiUsersApiUserPermissionsResponse` | `dynamics_365_business_central/models/companies_api_users_api_user_permissions_response.py` |
| `ListUserPermissionsErrorBody` | `dynamics_365_business_central/errors/list_user_permissions_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

