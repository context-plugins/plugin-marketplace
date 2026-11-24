<!-- Generated file — do not edit; regenerated with the SDK. -->

# WorkspaceApi — operations

Accessor: `client.workspace_api` · Source: `fillo/apis/workspace_api.py` · 9 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.workspace_api.disable_identity_verification

- **Route**: `DELETE /api/v1/manage/project/identity`
- **Auth**: `bearer_auth`
- **Signature**: `def disable_identity_verification(body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageProjectIdentityResponse2`
- **Returns (raw)**: `ApiResult[ApiV1ManageProjectIdentityResponse2, DisableIdentityVerificationErrorBody]`
- **Error**: `DisableIdentityVerificationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConfirmTarget` | `fillo/models/confirm_target.py` |
| `ConfirmTargetDict` | `fillo/models/confirm_target.py` |
| `ApiV1ManageProjectIdentityResponse2` | `fillo/models/api_v1_manage_project_identity_response2.py` |
| `DisableIdentityVerificationErrorBody` | `fillo/errors/disable_identity_verification_error.py` |
| `Error` | `fillo/models/error.py` |

### client.workspace_api.enable_identity_verification

- **Route**: `POST /api/v1/manage/project/identity`
- **Auth**: `bearer_auth`
- **Signature**: `def enable_identity_verification(*, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageProjectIdentityResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ManageProjectIdentityResponse1, EnableIdentityVerificationErrorBody]`
- **Error**: `EnableIdentityVerificationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageProjectIdentityResponse1` | `fillo/models/api_v1_manage_project_identity_response1.py` |
| `EnableIdentityVerificationErrorBody` | `fillo/errors/enable_identity_verification_error.py` |
| `Error` | `fillo/models/error.py` |

### client.workspace_api.get_code_sync_policy

- **Route**: `GET /api/v1/manage/project/code-sync`
- **Auth**: `bearer_auth`
- **Signature**: `def get_code_sync_policy(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1ManageProjectCodeSyncResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageProjectCodeSyncResponse, GetCodeSyncPolicyErrorBody]`
- **Error**: `GetCodeSyncPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageProjectCodeSyncResponse` | `fillo/models/api_v1_manage_project_code_sync_response.py` |
| `GetCodeSyncPolicyErrorBody` | `fillo/errors/get_code_sync_policy_error.py` |
| `Error` | `fillo/models/error.py` |

### client.workspace_api.get_identity_verification

- **Route**: `GET /api/v1/manage/project/identity`
- **Auth**: `bearer_auth`
- **Signature**: `def get_identity_verification(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1ManageProjectIdentityResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageProjectIdentityResponse, GetIdentityVerificationErrorBody]`
- **Error**: `GetIdentityVerificationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageProjectIdentityResponse` | `fillo/models/api_v1_manage_project_identity_response.py` |
| `GetIdentityVerificationErrorBody` | `fillo/errors/get_identity_verification_error.py` |
| `Error` | `fillo/models/error.py` |

### client.workspace_api.list_allowed_origins

- **Route**: `GET /api/v1/manage/project/origins`
- **Auth**: `bearer_auth`
- **Signature**: `def list_allowed_origins(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1ManageProjectOriginsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageProjectOriginsResponse, ListAllowedOriginsErrorBody]`
- **Error**: `ListAllowedOriginsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageProjectOriginsResponse` | `fillo/models/api_v1_manage_project_origins_response.py` |
| `ListAllowedOriginsErrorBody` | `fillo/errors/list_allowed_origins_error.py` |
| `Error` | `fillo/models/error.py` |

### client.workspace_api.rename_project

- **Route**: `PATCH /api/v1/manage/project`
- **Auth**: `bearer_auth`
- **Signature**: `def rename_project(body: ApiV1ManageProjectRequest | ApiV1ManageProjectRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageProjectResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageProjectResponse, RenameProjectErrorBody]`
- **Error**: `RenameProjectErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageProjectRequest` | `fillo/models/api_v1_manage_project_request.py` |
| `ApiV1ManageProjectRequestDict` | `fillo/models/api_v1_manage_project_request.py` |
| `ApiV1ManageProjectResponse` | `fillo/models/api_v1_manage_project_response.py` |
| `RenameProjectErrorBody` | `fillo/errors/rename_project_error.py` |
| `Error` | `fillo/models/error.py` |

### client.workspace_api.rename_workspace

- **Route**: `PATCH /api/v1/manage/workspace`
- **Auth**: `bearer_auth`
- **Signature**: `def rename_workspace(body: ApiV1ManageWorkspaceRequest | ApiV1ManageWorkspaceRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageWorkspaceResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageWorkspaceResponse, RenameWorkspaceErrorBody]`
- **Error**: `RenameWorkspaceErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageWorkspaceRequest` | `fillo/models/api_v1_manage_workspace_request.py` |
| `ApiV1ManageWorkspaceRequestDict` | `fillo/models/api_v1_manage_workspace_request.py` |
| `ApiV1ManageWorkspaceResponse` | `fillo/models/api_v1_manage_workspace_response.py` |
| `RenameWorkspaceErrorBody` | `fillo/errors/rename_workspace_error.py` |
| `Error` | `fillo/models/error.py` |

### client.workspace_api.set_allowed_origins

- **Route**: `PUT /api/v1/manage/project/origins`
- **Auth**: `bearer_auth`
- **Signature**: `def set_allowed_origins(body: ApiV1ManageProjectOriginsRequest | ApiV1ManageProjectOriginsRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageProjectOriginsResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageProjectOriginsResponse, SetAllowedOriginsErrorBody]`
- **Error**: `SetAllowedOriginsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageProjectOriginsRequest` | `fillo/models/api_v1_manage_project_origins_request.py` |
| `ApiV1ManageProjectOriginsRequestDict` | `fillo/models/api_v1_manage_project_origins_request.py` |
| `ApiV1ManageProjectOriginsResponse` | `fillo/models/api_v1_manage_project_origins_response.py` |
| `SetAllowedOriginsErrorBody` | `fillo/errors/set_allowed_origins_error.py` |
| `Error` | `fillo/models/error.py` |

### client.workspace_api.set_code_sync_policy

- **Route**: `PATCH /api/v1/manage/project/code-sync`
- **Auth**: `bearer_auth`
- **Signature**: `def set_code_sync_policy(body: ApiV1ManageProjectCodeSyncRequest | ApiV1ManageProjectCodeSyncRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageProjectCodeSyncResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageProjectCodeSyncResponse, SetCodeSyncPolicyErrorBody]`
- **Error**: `SetCodeSyncPolicyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageProjectCodeSyncRequest` | `fillo/models/api_v1_manage_project_code_sync_request.py` |
| `ApiV1ManageProjectCodeSyncRequestDict` | `fillo/models/api_v1_manage_project_code_sync_request.py` |
| `ApiV1ManageProjectCodeSyncResponse` | `fillo/models/api_v1_manage_project_code_sync_response.py` |
| `SetCodeSyncPolicyErrorBody` | `fillo/errors/set_code_sync_policy_error.py` |
| `Error` | `fillo/models/error.py` |

