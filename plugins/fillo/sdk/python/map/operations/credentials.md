<!-- Generated file — do not edit; regenerated with the SDK. -->

# Credentials — operations

Accessor: `client.credentials` · Source: `fillo/apis/credentials.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.credentials.create_sync_token

- **Route**: `POST /api/v1/manage/sync-tokens`
- **Auth**: `bearer_auth`
- **Signature**: `def create_sync_token(*, body: ApiV1ManageSyncTokensRequest | ApiV1ManageSyncTokensRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageSyncTokensResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ManageSyncTokensResponse1, CreateSyncTokenErrorBody]`
- **Error**: `CreateSyncTokenErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageSyncTokensRequest` | `fillo/models/api_v1_manage_sync_tokens_request.py` |
| `ApiV1ManageSyncTokensRequestDict` | `fillo/models/api_v1_manage_sync_tokens_request.py` |
| `ApiV1ManageSyncTokensResponse1` | `fillo/models/api_v1_manage_sync_tokens_response1.py` |
| `CreateSyncTokenErrorBody` | `fillo/errors/create_sync_token_error.py` |
| `Error` | `fillo/models/error.py` |

### client.credentials.list_connector_tokens

- **Route**: `GET /api/v1/manage/tokens`
- **Auth**: `bearer_auth`
- **Signature**: `def list_connector_tokens(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1ManageTokensResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageTokensResponse, ListConnectorTokensErrorBody]`
- **Error**: `ListConnectorTokensErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageTokensResponse` | `fillo/models/api_v1_manage_tokens_response.py` |
| `ListConnectorTokensErrorBody` | `fillo/errors/list_connector_tokens_error.py` |
| `Error` | `fillo/models/error.py` |

### client.credentials.list_sync_tokens

- **Route**: `GET /api/v1/manage/sync-tokens`
- **Auth**: `bearer_auth`
- **Signature**: `def list_sync_tokens(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1ManageSyncTokensResponse`
- **Returns (raw)**: `ApiResult[ApiV1ManageSyncTokensResponse, ListSyncTokensErrorBody]`
- **Error**: `ListSyncTokensErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1ManageSyncTokensResponse` | `fillo/models/api_v1_manage_sync_tokens_response.py` |
| `ListSyncTokensErrorBody` | `fillo/errors/list_sync_tokens_error.py` |
| `Error` | `fillo/models/error.py` |

### client.credentials.revoke_connector_token

- **Route**: `DELETE /api/v1/manage/tokens/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def revoke_connector_token(id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageTokensResponse1`
- **Returns (raw)**: `ApiResult[ApiV1ManageTokensResponse1, RevokeConnectorTokenErrorBody]`
- **Error**: `RevokeConnectorTokenErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConfirmTarget` | `fillo/models/confirm_target.py` |
| `ConfirmTargetDict` | `fillo/models/confirm_target.py` |
| `ApiV1ManageTokensResponse1` | `fillo/models/api_v1_manage_tokens_response1.py` |
| `RevokeConnectorTokenErrorBody` | `fillo/errors/revoke_connector_token_error.py` |
| `Error` | `fillo/models/error.py` |

### client.credentials.revoke_sync_token

- **Route**: `DELETE /api/v1/manage/sync-tokens/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def revoke_sync_token(id_: str, body: ConfirmTarget | ConfirmTargetDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1ManageSyncTokensResponse2`
- **Returns (raw)**: `ApiResult[ApiV1ManageSyncTokensResponse2, RevokeSyncTokenErrorBody]`
- **Error**: `RevokeSyncTokenErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 409, 413, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ConfirmTarget` | `fillo/models/confirm_target.py` |
| `ConfirmTargetDict` | `fillo/models/confirm_target.py` |
| `ApiV1ManageSyncTokensResponse2` | `fillo/models/api_v1_manage_sync_tokens_response2.py` |
| `RevokeSyncTokenErrorBody` | `fillo/errors/revoke_sync_token_error.py` |
| `Error` | `fillo/models/error.py` |

