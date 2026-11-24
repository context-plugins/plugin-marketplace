<!-- Generated file — do not edit; regenerated with the SDK. -->

# Bills — operations

Accessor: `client.bills` · Source: `src/resources/bills.ts` · 3 operations · Request and error types: namespace `Bills`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createBill

- **Signature**: `createBill(request: Bills.CreateBillRequest, options?: RequestOptions): ApiPromise<Bill, Bills.CreateBillError>`
- **Wire**: `POST /bills`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Bill`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Bills.CreateBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bills.CreateBillRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `BillsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BillsRequest` | `billsRequestSchema` | `src/models/bills-request.ts` |
| `Bill` | `billSchema` | `src/models/bill.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### deleteBill

- **Signature**: `deleteBill(request: Bills.DeleteBillRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Bills.DeleteBillError>`
- **Wire**: `DELETE /bills/{bill_id}`
- **Auth**: `basicAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Bills.DeleteBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"error5"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bills.DeleteBillRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `billId` | `path` | `bill_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateBill

- **Signature**: `updateBill(request: Bills.UpdateBillRequest, options?: RequestOptions): ApiPromise<Bill, Bills.UpdateBillError>`
- **Wire**: `PATCH /bills/{bill_id}`
- **Auth**: `basicAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Bill`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Bills.UpdateBillError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"error4"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Bills.UpdateBillRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `billId` | `path` | `bill_id` | `string` | yes |
| `body` | `body` | — | `Bill` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Bill` | `billSchema` | `src/models/bill.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

