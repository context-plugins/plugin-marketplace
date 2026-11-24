<!-- Generated file — do not edit; regenerated with the SDK. -->

# Statutes — operations

Accessor: `client.statutes` · Source: `src/resources/statutes.ts` · 3 operations · Request and error types: namespace `Statutes`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `common-elements`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### statutesByState

- **Signature**: `statutesByState(request: Statutes.StatutesByStateRequest, options?: RequestOptions): ApiPromise<ApiV1StatutesByStateResponse, Statutes.StatutesByStateError>`
- **Wire**: `GET /api/v1/statutes/by-state`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1StatutesByStateResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Statutes.StatutesByStateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Statutes.StatutesByStateRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `state` | `query` | `string` | yes |
| `chapter` | `query` | `string` | no |
| `topic` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1StatutesByStateResponse` | `apiV1StatutesByStateResponseSchema` | `src/models/api-v1-statutes-by-state-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### statutesSearch

- **Signature**: `statutesSearch(request: Statutes.StatutesSearchRequest, options?: RequestOptions): ApiPromise<ApiV1StatutesSearchResponse, Statutes.StatutesSearchError>`
- **Wire**: `GET /api/v1/statutes/search`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1StatutesSearchResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Statutes.StatutesSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [429] `Error` · `"error5"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Statutes.StatutesSearchRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | yes |
| `state` | `query` | `string` | no |
| `limit` | `query` | `number` | no |
| `offset` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1StatutesSearchResponse` | `apiV1StatutesSearchResponseSchema` | `src/models/api-v1-statutes-search-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

### statutesSectionDetail

- **Signature**: `statutesSectionDetail(request: Statutes.StatutesSectionDetailRequest, options?: RequestOptions): ApiPromise<ApiV1StatutesSectionsResponse, Statutes.StatutesSectionDetailError>`
- **Wire**: `GET /api/v1/statutes/sections/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1StatutesSectionsResponse`
- **Error**: `CommonElementsError` with `kind: "api"`, an instance of `Statutes.StatutesSectionDetailError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [400] `Error` · `"error2"` [401] `Error` · `"error3"` [403] `Error` · `"error4"` [404] `Error` · `"error5"` [429] `Error` · `"error6"` [500] `Error` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Statutes.StatutesSectionDetailRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1StatutesSectionsResponse` | `apiV1StatutesSectionsResponseSchema` | `src/models/api-v1-statutes-sections-response.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |

