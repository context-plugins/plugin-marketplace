<!-- Generated file — do not edit; regenerated with the SDK. -->

# PaymentLinksApi — operations

Accessor: `client.paymentLinksApi` · Source: `src/resources/payment-links-api.ts` · 6 operations · Request and error types: namespace `PaymentLinksApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPaymentLink

- **Signature**: `createPaymentLink(request: PaymentLinksApi.CreatePaymentLinkRequest, options?: RequestOptions): ApiPromise<undefined, PaymentLinksApi.CreatePaymentLinkError>`
- **Wire**: `POST /v2/payment-links`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PaymentLinksApi.CreatePaymentLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinksApi.CreatePaymentLinkRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2PaymentLinksRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2PaymentLinksRequest` | `v2PaymentLinksRequestSchema` | `src/models/v2-payment-links-request.ts` |

### deletePaymentLink

- **Signature**: `deletePaymentLink(request: PaymentLinksApi.DeletePaymentLinkRequest, options?: RequestOptions): ApiPromise<undefined, PaymentLinksApi.DeletePaymentLinkError>`
- **Wire**: `DELETE /v2/payment-links/{paymentLinkId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PaymentLinksApi.DeletePaymentLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinksApi.DeletePaymentLinkRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentLinkId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `DeleteValuesSalesInvoice` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteValuesSalesInvoice` | `deleteValuesSalesInvoiceSchema` | `src/models/delete-values-sales-invoice.ts` |

### getPaymentLink

- **Signature**: `getPaymentLink(request: PaymentLinksApi.GetPaymentLinkRequest, options?: RequestOptions): ApiPromise<undefined, PaymentLinksApi.GetPaymentLinkError>`
- **Wire**: `GET /v2/payment-links/{paymentLinkId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PaymentLinksApi.GetPaymentLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinksApi.GetPaymentLinkRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentLinkId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### getPaymentLinkPayments

- **Signature**: `getPaymentLinkPayments(request: PaymentLinksApi.GetPaymentLinkPaymentsRequest, options?: RequestOptions): ApiPromise<undefined, PaymentLinksApi.GetPaymentLinkPaymentsError>`
- **Wire**: `GET /v2/payment-links/{paymentLinkId}/payments`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PaymentLinksApi.GetPaymentLinkPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinksApi.GetPaymentLinkPaymentsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentLinkId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

### listPaymentLinks

- **Signature**: `listPaymentLinks(request: PaymentLinksApi.ListPaymentLinksRequest, options?: RequestOptions): ApiPromise<undefined, PaymentLinksApi.ListPaymentLinksError>`
- **Wire**: `GET /v2/payment-links`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PaymentLinksApi.ListPaymentLinksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinksApi.ListPaymentLinksRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### updatePaymentLink

- **Signature**: `updatePaymentLink(request: PaymentLinksApi.UpdatePaymentLinkRequest, options?: RequestOptions): ApiPromise<undefined, PaymentLinksApi.UpdatePaymentLinkError>`
- **Wire**: `PATCH /v2/payment-links/{paymentLinkId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `PaymentLinksApi.UpdatePaymentLinkError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error422"` [422] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `PaymentLinksApi.UpdatePaymentLinkRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `paymentLinkId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `V2PaymentLinksRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2PaymentLinksRequest1` | `v2PaymentLinksRequest1Schema` | `src/models/v2-payment-links-request1.ts` |

