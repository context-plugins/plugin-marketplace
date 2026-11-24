<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `src/resources/reports.ts` · 2 operations · Request and error types: namespace `Reports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `didlogic`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### asrReportShow

- **Signature**: `asrReportShow(request: Reports.AsrReportShowRequest, options?: RequestOptions): ApiPromise<string, Reports.AsrReportShowError>`
- **Wire**: `GET /api/v1/asr_report`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Reports.AsrReportShowError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"apiV1AsrReportResponse1"` [403] `ApiV1AsrReportResponse1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.AsrReportShowRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `startDate` | `query` | `start_date` | `string` | yes |
| `endDate` | `query` | `end_date` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `ApiV1AsrReportResponse1` | `apiV1AsrReportResponse1Schema` | `src/models/unions/api-v1-asr-report-response1.ts` |

### transactionsIndex

- **Signature**: `transactionsIndex(request: Reports.TransactionsIndexRequest, options?: RequestOptions): ApiPromise<string, Reports.TransactionsIndexError>`
- **Wire**: `GET /api/v1/transactions`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — `text/plain;charset=utf-8`, decoded by the plain-text scalar decoder, not by a model
- **Error**: `DidLogicError` with `kind: "api"`, an instance of `Reports.TransactionsIndexError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"apiV1Transactions403Error1"` [403] `ApiV1Transactions403Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.TransactionsIndexRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `startDate` | `query` | `start_date` | `string` (date) | yes |
| `endDate` | `query` | `end_date` | `string` (date) | yes |
| `type` | `query` | — | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `ApiV1Transactions403Error1` | `apiV1Transactions403Error1Schema` | `src/models/api-v1-transactions403-error1.ts` |

