<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `ui_path/apis/users.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.users.add_user

- **Route**: `POST /adduser`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def add_user(body: AddUserRequest | AddUserRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, AddUserErrorBody]`
- **Error**: `AddUserErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AddUserRequest` | `ui_path/models/add_user_request.py` |
| `AddUserRequestDict` | `ui_path/models/add_user_request.py` |
| `User` | `ui_path/models/user.py` |
| `AddUserErrorBody` | `ui_path/errors/add_user_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.users.create_user

- **Route**: `POST /{organizationName}/identity_/api/User`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def create_user(organization_name: str, body: CreateUserRequest | CreateUserRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_name`, `body`
- **Params**: `organization_name` — path `organizationName` · `body` — JSON body
- **Returns (parsed)**: `User2`
- **Returns (raw)**: `ApiResult[User2, CreateUserErrorBody]`
- **Error**: `CreateUserErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateUserRequest` | `ui_path/models/create_user_request.py` |
| `CreateUserRequestDict` | `ui_path/models/create_user_request.py` |
| `User2` | `ui_path/models/user2.py` |
| `CreateUserErrorBody` | `ui_path/errors/create_user_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.users.delete_user

- **Route**: `DELETE /{organizationName}/identity_/api/User/{userId}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def delete_user(organization_name: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_name`, `user_id`
- **Params**: `organization_name` — path `organizationName` · `user_id` — path `userId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteUserErrorBody]`
- **Error**: `DeleteUserErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401] · `ErrorResponse3` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteUserErrorBody` | `ui_path/errors/delete_user_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |
| `ErrorResponse3` | `ui_path/models/error_response3.py` |

### client.users.edit_user

- **Route**: `POST /edituser`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def edit_user(body: EditUserRequest | EditUserRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, EditUserErrorBody]`
- **Error**: `EditUserErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [400, 401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EditUserRequest` | `ui_path/models/edit_user_request.py` |
| `EditUserRequestDict` | `ui_path/models/edit_user_request.py` |
| `User` | `ui_path/models/user.py` |
| `EditUserErrorBody` | `ui_path/errors/edit_user_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.users.get_odata_users

- **Route**: `GET /odata/Users`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def get_odata_users(*, filter_: str | None = None, top: int | None = None, skip: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `filter_` — query `$filter` · `top` — query `$top` · `skip` — query `$skip`
- **Returns (parsed)**: `ODataUserCollection`
- **Returns (raw)**: `ApiResult[ODataUserCollection, GetOdataUsersErrorBody]`
- **Error**: `GetOdataUsersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ODataUserCollection` | `ui_path/models/o_data_user_collection.py` |
| `GetOdataUsersErrorBody` | `ui_path/errors/get_odata_users_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.users.get_user

- **Route**: `GET /{organizationName}/identity_/api/User/{userId}`
- **Auth**: `bearer_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def get_user(organization_name: str, user_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `organization_name`, `user_id`
- **Params**: `organization_name` — path `organizationName` · `user_id` — path `userId`
- **Returns (parsed)**: `User2`
- **Returns (raw)**: `ApiResult[User2, GetUserErrorBody]`
- **Error**: `GetUserErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401] · `ErrorResponse3` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `User2` | `ui_path/models/user2.py` |
| `GetUserErrorBody` | `ui_path/errors/get_user_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |
| `ErrorResponse3` | `ui_path/models/error_response3.py` |

### client.users.list_roles2

- **Route**: `GET /roles`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def list_roles2(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `RolesResponse`
- **Returns (raw)**: `ApiResult[RolesResponse, ListRoles2ErrorBody]`
- **Error**: `ListRoles2ErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `RolesResponse` | `ui_path/models/roles_response.py` |
| `ListRoles2ErrorBody` | `ui_path/errors/list_roles2_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

### client.users.list_users

- **Route**: `GET /users`
- **Auth**: `api_key_auth`
- **Server**: `default_ui_path_automation_hub_app_inventory_api`
- **Signature**: `def list_users(*, page: int | None = 1, page_size: int | None = 20, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `page` — query · `page_size` — query `pageSize`
- **Returns (parsed)**: `UserListResponse`
- **Returns (raw)**: `ApiResult[UserListResponse, ListUsersErrorBody]`
- **Error**: `ListUsersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponseUiPathAutomationHubAppInventoryApi` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserListResponse` | `ui_path/models/user_list_response.py` |
| `ListUsersErrorBody` | `ui_path/errors/list_users_error.py` |
| `ErrorResponseUiPathAutomationHubAppInventoryApi` | `ui_path/models/error_response_ui_path_automation_hub_app_inventory_api.py` |

