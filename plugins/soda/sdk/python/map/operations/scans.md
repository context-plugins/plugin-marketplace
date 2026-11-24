<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scans — operations

Accessor: `client.scans` · Source: `soda/apis/scans.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.scans.delete_api_v1_scans_scan_id

- **Route**: `DELETE /api/v1/scans/{scanId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def delete_api_v1_scans_scan_id(scan_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `scan_id`
- **Params**: `scan_id` — path `scanId`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, DeleteApiV1ScansScanIdErrorBody]`
- **Error**: `DeleteApiV1ScansScanIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DeleteApiV1ScansScanIdErrorBody` | `soda/errors/delete_api_v1_scans_scan_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.scans.get_api_v1_scans_scan_id

- **Route**: `GET /api/v1/scans/{scanId}`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_scans_scan_id(scan_id: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `scan_id`
- **Params**: `scan_id` — path `scanId`
- **Returns (parsed)**: `PublicApiScanStatusResponse`
- **Returns (raw)**: `ApiResult[PublicApiScanStatusResponse, GetApiV1ScansScanIdErrorBody]`
- **Error**: `GetApiV1ScansScanIdErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiScanStatusResponse` | `soda/models/public_api_scan_status_response.py` |
| `GetApiV1ScansScanIdErrorBody` | `soda/errors/get_api_v1_scans_scan_id_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

### client.scans.get_api_v1_scans_scan_id_logs

- **Route**: `GET /api/v1/scans/{scanId}/logs`
- **Auth**: `basic_auth_api_key` OR `cookie_token`
- **Signature**: `def get_api_v1_scans_scan_id_logs(scan_id: str, *, page: int | None = None, size: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `scan_id`
- **Params**: `scan_id` — path `scanId` · `page` — query · `size` — query
- **Returns (parsed)**: `PublicApiScanLogsResponse`
- **Returns (raw)**: `ApiResult[PublicApiScanLogsResponse, GetApiV1ScansScanIdLogsErrorBody]`
- **Error**: `GetApiV1ScansScanIdLogsErrorBody` — **Case A (typed)**
- **Error arms**: `ErrorResponse` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PublicApiScanLogsResponse` | `soda/models/public_api_scan_logs_response.py` |
| `GetApiV1ScansScanIdLogsErrorBody` | `soda/errors/get_api_v1_scans_scan_id_logs_error.py` |
| `ErrorResponse` | `soda/models/error_response.py` |

