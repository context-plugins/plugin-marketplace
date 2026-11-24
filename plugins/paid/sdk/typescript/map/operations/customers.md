<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `src/resources/customers.ts` · 33 operations · Request and error types: namespace `Customers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `paid`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### checkEntitlement

- **Signature**: `checkEntitlement(request: Customers.CheckEntitlementRequest, options?: RequestOptions): ApiPromise<CustomersCheckEntitlementResponse200, Customers.CheckEntitlementError>`
- **Wire**: `GET /customers/{customerId}/entitlement`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersCheckEntitlementResponse200`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.CheckEntitlementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.CheckEntitlementRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes | — |
| `eventName` | `query` | `event_name` | `string` | yes | — |
| `view` | `query` | — | `CustomersCustomerIdEntitlementGetParametersView` | no | `CustomersCustomerIdEntitlementGetParametersView.ActiveOnly` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersCustomerIdEntitlementGetParametersView` | `customersCustomerIdEntitlementGetParametersViewSchema` | `src/models/customers-customer-id-entitlement-get-parameters-view.ts` |
| `CustomersCheckEntitlementResponse200` | `customersCheckEntitlementResponse200Schema` | `src/models/customers-check-entitlement-response200.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### createCustomer

- **Signature**: `createCustomer(request: Customers.CreateCustomerRequestParams, options?: RequestOptions): ApiPromise<Customer1, Customers.CreateCustomerError>`
- **Wire**: `POST /customers/`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Customer1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.CreateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.CreateCustomerRequestParams` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CreateCustomerRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateCustomerRequest` | `createCustomerRequestSchema` | `src/models/create-customer-request.ts` |
| `Customer1` | `customer1Schema` | `src/models/customer1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createCustomerAlias

- **Signature**: `createCustomerAlias(request: Customers.CreateCustomerAliasRequest, options?: RequestOptions): ApiPromise<CustomerAlias, Customers.CreateCustomerAliasError>`
- **Wire**: `POST /customers/{id}/aliases`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerAlias`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.CreateCustomerAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [409] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.CreateCustomerAliasRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CustomerAliasCreateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerAliasCreateRequest` | `customerAliasCreateRequestSchema` | `src/models/customer-alias-create-request.ts` |
| `CustomerAlias` | `customerAliasSchema` | `src/models/customer-alias.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createCustomerAliasByExternalId

- **Signature**: `createCustomerAliasByExternalId(request: Customers.CreateCustomerAliasByExternalIdRequest, options?: RequestOptions): ApiPromise<CustomerAlias, Customers.CreateCustomerAliasByExternalIdError>`
- **Wire**: `POST /customers/external/{externalId}/aliases`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerAlias`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.CreateCustomerAliasByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [409] `ErrorResponse` · `"errorResponse5"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.CreateCustomerAliasByExternalIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CustomerAliasCreateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerAliasCreateRequest` | `customerAliasCreateRequestSchema` | `src/models/customer-alias-create-request.ts` |
| `CustomerAlias` | `customerAliasSchema` | `src/models/customer-alias.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### createPaymentMethod

