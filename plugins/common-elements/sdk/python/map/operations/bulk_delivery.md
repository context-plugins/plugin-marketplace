<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkDelivery — operations

Accessor: `client.bulk_delivery` · Source: `common_elements/apis/bulk_delivery.py` · 11 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bulk_delivery.deliveries_cancel

- **Route**: `DELETE /api/v1/deliveries/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def deliveries_cancel(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1DeliveriesResponse3`
- **Returns (raw)**: `ApiResult[ApiV1DeliveriesResponse3, DeliveriesCancelErrorBody]`
- **Error**: `DeliveriesCancelErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesResponse3` | `common_elements/models/api_v1_deliveries_response3.py` |
| `DeliveriesCancelErrorBody` | `common_elements/errors/deliveries_cancel_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.bulk_delivery.deliveries_catalog

- **Route**: `GET /api/v1/deliveries/datasets`
- **Auth**: `bearer_auth`
- **Signature**: `def deliveries_catalog(*, dataset: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `dataset` — query
- **Returns (parsed)**: `ApiV1DeliveriesDatasetsResponse`
- **Returns (raw)**: `ApiResult[ApiV1DeliveriesDatasetsResponse, DeliveriesCatalogErrorBody]`
- **Error**: `DeliveriesCatalogErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesDatasetsResponse` | `common_elements/models/api_v1_deliveries_datasets_response.py` |
| `DeliveriesCatalogErrorBody` | `common_elements/errors/deliveries_catalog_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.bulk_delivery.deliveries_create

- **Route**: `POST /api/v1/deliveries`
- **Auth**: `bearer_auth`
- **Signature**: `def deliveries_create(body: ApiV1DeliveriesRequest | ApiV1DeliveriesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1DeliveriesResponse`
- **Returns (raw)**: `ApiResult[ApiV1DeliveriesResponse, DeliveriesCreateErrorBody]`
- **Error**: `DeliveriesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesRequest` | `common_elements/models/api_v1_deliveries_request.py` |
| `ApiV1DeliveriesRequestDict` | `common_elements/models/api_v1_deliveries_request.py` |
| `ApiV1DeliveriesResponse` | `common_elements/models/api_v1_deliveries_response.py` |
| `DeliveriesCreateErrorBody` | `common_elements/errors/deliveries_create_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.bulk_delivery.deliveries_download

- **Route**: `GET /api/v1/deliveries/{id}/download`
- **Auth**: `bearer_auth`
- **Signature**: `def deliveries_download(id_: UUID, *, token: str | None = None, part: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `token` — query · `part` — query
- **Returns (parsed)**: `ApiV1DeliveriesDownloadResponse`
- **Returns (raw)**: `ApiResult[ApiV1DeliveriesDownloadResponse, DeliveriesDownloadErrorBody]`
- **Error**: `DeliveriesDownloadErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesDownloadResponse` | `common_elements/models/api_v1_deliveries_download_response.py` |
| `DeliveriesDownloadErrorBody` | `common_elements/errors/deliveries_download_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.bulk_delivery.deliveries_list

- **Route**: `GET /api/v1/deliveries`
- **Auth**: `bearer_auth`
- **Signature**: `def deliveries_list(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1DeliveriesResponse1`
- **Returns (raw)**: `ApiResult[ApiV1DeliveriesResponse1, DeliveriesListErrorBody]`
- **Error**: `DeliveriesListErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesResponse1` | `common_elements/models/api_v1_deliveries_response1.py` |
| `DeliveriesListErrorBody` | `common_elements/errors/deliveries_list_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.bulk_delivery.deliveries_schedule_delete

- **Route**: `DELETE /api/v1/deliveries/schedules/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def deliveries_schedule_delete(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1DeliveriesSchedulesResponse3`
- **Returns (raw)**: `ApiResult[ApiV1DeliveriesSchedulesResponse3, DeliveriesScheduleDeleteErrorBody]`
- **Error**: `DeliveriesScheduleDeleteErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesSchedulesResponse3` | `common_elements/models/api_v1_deliveries_schedules_response3.py` |
| `DeliveriesScheduleDeleteErrorBody` | `common_elements/errors/deliveries_schedule_delete_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.bulk_delivery.deliveries_schedule_detail

- **Route**: `GET /api/v1/deliveries/schedules/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def deliveries_schedule_detail(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1DeliveriesSchedulesResponse2`
- **Returns (raw)**: `ApiResult[ApiV1DeliveriesSchedulesResponse2, DeliveriesScheduleDetailErrorBody]`
- **Error**: `DeliveriesScheduleDetailErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesSchedulesResponse2` | `common_elements/models/api_v1_deliveries_schedules_response2.py` |
| `DeliveriesScheduleDetailErrorBody` | `common_elements/errors/deliveries_schedule_detail_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.bulk_delivery.deliveries_schedule_update

- **Route**: `PATCH /api/v1/deliveries/schedules/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def deliveries_schedule_update(id_: UUID, body: ApiV1DeliveriesSchedulesRequest1 | ApiV1DeliveriesSchedulesRequest1Dict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `body`
- **Params**: `id_` — path `id` · `body` — JSON body
- **Returns (parsed)**: `ApiV1DeliveriesSchedulesResponse3`
- **Returns (raw)**: `ApiResult[ApiV1DeliveriesSchedulesResponse3, DeliveriesScheduleUpdateErrorBody]`
- **Error**: `DeliveriesScheduleUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesSchedulesRequest1` | `common_elements/models/api_v1_deliveries_schedules_request1.py` |
| `ApiV1DeliveriesSchedulesRequest1Dict` | `common_elements/models/api_v1_deliveries_schedules_request1.py` |
| `ApiV1DeliveriesSchedulesResponse3` | `common_elements/models/api_v1_deliveries_schedules_response3.py` |
| `DeliveriesScheduleUpdateErrorBody` | `common_elements/errors/deliveries_schedule_update_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.bulk_delivery.deliveries_schedules_create

- **Route**: `POST /api/v1/deliveries/schedules`
- **Auth**: `bearer_auth`
- **Signature**: `def deliveries_schedules_create(body: ApiV1DeliveriesSchedulesRequest | ApiV1DeliveriesSchedulesRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `ApiV1DeliveriesSchedulesResponse`
- **Returns (raw)**: `ApiResult[ApiV1DeliveriesSchedulesResponse, DeliveriesSchedulesCreateErrorBody]`
- **Error**: `DeliveriesSchedulesCreateErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesSchedulesRequest` | `common_elements/models/api_v1_deliveries_schedules_request.py` |
| `ApiV1DeliveriesSchedulesRequestDict` | `common_elements/models/api_v1_deliveries_schedules_request.py` |
| `ApiV1DeliveriesSchedulesResponse` | `common_elements/models/api_v1_deliveries_schedules_response.py` |
| `DeliveriesSchedulesCreateErrorBody` | `common_elements/errors/deliveries_schedules_create_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.bulk_delivery.deliveries_schedules_list

- **Route**: `GET /api/v1/deliveries/schedules`
- **Auth**: `bearer_auth`
- **Signature**: `def deliveries_schedules_list(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `ApiV1DeliveriesSchedulesResponse1`
- **Returns (raw)**: `ApiResult[ApiV1DeliveriesSchedulesResponse1, DeliveriesSchedulesListErrorBody]`
- **Error**: `DeliveriesSchedulesListErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesSchedulesResponse1` | `common_elements/models/api_v1_deliveries_schedules_response1.py` |
| `DeliveriesSchedulesListErrorBody` | `common_elements/errors/deliveries_schedules_list_error.py` |
| `Error` | `common_elements/models/error.py` |

### client.bulk_delivery.deliveries_status

- **Route**: `GET /api/v1/deliveries/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def deliveries_status(id_: UUID, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `ApiV1DeliveriesResponse2`
- **Returns (raw)**: `ApiResult[ApiV1DeliveriesResponse2, DeliveriesStatusErrorBody]`
- **Error**: `DeliveriesStatusErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiV1DeliveriesResponse2` | `common_elements/models/api_v1_deliveries_response2.py` |
| `DeliveriesStatusErrorBody` | `common_elements/errors/deliveries_status_error.py` |
| `Error` | `common_elements/models/error.py` |

