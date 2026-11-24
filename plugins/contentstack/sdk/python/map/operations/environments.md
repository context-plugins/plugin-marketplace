<!-- Generated file — do not edit; regenerated with the SDK. -->

# Environments — operations

Accessor: `client.environments` · Source: `contentstack/apis/environments.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.environments.create_environment

- **Route**: `POST /projects/{project_uid}/environments`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def create_environment(project_uid: str, body: CreateEnvironmentRequest | CreateEnvironmentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`, `body`
- **Params**: `project_uid` — path · `body` — JSON body
- **Returns (parsed)**: `Environment2`
- **Returns (raw)**: `ApiResult[Environment2, CreateEnvironmentErrorBody]`
- **Error**: `CreateEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `Error2ContentstackEnvironmentsApi` [400] · `Error2` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateEnvironmentRequest` | `contentstack/models/create_environment_request.py` |
| `CreateEnvironmentRequestDict` | `contentstack/models/create_environment_request.py` |
| `Environment2` | `contentstack/models/environment2.py` |
| `CreateEnvironmentErrorBody` | `contentstack/errors/create_environment_error.py` |
| `Error2ContentstackEnvironmentsApi` | `contentstack/models/error2_contentstack_environments_api.py` |
| `Error2` | `contentstack/models/error2.py` |

### client.environments.delete_environment

- **Route**: `DELETE /projects/{project_uid}/environments/{env_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def delete_environment(project_uid: str, env_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`, `env_uid`
- **Params**: `project_uid` — path · `env_uid` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteEnvironmentErrorBody]`
- **Error**: `DeleteEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401] · `Error2ContentstackEnvironmentsApi` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteEnvironmentErrorBody` | `contentstack/errors/delete_environment_error.py` |
| `Error2` | `contentstack/models/error2.py` |
| `Error2ContentstackEnvironmentsApi` | `contentstack/models/error2_contentstack_environments_api.py` |

### client.environments.get_all_environments

- **Route**: `GET /environments`
- **Auth**: `authtoken_auth` OR `management_token_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def get_all_environments(api_key: str, *, authtoken: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `api_key`
- **Params**: `api_key` — header · `authtoken` — header
- **Returns (parsed)**: `EnvironmentList`
- **Returns (raw)**: `ApiResult[EnvironmentList, GetAllEnvironmentsErrorBody]`
- **Error**: `GetAllEnvironmentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentList` | `contentstack/models/environment_list.py` |
| `GetAllEnvironmentsErrorBody` | `contentstack/errors/get_all_environments_error.py` |
| `Error2` | `contentstack/models/error2.py` |

### client.environments.get_environment

- **Route**: `GET /projects/{project_uid}/environments/{env_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def get_environment(project_uid: str, env_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`, `env_uid`
- **Params**: `project_uid` — path · `env_uid` — path
- **Returns (parsed)**: `Environment2`
- **Returns (raw)**: `ApiResult[Environment2, GetEnvironmentErrorBody]`
- **Error**: `GetEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401] · `Error2ContentstackEnvironmentsApi` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Environment2` | `contentstack/models/environment2.py` |
| `GetEnvironmentErrorBody` | `contentstack/errors/get_environment_error.py` |
| `Error2` | `contentstack/models/error2.py` |
| `Error2ContentstackEnvironmentsApi` | `contentstack/models/error2_contentstack_environments_api.py` |

### client.environments.get_projects_by_project_uid_environments

- **Route**: `GET /projects/{project_uid}/environments`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def get_projects_by_project_uid_environments(project_uid: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`
- **Params**: `project_uid` — path
- **Returns (parsed)**: `EnvironmentList2`
- **Returns (raw)**: `ApiResult[EnvironmentList2, GetProjectsByProjectUidEnvironmentsErrorBody]`
- **Error**: `GetProjectsByProjectUidEnvironmentsErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `EnvironmentList2` | `contentstack/models/environment_list2.py` |
| `GetProjectsByProjectUidEnvironmentsErrorBody` | `contentstack/errors/get_projects_by_project_uid_environments_error.py` |
| `Error2` | `contentstack/models/error2.py` |

### client.environments.revalidate_cache

- **Route**: `POST /projects/{project_uid}/environments/{env_uid}/revalidate-cache`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def revalidate_cache(project_uid: str, env_uid: str, *, body: ProjectsEnvironmentsRevalidateCacheRequest | ProjectsEnvironmentsRevalidateCacheRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`, `env_uid`
- **Params**: `project_uid` — path · `env_uid` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RevalidateCacheErrorBody]`
- **Error**: `RevalidateCacheErrorBody` — **Case A (typed)**
- **Error arms**: `Error2` [401] · `Error2ContentstackEnvironmentsApi` [404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ProjectsEnvironmentsRevalidateCacheRequest` | `contentstack/models/projects_environments_revalidate_cache_request.py` |
| `ProjectsEnvironmentsRevalidateCacheRequestDict` | `contentstack/models/projects_environments_revalidate_cache_request.py` |
| `RevalidateCacheErrorBody` | `contentstack/errors/revalidate_cache_error.py` |
| `Error2` | `contentstack/models/error2.py` |
| `Error2ContentstackEnvironmentsApi` | `contentstack/models/error2_contentstack_environments_api.py` |

### client.environments.update_environment

- **Route**: `PUT /projects/{project_uid}/environments/{env_uid}`
- **Auth**: `bearer_auth` OR `authtoken_auth`
- **Server**: `default_contentstack_environments_api`
- **Signature**: `def update_environment(project_uid: str, env_uid: str, body: CreateEnvironmentRequest | CreateEnvironmentRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `project_uid`, `env_uid`, `body`
- **Params**: `project_uid` — path · `env_uid` — path · `body` — JSON body
- **Returns (parsed)**: `Environment2`
- **Returns (raw)**: `ApiResult[Environment2, UpdateEnvironmentErrorBody]`
- **Error**: `UpdateEnvironmentErrorBody` — **Case A (typed)**
- **Error arms**: `Error2ContentstackEnvironmentsApi` [400] · `Error2` [401] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateEnvironmentRequest` | `contentstack/models/create_environment_request.py` |
| `CreateEnvironmentRequestDict` | `contentstack/models/create_environment_request.py` |
| `Environment2` | `contentstack/models/environment2.py` |
| `UpdateEnvironmentErrorBody` | `contentstack/errors/update_environment_error.py` |
| `Error2ContentstackEnvironmentsApi` | `contentstack/models/error2_contentstack_environments_api.py` |
| `Error2` | `contentstack/models/error2.py` |

