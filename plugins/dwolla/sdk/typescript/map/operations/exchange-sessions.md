<!-- Generated file — do not edit; regenerated with the SDK. -->

# ExchangeSessions — operations

Accessor: `client.exchangeSessions` · Source: `src/resources/exchange-sessions.ts` · 4 operations · Request and error types: namespace `ExchangeSessions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `dwolla-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCustomerExchangeSession

- **Signature**: `createCustomerExchangeSession(request: ExchangeSessions.CreateCustomerExchangeSessionRequest, options?: RequestOptions): ApiPromise<undefined, ExchangeSessions.CreateCustomerExchangeSessionError>`
- **Wire**: `POST /customers/{id}/exchange-sessions`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `ExchangeSessions.CreateCustomerExchangeSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangeSessions.CreateCustomerExchangeSessionRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### createReAuthExchangeSession

- **Signature**: `createReAuthExchangeSession(request: ExchangeSessions.CreateReAuthExchangeSessionRequest, options?: RequestOptions): ApiPromise<undefined, ExchangeSessions.CreateReAuthExchangeSessionError>`
- **Wire**: `POST /exchanges/{id}/exchange-sessions`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `ExchangeSessions.CreateReAuthExchangeSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error403"` [403] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangeSessions.CreateReAuthExchangeSessionRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### listAvailableExchangeConnections

- **Signature**: `listAvailableExchangeConnections(request: ExchangeSessions.ListAvailableExchangeConnectionsRequest, options?: RequestOptions): ApiPromise<undefined, ExchangeSessions.ListAvailableExchangeConnectionsError>`
- **Wire**: `GET /customers/{id}/available-exchange-connections`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `ExchangeSessions.ListAvailableExchangeConnectionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangeSessions.ListAvailableExchangeConnectionsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

### retrieveCustomerExchangeSession

- **Signature**: `retrieveCustomerExchangeSession(request: ExchangeSessions.RetrieveCustomerExchangeSessionRequest, options?: RequestOptions): ApiPromise<undefined, ExchangeSessions.RetrieveCustomerExchangeSessionError>`
- **Wire**: `GET /exchange-sessions/{id}`
- **Auth**: `clientCredentials`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `DwollaApiError` with `kind: "api"`, an instance of `ExchangeSessions.RetrieveCustomerExchangeSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error403"` [403] no body · `"error404"` [404] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ExchangeSessions.RetrieveCustomerExchangeSessionRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `accept` | `header` | `Accept` | `Accept` | no | `Accept.ApplicationVndDwollaV1HalJson` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Accept` | `acceptSchema` | `src/models/accept.ts` |

