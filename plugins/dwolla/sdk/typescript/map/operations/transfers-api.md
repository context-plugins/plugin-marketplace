<!-- Generated file — do not edit; regenerated with the SDK. -->

# TransfersApi — operations

Accessor: `client.transfersApi` · Source: `src/resources/transfers-api.ts` · 6 operations · Request and error types: namespace `TransfersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelTransfer

- **Signature**: `cancelTransfer(request: TransfersApi.CancelTransferRequest, options?: RequestOptions): ApiPromise<undefined, TransfersApi.CancelTransferError>`
- **Wire**: `POST /transfers/{id}`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `TransfersApi.CancelTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransfersApi.CancelTransferRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `TransfersRequest1` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `TransfersRequest1` | `transfersRequest1Schema` | `src/models/transfers-request1.ts` |

### getTransfer

- **Signature**: `getTransfer(request: TransfersApi.GetTransferRequest, options?: RequestOptions): ApiPromise<undefined, TransfersApi.GetTransferError>`
- **Wire**: `GET /transfers/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `TransfersApi.GetTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransfersApi.GetTransferRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### getTransferFailureReason

- **Signature**: `getTransferFailureReason(request: TransfersApi.GetTransferFailureReasonRequest, options?: RequestOptions): ApiPromise<undefined, TransfersApi.GetTransferFailureReasonError>`
- **Wire**: `GET /transfers/{id}/failure`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `TransfersApi.GetTransferFailureReasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransfersApi.GetTransferFailureReasonRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### initiateTransfer

- **Signature**: `initiateTransfer(request: TransfersApi.InitiateTransferRequest, options?: RequestOptions): ApiPromise<undefined, TransfersApi.InitiateTransferError>`
- **Wire**: `POST /transfers`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `TransfersApi.InitiateTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransfersApi.InitiateTransferRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no | — |
| `body` | `body` | — | `TransfersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `TransfersRequest` | `transfersRequestSchema` | `src/models/transfers-request.ts` |

### listCustomerTransfers

- **Signature**: `listCustomerTransfers(request: TransfersApi.ListCustomerTransfersRequest, options?: RequestOptions): ApiPromise<undefined, TransfersApi.ListCustomerTransfersError>`
- **Wire**: `GET /customers/{id}/transfers`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `TransfersApi.ListCustomerTransfersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransfersApi.ListCustomerTransfersRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `search` | `query` | — | `string` | no | — |
| `startAmount` | `query` | — | `string` | no | — |
| `endAmount` | `query` | — | `string` | no | — |
| `startDate` | `query` | — | `string` | no | — |
| `endDate` | `query` | — | `string` | no | — |
| `status` | `query` | — | `string` | no | — |
| `correlationId` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `string` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listTransferFees

- **Signature**: `listTransferFees(request: TransfersApi.ListTransferFeesRequest, options?: RequestOptions): ApiPromise<undefined, TransfersApi.ListTransferFeesError>`
- **Wire**: `GET /transfers/{id}/fees`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `TransfersApi.ListTransferFeesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TransfersApi.ListTransferFeesRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

