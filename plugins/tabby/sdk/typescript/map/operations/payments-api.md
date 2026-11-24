<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentsApi — operations

Accessor: `client.paymentsApi` · Source: `src/resources/payments-api.ts` · 6 operations · Request and error types: namespace `PaymentsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `tabby`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### closePayment

- **Signature**: `closePayment(request: PaymentsApi.ClosePaymentRequest, options?: RequestOptions): ApiPromise<PaymentClose, PaymentsApi.ClosePaymentError>`
- **Wire**: `POST /api/v2/payments/{id}/close`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentClose`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `PaymentsApi.ClosePaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400PaymentsClose"` [400] `Error400PaymentsClose` · `"error403"` [401] `Error403` · `"error4032"` [403] `Error403` · `"error404NoSuchPayment"` [404] `Error404NoSuchPayment` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApi.ClosePaymentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentClose` | `paymentCloseSchema` | `src/models/payment-close.ts` |
| `Error400PaymentsClose` | `error400PaymentsCloseSchema` | `src/models/error400-payments-close.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404NoSuchPayment` | `error404NoSuchPaymentSchema` | `src/models/error404-no-such-payment.ts` |

### getPayment

- **Signature**: `getPayment(request: PaymentsApi.GetPaymentRequest, options?: RequestOptions): ApiPromise<PaymentResponse, PaymentsApi.GetPaymentError>`
- **Wire**: `GET /api/v2/payments/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentResponse`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `PaymentsApi.GetPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400PaymentsGet"` [400] `Error400PaymentsGet` · `"error401MissingBearer"` [401] `Error401MissingBearer` · `"error404NoSuchPayment"` [404] `Error404NoSuchPayment` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApi.GetPaymentRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentResponse` | `paymentResponseSchema` | `src/models/payment-response.ts` |
| `Error400PaymentsGet` | `error400PaymentsGetSchema` | `src/models/error400-payments-get.ts` |
| `Error401MissingBearer` | `error401MissingBearerSchema` | `src/models/error401-missing-bearer.ts` |
| `Error404NoSuchPayment` | `error404NoSuchPaymentSchema` | `src/models/error404-no-such-payment.ts` |

### getPayments

- **Signature**: `getPayments(request?: PaymentsApi.GetPaymentsRequest, options?: RequestOptions): ApiPromise<Payments, PaymentsApi.GetPaymentsError>`
- **Wire**: `GET /api/v2/payments`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Payments`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `PaymentsApi.GetPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400Failed"` [400] `Error400Failed` · `"error403"` [401] `Error403` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApi.GetPaymentsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `createdAtGte` | `query` | `created_at__gte` | `string` (date) | no |
| `createdAtLte` | `query` | `created_at__lte` | `Date` (date-time) | no |
| `limit` | `query` | — | `number` | no |
| `status` | `query` | — | `Status1TabbyApiReferencePaymentsApi` | no |
| `offset` | `query` | — | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status1TabbyApiReferencePaymentsApi` | `status1TabbyApiReferencePaymentsApiSchema` | `src/models/status1-tabby-api-reference-payments-api.ts` |
| `Payments` | `paymentsSchema` | `src/models/payments.ts` |
| `Error400Failed` | `error400FailedSchema` | `src/models/error400-failed.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |

### postPaymentCapture

- **Signature**: `postPaymentCapture(request: PaymentsApi.PostPaymentCaptureRequest, options?: RequestOptions): ApiPromise<PaymentCaptureResponse, PaymentsApi.PostPaymentCaptureError>`
- **Wire**: `POST /api/v2/payments/{id}/captures`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentCaptureResponse`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `PaymentsApi.PostPaymentCaptureError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400PaymentsCapture"` [400] `Error400PaymentsCapture` · `"error403"` [401] `Error403` · `"error4032"` [403] `Error403` · `"error404NoSuchPayment"` [404] `Error404NoSuchPayment` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApi.PostPaymentCaptureRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `CaptureRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CaptureRequest` | `captureRequestSchema` | `src/models/capture-request.ts` |
| `PaymentCaptureResponse` | `paymentCaptureResponseSchema` | `src/models/payment-capture-response.ts` |
| `Error400PaymentsCapture` | `error400PaymentsCaptureSchema` | `src/models/error400-payments-capture.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404NoSuchPayment` | `error404NoSuchPaymentSchema` | `src/models/error404-no-such-payment.ts` |

### postPaymentRefund

- **Signature**: `postPaymentRefund(request: PaymentsApi.PostPaymentRefundRequest, options?: RequestOptions): ApiPromise<PaymentRefundResponse, PaymentsApi.PostPaymentRefundError>`
- **Wire**: `POST /api/v2/payments/{id}/refunds`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentRefundResponse`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `PaymentsApi.PostPaymentRefundError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400PaymentsRefund"` [400] `Error400PaymentsRefund` · `"error403"` [401] `Error403` · `"error4032"` [403] `Error403` · `"error404NoSuchPayment"` [404] `Error404NoSuchPayment` · `"error400"` [409] `Error400` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApi.PostPaymentRefundRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `RefundRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RefundRequest` | `refundRequestSchema` | `src/models/refund-request.ts` |
| `PaymentRefundResponse` | `paymentRefundResponseSchema` | `src/models/payment-refund-response.ts` |
| `Error400PaymentsRefund` | `error400PaymentsRefundSchema` | `src/models/error400-payments-refund.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404NoSuchPayment` | `error404NoSuchPaymentSchema` | `src/models/error404-no-such-payment.ts` |
| `Error400` | `error400Schema` | `src/models/error400.ts` |

### putPayment

- **Signature**: `putPayment(request: PaymentsApi.PutPaymentRequest, options?: RequestOptions): ApiPromise<PaymentUpdate, PaymentsApi.PutPaymentError>`
- **Wire**: `PUT /api/v2/payments/{id}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentUpdate`
- **Error**: `TabbyError` with `kind: "api"`, an instance of `PaymentsApi.PutPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400PaymentsGet"` [400] `Error400PaymentsGet` · `"error403"` [401] `Error403` · `"error4032"` [403] `Error403` · `"error404NoSuchPayment"` [404] `Error404NoSuchPayment` · `"error500"` [500] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentsApi.PutPaymentRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `ApiV2PaymentsRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2PaymentsRequest` | `apiV2PaymentsRequestSchema` | `src/models/api-v2-payments-request.ts` |
| `PaymentUpdate` | `paymentUpdateSchema` | `src/models/payment-update.ts` |
| `Error400PaymentsGet` | `error400PaymentsGetSchema` | `src/models/error400-payments-get.ts` |
| `Error403` | `error403Schema` | `src/models/error403.ts` |
| `Error404NoSuchPayment` | `error404NoSuchPaymentSchema` | `src/models/error404-no-such-payment.ts` |

