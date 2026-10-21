<!-- Generated file — do not edit; regenerated with the SDK. -->

# MassPaymentsApi — operations

Accessor: `client.massPaymentsApi` · Source: `src/resources/mass-payments-api.ts` · 6 operations · Request and error types: namespace `MassPaymentsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getMassPayment

- **Signature**: `getMassPayment(request: MassPaymentsApi.GetMassPaymentRequest, options?: RequestOptions): ApiPromise<undefined, MassPaymentsApi.GetMassPaymentError>`
- **Wire**: `GET /mass-payments/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `MassPaymentsApi.GetMassPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MassPaymentsApi.GetMassPaymentRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### getMassPaymentItem

- **Signature**: `getMassPaymentItem(request: MassPaymentsApi.GetMassPaymentItemRequest, options?: RequestOptions): ApiPromise<undefined, MassPaymentsApi.GetMassPaymentItemError>`
- **Wire**: `GET /mass-payment-items/{itemId}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `MassPaymentsApi.GetMassPaymentItemError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MassPaymentsApi.GetMassPaymentItemRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `itemId` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### initiateMassPayment

- **Signature**: `initiateMassPayment(request: MassPaymentsApi.InitiateMassPaymentRequest, options?: RequestOptions): ApiPromise<undefined, MassPaymentsApi.InitiateMassPaymentError>`
- **Wire**: `POST /mass-payments`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `MassPaymentsApi.InitiateMassPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MassPaymentsApi.InitiateMassPaymentRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no | — |
| `body` | `body` | — | `MassPaymentsRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `MassPaymentsRequest` | `massPaymentsRequestSchema` | `src/models/mass-payments-request.ts` |

### listCustomerMassPayments

- **Signature**: `listCustomerMassPayments(request: MassPaymentsApi.ListCustomerMassPaymentsRequest, options?: RequestOptions): ApiPromise<undefined, MassPaymentsApi.ListCustomerMassPaymentsError>`
- **Wire**: `GET /customers/{id}/mass-payments`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `MassPaymentsApi.ListCustomerMassPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MassPaymentsApi.ListCustomerMassPaymentsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `correlationId` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `offset` | `query` | — | `number` | no | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listMassPaymentItems

- **Signature**: `listMassPaymentItems(request: MassPaymentsApi.ListMassPaymentItemsRequest, options?: RequestOptions): ApiPromise<undefined, MassPaymentsApi.ListMassPaymentItemsError>`
- **Wire**: `GET /mass-payments/{id}/items`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `MassPaymentsApi.ListMassPaymentItemsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MassPaymentsApi.ListMassPaymentItemsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `string` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `status` | `query` | — | `string` | no | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### updateMassPayment

- **Signature**: `updateMassPayment(request: MassPaymentsApi.UpdateMassPaymentRequest, options?: RequestOptions): ApiPromise<undefined, MassPaymentsApi.UpdateMassPaymentError>`
- **Wire**: `POST /mass-payments/{id}`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `MassPaymentsApi.UpdateMassPaymentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MassPaymentsApi.UpdateMassPaymentRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `MassPaymentsRequest1` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `MassPaymentsRequest1` | `massPaymentsRequest1Schema` | `src/models/mass-payments-request1.ts` |

