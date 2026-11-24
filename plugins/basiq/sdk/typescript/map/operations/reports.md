<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `src/resources/reports.ts` · 7 operations · Request and error types: namespace `Reports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `basiq`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createreport

- **Signature**: `createreport(request: Reports.CreatereportRequest, options?: RequestOptions): ApiPromise<ReportsResponse, Reports.CreatereportError>`
- **Wire**: `POST /reports`
- **Auth**: `servicesToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReportsResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Reports.CreatereportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"reportsResponse12"` [400] `ReportsResponse12` · `"reports403Error1"` [403] `Reports403Error1` · `"reports404Error1"` [404] `Reports404Error1` · `"reports500Error1"` [500] `Reports500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.CreatereportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ReportsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportsRequest` | `reportsRequestSchema` | `src/models/reports-request.ts` |
| `ReportsResponse` | `reportsResponseSchema` | `src/models/reports-response.ts` |
| `ReportsResponse12` | `reportsResponse12Schema` | `src/models/unions/reports-response12.ts` |
| `Reports403Error1` | `reports403Error1Schema` | `src/models/reports403-error1.ts` |
| `Reports404Error1` | `reports404Error1Schema` | `src/models/reports404-error1.ts` |
| `Reports500Error1` | `reports500Error1Schema` | `src/models/reports500-error1.ts` |

### deleteReport

- **Signature**: `deleteReport(request: Reports.DeleteReportRequest, options?: RequestOptions): ApiPromise<undefined, Reports.DeleteReportError>`
- **Wire**: `DELETE /reports/{id}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Reports.DeleteReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"reports400Error21"` [400] `Reports400Error21` · `"reports403Error31"` [403] `Reports403Error31` · `"reports404Error31"` [404] `Reports404Error31` · `"reports500Error31"` [500] `Reports500Error31` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.DeleteReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Reports400Error21` | `reports400Error21Schema` | `src/models/reports400-error21.ts` |
| `Reports403Error31` | `reports403Error31Schema` | `src/models/reports403-error31.ts` |
| `Reports404Error31` | `reports404Error31Schema` | `src/models/reports404-error31.ts` |
| `Reports500Error31` | `reports500Error31Schema` | `src/models/reports500-error31.ts` |

### listReportTypes

- **Signature**: `listReportTypes(options?: RequestOptions): ApiPromise<ReportsTypesResponse, Reports.ListReportTypesError>`
- **Wire**: `GET /reports/types`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportsTypesResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Reports.ListReportTypesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"reportsTypes400Error1"` [400] `ReportsTypes400Error1` · `"reportsTypes403Error1"` [403] `ReportsTypes403Error1` · `"reportsTypes404Error1"` [404] `ReportsTypes404Error1` · `"reportsTypes500Error1"` [500] `ReportsTypes500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportsTypesResponse` | `reportsTypesResponseSchema` | `src/models/reports-types-response.ts` |
| `ReportsTypes400Error1` | `reportsTypes400Error1Schema` | `src/models/reports-types400-error1.ts` |
| `ReportsTypes403Error1` | `reportsTypes403Error1Schema` | `src/models/reports-types403-error1.ts` |
| `ReportsTypes404Error1` | `reportsTypes404Error1Schema` | `src/models/reports-types404-error1.ts` |
| `ReportsTypes500Error1` | `reportsTypes500Error1Schema` | `src/models/reports-types500-error1.ts` |

### listallreports

- **Signature**: `listallreports(options?: RequestOptions): ApiPromise<ReportsResponse2, Reports.ListallreportsError>`
- **Wire**: `GET /reports`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportsResponse2`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Reports.ListallreportsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"reports400Error1"` [400] `Reports400Error1` · `"reports403Error21"` [403] `Reports403Error21` · `"reports404Error21"` [404] `Reports404Error21` · `"reports500Error21"` [500] `Reports500Error21` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportsResponse2` | `reportsResponse2Schema` | `src/models/reports-response2.ts` |
| `Reports400Error1` | `reports400Error1Schema` | `src/models/reports400-error1.ts` |
| `Reports403Error21` | `reports403Error21Schema` | `src/models/reports403-error21.ts` |
| `Reports404Error21` | `reports404Error21Schema` | `src/models/reports404-error21.ts` |
| `Reports500Error21` | `reports500Error21Schema` | `src/models/reports500-error21.ts` |

