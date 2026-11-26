<!-- Generated file — do not edit; regenerated with the SDK. -->

# Users — operations

Accessor: `client.users` · Source: `dynamics_365_business_central/apis/users.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.users.get_new_users_from_office365

- **Route**: `POST /companies({company_id})/users/Microsoft.NAV.getNewUsersFromOffice365`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def get_new_users_from_office365(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetNewUsersFromOffice365ErrorBody]`
- **Error**: `GetNewUsersFromOffice365ErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetNewUsersFromOffice365ErrorBody` | `dynamics_365_business_central/errors/get_new_users_from_office365_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.users.get_new_users_from_office365_async

- **Route**: `POST /companies({company_id})/users/Microsoft.NAV.getNewUsersFromOffice365Async`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def get_new_users_from_office365_async(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetNewUsersFromOffice365AsyncErrorBody]`
- **Error**: `GetNewUsersFromOffice365AsyncErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `GetNewUsersFromOffice365AsyncErrorBody` | `dynamics_365_business_central/errors/get_new_users_from_office365_async_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.users.get_user

- **Route**: `GET /companies({company_id})/users({user_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def get_user(company_id: UUID, user_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `user_id`
- **Params**: `company_id` — path · `user_id` — path
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, GetUserErrorBody]`
- **Error**: `GetUserErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `User` | `dynamics_365_business_central/models/user.py` |
| `GetUserErrorBody` | `dynamics_365_business_central/errors/get_user_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.users.list_users

- **Route**: `GET /companies({company_id})/users`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def list_users(company_id: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`
- **Params**: `company_id` — path
- **Returns (parsed)**: `CompaniesApiUsersResponse`
- **Returns (raw)**: `ApiResult[CompaniesApiUsersResponse, ListUsersErrorBody]`
- **Error**: `ListUsersErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CompaniesApiUsersResponse` | `dynamics_365_business_central/models/companies_api_users_response.py` |
| `ListUsersErrorBody` | `dynamics_365_business_central/errors/list_users_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

### client.users.update_user

- **Route**: `PATCH /companies({company_id})/users({user_id})`
- **Auth**: `oauth2_authorization_code` OR `oauth2_client_credentials` OR `bearer_auth`
- **Server**: `default_business_central_automation_api_v2_0_companies_api`
- **Signature**: `def update_user(company_id: UUID, user_id: UUID, if_match: str, body: UserUpdate | UserUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `company_id`, `user_id`, `if_match`, `body`
- **Params**: `company_id` — path · `user_id` — path · `if_match` — header `If-Match` · `body` — JSON body
- **Returns (parsed)**: `User`
- **Returns (raw)**: `ApiResult[User, UpdateUserErrorBody]`
- **Error**: `UpdateUserErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UserUpdate` | `dynamics_365_business_central/models/user_update.py` |
| `UserUpdateDict` | `dynamics_365_business_central/models/user_update.py` |
| `User` | `dynamics_365_business_central/models/user.py` |
| `UpdateUserErrorBody` | `dynamics_365_business_central/errors/update_user_error.py` |
| `ErrorResponse` | `dynamics_365_business_central/models/error_response.py` |

