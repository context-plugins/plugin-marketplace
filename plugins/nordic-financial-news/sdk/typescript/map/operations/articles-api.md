<!-- Generated file — do not edit; regenerated with the SDK. -->

# ArticlesApi — operations

Accessor: `client.articlesApi` · Source: `src/resources/articles-api.ts` · 2 operations · Request and error types: namespace `ArticlesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `nordic-financial-news`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getApiV1Articles

- **Signature**: `getApiV1Articles(request?: ArticlesApi.GetApiV1ArticlesRequest, options?: RequestOptions): ApiPromise<ApiV1ArticlesResponse1, ArticlesApi.GetApiV1ArticlesError>`
- **Wire**: `GET /api/v1/articles`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ArticlesResponse1`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `ArticlesApi.GetApiV1ArticlesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [401] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ArticlesApi.GetApiV1ArticlesRequest` (28):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `limit` | `query` | — | `number` | no |
| `cursor` | `query` | — | `string` | no |
| `fields` | `query` | — | `string` | no |
| `updatedAfter` | `query` | `updated_after` | `string` | no |
| `q` | `query` | — | `string` | no |
| `sort` | `query` | — | `Sort` | no |
| `mode` | `query` | — | `Mode` | no |
| `country` | `query` | — | `string` | no |
| `category` | `query` | — | `string` | no |
| `sources` | `query` | — | `string` | no |
| `sourceType` | `query` | `source_type` | `string` | no |
| `ticker` | `query` | — | `string` | no |
| `company` | `query` | — | `string` | no |
| `exchange` | `query` | — | `string` | no |
| `market` | `query` | — | `string` | no |
| `domicile` | `query` | — | `string` | no |
| `index` | `query` | — | `string` | no |
| `sector` | `query` | — | `string` | no |
| `contentType` | `query` | `content_type` | `string` | no |
| `publishedAfter` | `query` | `published_after` | `string` | no |
| `publishedBefore` | `query` | `published_before` | `string` | no |
| `listed` | `query` | — | `string` | no |
| `watchlist` | `query` | — | `string` | no |
| `primaryOnly` | `query` | `primary_only` | `boolean` | no |
| `includePeripheral` | `query` | `include_peripheral` | `boolean` | no |
| `ids` | `query` | — | `string` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Sort` | `sortSchema` | `src/models/sort.ts` |
| `Mode` | `modeSchema` | `src/models/mode.ts` |
| `ApiV1ArticlesResponse1` | `apiV1ArticlesResponse1Schema` | `src/models/api-v1-articles-response1.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

### getApiV1ArticlesById

- **Signature**: `getApiV1ArticlesById(request: ArticlesApi.GetApiV1ArticlesByIdRequest, options?: RequestOptions): ApiPromise<ApiV1ArticlesResponse, ArticlesApi.GetApiV1ArticlesByIdError>`
- **Wire**: `GET /api/v1/articles/{id}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV1ArticlesResponse`
- **Error**: `NordicFinancialNewsError` with `kind: "api"`, an instance of `ArticlesApi.GetApiV1ArticlesByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error304"` [304] no body · `"problemDetails"` [404] `ProblemDetails` · `"problemDetails2"` [401] `ProblemDetails` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ArticlesApi.GetApiV1ArticlesByIdRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes |
| `includePeripheral` | `query` | `include_peripheral` | `boolean` | no |
| `ifNoneMatch` | `header` | `If-None-Match` | `string` | no |
| `ifModifiedSince` | `header` | `If-Modified-Since` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV1ArticlesResponse` | `apiV1ArticlesResponseSchema` | `src/models/api-v1-articles-response.ts` |
| `ProblemDetails` | `problemDetailsSchema` | `src/models/problem-details.ts` |

