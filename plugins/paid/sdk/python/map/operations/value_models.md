<!-- Generated file — do not edit; regenerated with the SDK. -->

# ValueModels — operations

Accessor: `client.value_models` · Source: `paid/apis/value_models.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.value_models.get_current_value_model

- **Route**: `GET /value-models/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_current_value_model(authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization`
- **Returns (parsed)**: `ValueModelDetail`
- **Returns (raw)**: `ApiResult[ValueModelDetail, GetCurrentValueModelErrorBody]`
- **Error**: `GetCurrentValueModelErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ValueModelDetail` | `paid/models/value_model_detail.py` |
| `GetCurrentValueModelErrorBody` | `paid/errors/get_current_value_model_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.value_models.get_value_model_version

- **Route**: `GET /value-models/versions/{version}`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def get_value_model_version(version: int, authorization: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `version`, `authorization`
- **Params**: `version` — path · `authorization` — header `Authorization`
- **Returns (parsed)**: `ValueModelDetail`
- **Returns (raw)**: `ApiResult[ValueModelDetail, GetValueModelVersionErrorBody]`
- **Error**: `GetValueModelVersionErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ValueModelDetail` | `paid/models/value_model_detail.py` |
| `GetValueModelVersionErrorBody` | `paid/errors/get_value_model_version_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.value_models.list_value_model_versions

- **Route**: `GET /value-models/versions`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def list_value_model_versions(authorization: str, *, limit: int | None = 10, offset: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `limit` — query · `offset` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `ValueModelVersionListResponse`
- **Returns (raw)**: `ApiResult[ValueModelVersionListResponse, ListValueModelVersionsErrorBody]`
- **Error**: `ListValueModelVersionsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ValueModelVersionListResponse` | `paid/models/value_model_version_list_response.py` |
| `ListValueModelVersionsErrorBody` | `paid/errors/list_value_model_versions_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.value_models.refresh_value_model_backfill

- **Route**: `POST /value-models/backfill`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def refresh_value_model_backfill(authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `BackfillResponse`
- **Returns (raw)**: `ApiResult[BackfillResponse, RefreshValueModelBackfillErrorBody]`
- **Error**: `RefreshValueModelBackfillErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BackfillResponse` | `paid/models/backfill_response.py` |
| `RefreshValueModelBackfillErrorBody` | `paid/errors/refresh_value_model_backfill_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

### client.value_models.update_value_model

- **Route**: `PUT /value-models/`
- **Server**: `default_reference_analytics_experimental_api`
- **Signature**: `def update_value_model(authorization: str, *, body: ValueModelUploadRequest | ValueModelUploadRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `ValueModelDetail`
- **Returns (raw)**: `ApiResult[ValueModelDetail, UpdateValueModelErrorBody]`
- **Error**: `UpdateValueModelErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ValueModelUploadRequest` | `paid/models/value_model_upload_request.py` |
| `ValueModelUploadRequestDict` | `paid/models/value_model_upload_request.py` |
| `ValueModelDetail` | `paid/models/value_model_detail.py` |
| `UpdateValueModelErrorBody` | `paid/errors/update_value_model_error.py` |
| `ErrorResponse` | `paid/models/error_response.py` |

