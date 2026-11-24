<!-- Generated file — do not edit; regenerated with the SDK. -->

# AdNetworkReports — operations

Accessor: `client.adNetworkReports` · Source: `src/resources/ad-network-reports.ts` · 3 operations · Request and error types: namespace `AdNetworkReports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### accountSummary

- **Signature**: `accountSummary(request: AdNetworkReports.AccountSummaryRequest, options?: RequestOptions): ApiPromise<AdNetworkReportSummary, AdNetworkReports.AccountSummaryError>`
- **Wire**: `GET /ad_network/reports/summaries`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdNetworkReportSummary`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `AdNetworkReports.AccountSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdNetworkReports.AccountSummaryRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `startDate` | `query` | `start_date` | `string` (date) | no |
| `endDate` | `query` | `end_date` | `string` (date) | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdNetworkReportSummary` | `adNetworkReportSummarySchema` | `src/models/ad-network-report-summary.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### index2

- **Signature**: `index2(request: AdNetworkReports.Index2Request, options?: RequestOptions): ApiPromise<AdNetworkReportsGetResponse, AdNetworkReports.Index2Error>`
- **Wire**: `GET /publications/{publicationId}/ad_network/reports`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdNetworkReportsGetResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `AdNetworkReports.Index2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdNetworkReports.Index2Request` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `limit` | `query` | — | `number` | no |
| `page` | `query` | — | `number` | no |
| `startDate` | `query` | `start_date` | `string` (date) | no |
| `endDate` | `query` | `end_date` | `string` (date) | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdNetworkReportsGetResponse` | `adNetworkReportsGetResponseSchema` | `src/models/ad-network-reports-get-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### summary

- **Signature**: `summary(request: AdNetworkReports.SummaryRequest, options?: RequestOptions): ApiPromise<AdNetworkReportSummary, AdNetworkReports.SummaryError>`
- **Wire**: `GET /publications/{publicationId}/ad_network/reports/summaries`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AdNetworkReportSummary`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `AdNetworkReports.SummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AdNetworkReports.SummaryRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `startDate` | `query` | `start_date` | `string` (date) | no |
| `endDate` | `query` | `end_date` | `string` (date) | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AdNetworkReportSummary` | `adNetworkReportSummarySchema` | `src/models/ad-network-report-summary.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