- **Signature**: `createPaymentMethod(request: Customers.CreatePaymentMethodRequest, options?: RequestOptions): ApiPromise<PaymentMethod, Customers.CreatePaymentMethodError>`
- **Wire**: `POST /customers/external/{externalId}/payment-methods`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PaymentMethod`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.CreatePaymentMethodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.CreatePaymentMethodRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CustomersExternalPaymentMethodsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersExternalPaymentMethodsRequest` | `customersExternalPaymentMethodsRequestSchema` | `src/models/customers-external-payment-methods-request.ts` |
| `PaymentMethod` | `paymentMethodSchema` | `src/models/payment-method.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### create3

- **Signature**: `create3(request: Customers.Create3Request, options?: RequestOptions): ApiPromise<Customer, ApiError>`
- **Wire**: `POST /customers`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Customer`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.Create3Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CustomerCreate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerCreate` | `customerCreateSchema` | `src/models/customer-create.ts` |
| `Customer` | `customerSchema` | `src/models/customer.ts` |

### deleteByExternalId3

- **Signature**: `deleteByExternalId3(request: Customers.DeleteByExternalId3Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `DELETE /customers/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.DeleteByExternalId3Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

### deleteCustomerAlias

- **Signature**: `deleteCustomerAlias(request: Customers.DeleteCustomerAliasRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Customers.DeleteCustomerAliasError>`
- **Wire**: `DELETE /customers/{id}/aliases/{alias}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.DeleteCustomerAliasError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.DeleteCustomerAliasRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `alias` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteCustomerAliasByExternalId

- **Signature**: `deleteCustomerAliasByExternalId(request: Customers.DeleteCustomerAliasByExternalIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Customers.DeleteCustomerAliasByExternalIdError>`
- **Wire**: `DELETE /customers/external/{externalId}/aliases/{alias}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.DeleteCustomerAliasByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.DeleteCustomerAliasByExternalIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `alias` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteCustomerById

- **Signature**: `deleteCustomerById(request: Customers.DeleteCustomerByIdRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Customers.DeleteCustomerByIdError>`
- **Wire**: `DELETE /customers/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.DeleteCustomerByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.DeleteCustomerByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deletePaymentMethod

- **Signature**: `deletePaymentMethod(request: Customers.DeletePaymentMethodRequest, options?: RequestOptions): ApiPromise<Record<string, unknown>, Customers.DeletePaymentMethodError>`
- **Wire**: `DELETE /customers/external/{externalId}/payment-methods/{paymentMethodId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.DeletePaymentMethodError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.DeletePaymentMethodRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `paymentMethodId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Error` | `errorSchema` | `src/models/error.ts` |

### delete3

- **Signature**: `delete3(request: Customers.Delete3Request, options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError>`
- **Wire**: `DELETE /customers/{customerId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Record<string, unknown>` — a bare `application/json` map; the success type *is* the map
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.Delete3Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

### getByExternalId3

- **Signature**: `getByExternalId3(request: Customers.GetByExternalId3Request, options?: RequestOptions): ApiPromise<Customer, ApiError>`
- **Wire**: `GET /customers/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Customer`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.GetByExternalId3Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Customer` | `customerSchema` | `src/models/customer.ts` |

### getCostsByExternalId

- **Signature**: `getCostsByExternalId(request: Customers.GetCostsByExternalIdRequest, options?: RequestOptions): ApiPromise<CostTracesResponse, Customers.GetCostsByExternalIdError>`
- **Wire**: `GET /customers/external/{externalId}/costs`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CostTracesResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.GetCostsByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCostsByExternalIdRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `100` |
| `offset` | `query` | — | `number` | no | `0` |
| `startTime` | `query` | — | `Date` (date-time) | no | — |
| `endTime` | `query` | — | `Date` (date-time) | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CostTracesResponse` | `costTracesResponseSchema` | `src/models/cost-traces-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getCustomerById

- **Signature**: `getCustomerById(request: Customers.GetCustomerByIdRequest, options?: RequestOptions): ApiPromise<Customer1, Customers.GetCustomerByIdError>`
- **Wire**: `GET /customers/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Customer1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.GetCustomerByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomerByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Customer1` | `customer1Schema` | `src/models/customer1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomerCreditBalances

- **Signature**: `getCustomerCreditBalances(request: Customers.GetCustomerCreditBalancesRequest, options?: RequestOptions): ApiPromise<CreditBalanceListResponse, Customers.GetCustomerCreditBalancesError>`
- **Wire**: `GET /customers/{id}/credits/balances`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditBalanceListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.GetCustomerCreditBalancesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomerCreditBalancesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditBalanceListResponse` | `creditBalanceListResponseSchema` | `src/models/credit-balance-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomerCreditBalancesByExternalId

- **Signature**: `getCustomerCreditBalancesByExternalId(request: Customers.GetCustomerCreditBalancesByExternalIdRequest, options?: RequestOptions): ApiPromise<CreditBalanceListResponse, Customers.GetCustomerCreditBalancesByExternalIdError>`
- **Wire**: `GET /customers/external/{externalId}/credits/balances`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CreditBalanceListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.GetCustomerCreditBalancesByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomerCreditBalancesByExternalIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditBalanceListResponse` | `creditBalanceListResponseSchema` | `src/models/credit-balance-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomerStateByExternalId

- **Signature**: `getCustomerStateByExternalId(request: Customers.GetCustomerStateByExternalIdRequest, options?: RequestOptions): ApiPromise<CustomerState, Customers.GetCustomerStateByExternalIdError>`
- **Wire**: `GET /customers/external/{externalId}/state`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerState`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.GetCustomerStateByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomerStateByExternalIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerState` | `customerStateSchema` | `src/models/customer-state.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomerStateById

- **Signature**: `getCustomerStateById(request: Customers.GetCustomerStateByIdRequest, options?: RequestOptions): ApiPromise<CustomerState, Customers.GetCustomerStateByIdError>`
- **Wire**: `GET /customers/{id}/state`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerState`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.GetCustomerStateByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [403] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomerStateByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerState` | `customerStateSchema` | `src/models/customer-state.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getEntitlements

- **Signature**: `getEntitlements(request: Customers.GetEntitlementsRequest, options?: RequestOptions): ApiPromise<EntitlementUsage[], Customers.GetEntitlementsError>`
- **Wire**: `GET /customers/{customerId}/credit-bundles`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntitlementUsage[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.GetEntitlementsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetEntitlementsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntitlementUsage` | `entitlementUsageSchema` | `src/models/entitlement-usage.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### getUsageByExternalId

- **Signature**: `getUsageByExternalId(request: Customers.GetUsageByExternalIdRequest, options?: RequestOptions): ApiPromise<UsageSummariesResponse, Customers.GetUsageByExternalIdError>`
- **Wire**: `GET /customers/external/{externalId}/usage`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `UsageSummariesResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.GetUsageByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [403] `Error` · `"error3"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetUsageByExternalIdRequest` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `100` |
| `offset` | `query` | — | `number` | no | `0` |
| `startTime` | `query` | — | `Date` (date-time) | no | — |
| `endTime` | `query` | — | `Date` (date-time) | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `UsageSummariesResponse` | `usageSummariesResponseSchema` | `src/models/usage-summaries-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### get3

- **Signature**: `get3(request: Customers.Get3Request, options?: RequestOptions): ApiPromise<Customer, ApiError>`
- **Wire**: `GET /customers/{customerId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Customer`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.Get3Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Customer` | `customerSchema` | `src/models/customer.ts` |

### grantCustomerCredits

- **Signature**: `grantCustomerCredits(request: Customers.GrantCustomerCreditsRequest, options?: RequestOptions): ApiPromise<GrantCustomerCreditsResponse, Customers.GrantCustomerCreditsError>`
- **Wire**: `POST /customers/{id}/credits/grants`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GrantCustomerCreditsResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.GrantCustomerCreditsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GrantCustomerCreditsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CreditGrantCreateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditGrantCreateRequest` | `creditGrantCreateRequestSchema` | `src/models/credit-grant-create-request.ts` |
| `GrantCustomerCreditsResponse` | `grantCustomerCreditsResponseSchema` | `src/models/grant-customer-credits-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### grantCustomerCreditsByExternalId

- **Signature**: `grantCustomerCreditsByExternalId(request: Customers.GrantCustomerCreditsByExternalIdRequest, options?: RequestOptions): ApiPromise<GrantCustomerCreditsResponse, Customers.GrantCustomerCreditsByExternalIdError>`
- **Wire**: `POST /customers/external/{externalId}/credits/grants`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `GrantCustomerCreditsResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.GrantCustomerCreditsByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GrantCustomerCreditsByExternalIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CreditGrantCreateRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreditGrantCreateRequest` | `creditGrantCreateRequestSchema` | `src/models/credit-grant-create-request.ts` |
| `GrantCustomerCreditsResponse` | `grantCustomerCreditsResponseSchema` | `src/models/grant-customer-credits-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCustomerAliases

- **Signature**: `listCustomerAliases(request: Customers.ListCustomerAliasesRequest, options?: RequestOptions): ApiPromise<CustomerAliasListResponse, Customers.ListCustomerAliasesError>`
- **Wire**: `GET /customers/{id}/aliases`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerAliasListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.ListCustomerAliasesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.ListCustomerAliasesRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerAliasListResponse` | `customerAliasListResponseSchema` | `src/models/customer-alias-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCustomerAliasesByExternalId

- **Signature**: `listCustomerAliasesByExternalId(request: Customers.ListCustomerAliasesByExternalIdRequest, options?: RequestOptions): ApiPromise<CustomerAliasListResponse, Customers.ListCustomerAliasesByExternalIdError>`
- **Wire**: `GET /customers/external/{externalId}/aliases`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerAliasListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.ListCustomerAliasesByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.ListCustomerAliasesByExternalIdRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerAliasListResponse` | `customerAliasListResponseSchema` | `src/models/customer-alias-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCustomers

- **Signature**: `listCustomers(request: Customers.ListCustomersRequest, options?: RequestOptions): ApiPromise<CustomerListResponse, Customers.ListCustomersError>`
- **Wire**: `GET /customers/`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerListResponse`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.ListCustomersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.ListCustomersRequest` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | `10` |
| `offset` | `query` | — | `number` | no | — |
| `name` | `query` | — | `string` | no | — |
| `status` | `query` | — | `CustomersGetParametersStatus` | no | — |
| `creationState` | `query` | — | `CustomersGetParametersCreationState` | no | — |
| `createdAtFrom` | `query` | — | `string` | no | — |
| `createdAtTo` | `query` | — | `string` | no | — |
| `externalId` | `query` | — | `string` | no | — |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersGetParametersStatus` | `customersGetParametersStatusSchema` | `src/models/customers-get-parameters-status.ts` |
| `CustomersGetParametersCreationState` | `customersGetParametersCreationStateSchema` | `src/models/customers-get-parameters-creation-state.ts` |
| `CustomerListResponse` | `customerListResponseSchema` | `src/models/customer-list-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listPaymentMethods

- **Signature**: `listPaymentMethods(request: Customers.ListPaymentMethodsRequest, options?: RequestOptions): ApiPromise<PaymentMethod[], Customers.ListPaymentMethodsError>`
- **Wire**: `GET /customers/external/{externalId}/payment-methods`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PaymentMethod[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.ListPaymentMethodsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [404] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.ListPaymentMethodsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentMethod` | `paymentMethodSchema` | `src/models/payment-method.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### list3

- **Signature**: `list3(request: Customers.List3Request, options?: RequestOptions): ApiPromise<Customer[], ApiError>`
- **Wire**: `GET /customers`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Customer[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.List3Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Customer` | `customerSchema` | `src/models/customer.ts` |

### updateByExternalId2

- **Signature**: `updateByExternalId2(request: Customers.UpdateByExternalId2Request, options?: RequestOptions): ApiPromise<Customer, ApiError>`
- **Wire**: `PUT /customers/external/{externalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Customer`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.UpdateByExternalId2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `externalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CustomerUpdate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerUpdate` | `customerUpdateSchema` | `src/models/customer-update.ts` |
| `Customer` | `customerSchema` | `src/models/customer.ts` |

### updateCustomerById

- **Signature**: `updateCustomerById(request: Customers.UpdateCustomerByIdRequest, options?: RequestOptions): ApiPromise<Customer1, Customers.UpdateCustomerByIdError>`
- **Wire**: `PUT /customers/{id}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Customer1`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.UpdateCustomerByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.UpdateCustomerByIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpdateCustomerRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpdateCustomerRequest` | `updateCustomerRequestSchema` | `src/models/update-customer-request.ts` |
| `Customer1` | `customer1Schema` | `src/models/customer1.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### update2

- **Signature**: `update2(request: Customers.Update2Request, options?: RequestOptions): ApiPromise<Customer, ApiError>`
- **Wire**: `PUT /customers/{customerId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Customer`
- **Error**: `PaidError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Customers.Update2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `CustomerUpdate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerUpdate` | `customerUpdateSchema` | `src/models/customer-update.ts` |
| `Customer` | `customerSchema` | `src/models/customer.ts` |

### upsertCustomerUserByExternalId

- **Signature**: `upsertCustomerUserByExternalId(request: Customers.UpsertCustomerUserByExternalIdRequest, options?: RequestOptions): ApiPromise<CustomerUser, Customers.UpsertCustomerUserByExternalIdError>`
- **Wire**: `PUT /customers/{customerExternalId}/users/{userExternalId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerUser`
- **Error**: `PaidError` with `kind: "api"`, an instance of `Customers.UpsertCustomerUserByExternalIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [403] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"errorResponse4"` [500] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.UpsertCustomerUserByExternalIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerExternalId` | `path` | — | `string` | yes |
| `userExternalId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `UpsertCustomerUserRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UpsertCustomerUserRequest` | `upsertCustomerUserRequestSchema` | `src/models/upsert-customer-user-request.ts` |
| `CustomerUser` | `customerUserSchema` | `src/models/customer-user.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

