<!-- Generated file — do not edit; regenerated with the SDK. -->

# DiagnosticReportApi — operations

Accessor: `client.diagnosticReportApi` · Source: `src/resources/diagnostic-report-api.ts` · 2 operations · Request types: namespace `DiagnosticReportApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `health-gorilla`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### readDiagnosticReport

- **Signature**: `readDiagnosticReport(request: DiagnosticReportApi.ReadDiagnosticReportRequest, options?: RequestOptions): ApiPromise<DiagnosticReport, ApiError>`
- **Wire**: `GET /DiagnosticReport/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DiagnosticReport`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DiagnosticReportApi.ReadDiagnosticReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DiagnosticReport` | `diagnosticReportSchema` | `src/models/diagnostic-report.ts` |

### searchDiagnosticReports

- **Signature**: `searchDiagnosticReports(request?: DiagnosticReportApi.SearchDiagnosticReportsRequest, options?: RequestOptions): ApiPromise<Bundle, ApiError>`
- **Wire**: `GET /DiagnosticReport`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Bundle`
- **Error**: `HealthGorillaError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `DiagnosticReportApi.SearchDiagnosticReportsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `patient` | `query` | — | `string` | no |
| `category` | `query` | — | `string` | no |
| `date` | `query` | — | `string` | no |
| `count` | `query` | `_count` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Bundle` | `bundleSchema` | `src/models/bundle.ts` |

