<!-- Generated file — do not edit; regenerated with the SDK. -->

# Scans — operations

Accessor: `client.scans` · Source: `src/resources/scans.ts` · 5 operations · Request and error types: namespace `Scans`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `agent-ready`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getScan

- **Signature**: `getScan(request: Scans.GetScanRequest, options?: RequestOptions): ApiPromise<Scan, Scans.GetScanError>`
- **Wire**: `GET /api/v1/scans/{id}`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Scan`
- **Error**: `AgentReadyError` with `kind: "api"`, an instance of `Scans.GetScanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"error6"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scans.GetScanRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Scan` | `scanSchema` | `src/models/scan.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listScans

- **Signature**: `listScans(request?: Scans.ListScansRequest, options?: RequestOptions): ApiPromise<ScanListResponse, Scans.ListScansError>`
- **Wire**: `GET /api/v1/scans`
- **Auth**: `apiKey`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScanListResponse`
- **Error**: `AgentReadyError` with `kind: "api"`, an instance of `Scans.ListScansError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [403] `Error` · `"error3"` [500] `Error` · `"error4"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scans.ListScansRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `limit` | `query` | `number` | no |
| `cursor` | `query` | `Date` (date-time) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ScanListResponse` | `scanListResponseSchema` | `src/models/scan-list-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### startScan

- **Signature**: `startScan(request: Scans.StartScanRequestParams, options?: RequestOptions): ApiPromise<StartScanResponse, Scans.StartScanError>`
- **Wire**: `POST /api/v1/scans`
- **Auth**: `apiKey`
- **Request body**: `application/json` — the `body` field
- **Returns**: `StartScanResponse`
- **Error**: `AgentReadyError` with `kind: "api"`, an instance of `Scans.StartScanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [409] `Error` · `"error5"` [422] `Error` · `"error6"` [429] `Error` · `"error7"` [500] `Error` · `"error8"` [503] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scans.StartScanRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `StartScanRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StartScanRequest` | `startScanRequestSchema` | `src/models/start-scan-request.ts` |
| `StartScanResponse` | `startScanResponseSchema` | `src/models/start-scan-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### x402Scan

- **Signature**: `x402Scan(request: Scans.X402ScanRequest, options?: RequestOptions): ApiPromise<PaidScanResponse, Scans.X402ScanError>`
- **Wire**: `POST /api/x402/scan`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaidScanResponse`
- **Error**: `AgentReadyError` with `kind: "api"`, an instance of `Scans.X402ScanError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [502] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Scans.X402ScanRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xPayment` | `header` | `X-PAYMENT` | `string` | no |
| `body` | `body` | — | `ApiX402ScanRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiX402ScanRequest` | `apiX402ScanRequestSchema` | `src/models/api-x402-scan-request.ts` |
| `PaidScanResponse` | `paidScanResponseSchema` | `src/models/paid-scan-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### x402ScanChallenge

- **Signature**: `x402ScanChallenge(options?: RequestOptions): ApiPromise<undefined, Scans.X402ScanChallengeError>`
- **Wire**: `GET /api/x402/scan`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AgentReadyError` with `kind: "api"`, an instance of `Scans.X402ScanChallengeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [402] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

