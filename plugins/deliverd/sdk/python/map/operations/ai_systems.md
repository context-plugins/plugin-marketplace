<!-- Generated file — do not edit; regenerated with the SDK. -->

# AiSystems — operations

Accessor: `client.ai_systems` · Source: `deliverd/apis/ai_systems.py` · 7 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.ai_systems.get_api_v1_ai_systems

- **Route**: `GET /api/v1/ai-systems`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_ai_systems(*, status: StatusDeliverdDevAiSystemsApiOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `status` — query
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `StatusDeliverdDevAiSystemsApiOrStr` | `deliverd/models/enums/status_deliverd_dev_ai_systems_api.py` |

### client.ai_systems.get_api_v1_ai_systems_by_id

- **Route**: `GET /api/v1/ai-systems/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_ai_systems_by_id(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

### client.ai_systems.get_api_v1_ai_systems_by_id_transitions

- **Route**: `GET /api/v1/ai-systems/{id}/transitions`
- **Auth**: `bearer_auth`
- **Signature**: `def get_api_v1_ai_systems_by_id_transitions(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], RawError]`
- **Error**: `RawError` — **Case B**

### client.ai_systems.patch_api_v1_ai_systems_by_id

- **Route**: `PATCH /api/v1/ai-systems/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def patch_api_v1_ai_systems_by_id(id_: UUID, *, body: ApiV1AiSystemsRequest1 | ApiV1AiSystemsRequest1Dict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PatchApiV1AiSystemsByIdErrorBody]`
- **Error**: `PatchApiV1AiSystemsByIdErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AiSystemsRequest1` | `deliverd/models/api_v1_ai_systems_request1.py` |
| `ApiV1AiSystemsRequest1Dict` | `deliverd/models/api_v1_ai_systems_request1.py` |
| `PatchApiV1AiSystemsByIdErrorBody` | `deliverd/errors/patch_api_v1_ai_systems_by_id_error.py` |

### client.ai_systems.post_api_v1_ai_systems

- **Route**: `POST /api/v1/ai-systems`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_ai_systems(*, body: ApiV1AiSystemsRequest | ApiV1AiSystemsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1AiSystemsErrorBody]`
- **Error**: `PostApiV1AiSystemsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [400, 402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AiSystemsRequest` | `deliverd/models/api_v1_ai_systems_request.py` |
| `ApiV1AiSystemsRequestDict` | `deliverd/models/api_v1_ai_systems_request.py` |
| `PostApiV1AiSystemsErrorBody` | `deliverd/errors/post_api_v1_ai_systems_error.py` |

### client.ai_systems.post_api_v1_ai_systems_by_id_model_change

- **Route**: `POST /api/v1/ai-systems/{id}/model-change`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_ai_systems_by_id_model_change(id_: UUID, *, body: ApiV1AiSystemsModelChangeRequest | ApiV1AiSystemsModelChangeRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1AiSystemsByIdModelChangeErrorBody]`
- **Error**: `PostApiV1AiSystemsByIdModelChangeErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AiSystemsModelChangeRequest` | `deliverd/models/api_v1_ai_systems_model_change_request.py` |
| `ApiV1AiSystemsModelChangeRequestDict` | `deliverd/models/api_v1_ai_systems_model_change_request.py` |
| `PostApiV1AiSystemsByIdModelChangeErrorBody` | `deliverd/errors/post_api_v1_ai_systems_by_id_model_change_error.py` |

### client.ai_systems.post_api_v1_ai_systems_by_id_transitions

- **Route**: `POST /api/v1/ai-systems/{id}/transitions`
- **Auth**: `bearer_auth`
- **Signature**: `def post_api_v1_ai_systems_by_id_transitions(id_: UUID, *, body: ApiV1AiSystemsTransitionsRequest | ApiV1AiSystemsTransitionsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `dict[str, Any]`
- **Returns (raw)**: `ApiResult[dict[str, Any], PostApiV1AiSystemsByIdTransitionsErrorBody]`
- **Error**: `PostApiV1AiSystemsByIdTransitionsErrorBody` — **Case A (typed)**
- **Error arms**: `RawError` [402, anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1AiSystemsTransitionsRequest` | `deliverd/models/api_v1_ai_systems_transitions_request.py` |
| `ApiV1AiSystemsTransitionsRequestDict` | `deliverd/models/api_v1_ai_systems_transitions_request.py` |
| `PostApiV1AiSystemsByIdTransitionsErrorBody` | `deliverd/errors/post_api_v1_ai_systems_by_id_transitions_error.py` |

