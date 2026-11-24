<!-- Generated file — do not edit; regenerated with the SDK. -->

# Payments — operations

Accessor: `client.payments` · Source: `src/resources/payments.ts` · 12 operations · Request and error types: namespace `Payments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `divvy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### cancelPayment

- **Signature**: `cancelPayment(request: Payments.CancelPaymentRequest, options?: RequestOptions): ApiPromise<PaymentResponseDto, Payments.CancelPaymentError>`
- **Wire**: `POST /v3/payments/{paymentId}/cancel`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Payments.CancelPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.CancelPaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `paymentId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentResponseDto` | `paymentResponseDtoSchema` | `src/models/payment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createBulkPayment

- **Signature**: `createBulkPayment(request: Payments.CreateBulkPaymentRequest, options?: RequestOptions): ApiPromise<BulkPaymentResponseDto, Payments.CreateBulkPaymentError>`
- **Wire**: `POST /v3/payments/bulk`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `BulkPaymentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Payments.CreateBulkPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.CreateBulkPaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `BulkPaymentRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkPaymentRequestDto` | `bulkPaymentRequestDtoSchema` | `src/models/bulk-payment-request-dto.ts` |
| `BulkPaymentResponseDto` | `bulkPaymentResponseDtoSchema` | `src/models/bulk-payment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createMassPayment

- **Signature**: `createMassPayment(request: Payments.CreateMassPaymentRequest, options?: RequestOptions): ApiPromise<MassPaymentResponseDto, Payments.CreateMassPaymentError>`
- **Wire**: `POST /v3/payments/mass`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MassPaymentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Payments.CreateMassPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.CreateMassPaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `BulkPaymentRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `BulkPaymentRequestDto` | `bulkPaymentRequestDtoSchema` | `src/models/bulk-payment-request-dto.ts` |
| `MassPaymentResponseDto` | `massPaymentResponseDtoSchema` | `src/models/mass-payment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### createPayment

- **Signature**: `createPayment(request: Payments.CreatePaymentRequest, options?: RequestOptions): ApiPromise<PaymentResponseDto, Payments.CreatePaymentError>`
- **Wire**: `POST /v3/payments`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Payments.CreatePaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.CreatePaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `PaymentRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentRequestDto` | `paymentRequestDtoSchema` | `src/models/payment-request-dto.ts` |
| `PaymentResponseDto` | `paymentResponseDtoSchema` | `src/models/payment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getCheckImageData

- **Signature**: `getCheckImageData(request: Payments.GetCheckImageDataRequest, options?: RequestOptions): ApiPromise<CheckImageDataResponseDto, Payments.GetCheckImageDataError>`
- **Wire**: `GET /v3/payments/{paymentId}/check-image`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CheckImageDataResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Payments.GetCheckImageDataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.GetCheckImageDataRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `paymentId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CheckImageDataResponseDto` | `checkImageDataResponseDtoSchema` | `src/models/check-image-data-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getExchangeRate

- **Signature**: `getExchangeRate(request: Payments.GetExchangeRateRequest, options?: RequestOptions): ApiPromise<ExchangeRateResponseDto, Payments.GetExchangeRateError>`
- **Wire**: `GET /v3/payments/exchange-rate`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ExchangeRateResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Payments.GetExchangeRateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.GetExchangeRateRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExchangeRateResponseDto` | `exchangeRateResponseDtoSchema` | `src/models/exchange-rate-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getExchangeRates

- **Signature**: `getExchangeRates(request: Payments.GetExchangeRatesRequest, options?: RequestOptions): ApiPromise<ExchangeRatesResponseDto, Payments.GetExchangeRatesError>`
- **Wire**: `POST /v3/payments/exchange-rate`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field, a bare top-level JSON array
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ExchangeRatesResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Payments.GetExchangeRatesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.GetExchangeRatesRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `ExchangeRateRequestDto[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExchangeRateRequestDto` | `exchangeRateRequestDtoSchema` | `src/models/exchange-rate-request-dto.ts` |
| `ExchangeRatesResponseDto` | `exchangeRatesResponseDtoSchema` | `src/models/exchange-rates-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getMassPayment

- **Signature**: `getMassPayment(request: Payments.GetMassPaymentRequest, options?: RequestOptions): ApiPromise<MassPaymentDetailsResponseDto, Payments.GetMassPaymentError>`
- **Wire**: `GET /v3/payments/mass/{paymentBatchId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MassPaymentDetailsResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Payments.GetMassPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.GetMassPaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `paymentBatchId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MassPaymentDetailsResponseDto` | `massPaymentDetailsResponseDtoSchema` | `src/models/mass-payment-details-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### getPayment

- **Signature**: `getPayment(request: Payments.GetPaymentRequest, options?: RequestOptions): ApiPromise<PaymentResponseDto, Payments.GetPaymentError>`
- **Wire**: `GET /v3/payments/{paymentId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Payments.GetPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.GetPaymentRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `paymentId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentResponseDto` | `paymentResponseDtoSchema` | `src/models/payment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listPaymentOptions

- **Signature**: `listPaymentOptions(request: Payments.ListPaymentOptionsRequest, options?: RequestOptions): ApiPromise<PaymentOptionsResponseDto, Payments.ListPaymentOptionsError>`
- **Wire**: `GET /v3/payments/options`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentOptionsResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Payments.ListPaymentOptionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.ListPaymentOptionsRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `vendorId` | `query` | `string` | yes |
| `amount` | `query` | `number` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentOptionsResponseDto` | `paymentOptionsResponseDtoSchema` | `src/models/payment-options-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### listPayments

- **Signature**: `listPayments(request?: Payments.ListPaymentsRequest, options?: RequestOptions): ApiPromise<ListPaymentResponseDto, Payments.ListPaymentsError>`
- **Wire**: `GET /v3/payments`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPaymentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Payments.ListPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.ListPaymentsRequest` (6):

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
| `ListPaymentResponseDto` | `listPaymentResponseDtoSchema` | `src/models/list-payment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

### voidPayment

- **Signature**: `voidPayment(request: Payments.VoidPaymentRequest, options?: RequestOptions): ApiPromise<PaymentResponseDto, Payments.VoidPaymentError>`
- **Wire**: `POST /v3/payments/{paymentId}/void`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentResponseDto`
- **Error**: `DivvyError` with `kind: "api"`, an instance of `Payments.VoidPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error4XX"` [4XX wildcard] `BdcError[]` · `"error5XX"` [5XX wildcard] `BdcError[]` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Payments.VoidPaymentRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `paymentId` | `path` | `string` | yes |
| `sessionId` | `header` | `string` | no |
| `devKey` | `header` | `string` | no |
| `body` | `body` | `VoidRequestDto` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoidRequestDto` | `voidRequestDtoSchema` | `src/models/void-request-dto.ts` |
| `PaymentResponseDto` | `paymentResponseDtoSchema` | `src/models/payment-response-dto.ts` |
| `BdcError` | `bdcErrorSchema` | `src/models/bdc-error.ts` |

