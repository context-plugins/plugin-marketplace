<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scans — operations

Accessor: `client.scans` · Source: `src/resources/scans.ts` · 3 operations · Request and error types: namespace `Scans`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `soda`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteApiV1ScansScanId

- **Signature**: `deleteApiV1ScansScanId(request: Scans.DeleteApiV1ScansScanIdRequest, options?: RequestOptions): ApiPromise<undefined, Scans.DeleteApiV1ScansScanIdError>`
- **Wire**: `DELETE /api/v1/scans/{scanId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `SodaError` with `kind: "api"`, an instance of `Scans.DeleteApiV1ScansScanIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scans.DeleteApiV1ScansScanIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `scanId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1ScansScanId

- **Signature**: `getApiV1ScansScanId(request: Scans.GetApiV1ScansScanIdRequest, options?: RequestOptions): ApiPromise<PublicApiScanStatusResponse, Scans.GetApiV1ScansScanIdError>`
- **Wire**: `GET /api/v1/scans/{scanId}`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiScanStatusResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Scans.GetApiV1ScansScanIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scans.GetApiV1ScansScanIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `scanId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiScanStatusResponse` | `publicApiScanStatusResponseSchema` | `src/models/public-api-scan-status-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getApiV1ScansScanIdLogs

- **Signature**: `getApiV1ScansScanIdLogs(request: Scans.GetApiV1ScansScanIdLogsRequest, options?: RequestOptions): ApiPromise<PublicApiScanLogsResponse, Scans.GetApiV1ScansScanIdLogsError>`
- **Wire**: `GET /api/v1/scans/{scanId}/logs`
- **Auth**: any of `basicAuthApiKey`, `cookieToken` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PublicApiScanLogsResponse`
- **Error**: `SodaError` with `kind: "api"`, an instance of `Scans.GetApiV1ScansScanIdLogsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [403] `ErrorResponse` · `"errorResponse4"` [404] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"errorResponse6"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scans.GetApiV1ScansScanIdLogsRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `scanId` | `path` | `string` | yes |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicApiScanLogsResponse` | `publicApiScanLogsResponseSchema` | `src/models/public-api-scan-logs-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

