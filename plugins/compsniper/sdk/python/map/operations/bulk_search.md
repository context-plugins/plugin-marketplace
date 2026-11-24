<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkSearch — operations

Accessor: `client.bulk_search` · Source: `comp_sniper/apis/bulk_search.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.bulk_search.bulk_search

- **Route**: `POST /v1/bulk-search`
- **Auth**: `bearer_auth`
- **Signature**: `def bulk_search(body: BulkSearchRequest | BulkSearchRequestDict, *, x_credit_source: XCreditSourceOrStr | None = None, idempotency_key: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `x_credit_source` — header `X-Credit-Source` · `idempotency_key` — header `Idempotency-Key` · `body` — JSON body
- **Returns (parsed)**: `EventStream[str]`
- **Returns (raw)**: `ApiResult[EventStream[str], BulkSearchErrorBody]`
- **Error**: `BulkSearchErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 403, 409, 429] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `BulkSearchRequest` | `comp_sniper/models/bulk_search_request.py` |
| `BulkSearchRequestDict` | `comp_sniper/models/bulk_search_request.py` |
| `XCreditSourceOrStr` | `comp_sniper/models/enums/x_credit_source.py` |
| `BulkSearchErrorBody` | `comp_sniper/errors/bulk_search_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

### client.bulk_search.download_bulk_search_csv

- **Route**: `GET /v1/bulk-search/{runId}/download.csv`
- **Auth**: `bearer_auth`
- **Signature**: `def download_bulk_search_csv(run_id: UUID, *, index: int | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `run_id`
- **Params**: `run_id` — path `runId` · `index` — query
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, DownloadBulkSearchCsvErrorBody]`
- **Error**: `DownloadBulkSearchCsvErrorBody` — **Case A (typed)**
- **Error arms**: `ApiErrorModel` [400, 401, 404, 409] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DownloadBulkSearchCsvErrorBody` | `comp_sniper/errors/download_bulk_search_csv_error.py` |
| `ApiErrorModel` | `comp_sniper/models/api_error_model.py` |

