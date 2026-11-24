<!-- Generated file — do not edit; regenerated with the SDK. -->

# StoriesApi — operations

Accessor: `client.storiesApi` · Source: `src/resources/stories-api.ts` · 2 operations · Request and error types: namespace `StoriesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Stories

- **Signature**: `getApiV1Stories(request?: StoriesApi.GetApiV1StoriesRequest, options?: RequestOptions): ApiPromise<ApiV1StoriesResponse, StoriesApi.GetApiV1StoriesError>`
- **Wire**: `GET /api/v1/stories`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1StoriesResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `StoriesApi.GetApiV1StoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [401] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoriesApi.GetApiV1StoriesRequest` (23):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `updatedAfter` | `query` | `updated_after` | `string` | no |
| `q` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort` | no |
| `mode` | `query` | — | `Mode` | no |
| `country` | `query` | — | `string` | no |
| `category` | `query` | — | `string` | no |
| `sources` | `query` | — | `string` | no |
| `ticker` | `query` | — | `string` | no |
| `company` | `query` | — | `string` | no |
| `exchange` | `query` | — | `string` | no |
| `market` | `query` | — | `string` | no |
| `domicile` | `query` | — | `string` | no |
| `index` | `query` | — | `string` | no |
| `sector` | `query` | — | `string` | no |
| `listed` | `query` | — | `string` | no |
| `watchlist` | `query` | — | `string` | no |
| `publishedAfter` | `query` | `published_after` | `string` | no |
| `publishedBefore` | `query` | `published_before` | `string` | no |
| `fields` | `query` | — | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `Mode` | `modeSchema` | `src/models/mode.ts` |
| `ApiV1StoriesResponse` | `apiV1StoriesResponseSchema` | `src/models/api-v1-stories-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1StoriesById

- **Signature**: `getApiV1StoriesById(request: StoriesApi.GetApiV1StoriesByIdRequest, options?: RequestOptions): ApiPromise<ApiV1StoriesResponse1, StoriesApi.GetApiV1StoriesByIdError>`
- **Wire**: `GET /api/v1/stories/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1StoriesResponse1`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `StoriesApi.GetApiV1StoriesByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [404] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `StoriesApi.GetApiV1StoriesByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1StoriesResponse1` | `apiV1StoriesResponse1Schema` | `src/models/api-v1-stories-response1.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

