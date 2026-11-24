<!-- Generated file — do not edit; regenerated with the SDK. -->

# BulkExport — operations

Accessor: `client.bulkExport` · Source: `src/resources/bulk-export.ts` · 2 operations · Request and error types: namespace `BulkExport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `common-elements`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### export

- **Signature**: `export(request: BulkExport.ExportRequest, options?: RequestOptions): ApiPromise<ApiV1ExportResponse, BulkExport.ExportError>`
- **Wire**: `GET /api/v1/export/{resource}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ExportResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkExport.ExportError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkExport.ExportRequest` (18):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `resource` | `path` | — | `string` | yes |
| `format` | `query` | — | `string` | no |
| `columns` | `query` | — | `string` | no |
| `state` | `query` | — | `string` | no |
| `q` | `query` | — | `string` | no |
| `county` | `query` | — | `string` | no |
| `subtype` | `query` | — | `string` | no |
| `category` | `query` | — | `string` | no |
| `unitMinUnitMax` | `query` | `unit_min / unit_max` | `number` | no |
| `yearMinYearMax` | `query` | `year_min / year_max` | `number` | no |
| `isClaimed` | `query` | `is_claimed` | `boolean` | no |
| `mgmt` | `query` | — | `string` | no |
| `chapterTopic` | `query` | `chapter / topic` | `string` | no |
| `sirsOnFileElevatorDelinquent` | `query` | `sirs_on_file / elevator_delinquent` | `boolean` | no |
| `milestoneStatusPoolLastResult` | `query` | `milestone_status / pool_last_result` | `string` | no |
| `hasSirsHasElevatorCert` | `query` | `has_sirs / has_elevator_cert` | `boolean` | no |
| `fhaStatus` | `query` | `fha_status` | `string` | no |
| `minRiskMaxRisk` | `query` | `min_risk / max_risk` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ExportResponse` | `apiV1ExportResponseSchema` | `src/models/api-v1-export-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### exportChanges

- **Signature**: `exportChanges(request?: BulkExport.ExportChangesRequest, options?: RequestOptions): ApiPromise<ApiV1ExportChangesResponse, BulkExport.ExportChangesError>`
- **Wire**: `GET /api/v1/export/changes`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ExportChangesResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `BulkExport.ExportChangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BulkExport.ExportChangesRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `format` | `query` | — | `string` | no |
| `columns` | `query` | — | `string` | no |
| `kind` | `query` | — | `string` | no |
| `state` | `query` | — | `string` | no |
| `county` | `query` | — | `string` | no |
| `subtype` | `query` | — | `string` | no |
| `since` | `query` | — | `string` | no |
| `until` | `query` | — | `string` | no |
| `minMagnitude` | `query` | `min_magnitude` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ExportChangesResponse` | `apiV1ExportChangesResponseSchema` | `src/models/api-v1-export-changes-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

