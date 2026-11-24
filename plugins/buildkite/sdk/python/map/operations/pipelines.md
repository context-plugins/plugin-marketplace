<!-- Generated file — do not edit; regenerated with the SDK. -->

# Pipelines — operations

Accessor: `client.pipelines` · Source: `buildkite/apis/pipelines.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded, and an operation with no table mentions nothing but builtins and those.

### client.pipelines.create_pipeline

- **Route**: `POST /organizations/{org}/pipelines`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def create_pipeline(org: str, *, body: Pipeline | PipelineDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`
- **Params**: `org` — path · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Pipeline` | `buildkite/models/pipeline.py` |
| `PipelineDict` | `buildkite/models/pipeline.py` |

### client.pipelines.delete_pipeline

- **Route**: `DELETE /organizations/{org}/pipelines/{pipeline}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def delete_pipeline(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `pipeline`
- **Params**: `org` — path · `pipeline` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.pipelines.get_pipeline

- **Route**: `GET /organizations/{org}/pipelines/{pipeline}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def get_pipeline(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `pipeline`
- **Params**: `org` — path · `pipeline` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

### client.pipelines.list_pipelines

- **Route**: `GET /organizations/{org}/pipelines`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def list_pipelines(org: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`
- **Params**: `org` — path
- **Returns (parsed)**: `list[Pipeline]`
- **Returns (raw)**: `ApiResult[list[Pipeline], RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Pipeline` | `buildkite/models/pipeline.py` |

### client.pipelines.update_pipeline

- **Route**: `PATCH /organizations/{org}/pipelines/{pipeline}`
- **Auth**: `bearer_auth`
- **Server**: `default`
- **Signature**: `def update_pipeline(org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `org`, `pipeline`
- **Params**: `org` — path · `pipeline` — path
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, RawError]`
- **Error**: `RawError` — **Case B**

