<!-- Generated file — do not edit; regenerated with the SDK. -->

# BeneficialOwnersApi — operations

Accessor: `client.beneficialOwnersApi` · Source: `src/resources/beneficial-owners-api.ts` · 7 operations · Request and error types: namespace `BeneficialOwnersApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### certifyBeneficialOwnershipForCustomer

- **Signature**: `certifyBeneficialOwnershipForCustomer(request: BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerRequest, options?: RequestOptions): ApiPromise<undefined, BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerError>`
- **Wire**: `POST /customers/{id}/beneficial-ownership`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BeneficialOwnersApi.CertifyBeneficialOwnershipForCustomerRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `CustomersBeneficialOwnershipRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `CustomersBeneficialOwnershipRequest` | `customersBeneficialOwnershipRequestSchema` | `src/models/customers-beneficial-ownership-request.ts` |

### createBeneficialOwnerForCustomer

- **Signature**: `createBeneficialOwnerForCustomer(request: BeneficialOwnersApi.CreateBeneficialOwnerForCustomerRequest, options?: RequestOptions): ApiPromise<undefined, BeneficialOwnersApi.CreateBeneficialOwnerForCustomerError>`
- **Wire**: `POST /customers/{id}/beneficial-owners`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `BeneficialOwnersApi.CreateBeneficialOwnerForCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BeneficialOwnersApi.CreateBeneficialOwnerForCustomerRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `CustomersBeneficialOwnersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `CustomersBeneficialOwnersRequest` | `customersBeneficialOwnersRequestSchema` | `src/models/unions/customers-beneficial-owners-request.ts` |

### deleteBeneficialOwner

- **Signature**: `deleteBeneficialOwner(request: BeneficialOwnersApi.DeleteBeneficialOwnerRequest, options?: RequestOptions): ApiPromise<undefined, BeneficialOwnersApi.DeleteBeneficialOwnerError>`
- **Wire**: `DELETE /beneficial-owners/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `BeneficialOwnersApi.DeleteBeneficialOwnerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BeneficialOwnersApi.DeleteBeneficialOwnerRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### getBeneficialOwnershipStatusForCustomer

- **Signature**: `getBeneficialOwnershipStatusForCustomer(request: BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerRequest, options?: RequestOptions): ApiPromise<undefined, BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerError>`
- **Wire**: `GET /customers/{id}/beneficial-ownership`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BeneficialOwnersApi.GetBeneficialOwnershipStatusForCustomerRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listBeneficialOwnersForCustomer

- **Signature**: `listBeneficialOwnersForCustomer(request: BeneficialOwnersApi.ListBeneficialOwnersForCustomerRequest, options?: RequestOptions): ApiPromise<undefined, BeneficialOwnersApi.ListBeneficialOwnersForCustomerError>`
- **Wire**: `GET /customers/{id}/beneficial-owners`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `BeneficialOwnersApi.ListBeneficialOwnersForCustomerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BeneficialOwnersApi.ListBeneficialOwnersForCustomerRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### retrieveBeneficialOwner

- **Signature**: `retrieveBeneficialOwner(request: BeneficialOwnersApi.RetrieveBeneficialOwnerRequest, options?: RequestOptions): ApiPromise<undefined, BeneficialOwnersApi.RetrieveBeneficialOwnerError>`
- **Wire**: `GET /beneficial-owners/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `BeneficialOwnersApi.RetrieveBeneficialOwnerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BeneficialOwnersApi.RetrieveBeneficialOwnerRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### updateBeneficialOwner

- **Signature**: `updateBeneficialOwner(request: BeneficialOwnersApi.UpdateBeneficialOwnerRequest, options?: RequestOptions): ApiPromise<undefined, BeneficialOwnersApi.UpdateBeneficialOwnerError>`
- **Wire**: `POST /beneficial-owners/{id}`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `BeneficialOwnersApi.UpdateBeneficialOwnerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `BeneficialOwnersApi.UpdateBeneficialOwnerRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `BeneficialOwnersRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `BeneficialOwnersRequest` | `beneficialOwnersRequestSchema` | `src/models/unions/beneficial-owners-request.ts` |

