<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExchangesApi — operations

Accessor: `client.exchangesApi` · Source: `src/resources/exchanges-api.ts` · 7 operations · Request and error types: namespace `ExchangesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAccountExchange

- **Signature**: `createAccountExchange(request: ExchangesApi.CreateAccountExchangeRequest, options?: RequestOptions): ApiPromise<undefined, ExchangesApi.CreateAccountExchangeError>`
- **Wire**: `POST /exchanges`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `ExchangesApi.CreateAccountExchangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangesApi.CreateAccountExchangeRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `ExchangesRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExchangesRequest` | `exchangesRequestSchema` | `src/models/unions/exchanges-request.ts` |

### createCustomerExchange

- **Signature**: `createCustomerExchange(request: ExchangesApi.CreateCustomerExchangeRequest, options?: RequestOptions): ApiPromise<undefined, ExchangesApi.CreateCustomerExchangeError>`
- **Wire**: `POST /customers/{id}/exchanges`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `ExchangesApi.CreateCustomerExchangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangesApi.CreateCustomerExchangeRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### getExchange

- **Signature**: `getExchange(request: ExchangesApi.GetExchangeRequest, options?: RequestOptions): ApiPromise<undefined, ExchangesApi.GetExchangeError>`
- **Wire**: `GET /exchanges/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `ExchangesApi.GetExchangeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangesApi.GetExchangeRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### getExchangePartner

- **Signature**: `getExchangePartner(request: ExchangesApi.GetExchangePartnerRequest, options?: RequestOptions): ApiPromise<undefined, ExchangesApi.GetExchangePartnerError>`
- **Wire**: `GET /exchange-partners/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `ExchangesApi.GetExchangePartnerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangesApi.GetExchangePartnerRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listAccountExchanges

- **Signature**: `listAccountExchanges(request: ExchangesApi.ListAccountExchangesRequest, options?: RequestOptions): ApiPromise<undefined, ExchangesApi.ListAccountExchangesError>`
- **Wire**: `GET /exchanges`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `ExchangesApi.ListAccountExchangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangesApi.ListAccountExchangesRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listCustomerExchanges

- **Signature**: `listCustomerExchanges(request: ExchangesApi.ListCustomerExchangesRequest, options?: RequestOptions): ApiPromise<undefined, ExchangesApi.ListCustomerExchangesError>`
- **Wire**: `GET /customers/{id}/exchanges`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `ExchangesApi.ListCustomerExchangesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangesApi.ListCustomerExchangesRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listExchangePartners

- **Signature**: `listExchangePartners(request: ExchangesApi.ListExchangePartnersRequest, options?: RequestOptions): ApiPromise<undefined, ExchangesApi.ListExchangePartnersError>`
- **Wire**: `GET /exchange-partners`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `ExchangesApi.ListExchangePartnersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangesApi.ListExchangePartnersRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

