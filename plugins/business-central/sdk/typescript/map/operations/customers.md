<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `src/resources/customers.ts` · 5 operations · Request and error types: namespace `Customers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dynamics-365-business-central`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomer

- **Signature**: `createCustomer(request: Customers.CreateCustomerRequest, options?: RequestOptions): ApiPromise<Customer, Customers.CreateCustomerError>`
- **Wire**: `POST /companies({company_id})/customers`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Customer`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Customers.CreateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.CreateCustomerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `body` | `body` | — | `CustomerCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerCreate` | `customerCreateSchema` | `src/models/customer-create.ts` |
| `Customer` | `customerSchema` | `src/models/customer.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### deleteCustomer

- **Signature**: `deleteCustomer(request: Customers.DeleteCustomerRequest, options?: RequestOptions): ApiPromise<undefined, Customers.DeleteCustomerError>`
- **Wire**: `DELETE /companies({company_id})/customers({customer_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Customers.DeleteCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.DeleteCustomerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `customerId` | `path` | `customer_id` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### getCustomer

- **Signature**: `getCustomer(request: Customers.GetCustomerRequest, options?: RequestOptions): ApiPromise<Customer, Customers.GetCustomerError>`
- **Wire**: `GET /companies({company_id})/customers({customer_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Customer`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Customers.GetCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomerRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `select` | `query` | `$select` | `string` | no |
| `expand` | `query` | `$expand` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Customer` | `customerSchema` | `src/models/customer.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### listCustomers

- **Signature**: `listCustomers(request: Customers.ListCustomersRequest, options?: RequestOptions): ApiPromise<CompaniesApiCustomersResponse, Customers.ListCustomersError>`
- **Wire**: `GET /companies({company_id})/customers`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompaniesApiCustomersResponse`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Customers.ListCustomersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.ListCustomersRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `top` | `query` | `$top` | `number` | no |
| `skip` | `query` | `$skip` | `number` | no |
| `filter` | `query` | `$filter` | `string` | no |
| `orderby` | `query` | `$orderby` | `string` | no |
| `select` | `query` | `$select` | `string` | no |
| `expand` | `query` | `$expand` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompaniesApiCustomersResponse` | `companiesApiCustomersResponseSchema` | `src/models/companies-api-customers-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### updateCustomer

- **Signature**: `updateCustomer(request: Customers.UpdateCustomerRequest, options?: RequestOptions): ApiPromise<Customer, Customers.UpdateCustomerError>`
- **Wire**: `PATCH /companies({company_id})/customers({customer_id})`
- **Auth**: any of `oauth2AuthorizationCode`, `oauth2ClientCredentials`, `bearerAuth` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `Customer`
- **Error**: `Dynamics365BusinessCentralError` with `kind: "api"`, an instance of `Customers.UpdateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"errorResponse2"` [401] `ErrorResponse` · `"errorResponse3"` [404] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.UpdateCustomerRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `companyId` | `path` | `company_id` | `string` | yes |
| `customerId` | `path` | `customer_id` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | yes |
| `body` | `body` | — | `CustomerUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerUpdate` | `customerUpdateSchema` | `src/models/customer-update.ts` |
| `Customer` | `customerSchema` | `src/models/customer.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

