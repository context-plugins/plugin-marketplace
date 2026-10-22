<!-- Generated file — do not edit; regenerated with the SDK. -->

# Reports — operations

Accessor: `client.reports` · Source: `src/resources/reports.ts` · 2 operations · Request and error types: namespace `Reports`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `lucid-agent-oracle-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getLatestReport

- **Signature**: `getLatestReport(options?: RequestOptions): ApiPromise<ReportLatestResponse, ApiError>`
- **Wire**: `GET /v1/oracle/reports/latest`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReportLatestResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `ReportLatestResponse` | `reportLatestResponseSchema` | `src/models/report-latest-response.ts` |

### verifyOracleReport

- **Signature**: `verifyOracleReport(request: Reports.VerifyOracleReportRequest, options?: RequestOptions): ApiPromise<V1OracleReportsVerifyResponse, Reports.VerifyOracleReportError>`
- **Wire**: `POST /v1/oracle/reports/verify`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `V1OracleReportsVerifyResponse`
- **Error**: `LucidAgentOracleApiError` with `kind: "api"`, an instance of `Reports.VerifyOracleReportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"problemDetail"` [400] `ProblemDetail` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Reports.VerifyOracleReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V1OracleReportsVerifyRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `V1OracleReportsVerifyRequest` | `v1OracleReportsVerifyRequestSchema` | `src/models/v1-oracle-reports-verify-request.ts` |
| `V1OracleReportsVerifyResponse` | `v1OracleReportsVerifyResponseSchema` | `src/models/v1-oracle-reports-verify-response.ts` |
| `ProblemDetail` | `problemDetailSchema` | `src/models/problem-detail.ts` |

