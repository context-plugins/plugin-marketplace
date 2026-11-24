<!-- Generated file — do not edit; regenerated with the SDK. -->

# Playbooks — operations

Accessor: `client.playbooks` · Source: `deliverd/apis/playbooks.py` · 8 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.playbooks.get_api_v1_playbooks

- **Route**: `GET /api/v1/playbooks`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_playbooks(*, kind: KindDeliverdDevPlaybooksApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `kind` — query
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `KindDeliverdDevPlaybooksApiOrStr` | `deliverd/models/enums/kind_deliverd_dev_playbooks_api.py` |

### client.playbooks.get_api_v1_playbooks_by_id

- **Route**: `GET /api/v1/playbooks/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_playbooks_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], GetApiV1PlaybooksByIdErrorBody]`
- **Error**: `GetApiV1PlaybooksByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [404, anything unmapped]

| Type | Source |
| --- | --- |
| `GetApiV1PlaybooksByIdErrorBody` | `deliverd/errors/get_api_v1_playbooks_by_id_error.py` |

### client.playbooks.patch_api_v1_playbooks_by_id

- **Route**: `PATCH /api/v1/playbooks/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def patch_api_v1_playbooks_by_id(id_: UUID, *, body: ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PatchApiV1PlaybooksByIdErrorBody]`
- **Error**: `PatchApiV1PlaybooksByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PlaybooksRequest` | `deliverd/models/api_v1_playbooks_request.py` |
| `ApiV1PlaybooksRequestDict` | `deliverd/models/api_v1_playbooks_request.py` |
| `PatchApiV1PlaybooksByIdErrorBody` | `deliverd/errors/patch_api_v1_playbooks_by_id_error.py` |

### client.playbooks.post_api_v1_playbooks

- **Route**: `POST /api/v1/playbooks`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_playbooks(*, body: ApiV1PlaybooksRequest | ApiV1PlaybooksRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1PlaybooksErrorBody]`
- **Error**: `PostApiV1PlaybooksErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PlaybooksRequest` | `deliverd/models/api_v1_playbooks_request.py` |
| `ApiV1PlaybooksRequestDict` | `deliverd/models/api_v1_playbooks_request.py` |
| `PostApiV1PlaybooksErrorBody` | `deliverd/errors/post_api_v1_playbooks_error.py` |

### client.playbooks.post_api_v1_playbooks_by_id_approval

- **Route**: `POST /api/v1/playbooks/{id}/approval`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_playbooks_by_id_approval(id_: UUID, *, body: ApiV1PlaybooksApprovalRequest | ApiV1PlaybooksApprovalRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1PlaybooksByIdApprovalErrorBody]`
- **Error**: `PostApiV1PlaybooksByIdApprovalErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PlaybooksApprovalRequest` | `deliverd/models/api_v1_playbooks_approval_request.py` |
| `ApiV1PlaybooksApprovalRequestDict` | `deliverd/models/api_v1_playbooks_approval_request.py` |
| `PostApiV1PlaybooksByIdApprovalErrorBody` | `deliverd/errors/post_api_v1_playbooks_by_id_approval_error.py` |

### client.playbooks.post_api_v1_playbooks_by_id_start

- **Route**: `POST /api/v1/playbooks/{id}/start`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_playbooks_by_id_start(id_: UUID, *, body: ApiV1PlaybooksStartRequest | ApiV1PlaybooksStartRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1PlaybooksByIdStartErrorBody]`
- **Error**: `PostApiV1PlaybooksByIdStartErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PlaybooksStartRequest` | `deliverd/models/api_v1_playbooks_start_request.py` |
| `ApiV1PlaybooksStartRequestDict` | `deliverd/models/api_v1_playbooks_start_request.py` |
| `PostApiV1PlaybooksByIdStartErrorBody` | `deliverd/errors/post_api_v1_playbooks_by_id_start_error.py` |

### client.playbooks.post_api_v1_playbooks_by_id_use

- **Route**: `POST /api/v1/playbooks/{id}/use`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_playbooks_by_id_use(id_: UUID, *, body: ApiV1PlaybooksUseRequest | ApiV1PlaybooksUseRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1PlaybooksByIdUseErrorBody]`
- **Error**: `PostApiV1PlaybooksByIdUseErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [409, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PlaybooksUseRequest` | `deliverd/models/api_v1_playbooks_use_request.py` |
| `ApiV1PlaybooksUseRequestDict` | `deliverd/models/api_v1_playbooks_use_request.py` |
| `PostApiV1PlaybooksByIdUseErrorBody` | `deliverd/errors/post_api_v1_playbooks_by_id_use_error.py` |

### client.playbooks.post_api_v1_playbooks_by_id_versions

- **Route**: `POST /api/v1/playbooks/{id}/versions`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_playbooks_by_id_versions(id_: UUID, *, body: ApiV1PlaybooksVersionsRequest | ApiV1PlaybooksVersionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1PlaybooksByIdVersionsErrorBody]`
- **Error**: `PostApiV1PlaybooksByIdVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1PlaybooksVersionsRequest` | `deliverd/models/api_v1_playbooks_versions_request.py` |
| `ApiV1PlaybooksVersionsRequestDict` | `deliverd/models/api_v1_playbooks_versions_request.py` |
| `PostApiV1PlaybooksByIdVersionsErrorBody` | `deliverd/errors/post_api_v1_playbooks_by_id_versions_error.py` |

