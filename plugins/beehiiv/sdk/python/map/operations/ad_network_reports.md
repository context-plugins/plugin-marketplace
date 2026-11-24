<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdNetworkReports — operations

Accessor: `client.ad_network_reports` · Source: `beehiiv/apis/ad_network_reports.py` · 3 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.ad_network_reports.account_summary

- **Route**: `GET /ad_network/reports/summaries`
- **Server**: `default`
- **Signature**: `def account_summary(authorization: str, *, start_date: Date | None = None, end_date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `authorization`
- **Params**: `start_date` — query · `end_date` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `AdNetworkReportSummary`
- **Returns (raw)**: `ApiResult[AdNetworkReportSummary, AccountSummaryErrorBody]`
- **Error**: `AccountSummaryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdNetworkReportSummary` | `beehiiv/models/ad_network_report_summary.py` |
| `AccountSummaryErrorBody` | `beehiiv/errors/account_summary_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.ad_network_reports.index2

- **Route**: `GET /publications/{publicationId}/ad_network/reports`
- **Server**: `default`
- **Signature**: `def index2(publication_id: str, authorization: str, *, limit: int | None = None, page: int | None = None, start_date: Date | None = None, end_date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `limit` — query · `page` — query · `start_date` — query · `end_date` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `AdNetworkReportsGetResponse`
- **Returns (raw)**: `ApiResult[AdNetworkReportsGetResponse, Index2ErrorBody]`
- **Error**: `Index2ErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdNetworkReportsGetResponse` | `beehiiv/models/ad_network_reports_get_response.py` |
| `Index2ErrorBody` | `beehiiv/errors/index2_error.py` |
| `Error` | `beehiiv/models/error.py` |

### client.ad_network_reports.summary

- **Route**: `GET /publications/{publicationId}/ad_network/reports/summaries`
- **Server**: `default`
- **Signature**: `def summary(publication_id: str, authorization: str, *, start_date: Date | None = None, end_date: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `publication_id`, `authorization`
- **Params**: `publication_id` — path `publicationId` · `start_date` — query · `end_date` — query · `authorization` — header `Authorization`
- **Returns (parsed)**: `AdNetworkReportSummary`
- **Returns (raw)**: `ApiResult[AdNetworkReportSummary, SummaryErrorBody]`
- **Error**: `SummaryErrorBody` — **Case A (typed)**
- **Error arms**: `Error` [400, 401, 403, 404, 429, 500] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AdNetworkReportSummary` | `beehiiv/models/ad_network_report_summary.py` |
| `SummaryErrorBody` | `beehiiv/errors/summary_error.py` |
| `Error` | `beehiiv/models/error.py` |

