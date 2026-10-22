<!-- Generated file — do not edit; regenerated with the SDK. -->

# CustomersApi — operations

Accessor: `client.customersApi` · Source: `src/resources/customers-api.ts` · 6 operations · Request and error types: namespace `CustomersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomer

- **Signature**: `createCustomer(request: CustomersApi.CreateCustomerRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.CreateCustomerError>`
- **Wire**: `POST /customers`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `CustomersApi.CreateCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.CreateCustomerRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### getCustomer

- **Signature**: `getCustomer(request: CustomersApi.GetCustomerRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.GetCustomerError>`
- **Wire**: `GET /customers/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `CustomersApi.GetCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.GetCustomerRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listAndSearchCustomers

- **Signature**: `listAndSearchCustomers(request: CustomersApi.ListAndSearchCustomersRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.ListAndSearchCustomersError>`
- **Wire**: `GET /customers`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `CustomersApi.ListAndSearchCustomersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.ListAndSearchCustomersRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `number` | no | — |
| `search` | `query` | — | `string` | no | — |
| `status` | `query` | — | `string` | no | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listBusinessClassifications

- **Signature**: `listBusinessClassifications(request: CustomersApi.ListBusinessClassificationsRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.ListBusinessClassificationsError>`
- **Wire**: `GET /business-classifications`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `CustomersApi.ListBusinessClassificationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.ListBusinessClassificationsRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### retrieveBusinessClassification

- **Signature**: `retrieveBusinessClassification(request: CustomersApi.RetrieveBusinessClassificationRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.RetrieveBusinessClassificationError>`
- **Wire**: `GET /business-classifications/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `CustomersApi.RetrieveBusinessClassificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.RetrieveBusinessClassificationRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### update

- **Signature**: `update(request: CustomersApi.UpdateRequest, options?: RequestOptions): ApiPromise<undefined, CustomersApi.UpdateError>`
- **Wire**: `POST /customers/{id}`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `CustomersApi.UpdateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CustomersApi.UpdateRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `CustomersRequest1` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `CustomersRequest1` | `customersRequest1Schema` | `src/models/unions/customers-request1.ts` |

