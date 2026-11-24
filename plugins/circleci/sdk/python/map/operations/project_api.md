<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProjectApi — operations

Accessor: `client.project_api` · Source: `circle_ci/apis/project_api.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.project_api.create_checkout_key

- **Route**: `POST /project/{project-slug}/checkout-key`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def create_checkout_key(project_slug: str, body: ProjectCheckoutKeyRequest | ProjectCheckoutKeyRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `body`
- **Params**: `project_slug` — path `project-slug` · `body` — JSON body
- **Returns (parsed)**: `CheckoutKey`
- **Returns (raw)**: `ApiResult[CheckoutKey, CreateCheckoutKeyErrorBody]`
- **Error**: `CreateCheckoutKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectCheckoutKeyRequest` | `circle_ci/models/project_checkout_key_request.py` |
| `ProjectCheckoutKeyRequestDict` | `circle_ci/models/project_checkout_key_request.py` |
| `CheckoutKey` | `circle_ci/models/checkout_key.py` |
| `CreateCheckoutKeyErrorBody` | `circle_ci/errors/create_checkout_key_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.project_api.create_project_environment_variable

- **Route**: `POST /project/{project-slug}/envvar`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def create_project_environment_variable(project_slug: str, body: ProjectEnvvarRequest | ProjectEnvvarRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `body`
- **Params**: `project_slug` — path `project-slug` · `body` — JSON body
- **Returns (parsed)**: `ProjectEnvVar`
- **Returns (raw)**: `ApiResult[ProjectEnvVar, CreateProjectEnvironmentVariableErrorBody]`
- **Error**: `CreateProjectEnvironmentVariableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectEnvvarRequest` | `circle_ci/models/project_envvar_request.py` |
| `ProjectEnvvarRequestDict` | `circle_ci/models/project_envvar_request.py` |
| `ProjectEnvVar` | `circle_ci/models/project_env_var.py` |
| `CreateProjectEnvironmentVariableErrorBody` | `circle_ci/errors/create_project_environment_variable_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.project_api.delete_checkout_key

- **Route**: `DELETE /project/{project-slug}/checkout-key/{fingerprint}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def delete_checkout_key(project_slug: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `fingerprint`
- **Params**: `project_slug` — path `project-slug` · `fingerprint` — path
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteCheckoutKeyErrorBody]`
- **Error**: `DeleteCheckoutKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `circle_ci/models/message_response.py` |
| `DeleteCheckoutKeyErrorBody` | `circle_ci/errors/delete_checkout_key_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.project_api.delete_project_environment_variable

- **Route**: `DELETE /project/{project-slug}/envvar/{name}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def delete_project_environment_variable(project_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `name`
- **Params**: `project_slug` — path `project-slug` · `name` — path
- **Returns (parsed)**: `MessageResponse`
- **Returns (raw)**: `ApiResult[MessageResponse, DeleteProjectEnvironmentVariableErrorBody]`
- **Error**: `DeleteProjectEnvironmentVariableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `MessageResponse` | `circle_ci/models/message_response.py` |
| `DeleteProjectEnvironmentVariableErrorBody` | `circle_ci/errors/delete_project_environment_variable_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.project_api.follow_project

- **Route**: `POST /project/{vcs-type}/{username}/{project}/follow`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def follow_project(vcs_type: VcsTypeOrStr, username: str, project: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vcs_type`, `username`, `project`
- **Params**: `vcs_type` — path `vcs-type` · `username` — path · `project` — path
- **Returns (parsed)**: `ProjectProjectFollowResponse`
- **Returns (raw)**: `ApiResult[ProjectProjectFollowResponse, FollowProjectErrorBody]`
- **Error**: `FollowProjectErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `VcsTypeOrStr` | `circle_ci/models/enums/vcs_type.py` |
| `ProjectProjectFollowResponse` | `circle_ci/models/project_project_follow_response.py` |
| `FollowProjectErrorBody` | `circle_ci/errors/follow_project_error.py` |

### client.project_api.get_checkout_key

- **Route**: `GET /project/{project-slug}/checkout-key/{fingerprint}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def get_checkout_key(project_slug: str, fingerprint: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `fingerprint`
- **Params**: `project_slug` — path `project-slug` · `fingerprint` — path
- **Returns (parsed)**: `CheckoutKey`
- **Returns (raw)**: `ApiResult[CheckoutKey, GetCheckoutKeyErrorBody]`
- **Error**: `GetCheckoutKeyErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckoutKey` | `circle_ci/models/checkout_key.py` |
| `GetCheckoutKeyErrorBody` | `circle_ci/errors/get_checkout_key_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.project_api.get_project

- **Route**: `GET /project/{project-slug}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def get_project(project_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`
- **Params**: `project_slug` — path `project-slug`
- **Returns (parsed)**: `Project2`
- **Returns (raw)**: `ApiResult[Project2, GetProjectErrorBody]`
- **Error**: `GetProjectErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Project2` | `circle_ci/models/project2.py` |
| `GetProjectErrorBody` | `circle_ci/errors/get_project_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.project_api.get_project_environment_variable

- **Route**: `GET /project/{project-slug}/envvar/{name}`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def get_project_environment_variable(project_slug: str, name: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`, `name`
- **Params**: `project_slug` — path `project-slug` · `name` — path
- **Returns (parsed)**: `ProjectEnvVar`
- **Returns (raw)**: `ApiResult[ProjectEnvVar, GetProjectEnvironmentVariableErrorBody]`
- **Error**: `GetProjectEnvironmentVariableErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectEnvVar` | `circle_ci/models/project_env_var.py` |
| `GetProjectEnvironmentVariableErrorBody` | `circle_ci/errors/get_project_environment_variable_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.project_api.list_checkout_keys

- **Route**: `GET /project/{project-slug}/checkout-key`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def list_checkout_keys(project_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`
- **Params**: `project_slug` — path `project-slug`
- **Returns (parsed)**: `CheckoutKeyList`
- **Returns (raw)**: `ApiResult[CheckoutKeyList, ListCheckoutKeysErrorBody]`
- **Error**: `ListCheckoutKeysErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CheckoutKeyList` | `circle_ci/models/checkout_key_list.py` |
| `ListCheckoutKeysErrorBody` | `circle_ci/errors/list_checkout_keys_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.project_api.list_project_environment_variables

- **Route**: `GET /project/{project-slug}/envvar`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def list_project_environment_variables(project_slug: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_slug`
- **Params**: `project_slug` — path `project-slug`
- **Returns (parsed)**: `ProjectEnvVarList`
- **Returns (raw)**: `ApiResult[ProjectEnvVarList, ListProjectEnvironmentVariablesErrorBody]`
- **Error**: `ListProjectEnvironmentVariablesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectEnvVarList` | `circle_ci/models/project_env_var_list.py` |
| `ListProjectEnvironmentVariablesErrorBody` | `circle_ci/errors/list_project_environment_variables_error.py` |
| `ErrorResponse` | `circle_ci/models/error_response.py` |

### client.project_api.list_projects

- **Route**: `GET /projects`
- **Auth**: `api_token`
- **Server**: `default`
- **Signature**: `def list_projects(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `list[ProjectCircleciProjectApi]`
- **Returns (raw)**: `ApiResult[list[ProjectCircleciProjectApi], ListProjectsErrorBody]`
- **Error**: `ListProjectsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [401, anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectCircleciProjectApi` | `circle_ci/models/project_circleci_project_api.py` |
| `ListProjectsErrorBody` | `circle_ci/errors/list_projects_error.py` |

