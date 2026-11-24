<!-- Generated file — do not edit; regenerated with the SDK. -->

# Search — operations

Accessor: `client.search` · Source: `src/resources/search.ts` · 7 operations · Request and error types: namespace `Search`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `shortcut`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### search

- **Signature**: `search(request: Search.SearchRequest, options?: RequestOptions): ApiPromise<SearchResults, Search.SearchError>`
- **Wire**: `GET /api/v3/search`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SearchResults`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Search.SearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes |
| `pageSize` | `query` | `page_size` | `number` | no |
| `detail` | `query` | — | `Detail` | no |
| `next` | `query` | — | `string` | no |
| `entityTypes` | `query` | `entity_types` | `EntityType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail` | `detailSchema` | `src/models/detail.ts` |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `SearchResults` | `searchResultsSchema` | `src/models/search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |

### searchDocuments

- **Signature**: `searchDocuments(request: Search.SearchDocumentsRequest, options?: RequestOptions): ApiPromise<DocSearchResults, Search.SearchDocumentsError>`
- **Wire**: `GET /api/v3/search/documents`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DocSearchResults`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Search.SearchDocumentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"disabledFeatureError"` [403] `DisabledFeatureError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchDocumentsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `title` | `query` | — | `string` | yes |
| `archived` | `query` | — | `boolean` | no |
| `createdByMe` | `query` | `created_by_me` | `boolean` | no |
| `followedByMe` | `query` | `followed_by_me` | `boolean` | no |
| `pageSize` | `query` | `page_size` | `number` | no |
| `next` | `query` | — | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DocSearchResults` | `docSearchResultsSchema` | `src/models/doc-search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |
| `DisabledFeatureError` | `disabledFeatureErrorSchema` | `src/models/disabled-feature-error.ts` |

### searchEpics

- **Signature**: `searchEpics(request: Search.SearchEpicsRequest, options?: RequestOptions): ApiPromise<EpicSearchResults, Search.SearchEpicsError>`
- **Wire**: `GET /api/v3/search/epics`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EpicSearchResults`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Search.SearchEpicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchEpicsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes |
| `pageSize` | `query` | `page_size` | `number` | no |
| `detail` | `query` | — | `Detail` | no |
| `next` | `query` | — | `string` | no |
| `entityTypes` | `query` | `entity_types` | `EntityType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail` | `detailSchema` | `src/models/detail.ts` |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `EpicSearchResults` | `epicSearchResultsSchema` | `src/models/epic-search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |

### searchIterations

- **Signature**: `searchIterations(request: Search.SearchIterationsRequest, options?: RequestOptions): ApiPromise<IterationSearchResults, Search.SearchIterationsError>`
- **Wire**: `GET /api/v3/search/iterations`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IterationSearchResults`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Search.SearchIterationsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchIterationsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes |
| `pageSize` | `query` | `page_size` | `number` | no |
| `detail` | `query` | — | `Detail` | no |
| `next` | `query` | — | `string` | no |
| `entityTypes` | `query` | `entity_types` | `EntityType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail` | `detailSchema` | `src/models/detail.ts` |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `IterationSearchResults` | `iterationSearchResultsSchema` | `src/models/iteration-search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |

### searchMilestones

- **Signature**: `searchMilestones(request: Search.SearchMilestonesRequest, options?: RequestOptions): ApiPromise<ObjectiveSearchResults, Search.SearchMilestonesError>`
- **Wire**: `GET /api/v3/search/milestones`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ObjectiveSearchResults`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Search.SearchMilestonesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchMilestonesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes |
| `pageSize` | `query` | `page_size` | `number` | no |
| `detail` | `query` | — | `Detail` | no |
| `next` | `query` | — | `string` | no |
| `entityTypes` | `query` | `entity_types` | `EntityType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail` | `detailSchema` | `src/models/detail.ts` |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `ObjectiveSearchResults` | `objectiveSearchResultsSchema` | `src/models/objective-search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |

### searchObjectives

- **Signature**: `searchObjectives(request: Search.SearchObjectivesRequest, options?: RequestOptions): ApiPromise<ObjectiveSearchResults, Search.SearchObjectivesError>`
- **Wire**: `GET /api/v3/search/objectives`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ObjectiveSearchResults`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Search.SearchObjectivesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchObjectivesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes |
| `pageSize` | `query` | `page_size` | `number` | no |
| `detail` | `query` | — | `Detail` | no |
| `next` | `query` | — | `string` | no |
| `entityTypes` | `query` | `entity_types` | `EntityType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail` | `detailSchema` | `src/models/detail.ts` |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `ObjectiveSearchResults` | `objectiveSearchResultsSchema` | `src/models/objective-search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |

### searchStories

- **Signature**: `searchStories(request: Search.SearchStoriesRequest, options?: RequestOptions): ApiPromise<StorySearchResults, Search.SearchStoriesError>`
- **Wire**: `GET /api/v3/search/stories`
- **Auth**: `apiToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StorySearchResults`
- **Error**: `ShortcutError` with `kind: "api"`, an instance of `Search.SearchStoriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"maxSearchResultsExceededError"` [400] `MaxSearchResultsExceededError` · `"error404"` [404] no body · `"error422"` [422] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `Search.SearchStoriesRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `query` | `query` | — | `string` | yes |
| `pageSize` | `query` | `page_size` | `number` | no |
| `detail` | `query` | — | `Detail` | no |
| `next` | `query` | — | `string` | no |
| `entityTypes` | `query` | `entity_types` | `EntityType[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Detail` | `detailSchema` | `src/models/detail.ts` |
| `EntityType` | `entityTypeSchema` | `src/models/entity-type.ts` |
| `StorySearchResults` | `storySearchResultsSchema` | `src/models/story-search-results.ts` |
| `MaxSearchResultsExceededError` | `maxSearchResultsExceededErrorSchema` | `src/models/max-search-results-exceeded-error.ts` |

