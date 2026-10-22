<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomersApi — operations

Accessor: `client.customersApi` · Source: `src/resources/customers-api.ts` · 7 operations · Request and error types: namespace `CustomersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `mollie-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomer

- **Signature**: `createCustomer(request: CustomersApi.CreateCustomerRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.CreateCustomerError>`
- **Wire**: `POST /v2/customers`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CustomersApi.CreateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.CreateCustomerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `EntityCustomer` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityCustomer` | `entityCustomerSchema` | `src/models/entity-customer.ts` |

### createCustomerPayment

- **Signature**: `createCustomerPayment(request: CustomersApi.CreateCustomerPaymentRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.CreateCustomerPaymentError>`
- **Wire**: `POST /v2/customers/{customerId}/payments`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CustomersApi.CreateCustomerPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error422"` [422] no body · `"error429"` [429] no body · `"error503"` [503] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.CreateCustomerPaymentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `PaymentRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentRequest` | `paymentRequestSchema` | `src/models/payment-request.ts` |

### deleteCustomer

- **Signature**: `deleteCustomer(request: CustomersApi.DeleteCustomerRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.DeleteCustomerError>`
- **Wire**: `DELETE /v2/customers/{customerId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CustomersApi.DeleteCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.DeleteCustomerRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `DeleteValuesSalesInvoice` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DeleteValuesSalesInvoice` | `deleteValuesSalesInvoiceSchema` | `src/models/delete-values-sales-invoice.ts` |

### getCustomer

- **Signature**: `getCustomer(request: CustomersApi.GetCustomerRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.GetCustomerError>`
- **Wire**: `GET /v2/customers/{customerId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CustomersApi.GetCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.GetCustomerRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

### listCustomerPayments

- **Signature**: `listCustomerPayments(request: CustomersApi.ListCustomerPaymentsRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.ListCustomerPaymentsError>`
- **Wire**: `GET /v2/customers/{customerId}/payments`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CustomersApi.ListCustomerPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.ListCustomerPaymentsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `profileId` | `query` | — | `string` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

### listCustomers

- **Signature**: `listCustomers(request: CustomersApi.ListCustomersRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.ListCustomersError>`
- **Wire**: `GET /v2/customers`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CustomersApi.ListCustomersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.ListCustomersRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `from` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `sort` | `query` | — | `Sorting` | no |
| `testmode` | `query` | — | `boolean` | no |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sorting` | `sortingSchema` | `src/models/sorting.ts` |

### updateCustomer

- **Signature**: `updateCustomer(request: CustomersApi.UpdateCustomerRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.UpdateCustomerError>`
- **Wire**: `PATCH /v2/customers/{customerId}`
- **Auth**: any of `apiKey`, `advancedAccessToken`, `oAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MollieApiError` with `kind: "api"`, an instance of `CustomersApi.UpdateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error429"` [429] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.UpdateCustomerRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `idempotencyKey` | `header` | `idempotency-key` | `string` | no |
| `body` | `body` | — | `EntityCustomer` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityCustomer` | `entityCustomerSchema` | `src/models/entity-customer.ts` |

