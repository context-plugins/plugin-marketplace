<!-- Generated file — do not edit; regenerated with the SDK. -->

# Customers — operations

Accessor: `client.customers` · Source: `src/resources/customers.ts` · 2 operations · Request and error types: namespace `Customers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `doi-t`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getCustomer

- **Signature**: `getCustomer(request: Customers.GetCustomerRequest, options?: RequestOptions): ApiPromise<Customer, Customers.GetCustomerError>`
- **Wire**: `GET /customers/v1/customers/{customerId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Customer`
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Customers.GetCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.GetCustomerRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Customer` | `customerSchema` | `src/models/customer.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### updateCustomer

- **Signature**: `updateCustomer(request: Customers.UpdateCustomerRequest, options?: RequestOptions): ApiPromise<undefined, Customers.UpdateCustomerError>`
- **Wire**: `PATCH /customers/v1/customers/{customerId}`
- **Auth**: any of `apiKey`, (all of `tenantId`, `apiKey`) — the first branch fully configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DoiTError` with `kind: "api"`, an instance of `Customers.UpdateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [409] `Error` · `"error6"` [415] `Error` · `"error7"` [422] `Error` · `"error8"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Customers.UpdateCustomerRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `customerId` | `path` | `string` | yes |
| `body` | `body` | `CustomerUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerUpdate` | `customerUpdateSchema` | `src/models/customer-update.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

