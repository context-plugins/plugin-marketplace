<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `did_logic/apis/reports.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.reports.asr_report_show

- **Route**: `GET /api/v1/asr_report`
- **Auth**: `bearer_auth`
- **Signature**: `def asr_report_show(start_date: str, end_date: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `start_date`, `end_date`
- **Params**: `start_date` — query · `end_date` — query
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, AsrReportShowErrorBody]`
- **Error**: `AsrReportShowErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400] · `ApiV1AsrReportResponse1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AsrReportShowErrorBody` | `did_logic/errors/asr_report_show_error.py` |
| `Error` | `did_logic/models/error.py` |
| `ApiV1AsrReportResponse1` | `did_logic/models/unions/api_v1_asr_report_response1.py` |

### client.reports.transactions_index

- **Route**: `GET /api/v1/transactions`
- **Auth**: `bearer_auth`
- **Signature**: `def transactions_index(start_date: Date, end_date: Date, type_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `start_date`, `end_date`, `type_`
- **Params**: `start_date` — query · `end_date` — query · `type_` — query `type`
- **Returns (parsed)**: `str`
- **Returns (raw)**: `ApiResult[str, TransactionsIndexErrorBody]`
- **Error**: `TransactionsIndexErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400] · `ApiV1Transactions403Error1` [403] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TransactionsIndexErrorBody` | `did_logic/errors/transactions_index_error.py` |
| `Error` | `did_logic/models/error.py` |
| `ApiV1Transactions403Error1` | `did_logic/models/api_v1_transactions403_error1.py` |

