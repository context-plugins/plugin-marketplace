<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.usage` · Source: `paid/apis/usage.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.usage.check_usage

- **Route**: `POST /usage/check-usage`
- **Server**: `default`
- **Signature**: `def check_usage(authorization: str, *, body: UsageCheckUsageRequest | UsageCheckUsageRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `UsageCheckUsageResponse200`
- **Returns (raw)**: `ApiResult[UsageCheckUsageResponse200, CheckUsageErrorBody]`
- **Error**: `CheckUsageErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 404, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsageCheckUsageRequest` | `paid/models/usage_check_usage_request.py` |
| `UsageCheckUsageRequestDict` | `paid/models/usage_check_usage_request.py` |
| `UsageCheckUsageResponse200` | `paid/models/usage_check_usage_response200.py` |
| `CheckUsageErrorBody` | `paid/errors/check_usage_error.py` |
| `Error` | `paid/models/error.py` |

### client.usage.record_bulk

- **Route**: `POST /usage/signals/bulk`
- **Server**: `default`
- **Signature**: `def record_bulk(authorization: str, *, body: UsageSignalsBulkRequest | UsageSignalsBulkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `UsageSignalsBulkRequest` | `paid/models/usage_signals_bulk_request.py` |
| `UsageSignalsBulkRequestDict` | `paid/models/usage_signals_bulk_request.py` |

### client.usage.usage_record_bulk_v_2

- **Route**: `POST /usage/v2/signals/bulk`
- **Server**: `default`
- **Signature**: `def usage_record_bulk_v_2(authorization: str, *, body: UsageV2SignalsBulkRequest | UsageV2SignalsBulkRequestDict | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `authorization` — header `Authorization` · `body` — JSON body
- **Returns (parsed)**: `Any`
- **Returns (raw)**: `ApiResult[Any, UsageRecordBulkV2ErrorBody]`
- **Error**: `UsageRecordBulkV2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `UsageV2SignalsBulkRequest` | `paid/models/usage_v2_signals_bulk_request.py` |
| `UsageV2SignalsBulkRequestDict` | `paid/models/usage_v2_signals_bulk_request.py` |
| `UsageRecordBulkV2ErrorBody` | `paid/errors/usage_record_bulk_v2_error.py` |
| `Error` | `paid/models/error.py` |

