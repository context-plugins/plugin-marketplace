<!-- Generated file — do not edit; regenerated with the SDK. -->

# OtaUpdates — operations

Accessor: `client.ota_updates` · Source: `amazon_free_rtos/apis/ota_updates.py` · 4 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ota_updates.create_ota_update

- **Route**: `POST /otaUpdates`
- **Auth**: `aws_sig_v4`
- **Signature**: `def create_ota_update(body: CreateOtaUpdateRequest | CreateOtaUpdateRequestDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `OtaUpdate`
- **Returns (raw)**: `ApiResult[OtaUpdate, CreateOtaUpdateErrorBody]`
- **Error**: `CreateOtaUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `CreateOtaUpdateRequest` | `amazon_free_rtos/models/create_ota_update_request.py` |
| `CreateOtaUpdateRequestDict` | `amazon_free_rtos/models/create_ota_update_request.py` |
| `OtaUpdate` | `amazon_free_rtos/models/ota_update.py` |
| `CreateOtaUpdateErrorBody` | `amazon_free_rtos/errors/create_ota_update_error.py` |
| `ErrorResponse` | `amazon_free_rtos/models/error_response.py` |

### client.ota_updates.delete_ota_update

- **Route**: `DELETE /otaUpdates/{otaUpdateId}`
- **Auth**: `aws_sig_v4`
- **Signature**: `def delete_ota_update(ota_update_id: str, *, delete_stream: bool | None = None, force_delete_aws_job: bool | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ota_update_id`
- **Params**: `ota_update_id` — path `otaUpdateId` · `delete_stream` — query `deleteStream` · `force_delete_aws_job` — query `forceDeleteAWSJob`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteOtaUpdateErrorBody]`
- **Error**: `DeleteOtaUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteOtaUpdateErrorBody` | `amazon_free_rtos/errors/delete_ota_update_error.py` |
| `ErrorResponse` | `amazon_free_rtos/models/error_response.py` |

### client.ota_updates.get_ota_update

- **Route**: `GET /otaUpdates/{otaUpdateId}`
- **Auth**: `aws_sig_v4`
- **Signature**: `def get_ota_update(ota_update_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `ota_update_id`
- **Params**: `ota_update_id` — path `otaUpdateId`
- **Returns (parsed)**: `OtaUpdateInfo`
- **Returns (raw)**: `ApiResult[OtaUpdateInfo, GetOtaUpdateErrorBody]`
- **Error**: `GetOtaUpdateErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OtaUpdateInfo` | `amazon_free_rtos/models/ota_update_info.py` |
| `GetOtaUpdateErrorBody` | `amazon_free_rtos/errors/get_ota_update_error.py` |
| `ErrorResponse` | `amazon_free_rtos/models/error_response.py` |

### client.ota_updates.list_ota_updates

- **Route**: `GET /otaUpdates`
- **Auth**: `aws_sig_v4`
- **Signature**: `def list_ota_updates(*, max_results: int | None = None, next_token: str | None = None, ota_update_status: str | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `max_results` — query `maxResults` · `next_token` — query `nextToken` · `ota_update_status` — query `otaUpdateStatus`
- **Returns (parsed)**: `OtaUpdatesResponse`
- **Returns (raw)**: `ApiResult[OtaUpdatesResponse, ListOtaUpdatesErrorBody]`
- **Error**: `ListOtaUpdatesErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `OtaUpdatesResponse` | `amazon_free_rtos/models/ota_updates_response.py` |
| `ListOtaUpdatesErrorBody` | `amazon_free_rtos/errors/list_ota_updates_error.py` |
| `ErrorResponse` | `amazon_free_rtos/models/error_response.py` |

