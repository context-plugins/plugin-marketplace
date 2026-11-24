<!-- Generated file — do not edit; regenerated with the SDK. -->

# Anomalies — operations

Accessor: `client.anomalies` · Source: `doi_t/apis/anomalies.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.anomalies.get_anomaly

- **Route**: `GET /anomalies/v1/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_anomaly(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `AnomaliesV1Response`
- **Returns (raw)**: `ApiResult[AnomaliesV1Response, GetAnomalyErrorBody]`
- **Error**: `GetAnomalyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnomaliesV1Response` | `doi_t/models/anomalies_v1_response.py` |
| `GetAnomalyErrorBody` | `doi_t/errors/get_anomaly_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.anomalies.get_anomaly_explanation

- **Route**: `GET /anomalies/v1/{id}/explanation`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def get_anomaly_explanation(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `AnomaliesV1ExplanationResponse`
- **Returns (raw)**: `ApiResult[AnomaliesV1ExplanationResponse, GetAnomalyExplanationErrorBody]`
- **Error**: `GetAnomalyExplanationErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnomaliesV1ExplanationResponse` | `doi_t/models/anomalies_v1_explanation_response.py` |
| `GetAnomalyExplanationErrorBody` | `doi_t/errors/get_anomaly_explanation_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.anomalies.list_anomalies

- **Route**: `GET /anomalies/v1`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def list_anomalies(*, min_creation_time: int | None = None, max_creation_time: int | None = None, filter_: str | None = None, sort_by: SortByDoiTAnomaliesApiOrStr | None = SortByDoiTAnomaliesApi.START_TIME, sort_order: SortOrderOrStr | None = None, max_results: int | None = None, page_token: str | None = None, include_notifications: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `min_creation_time` — query `minCreationTime` · `max_creation_time` — query `maxCreationTime` · `filter_` — query `filter` · `sort_by` — query `sortBy` · `sort_order` — query `sortOrder` · `max_results` — query `maxResults` · `page_token` — query `pageToken` · `include_notifications` — query `includeNotifications`
- **Returns (parsed)**: `AnomaliesResponse`
- **Returns (raw)**: `ApiResult[AnomaliesResponse, ListAnomaliesErrorBody]`
- **Error**: `ListAnomaliesErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SortByDoiTAnomaliesApiOrStr` | `doi_t/models/enums/sort_by_doi_t_anomalies_api.py` |
| `SortOrderOrStr` | `doi_t/models/enums/sort_order.py` |
| `AnomaliesResponse` | `doi_t/models/anomalies_response.py` |
| `ListAnomaliesErrorBody` | `doi_t/errors/list_anomalies_error.py` |
| `Error` | `doi_t/models/error.py` |

### client.anomalies.patch_anomaly

- **Route**: `PATCH /anomalies/v1/{id}`
- **Auth**: `api_key` OR (`tenant_id` AND `api_key`)
- **Server**: `default`
- **Signature**: `def patch_anomaly(id_: str, body: AnomalyStatusUpdate | AnomalyStatusUpdateDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, PatchAnomalyErrorBody]`
- **Error**: `PatchAnomalyErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AnomalyStatusUpdate` | `doi_t/models/anomaly_status_update.py` |
| `AnomalyStatusUpdateDict` | `doi_t/models/anomaly_status_update.py` |
| `PatchAnomalyErrorBody` | `doi_t/errors/patch_anomaly_error.py` |
| `Error` | `doi_t/models/error.py` |

