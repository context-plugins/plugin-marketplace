<!-- Generated file — do not edit; regenerated with the SDK. -->

# ReceivablePayments — operations

Accessor: `client.receivablePayments` · Source: `src/resources/receivable-payments.ts` · 3 operations · Request and error types: namespace `ReceivablePayments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `bill`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### chargeCustomer

- **Signature**: `chargeCustomer(request: ReceivablePayments.ChargeCustomerRequest, options?: RequestOptions): ApiPromise<ReceivablePaymentResponseDto, ReceivablePayments.ChargeCustomerError>`
- **Wire**: `POST /v3/receivable-payments`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ReceivablePaymentResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ReceivablePayments.ChargeCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReceivablePayments.ChargeCustomerRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `ChargeCustomerRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChargeCustomerRequestDto` | `chargeCustomerRequestDtoSchema` | `src/models/charge-customer-request-dto.ts` |
| `ReceivablePaymentResponseDto` | `receivablePaymentResponseDtoSchema` | `src/models/receivable-payment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getReceivablePayment

- **Signature**: `getReceivablePayment(request: ReceivablePayments.GetReceivablePaymentRequest, options?: RequestOptions): ApiPromise<ReceivablePaymentResponseDto, ReceivablePayments.GetReceivablePaymentError>`
- **Wire**: `GET /v3/receivable-payments/{receivedPaymentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ReceivablePaymentResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ReceivablePayments.GetReceivablePaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReceivablePayments.GetReceivablePaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `receivedPaymentId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ReceivablePaymentResponseDto` | `receivablePaymentResponseDtoSchema` | `src/models/receivable-payment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listReceivablePayments

- **Signature**: `listReceivablePayments(request?: ReceivablePayments.ListReceivablePaymentsRequest, options?: RequestOptions): ApiPromise<ListResponseDtoReceivablePaymentResponseDto, ReceivablePayments.ListReceivablePaymentsError>`
- **Wire**: `GET /v3/receivable-payments`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListResponseDtoReceivablePaymentResponseDto`
- **Error**: `BillError` with `kind: "api"`, an instance of `ReceivablePayments.ListReceivablePaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ReceivablePayments.ListReceivablePaymentsRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `max` | `query` | `number` | no |
| `sort` | `query` | `string` | no |
| `filters` | `query` | `string` | no |
| `page` | `query` | `string` | no |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListResponseDtoReceivablePaymentResponseDto` | `listResponseDtoReceivablePaymentResponseDtoSchema` | `src/models/list-response-dto-receivable-payment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