### retrieveReport

- **Signature**: `retrieveReport(request: Reports.RetrieveReportRequest, options?: RequestOptions): ApiPromise<BinaryContent, Reports.RetrieveReportError>`
- **Wire**: `GET /reports/{id}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BinaryContent` — an unread `stream` the caller owns: buffer it with `new Response(…)`, read it with a reader or `for await`, or release it with `stream.cancel()`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Reports.RetrieveReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"reports400Error21"` [400] `Reports400Error21` · `"reports403Error31"` [403] `Reports403Error31` · `"reports404Error31"` [404] `Reports404Error31` · `"reports500Error31"` [500] `Reports500Error31` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.RetrieveReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Reports400Error21` | `reports400Error21Schema` | `src/models/reports400-error21.ts` |
| `Reports403Error31` | `reports403Error31Schema` | `src/models/reports403-error31.ts` |
| `Reports404Error31` | `reports404Error31Schema` | `src/models/reports404-error31.ts` |
| `Reports500Error31` | `reports500Error31Schema` | `src/models/reports500-error31.ts` |

### retrieveReportTransactions

- **Signature**: `retrieveReportTransactions(request: Reports.RetrieveReportTransactionsRequest, options?: RequestOptions): ApiPromise<TransactionsContainerObject, Reports.RetrieveReportTransactionsError>`
- **Wire**: `GET /reports/{reportId}/transactions`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransactionsContainerObject`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Reports.RetrieveReportTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"reportsTransactions400Error1"` [400] `ReportsTransactions400Error1` · `"reportsTransactions403Error1"` [403] `ReportsTransactions403Error1` · `"reportsTransactions404Error1"` [404] `ReportsTransactions404Error1` · `"reportsTransactions500Error1"` [500] `ReportsTransactions500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.RetrieveReportTransactionsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reportId` | `path` | `string` | yes |
| `filter` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransactionsContainerObject` | `transactionsContainerObjectSchema` | `src/models/transactions-container-object.ts` |
| `ReportsTransactions400Error1` | `reportsTransactions400Error1Schema` | `src/models/reports-transactions400-error1.ts` |
| `ReportsTransactions403Error1` | `reportsTransactions403Error1Schema` | `src/models/reports-transactions403-error1.ts` |
| `ReportsTransactions404Error1` | `reportsTransactions404Error1Schema` | `src/models/reports-transactions404-error1.ts` |
| `ReportsTransactions500Error1` | `reportsTransactions500Error1Schema` | `src/models/reports-transactions500-error1.ts` |

### retrieveSpecificReportType

- **Signature**: `retrieveSpecificReportType(request: Reports.RetrieveSpecificReportTypeRequest, options?: RequestOptions): ApiPromise<ReportsTypesResponse, Reports.RetrieveSpecificReportTypeError>`
- **Wire**: `GET /reports/types/{reportTypeId}`
- **Auth**: `servicesToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportsTypesResponse`
- **Error**: `BasiqError` with `kind: "api"`, an instance of `Reports.RetrieveSpecificReportTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"reportsTypes400Error1"` [400] `ReportsTypes400Error1` · `"reportsTypes403Error1"` [403] `ReportsTypes403Error1` · `"reportsTypes404Error1"` [404] `ReportsTypes404Error1` · `"reportsTypes500Error1"` [500] `ReportsTypes500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.RetrieveSpecificReportTypeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reportTypeId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportsTypesResponse` | `reportsTypesResponseSchema` | `src/models/reports-types-response.ts` |
| `ReportsTypes400Error1` | `reportsTypes400Error1Schema` | `src/models/reports-types400-error1.ts` |
| `ReportsTypes403Error1` | `reportsTypes403Error1Schema` | `src/models/reports-types403-error1.ts` |
| `ReportsTypes404Error1` | `reportsTypes404Error1Schema` | `src/models/reports-types404-error1.ts` |
| `ReportsTypes500Error1` | `reportsTypes500Error1Schema` | `src/models/reports-types500-error1.ts` |

