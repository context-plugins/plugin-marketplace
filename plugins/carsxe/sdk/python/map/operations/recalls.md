<!-- Generated file — do not edit; regenerated with the SDK. -->

# Recalls — operations

Accessor: `client.recalls` · Source: `cars_xe/apis/recalls.py` · 6 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.recalls.download_recalls_batch_results

- **Route**: `GET /v1/recalls-batch/download`
- **Auth**: `api_key_query` OR `recalls_batch_token`
- **Signature**: `def download_recalls_batch_results(batch_id: str, *, x_cars_xe_batch_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `batch_id`
- **Params**: `batch_id` — query `batchId` · `x_cars_xe_batch_token` — header `X-CarsXE-Batch-Token`
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DownloadRecallsBatchResultsErrorBody]`
- **Error**: `DownloadRecallsBatchResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401] · `RawError` [400, 404, 409, anything unmapped]

| Type | Source |
| --- | --- |
| `DownloadRecallsBatchResultsErrorBody` | `cars_xe/errors/download_recalls_batch_results_error.py` |
| `Error` | `cars_xe/models/error.py` |

### client.recalls.get_recalls_batch_results

- **Route**: `GET /v1/recalls-batch/results`
- **Auth**: `api_key_query` OR `recalls_batch_token`
- **Signature**: `def get_recalls_batch_results(batch_id: str, *, x_cars_xe_batch_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `batch_id`
- **Params**: `batch_id` — query `batchId` · `x_cars_xe_batch_token` — header `X-CarsXE-Batch-Token`
- **Returns (parsed)**: `V1RecallsBatchResultsResponse`
- **Returns (raw)**: `ApiResult[V1RecallsBatchResultsResponse, GetRecallsBatchResultsErrorBody]`
- **Error**: `GetRecallsBatchResultsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1RecallsBatchResultsResponse` | `cars_xe/models/v1_recalls_batch_results_response.py` |
| `GetRecallsBatchResultsErrorBody` | `cars_xe/errors/get_recalls_batch_results_error.py` |
| `Error` | `cars_xe/models/error.py` |

### client.recalls.get_recalls_batch_status

- **Route**: `GET /v1/recalls-batch/status`
- **Auth**: `api_key_query` OR `recalls_batch_token`
- **Signature**: `def get_recalls_batch_status(batch_id: str, *, x_cars_xe_batch_token: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `batch_id`
- **Params**: `batch_id` — query `batchId` · `x_cars_xe_batch_token` — header `X-CarsXE-Batch-Token`
- **Returns (parsed)**: `V1RecallsBatchStatusResponse`
- **Returns (raw)**: `ApiResult[V1RecallsBatchStatusResponse, GetRecallsBatchStatusErrorBody]`
- **Error**: `GetRecallsBatchStatusErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1RecallsBatchStatusResponse` | `cars_xe/models/v1_recalls_batch_status_response.py` |
| `GetRecallsBatchStatusErrorBody` | `cars_xe/errors/get_recalls_batch_status_error.py` |
| `Error` | `cars_xe/models/error.py` |

### client.recalls.get_recalls_by_ymm

- **Route**: `GET /v1/recalls-ymm`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def get_recalls_by_ymm(year: str, make: str, model: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `year`, `make`, `model`
- **Params**: `year` — query · `make` — query · `model` — query
- **Returns (parsed)**: `V1RecallsYmmResponse`
- **Returns (raw)**: `ApiResult[V1RecallsYmmResponse, GetRecallsByYmmErrorBody]`
- **Error**: `GetRecallsByYmmErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 500] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1RecallsYmmResponse` | `cars_xe/models/v1_recalls_ymm_response.py` |
| `GetRecallsByYmmErrorBody` | `cars_xe/errors/get_recalls_by_ymm_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

### client.recalls.get_vehicle_recalls

- **Route**: `GET /v1/recalls`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def get_vehicle_recalls(vin: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `vin`
- **Params**: `vin` — query
- **Returns (parsed)**: `V1RecallsResponse`
- **Returns (raw)**: `ApiResult[V1RecallsResponse, GetVehicleRecallsErrorBody]`
- **Error**: `GetVehicleRecallsErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 404, 500] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1RecallsResponse` | `cars_xe/models/v1_recalls_response.py` |
| `GetVehicleRecallsErrorBody` | `cars_xe/errors/get_vehicle_recalls_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

### client.recalls.submit_recalls_batch

- **Route**: `POST /v1/recalls-batch/submit`
- **Auth**: `api_key_query` OR `x402_payment`
- **Signature**: `def submit_recalls_batch(body: V1RecallsBatchSubmitRequest | V1RecallsBatchSubmitRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `V1RecallsBatchSubmitResponse`
- **Returns (raw)**: `ApiResult[V1RecallsBatchSubmitResponse, SubmitRecallsBatchErrorBody]`
- **Error**: `SubmitRecallsBatchErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 405, 500, 502] · `UsageLimitError` [429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `V1RecallsBatchSubmitRequest` | `cars_xe/models/v1_recalls_batch_submit_request.py` |
| `V1RecallsBatchSubmitRequestDict` | `cars_xe/models/v1_recalls_batch_submit_request.py` |
| `V1RecallsBatchSubmitResponse` | `cars_xe/models/v1_recalls_batch_submit_response.py` |
| `SubmitRecallsBatchErrorBody` | `cars_xe/errors/submit_recalls_batch_error.py` |
| `Error` | `cars_xe/models/error.py` |
| `UsageLimitError` | `cars_xe/models/usage_limit_error.py` |

