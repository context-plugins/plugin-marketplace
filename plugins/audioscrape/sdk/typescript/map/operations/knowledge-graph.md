<!-- Generated file — do not edit; regenerated with the SDK. -->

# KnowledgeGraph — operations

Accessor: `client.knowledgeGraph` · Source: `src/resources/knowledge-graph.ts` · 3 operations · Request and error types: namespace `KnowledgeGraph`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `audioscrape`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getEntity

- **Signature**: `getEntity(request: KnowledgeGraph.GetEntityRequest, options?: RequestOptions): ApiPromise<EntityDetail, KnowledgeGraph.GetEntityError>`
- **Wire**: `GET /api/entities/{entity_slug}`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntityDetail`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `KnowledgeGraph.GetEntityError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [404] `ApiErrorBody` · `"apiErrorBody5"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeGraph.GetEntityRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `entitySlug` | `path` | `entity_slug` | `string` | yes |
| `datasetId` | `query` | `dataset_id` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntityDetail` | `entityDetailSchema` | `src/models/entity-detail.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### getRealTrending

- **Signature**: `getRealTrending(options?: RequestOptions): ApiPromise<TrendingResponse, KnowledgeGraph.GetRealTrendingError>`
- **Wire**: `GET /api/trending`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrendingResponse`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `KnowledgeGraph.GetRealTrendingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `TrendingResponse` | `trendingResponseSchema` | `src/models/trending-response.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

### searchEntities

- **Signature**: `searchEntities(request?: KnowledgeGraph.SearchEntitiesRequest, options?: RequestOptions): ApiPromise<EntitySearchResponse, KnowledgeGraph.SearchEntitiesError>`
- **Wire**: `GET /api/entities`
- **Auth**: `bearerAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EntitySearchResponse`
- **Error**: `AudioscrapeError` with `kind: "api"`, an instance of `KnowledgeGraph.SearchEntitiesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"apiErrorBody"` [401] `ApiErrorBody` · `"apiErrorBody2"` [402] `ApiErrorBody` · `"apiErrorBody3"` [403] `ApiErrorBody` · `"apiErrorBody4"` [429] `ApiErrorBody` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `KnowledgeGraph.SearchEntitiesRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `q` | `query` | — | `string` | no |
| `type` | `query` | — | `string` | no |
| `limit` | `query` | — | `number` | no |
| `datasetId` | `query` | `dataset_id` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EntitySearchResponse` | `entitySearchResponseSchema` | `src/models/entity-search-response.ts` |
| `ApiErrorBody` | `apiErrorBodySchema` | `src/models/api-error-body.ts` |

