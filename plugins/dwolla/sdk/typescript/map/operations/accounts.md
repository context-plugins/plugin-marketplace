<!-- Generated file — do not edit; regenerated with the SDK. -->

# Accounts — operations

Accessor: `client.accounts` · Source: `src/resources/accounts.ts` · 5 operations · Request and error types: namespace `Accounts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createFundingSource

- **Signature**: `createFundingSource(request: Accounts.CreateFundingSourceRequest, options?: RequestOptions): ApiPromise<undefined, Accounts.CreateFundingSourceError>`
- **Wire**: `POST /funding-sources`
- **Auth**: `clientCredentials`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `Accounts.CreateFundingSourceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.CreateFundingSourceRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |
| `body` | `body` | — | `CreateAccountFundingSource` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |
| `CreateAccountFundingSource` | `createAccountFundingSourceSchema` | `src/models/create-account-funding-source.ts` |

### getAccount

- **Signature**: `getAccount(request: Accounts.GetAccountRequest, options?: RequestOptions): ApiPromise<undefined, Accounts.GetAccountError>`
- **Wire**: `GET /accounts/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `Accounts.GetAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.GetAccountRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listAndSearchTransfers

- **Signature**: `listAndSearchTransfers(request: Accounts.ListAndSearchTransfersRequest, options?: RequestOptions): ApiPromise<undefined, Accounts.ListAndSearchTransfersError>`
- **Wire**: `GET /accounts/{id}/transfers`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `Accounts.ListAndSearchTransfersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.ListAndSearchTransfersRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `search` | `query` | — | `string` | no | — |
| `startAmount` | `query` | — | `string` | no | — |
| `endAmount` | `query` | — | `string` | no | — |
| `startDate` | `query` | — | `string` | no | — |
| `endDate` | `query` | — | `string` | no | — |
| `status` | `query` | — | `string` | no | — |
| `correlationId` | `query` | — | `string` | no | — |
| `limit` | `query` | — | `string` | no | — |
| `offset` | `query` | — | `string` | no | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listFundingSources

- **Signature**: `listFundingSources(request: Accounts.ListFundingSourcesRequest, options?: RequestOptions): ApiPromise<undefined, Accounts.ListFundingSourcesError>`
- **Wire**: `GET /accounts/{id}/funding-sources`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `Accounts.ListFundingSourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.ListFundingSourcesRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `removed` | `query` | — | `string` | no | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listMassPayments

- **Signature**: `listMassPayments(request: Accounts.ListMassPaymentsRequest, options?: RequestOptions): ApiPromise<undefined, Accounts.ListMassPaymentsError>`
- **Wire**: `GET /accounts/{id}/mass-payments`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `Accounts.ListMassPaymentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Accounts.ListMassPaymentsRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `limit` | `query` | — | `number` | no | `25` |
| `offset` | `query` | — | `number` | no | `0` |
| `correlationId` | `query` | — | `string` | no | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

