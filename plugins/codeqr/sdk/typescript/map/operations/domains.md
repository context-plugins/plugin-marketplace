<!-- Generated file — do not edit; regenerated with the SDK. -->

# Domains — operations

Accessor: `client.domains` · Source: `src/resources/domains.ts` · 4 operations · Request and error types: namespace `Domains`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `code-qr`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDomain

- **Signature**: `createDomain(request?: Domains.CreateDomainRequest, options?: RequestOptions): ApiPromise<DomainSchema, Domains.CreateDomainError>`
- **Wire**: `POST /domains`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DomainSchema`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Domains.CreateDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Domains.CreateDomainRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `DomainsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DomainsRequest` | `domainsRequestSchema` | `src/models/domains-request.ts` |
| `DomainSchema` | `domainSchemaSchema` | `src/models/domain-schema.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### deleteDomain

- **Signature**: `deleteDomain(request: Domains.DeleteDomainRequest, options?: RequestOptions): ApiPromise<DomainsResponse, Domains.DeleteDomainError>`
- **Wire**: `DELETE /domains/{slug}`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DomainsResponse`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Domains.DeleteDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Domains.DeleteDomainRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slug` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `DomainsResponse` | `domainsResponseSchema` | `src/models/domains-response.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### listDomains

- **Signature**: `listDomains(request?: Domains.ListDomainsRequest, options?: RequestOptions): ApiPromise<DomainSchema[], Domains.ListDomainsError>`
- **Wire**: `GET /domains`
- **Auth**: `token`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DomainSchema[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Domains.ListDomainsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Domains.ListDomainsRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `archived` | `query` | `boolean` | no | `false` |
| `search` | `query` | `string` | no | — |
| `page` | `query` | `number` | no | `1` |
| `pageSize` | `query` | `number` | no | `50` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DomainSchema` | `domainSchemaSchema` | `src/models/domain-schema.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

### updateDomain

- **Signature**: `updateDomain(request: Domains.UpdateDomainRequest, options?: RequestOptions): ApiPromise<DomainSchema, Domains.UpdateDomainError>`
- **Wire**: `PATCH /domains/{slug}`
- **Auth**: `token`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `DomainSchema`
- **Error**: `CodeQrError` with `kind: "api"`, an instance of `Domains.UpdateDomainError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"m4001"` [400] `M4001` · `"m40012"` [401] `M4001` · `"m40013"` [403] `M4001` · `"m40014"` [404] `M4001` · `"m40015"` [409] `M4001` · `"m40016"` [410] `M4001` · `"m40017"` [422] `M4001` · `"m40018"` [429] `M4001` · `"m40019"` [500] `M4001` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Domains.UpdateDomainRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `slug` | `path` | `string` | yes |
| `body` | `body` | `DomainsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DomainsRequest1` | `domainsRequest1Schema` | `src/models/domains-request1.ts` |
| `DomainSchema` | `domainSchemaSchema` | `src/models/domain-schema.ts` |
| `M4001` | `m4001Schema` | `src/models/m4001.ts` |

