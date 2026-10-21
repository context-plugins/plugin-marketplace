<!-- Generated file — do not edit; regenerated with the SDK. -->

# FundingSourcesApi — operations

Accessor: `client.fundingSourcesApi` · Source: `src/resources/funding-sources-api.ts` · 9 operations · Request and error types: namespace `FundingSourcesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomerFundingSource

- **Signature**: `createCustomerFundingSource(request: FundingSourcesApi.CreateCustomerFundingSourceRequest, options?: RequestOptions): ApiPromise<undefined, FundingSourcesApi.CreateCustomerFundingSourceError>`
- **Wire**: `POST /customers/{id}/funding-sources`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `FundingSourcesApi.CreateCustomerFundingSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingSourcesApi.CreateCustomerFundingSourceRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### createOnDemandTransferAuthorization

- **Signature**: `createOnDemandTransferAuthorization(request: FundingSourcesApi.CreateOnDemandTransferAuthorizationRequest, options?: RequestOptions): ApiPromise<undefined, FundingSourcesApi.CreateOnDemandTransferAuthorizationError>`
- **Wire**: `POST /on-demand-authorizations`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `FundingSourcesApi.CreateOnDemandTransferAuthorizationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingSourcesApi.CreateOnDemandTransferAuthorizationRequest` (1):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### getFundingSource

- **Signature**: `getFundingSource(request: FundingSourcesApi.GetFundingSourceRequest, options?: RequestOptions): ApiPromise<undefined, FundingSourcesApi.GetFundingSourceError>`
- **Wire**: `GET /funding-sources/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `FundingSourcesApi.GetFundingSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingSourcesApi.GetFundingSourceRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### getFundingSourceBalance

- **Signature**: `getFundingSourceBalance(request: FundingSourcesApi.GetFundingSourceBalanceRequest, options?: RequestOptions): ApiPromise<undefined, FundingSourcesApi.GetFundingSourceBalanceError>`
- **Wire**: `GET /funding-sources/{id}/balance`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `FundingSourcesApi.GetFundingSourceBalanceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingSourcesApi.GetFundingSourceBalanceRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### getMicroDeposits

- **Signature**: `getMicroDeposits(request: FundingSourcesApi.GetMicroDepositsRequest, options?: RequestOptions): ApiPromise<undefined, FundingSourcesApi.GetMicroDepositsError>`
- **Wire**: `GET /funding-sources/{id}/micro-deposits`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `FundingSourcesApi.GetMicroDepositsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingSourcesApi.GetMicroDepositsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### getVanRouting

- **Signature**: `getVanRouting(request: FundingSourcesApi.GetVanRoutingRequest, options?: RequestOptions): ApiPromise<undefined, FundingSourcesApi.GetVanRoutingError>`
- **Wire**: `GET /funding-sources/{id}/ach-routing`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `FundingSourcesApi.GetVanRoutingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingSourcesApi.GetVanRoutingRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### initiateOrVerifyMicroDeposits

- **Signature**: `initiateOrVerifyMicroDeposits(request: FundingSourcesApi.InitiateOrVerifyMicroDepositsRequest, options?: RequestOptions): ApiPromise<undefined, FundingSourcesApi.InitiateOrVerifyMicroDepositsError>`
- **Wire**: `POST /funding-sources/{id}/micro-deposits`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `FundingSourcesApi.InitiateOrVerifyMicroDepositsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingSourcesApi.InitiateOrVerifyMicroDepositsRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `FundingSourcesMicroDepositsRequest` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `FundingSourcesMicroDepositsRequest` | `fundingSourcesMicroDepositsRequestSchema` | `src/models/unions/funding-sources-micro-deposits-request.ts` |

### listCustomerFundingSources

- **Signature**: `listCustomerFundingSources(request: FundingSourcesApi.ListCustomerFundingSourcesRequest, options?: RequestOptions): ApiPromise<undefined, FundingSourcesApi.ListCustomerFundingSourcesError>`
- **Wire**: `GET /customers/{id}/funding-sources`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `FundingSourcesApi.ListCustomerFundingSourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingSourcesApi.ListCustomerFundingSourcesRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `removed` | `query` | — | `string` | no | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### updateOrRemoveFundingSource

- **Signature**: `updateOrRemoveFundingSource(request: FundingSourcesApi.UpdateOrRemoveFundingSourceRequest, options?: RequestOptions): ApiPromise<undefined, FundingSourcesApi.UpdateOrRemoveFundingSourceError>`
- **Wire**: `POST /funding-sources/{id}`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `FundingSourcesApi.UpdateOrRemoveFundingSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `FundingSourcesApi.UpdateOrRemoveFundingSourceRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `FundingSourcesRequest` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `FundingSourcesRequest` | `fundingSourcesRequestSchema` | `src/models/unions/funding-sources-request.ts` |

