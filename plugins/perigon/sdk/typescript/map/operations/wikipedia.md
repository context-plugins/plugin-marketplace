<!-- Generated file — do not edit; regenerated with the SDK. -->

# Wikipedia — operations

Accessor: `client.wikipedia` · Source: `src/resources/wikipedia.ts` · 2 operations · Request and error types: namespace `Wikipedia`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `perigon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchWikipedia

- **Signature**: `searchWikipedia(request?: Wikipedia.SearchWikipediaRequest, options?: RequestOptions): ApiPromise<WikipediaSearchResult, Wikipedia.SearchWikipediaError>`
- **Wire**: `GET /v1/wikipedia/all`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `WikipediaSearchResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Wikipedia.SearchWikipediaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wikipedia.SearchWikipediaRequest` (26):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | no |
| `title` | `query` | `string` | no |
| `summary` | `query` | `string` | no |
| `text` | `query` | `string` | no |
| `reference` | `query` | `string` | no |
| `id` | `query` | `string[]` | no |
| `wikiPageId` | `query` | `number[]` | no |
| `wikiRevisionId` | `query` | `number[]` | no |
| `wikiCode` | `query` | `string[]` | no |
| `wikiNamespace` | `query` | `number[]` | no |
| `wikidataId` | `query` | `string[]` | no |
| `wikidataInstanceOfId` | `query` | `string[]` | no |
| `wikidataInstanceOfLabel` | `query` | `string[]` | no |
| `category` | `query` | `string[]` | no |
| `sectionId` | `query` | `string[]` | no |
| `wikiRevisionFrom` | `query` | `Date` (date-time) | no |
| `wikiRevisionTo` | `query` | `Date` (date-time) | no |
| `scrapedAtFrom` | `query` | `Date` (date-time) | no |
| `scrapedAtTo` | `query` | `Date` (date-time) | no |
| `pageviewsFrom` | `query` | `number` | no |
| `pageviewsTo` | `query` | `number` | no |
| `withPageviews` | `query` | `boolean` | no |
| `showNumResults` | `query` | `boolean` | no |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `sortBy` | `query` | `SortByPerigonWikipediaApi` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortByPerigonWikipediaApi` | `sortByPerigonWikipediaApiSchema` | `src/models/sort-by-perigon-wikipedia-api.ts` |
| `WikipediaSearchResult` | `wikipediaSearchResultSchema` | `src/models/wikipedia-search-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### vectorSearchWikipedia

- **Signature**: `vectorSearchWikipedia(request: Wikipedia.VectorSearchWikipediaRequest, options?: RequestOptions): ApiPromise<WikipediaVectorSearchResult, Wikipedia.VectorSearchWikipediaError>`
- **Wire**: `POST /v1/vector/wikipedia/all`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `WikipediaVectorSearchResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `Wikipedia.VectorSearchWikipediaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Wikipedia.VectorSearchWikipediaRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `WikipediaSearchParams` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `WikipediaSearchParams` | `wikipediaSearchParamsSchema` | `src/models/wikipedia-search-params.ts` |
| `WikipediaVectorSearchResult` | `wikipediaVectorSearchResultSchema` | `src/models/wikipedia-vector-search-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

