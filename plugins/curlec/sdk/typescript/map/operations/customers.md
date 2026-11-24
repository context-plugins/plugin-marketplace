<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `src/resources/customers.ts` · 4 operations · Request and error types: namespace `Customers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `curlec`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomer

- **Signature**: `createCustomer(request: Customers.CreateCustomerRequest, options?: RequestOptions): ApiPromise<CustomerRazorpayCustomersApi, Customers.CreateCustomerError>`
- **Wire**: `POST /customers`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerRazorpayCustomersApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Customers.CreateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.CreateCustomerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `CustomersRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersRequest` | `customersRequestSchema` | `src/models/customers-request.ts` |
| `CustomerRazorpayCustomersApi` | `customerRazorpayCustomersApiSchema` | `src/models/customer-razorpay-customers-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchAllCustomers

- **Signature**: `fetchAllCustomers(request?: Customers.FetchAllCustomersRequest, options?: RequestOptions): ApiPromise<CustomersResponse, Customers.FetchAllCustomersError>`
- **Wire**: `GET /customers`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomersResponse`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Customers.FetchAllCustomersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [401] `Error` · `"error2"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.FetchAllCustomersRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `count` | `query` | `number` | no | `10` |
| `skip` | `query` | `number` | no | `0` |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersResponse` | `customersResponseSchema` | `src/models/customers-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### fetchCustomer

- **Signature**: `fetchCustomer(request: Customers.FetchCustomerRequest, options?: RequestOptions): ApiPromise<CustomerRazorpayCustomersApi, Customers.FetchCustomerError>`
- **Wire**: `GET /customers/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CustomerRazorpayCustomersApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Customers.FetchCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.FetchCustomerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerRazorpayCustomersApi` | `customerRazorpayCustomersApiSchema` | `src/models/customer-razorpay-customers-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateCustomer

- **Signature**: `updateCustomer(request: Customers.UpdateCustomerRequest, options?: RequestOptions): ApiPromise<CustomerRazorpayCustomersApi, Customers.UpdateCustomerError>`
- **Wire**: `PUT /customers/{id}`
- **Auth**: any of `basicAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` (scopes: `read_only`) — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `CustomerRazorpayCustomersApi`
- **Error**: `CurlecError` with `kind: "api"`, an instance of `Customers.UpdateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.UpdateCustomerRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `body` | `body` | `CustomersRequest1` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomersRequest1` | `customersRequest1Schema` | `src/models/customers-request1.ts` |
| `CustomerRazorpayCustomersApi` | `customerRazorpayCustomersApiSchema` | `src/models/customer-razorpay-customers-api.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

