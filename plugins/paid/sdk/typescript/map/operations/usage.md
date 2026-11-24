<!-- Generated file — do not edit; regenerated with the SDK. -->

# Usage — operations

Accessor: `client.usage` · Source: `src/resources/usage.ts` · 3 operations · Request and error types: namespace `Usage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkUsage

- **Signature**: `checkUsage(request: Usage.CheckUsageRequest, options?: RequestOptions): ApiPromise<UsageCheckUsageResponse200, Usage.CheckUsageError>`
- **Wire**: `POST /usage/check-usage`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `UsageCheckUsageResponse200`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Usage.CheckUsageError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [404] `Error` · `"error3"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Usage.CheckUsageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UsageCheckUsageRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsageCheckUsageRequest` | `usageCheckUsageRequestSchema` | `src/models/usage-check-usage-request.ts` |
| `UsageCheckUsageResponse200` | `usageCheckUsageResponse200Schema` | `src/models/usage-check-usage-response200.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### recordBulk

- **Signature**: `recordBulk(request: Usage.RecordBulkRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `POST /usage/signals/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Usage.RecordBulkRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UsageSignalsBulkRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsageSignalsBulkRequest` | `usageSignalsBulkRequestSchema` | `src/models/usage-signals-bulk-request.ts` |

### usageRecordBulkV2

- **Signature**: `usageRecordBulkV2(request: Usage.UsageRecordBulkV2Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, Usage.UsageRecordBulkV2Error>`
- **Wire**: `POST /usage/v2/signals/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"`, an instance of `Usage.UsageRecordBulkV2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [409] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Usage.UsageRecordBulkV2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UsageV2SignalsBulkRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsageV2SignalsBulkRequest` | `usageV2SignalsBulkRequestSchema` | `src/models/usage-v2-signals-bulk-request.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

