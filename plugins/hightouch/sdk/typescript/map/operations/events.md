<!-- Generated file — do not edit; regenerated with the SDK. -->

# Events — operations

Accessor: `client.events` · Source: `src/resources/events.ts` · 8 operations · Request and error types: namespace `Events`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `hightouch`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createContract

- **Signature**: `createContract(request: Events.CreateContractRequest, options?: RequestOptions): ApiPromise<EventsContractsResponse1, Events.CreateContractError>`
- **Wire**: `POST /events/contracts`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventsContractsResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Events.CreateContractError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.CreateContractRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `EventContractCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventContractCreate` | `eventContractCreateSchema` | `src/models/event-contract-create.ts` |
| `EventsContractsResponse1` | `eventsContractsResponse1Schema` | `src/models/unions/events-contracts-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### createDomain

- **Signature**: `createDomain(request: Events.CreateDomainRequest, options?: RequestOptions): ApiPromise<EventsDomainsResponse1, Events.CreateDomainError>`
- **Wire**: `POST /events/domains`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventsDomainsResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Events.CreateDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.CreateDomainRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `EventDomainCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventDomainCreate` | `eventDomainCreateSchema` | `src/models/event-domain-create.ts` |
| `EventsDomainsResponse1` | `eventsDomainsResponse1Schema` | `src/models/unions/events-domains-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### getContract

- **Signature**: `getContract(request: Events.GetContractRequest, options?: RequestOptions): ApiPromise<EventsContractsResponse1, Events.GetContractError>`
- **Wire**: `GET /events/contracts/{contractId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventsContractsResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Events.GetContractError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.GetContractRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contractId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventsContractsResponse1` | `eventsContractsResponse1Schema` | `src/models/unions/events-contracts-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### getDomain

- **Signature**: `getDomain(request: Events.GetDomainRequest, options?: RequestOptions): ApiPromise<EventsDomainsResponse1, Events.GetDomainError>`
- **Wire**: `GET /events/domains/{domainId}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventsDomainsResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Events.GetDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.GetDomainRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domainId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventsDomainsResponse1` | `eventsDomainsResponse1Schema` | `src/models/unions/events-domains-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### listContracts

- **Signature**: `listContracts(request?: Events.ListContractsRequest, options?: RequestOptions): ApiPromise<EventsContractsResponse, Events.ListContractsError>`
- **Wire**: `GET /events/contracts`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventsContractsResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Events.ListContractsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.ListContractsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `name` | `query` | `string` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `100` |
| `orderBy` | `query` | `OrderByHightouchEventsApi` | no | `OrderByHightouchEventsApi.Id` |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderByHightouchEventsApi` | `orderByHightouchEventsApiSchema` | `src/models/order-by-hightouch-events-api.ts` |
| `EventsContractsResponse` | `eventsContractsResponseSchema` | `src/models/events-contracts-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### listDomains

- **Signature**: `listDomains(request?: Events.ListDomainsRequest, options?: RequestOptions): ApiPromise<EventsDomainsResponse, Events.ListDomainsError>`
- **Wire**: `GET /events/domains`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventsDomainsResponse`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Events.ListDomainsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.ListDomainsRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `name` | `query` | `string` | no | — |
| `source` | `query` | `string` | no | — |
| `offset` | `query` | `number` | no | `0` |
| `limit` | `query` | `number` | no | `100` |
| `orderBy` | `query` | `OrderByHightouchEventsApi` | no | `OrderByHightouchEventsApi.Id` |

| Type | Schema value | Source |
| --- | --- | --- |
| `OrderByHightouchEventsApi` | `orderByHightouchEventsApiSchema` | `src/models/order-by-hightouch-events-api.ts` |
| `EventsDomainsResponse` | `eventsDomainsResponseSchema` | `src/models/events-domains-response.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |

### updateContract

- **Signature**: `updateContract(request: Events.UpdateContractRequest, options?: RequestOptions): ApiPromise<EventsContractsResponse11, Events.UpdateContractError>`
- **Wire**: `PATCH /events/contracts/{contractId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventsContractsResponse11`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Events.UpdateContractError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.UpdateContractRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `contractId` | `path` | `string` | yes |
| `body` | `body` | `EventContractUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventContractUpdate` | `eventContractUpdateSchema` | `src/models/event-contract-update.ts` |
| `EventsContractsResponse11` | `eventsContractsResponse11Schema` | `src/models/unions/events-contracts-response11.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

### updateDomain

- **Signature**: `updateDomain(request: Events.UpdateDomainRequest, options?: RequestOptions): ApiPromise<EventsDomainsResponse1, Events.UpdateDomainError>`
- **Wire**: `PATCH /events/domains/{domainId}`
- **Auth**: `bearerAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `EventsDomainsResponse1`
- **Error**: `HightouchError` with `kind: "api"`, an instance of `Events.UpdateDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"validateErrorJson"` [422] `ValidateErrorJson` · `"internalServerError"` [500] `InternalServerError` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Events.UpdateDomainRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domainId` | `path` | `string` | yes |
| `body` | `body` | `EventDomainUpdate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventDomainUpdate` | `eventDomainUpdateSchema` | `src/models/event-domain-update.ts` |
| `EventsDomainsResponse1` | `eventsDomainsResponse1Schema` | `src/models/unions/events-domains-response1.ts` |
| `ValidateErrorJson` | `validateErrorJsonSchema` | `src/models/validate-error-json.ts` |
| `InternalServerError` | `internalServerErrorSchema` | `src/models/internal-server-error.ts` |

