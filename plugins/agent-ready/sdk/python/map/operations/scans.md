<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scans — operations

Accessor: `client.scans` · Source: `agent_ready/apis/scans.py` · 5 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.scans.get_scan

- **Route**: `GET /api/v1/scans/{id}`
- **Auth**: `api_key`
- **Signature**: `def get_scan(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `Scan`
- **Returns (raw)**: `ApiResult[Scan, GetScanErrorBody]`
- **Error**: `GetScanErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 404, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `Scan` | `agent_ready/models/scan.py` |
| `GetScanErrorBody` | `agent_ready/errors/get_scan_error.py` |
| `Error` | `agent_ready/models/error.py` |

### client.scans.list_scans

- **Route**: `GET /api/v1/scans`
- **Auth**: `api_key`
- **Signature**: `def list_scans(*, limit: int | None = None, cursor: RFC3339DateTime | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `limit` — query · `cursor` — query
- **Returns (parsed)**: `ScanListResponse`
- **Returns (raw)**: `ApiResult[ScanListResponse, ListScansErrorBody]`
- **Error**: `ListScansErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [401, 403, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ScanListResponse` | `agent_ready/models/scan_list_response.py` |
| `ListScansErrorBody` | `agent_ready/errors/list_scans_error.py` |
| `Error` | `agent_ready/models/error.py` |

### client.scans.start_scan

- **Route**: `POST /api/v1/scans`
- **Auth**: `api_key`
- **Signature**: `def start_scan(body: StartScanRequest | StartScanRequestDict, *, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `StartScanResponse`
- **Returns (raw)**: `ApiResult[StartScanResponse, StartScanErrorBody]`
- **Error**: `StartScanErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 409, 422, 429, 500, 503] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StartScanRequest` | `agent_ready/models/start_scan_request.py` |
| `StartScanRequestDict` | `agent_ready/models/start_scan_request.py` |
| `StartScanResponse` | `agent_ready/models/start_scan_response.py` |
| `StartScanErrorBody` | `agent_ready/errors/start_scan_error.py` |
| `Error` | `agent_ready/models/error.py` |

### client.scans.x402_scan

- **Route**: `POST /api/x402/scan`
- **Signature**: `def x402_scan(body: ApiX402ScanRequest | ApiX402ScanRequestDict, *, x_payment: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_payment` — header `X-PAYMENT` · `body` — JSON body
- **Returns (parsed)**: `PaidScanResponse`
- **Returns (raw)**: `ApiResult[PaidScanResponse, X402ScanErrorBody]`
- **Error**: `X402ScanErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 402, 502] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `ApiX402ScanRequest` | `agent_ready/models/api_x402_scan_request.py` |
| `ApiX402ScanRequestDict` | `agent_ready/models/api_x402_scan_request.py` |
| `PaidScanResponse` | `agent_ready/models/paid_scan_response.py` |
| `X402ScanErrorBody` | `agent_ready/errors/x402_scan_error.py` |
| `Error` | `agent_ready/models/error.py` |

### client.scans.x402_scan_challenge

- **Route**: `GET /api/x402/scan`
- **Signature**: `def x402_scan_challenge(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, X402ScanChallengeErrorBody]`
- **Error**: `X402ScanChallengeErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `X402ScanChallengeErrorBody` | `agent_ready/errors/x402_scan_challenge_error.py` |
| `Error` | `agent_ready/models/error.py` |

