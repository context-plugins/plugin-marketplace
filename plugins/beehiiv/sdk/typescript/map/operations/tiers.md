<!-- Generated file — do not edit; regenerated with the SDK. -->

# Tiers — operations

Accessor: `client.tiers` · Source: `src/resources/tiers.ts` · 5 operations · Request and error types: namespace `Tiers`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `beehiiv`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### create12

- **Signature**: `create12(request: Tiers.Create12Request, options?: RequestOptions): ApiPromise<TierResponse, Tiers.Create12Error>`
- **Wire**: `POST /publications/{publicationId}/tiers`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TierResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Tiers.Create12Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tiers.Create12Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsTiersRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsTiersRequest` | `publicationsTiersRequestSchema` | `src/models/publications-tiers-request.ts` |
| `TierResponse` | `tierResponseSchema` | `src/models/tier-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### index21

- **Signature**: `index21(request: Tiers.Index21Request, options?: RequestOptions): ApiPromise<IndexTiersResponse, Tiers.Index21Error>`
- **Wire**: `GET /publications/{publicationId}/tiers`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IndexTiersResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Tiers.Index21Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tiers.Index21Request` (6):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes | — |
| `expand` | `query` | `expand[]` | `string` | no | — |
| `limit` | `query` | — | `number` | no | — |
| `page` | `query` | — | `number` | no | — |
| `direction` | `query` | — | `RequestDirection` | no | `RequestDirection.Asc` |
| `authorization` | `header` | `Authorization` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RequestDirection` | `requestDirectionSchema` | `src/models/request-direction.ts` |
| `IndexTiersResponse` | `indexTiersResponseSchema` | `src/models/index-tiers-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### patch4

- **Signature**: `patch4(request: Tiers.Patch4Request, options?: RequestOptions): ApiPromise<TierResponse, Tiers.Patch4Error>`
- **Wire**: `PATCH /publications/{publicationId}/tiers/{tierId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TierResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Tiers.Patch4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tiers.Patch4Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `tierId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsTiersRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsTiersRequest1` | `publicationsTiersRequest1Schema` | `src/models/publications-tiers-request1.ts` |
| `TierResponse` | `tierResponseSchema` | `src/models/tier-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### put4

- **Signature**: `put4(request: Tiers.Put4Request, options?: RequestOptions): ApiPromise<TierResponse, Tiers.Put4Error>`
- **Wire**: `PUT /publications/{publicationId}/tiers/{tierId}`
- **Auth**: none — public; no credential is sent
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TierResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Tiers.Put4Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tiers.Put4Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `tierId` | `path` | — | `string` | yes |
| `authorization` | `header` | `Authorization` | `string` | yes |
| `body` | `body` | — | `PublicationsTiersRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PublicationsTiersRequest1` | `publicationsTiersRequest1Schema` | `src/models/publications-tiers-request1.ts` |
| `TierResponse` | `tierResponseSchema` | `src/models/tier-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### show16

- **Signature**: `show16(request: Tiers.Show16Request, options?: RequestOptions): ApiPromise<TierResponse, Tiers.Show16Error>`
- **Wire**: `GET /publications/{publicationId}/tiers/{tierId}`
- **Auth**: none — public; no credential is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TierResponse`
- **Error**: `BeehiivError` with `kind: "api"`, an instance of `Tiers.Show16Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [404] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Tiers.Show16Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `publicationId` | `path` | — | `string` | yes |
| `tierId` | `path` | — | `string` | yes |
| `expand` | `query` | `expand[]` | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TierResponse` | `tierResponseSchema` | `src/models/tier-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

