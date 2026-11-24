<!-- Generated file — do not edit; regenerated with the SDK. -->

# Transfers — operations

Accessor: `client.transfers` · Source: `src/resources/transfers.ts` · 8 operations · Request and error types: namespace `Transfers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDirectTransfer

- **Signature**: `createDirectTransfer(request: Transfers.CreateDirectTransferRequest, options?: RequestOptions): ApiPromise<TransferRazorpayTransfersApi, Transfers.CreateDirectTransferError>`
- **Wire**: `POST /transfers`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferRazorpayTransfersApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Transfers.CreateDirectTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.CreateDirectTransferRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTransferIdempotency` | `header` | `X-Transfer-Idempotency` | `string` | no |
| `body` | `body` | — | `TransfersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransfersRequest` | `transfersRequestSchema` | `src/models/transfers-request.ts` |
| `TransferRazorpayTransfersApi` | `transferRazorpayTransfersApiSchema` | `src/models/transfer-razorpay-transfers-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createTransfersFromPayment

- **Signature**: `createTransfersFromPayment(request: Transfers.CreateTransfersFromPaymentRequest, options?: RequestOptions): ApiPromise<PaymentsTransfersResponse, Transfers.CreateTransfersFromPaymentError>`
- **Wire**: `POST /payments/{id}/transfers`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentsTransfersResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Transfers.CreateTransfersFromPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.CreateTransfersFromPaymentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `PaymentsTransfersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsTransfersRequest` | `paymentsTransfersRequestSchema` | `src/models/payments-transfers-request.ts` |
| `PaymentsTransfersResponse` | `paymentsTransfersResponseSchema` | `src/models/payments-transfers-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchTransfer

- **Signature**: `fetchTransfer(request: Transfers.FetchTransferRequest, options?: RequestOptions): ApiPromise<TransferRazorpayTransfersApi, Transfers.FetchTransferError>`
- **Wire**: `GET /transfers/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransferRazorpayTransfersApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Transfers.FetchTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.FetchTransferRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransferRazorpayTransfersApi` | `transferRazorpayTransfersApiSchema` | `src/models/transfer-razorpay-transfers-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchTransfersForPayment

- **Signature**: `fetchTransfersForPayment(request: Transfers.FetchTransfersForPaymentRequest, options?: RequestOptions): ApiPromise<PaymentsTransfersResponse, Transfers.FetchTransfersForPaymentError>`
- **Wire**: `GET /payments/{id}/transfers`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentsTransfersResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Transfers.FetchTransfersForPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.FetchTransfersForPaymentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsTransfersResponse` | `paymentsTransfersResponseSchema` | `src/models/payments-transfers-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listReversals

- **Signature**: `listReversals(request: Transfers.ListReversalsRequest, options?: RequestOptions): ApiPromise<TransfersReversalsResponse, Transfers.ListReversalsError>`
- **Wire**: `GET /transfers/{id}/reversals`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransfersReversalsResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Transfers.ListReversalsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [404] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.ListReversalsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransfersReversalsResponse` | `transfersReversalsResponseSchema` | `src/models/transfers-reversals-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### listTransfers

- **Signature**: `listTransfers(request?: Transfers.ListTransfersRequest, options?: RequestOptions): ApiPromise<TransfersResponse, Transfers.ListTransfersError>`
- **Wire**: `GET /transfers`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TransfersResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Transfers.ListTransfersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.ListTransfersRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `from` | `query` | — | `number` | no | — |
| `to` | `query` | — | `number` | no | — |
| `count` | `query` | — | `number` | no | `10` |
| `skip` | `query` | — | `number` | no | `0` |
| `recipientSettlementId` | `query` | `recipient_settlement_id` | `string` | no | — |
| `expand` | `query` | `expand[]` | `ExpandRazorpayTransfersApi` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExpandRazorpayTransfersApi` | `expandRazorpayTransfersApiSchema` | `src/models/expand-razorpay-transfers-api.ts` |
| `TransfersResponse` | `transfersResponseSchema` | `src/models/transfers-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### modifyTransferSettlementHold

- **Signature**: `modifyTransferSettlementHold(request: Transfers.ModifyTransferSettlementHoldRequest, options?: RequestOptions): ApiPromise<TransferRazorpayTransfersApi, Transfers.ModifyTransferSettlementHoldError>`
- **Wire**: `PATCH /transfers/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TransferRazorpayTransfersApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Transfers.ModifyTransferSettlementHoldError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.ModifyTransferSettlementHoldRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `TransfersRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransfersRequest1` | `transfersRequest1Schema` | `src/models/transfers-request1.ts` |
| `TransferRazorpayTransfersApi` | `transferRazorpayTransfersApiSchema` | `src/models/transfer-razorpay-transfers-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### reverseTransfer

- **Signature**: `reverseTransfer(request: Transfers.ReverseTransferRequest, options?: RequestOptions): ApiPromise<Reversal, Transfers.ReverseTransferError>`
- **Wire**: `POST /transfers/{id}/reversals`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Reversal`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Transfers.ReverseTransferError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Transfers.ReverseTransferRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `TransfersReversalsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TransfersReversalsRequest` | `transfersReversalsRequestSchema` | `src/models/transfers-reversals-request.ts` |
| `Reversal` | `reversalSchema` | `src/models/reversal.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

