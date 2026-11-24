<!-- Generated file — do not edit; regenerated with the SDK. -->

# AggregatesAndCompliance — operations

Accessor: `client.aggregatesAndCompliance` · Source: `src/resources/aggregates-and-compliance.ts` · 2 operations · Request and error types: namespace `AggregatesAndCompliance`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `common-elements`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### complianceScan

- **Signature**: `complianceScan(request: AggregatesAndCompliance.ComplianceScanRequest, options?: RequestOptions): ApiPromise<ApiV1ComplianceScanResponse, AggregatesAndCompliance.ComplianceScanError>`
- **Wire**: `POST /api/v1/compliance/scan`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV1ComplianceScanResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `AggregatesAndCompliance.ComplianceScanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AggregatesAndCompliance.ComplianceScanRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ApiV1ComplianceScanRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ComplianceScanRequest` | `apiV1ComplianceScanRequestSchema` | `src/models/api-v1-compliance-scan-request.ts` |
| `ApiV1ComplianceScanResponse` | `apiV1ComplianceScanResponseSchema` | `src/models/api-v1-compliance-scan-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### geoStateSummary

- **Signature**: `geoStateSummary(request?: AggregatesAndCompliance.GeoStateSummaryRequest, options?: RequestOptions): ApiPromise<ApiV1GeoStateSummaryResponse, AggregatesAndCompliance.GeoStateSummaryError>`
- **Wire**: `GET /api/v1/geo/state-summary`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1GeoStateSummaryResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `AggregatesAndCompliance.GeoStateSummaryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AggregatesAndCompliance.GeoStateSummaryRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `state` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1GeoStateSummaryResponse` | `apiV1GeoStateSummaryResponseSchema` | `src/models/api-v1-geo-state-summary-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

