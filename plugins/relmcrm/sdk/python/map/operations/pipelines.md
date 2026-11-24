<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pipelines — operations

Accessor: `client.pipelines` · Source: `relm_crm/apis/pipelines.py` · 10 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.pipelines.add_stage

- **Route**: `POST /pipelines/{key}/stages`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def add_stage(key: str, body: PipelinesStagesRequest | PipelinesStagesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `body`
- **Params**: `key` — path · `body` — JSON body
- **Returns (parsed)**: `Pipeline`
- **Returns (raw)**: `ApiResult[Pipeline, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PipelinesStagesRequest` | `relm_crm/models/pipelines_stages_request.py` |
| `PipelinesStagesRequestDict` | `relm_crm/models/pipelines_stages_request.py` |
| `Pipeline` | `relm_crm/models/pipeline.py` |

### client.pipelines.create_pipeline

- **Route**: `POST /pipelines`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def create_pipeline(body: PipelineInput | PipelineInputDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `Pipeline`
- **Returns (raw)**: `ApiResult[Pipeline, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PipelineInput` | `relm_crm/models/pipeline_input.py` |
| `PipelineInputDict` | `relm_crm/models/pipeline_input.py` |
| `Pipeline` | `relm_crm/models/pipeline.py` |

### client.pipelines.delete_pipeline

- **Route**: `DELETE /pipelines/{key}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def delete_pipeline(key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path
- **Returns (parsed)**: `Deleted`
- **Returns (raw)**: `ApiResult[Deleted, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Deleted` | `relm_crm/models/deleted.py` |

### client.pipelines.delete_stage

- **Route**: `DELETE /pipelines/{key}/stages/{stage}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def delete_stage(key: str, stage: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `stage`
- **Params**: `key` — path · `stage` — path
- **Returns (parsed)**: `Pipeline`
- **Returns (raw)**: `ApiResult[Pipeline, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Pipeline` | `relm_crm/models/pipeline.py` |

### client.pipelines.get_pipeline

- **Route**: `GET /pipelines/{key}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def get_pipeline(key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path
- **Returns (parsed)**: `Pipeline`
- **Returns (raw)**: `ApiResult[Pipeline, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Pipeline` | `relm_crm/models/pipeline.py` |

### client.pipelines.list_pipelines

- **Route**: `GET /pipelines`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def list_pipelines(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

### client.pipelines.reorder_stages

- **Route**: `POST /pipelines/{key}/stages/reorder`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def reorder_stages(key: str, body: PipelinesStagesReorderRequest | PipelinesStagesReorderRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `body`
- **Params**: `key` — path · `body` — JSON body
- **Returns (parsed)**: `Pipeline`
- **Returns (raw)**: `ApiResult[Pipeline, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PipelinesStagesReorderRequest` | `relm_crm/models/pipelines_stages_reorder_request.py` |
| `PipelinesStagesReorderRequestDict` | `relm_crm/models/pipelines_stages_reorder_request.py` |
| `Pipeline` | `relm_crm/models/pipeline.py` |

### client.pipelines.set_default_pipeline

- **Route**: `POST /pipelines/{key}/default`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def set_default_pipeline(key: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`
- **Params**: `key` — path
- **Returns (parsed)**: `Pipeline`
- **Returns (raw)**: `ApiResult[Pipeline, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Pipeline` | `relm_crm/models/pipeline.py` |

### client.pipelines.update_pipeline

- **Route**: `PATCH /pipelines/{key}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def update_pipeline(key: str, body: PipelinesRequest | PipelinesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `body`
- **Params**: `key` — path · `body` — JSON body
- **Returns (parsed)**: `Pipeline`
- **Returns (raw)**: `ApiResult[Pipeline, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PipelinesRequest` | `relm_crm/models/pipelines_request.py` |
| `PipelinesRequestDict` | `relm_crm/models/pipelines_request.py` |
| `Pipeline` | `relm_crm/models/pipeline.py` |

### client.pipelines.update_stage

- **Route**: `PATCH /pipelines/{key}/stages/{stage}`
- **Auth**: `bearer_auth` OR `oauth2`
- **Server**: `default`
- **Signature**: `def update_stage(key: str, stage: str, body: PipelinesStagesRequest1 | PipelinesStagesRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `key`, `stage`, `body`
- **Params**: `key` — path · `stage` — path · `body` — JSON body
- **Returns (parsed)**: `Pipeline`
- **Returns (raw)**: `ApiResult[Pipeline, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `PipelinesStagesRequest1` | `relm_crm/models/pipelines_stages_request1.py` |
| `PipelinesStagesRequest1Dict` | `relm_crm/models/pipelines_stages_request1.py` |
| `Pipeline` | `relm_crm/models/pipeline.py` |

