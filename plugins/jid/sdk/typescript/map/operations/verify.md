<!-- Generated file — do not edit; regenerated with the SDK. -->

# Verify — operations

Accessor: `client.verify` · Source: `src/resources/verify.ts` · 4 operations · Request and error types: namespace `Verify`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `jid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getBusinessFile

- **Signature**: `getBusinessFile(request: Verify.GetBusinessFileRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Verify.GetBusinessFileError>`
- **Wire**: `GET /v1/entities/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `JidError` with `kind: "api"`, an instance of `Verify.GetBusinessFileError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [402] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Verify.GetBusinessFileRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getReceipt

- **Signature**: `getReceipt(request: Verify.GetReceiptRequest, options?: RequestOptions): ApiPromise<Receipt, Verify.GetReceiptError>`
- **Wire**: `GET /v1/receipts/{receipt_id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Receipt`
- **Error**: `JidError` with `kind: "api"`, an instance of `Verify.GetReceiptError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Verify.GetReceiptRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `receiptId` | `path` | `receipt_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Receipt` | `receiptSchema` | `src/models/receipt.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listActivities

- **Signature**: `listActivities(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `GET /v1/activities`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `JidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

### verifyBusiness

- **Signature**: `verifyBusiness(request: Verify.VerifyBusinessRequest, options?: RequestOptions): ApiPromise<VerifyResponse, Verify.VerifyBusinessError>`
- **Wire**: `GET /v1/entities/{id}/verify`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyResponse`
- **Error**: `JidError` with `kind: "api"`, an instance of `Verify.VerifyBusinessError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [402] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Verify.VerifyBusinessRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `activity` | `query` | `Activity` | no |
| `jurisdiction` | `query` | `string` | no |
| `amount` | `query` | `number` | no |
| `currency` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Activity` | `activitySchema` | `src/models/activity.ts` |
| `VerifyResponse` | `verifyResponseSchema` | `src/models/verify-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

