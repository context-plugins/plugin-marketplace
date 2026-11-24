<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiagnosticReportApi — operations

Accessor: `client.diagnostic_report_api` · Source: `health_gorilla/apis/diagnostic_report_api.py` · 2 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.diagnostic_report_api.read_diagnostic_report

- **Route**: `GET /DiagnosticReport/{id}`
- **Auth**: `bearer_auth`
- **Signature**: `def read_diagnostic_report(id_: str, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id`
- **Returns (parsed)**: `DiagnosticReport`
- **Returns (raw)**: `ApiResult[DiagnosticReport, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `DiagnosticReport` | `health_gorilla/models/diagnostic_report.py` |

### client.diagnostic_report_api.search_diagnostic_reports

- **Route**: `GET /DiagnosticReport`
- **Auth**: `bearer_auth`
- **Signature**: `def search_diagnostic_reports(*, patient: str | None = None, category: str | None = None, date: str | None = None, count: int | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `patient` — query · `category` — query · `date` — query · `count` — query `_count`
- **Returns (parsed)**: `Bundle`
- **Returns (raw)**: `ApiResult[Bundle, RawError]`
- **Error**: `RawError` — **Case B**

| Type | Source |
| --- | --- |
| `Bundle` | `health_gorilla/models/bundle.py` |

