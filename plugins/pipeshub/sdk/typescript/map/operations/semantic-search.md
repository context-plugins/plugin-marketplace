<!-- Generated file — do not edit; regenerated with the SDK. -->

# SemanticSearch — operations

Accessor: `client.semanticSearch` · Source: `src/resources/semantic-search.ts` · 7 operations · Request and error types: namespace `SemanticSearch`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `pipes-hub-api`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### archiveSearch

- **Signature**: `archiveSearch(request: SemanticSearch.ArchiveSearchRequest, options?: RequestOptions): ApiPromise<SearchArchiveResponse, SemanticSearch.ArchiveSearchError>`
- **Wire**: `PATCH /search/{searchId}/archive`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchArchiveResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `SemanticSearch.ArchiveSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemanticSearch.ArchiveSearchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `searchId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchArchiveResponse` | `searchArchiveResponseSchema` | `src/models/search-archive-response.ts` |

### deleteSearchById

- **Signature**: `deleteSearchById(request: SemanticSearch.DeleteSearchByIdRequest, options?: RequestOptions): ApiPromise<RevokePatResponse, SemanticSearch.DeleteSearchByIdError>`
- **Wire**: `DELETE /search/{searchId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RevokePatResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `SemanticSearch.DeleteSearchByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemanticSearch.DeleteSearchByIdRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `searchId` | `path` | `string` | yes |
| `search` | `query` | `string` | no |
| `shared` | `query` | `Shared4` | no |
| `startDate` | `query` | `Date` (date-time) | no |
| `endDate` | `query` | `Date` (date-time) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Shared4` | `shared4Schema` | `src/models/shared4.ts` |
| `RevokePatResponse` | `revokePatResponseSchema` | `src/models/revoke-pat-response.ts` |

### deleteSearchHistory

- **Signature**: `deleteSearchHistory(request: SemanticSearch.DeleteSearchHistoryRequest, options?: RequestOptions): ApiPromise<RevokePatResponse, SemanticSearch.DeleteSearchHistoryError>`
- **Wire**: `DELETE /search`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `RevokePatResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `SemanticSearch.DeleteSearchHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemanticSearch.DeleteSearchHistoryRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `search` | `query` | `string` | no |
| `shared` | `query` | `Shared4` | no |
| `startDate` | `query` | `Date` (date-time) | no |
| `endDate` | `query` | `Date` (date-time) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Shared4` | `shared4Schema` | `src/models/shared4.ts` |
| `RevokePatResponse` | `revokePatResponseSchema` | `src/models/revoke-pat-response.ts` |

### getSearchById

- **Signature**: `getSearchById(request: SemanticSearch.GetSearchByIdRequest, options?: RequestOptions): ApiPromise<PersistedSemanticSearch[], SemanticSearch.GetSearchByIdError>`
- **Wire**: `GET /search/{searchId}`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PersistedSemanticSearch[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `SemanticSearch.GetSearchByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"search400Error21"` [400] `Search400Error21` · `"search401Error21"` [401] `Search401Error21` · `"search403Error21"` [403] `Search403Error21` · `"search404Error1"` [404] `Search404Error1` · `"search500Error21"` [500] `Search500Error21` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemanticSearch.GetSearchByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `searchId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PersistedSemanticSearch` | `persistedSemanticSearchSchema` | `src/models/persisted-semantic-search.ts` |
| `Search400Error21` | `search400Error21Schema` | `src/models/search400-error21.ts` |
| `Search401Error21` | `search401Error21Schema` | `src/models/search401-error21.ts` |
| `Search403Error21` | `search403Error21Schema` | `src/models/search403-error21.ts` |
| `Search404Error1` | `search404Error1Schema` | `src/models/search404-error1.ts` |
| `Search500Error21` | `search500Error21Schema` | `src/models/search500-error21.ts` |

### search

- **Signature**: `search(request: SemanticSearch.SearchRequest, options?: RequestOptions): ApiPromise<SemanticSearchExecuteResponse, SemanticSearch.SearchError>`
- **Wire**: `POST /search`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SemanticSearchExecuteResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `SemanticSearch.SearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [400] `ErrorResponse` · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"errorResponse2"` [422] `ErrorResponse` · `"error500"` [500] no body · `"error502"` [502] no body · `"error503"` [503] no body · `"error504"` [504] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemanticSearch.SearchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SemanticSearchRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SemanticSearchRequest` | `semanticSearchRequestSchema` | `src/models/semantic-search-request.ts` |
| `SemanticSearchExecuteResponse` | `semanticSearchExecuteResponseSchema` | `src/models/semantic-search-execute-response.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchHistory

- **Signature**: `searchHistory(request: SemanticSearch.SearchHistoryRequest, options?: RequestOptions): ApiPromise<SemanticSearchHistoryResponse, SemanticSearch.SearchHistoryError>`
- **Wire**: `GET /search`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SemanticSearchHistoryResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `SemanticSearch.SearchHistoryError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"search400Error1"` [400] `Search400Error1` · `"search401Error1"` [401] `Search401Error1` · `"search403Error1"` [403] `Search403Error1` · `"search500Error1"` [500] `Search500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemanticSearch.SearchHistoryRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `page` | `query` | `number` | no | `1` |
| `limit` | `query` | `number` | no | `20` |
| `sortBy` | `query` | `SortBy4` | no | `SortBy4.LastActivityAt` |
| `sortOrder` | `query` | `SortOrder` | no | `SortOrder.Desc` |
| `search` | `query` | `string` | no | — |
| `shared` | `query` | `Shared3` | no | — |
| `startDate` | `query` | `Date` (date-time) | no | — |
| `endDate` | `query` | `Date` (date-time) | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `SortBy4` | `sortBy4Schema` | `src/models/sort-by4.ts` |
| `SortOrder` | `sortOrderSchema` | `src/models/sort-order.ts` |
| `Shared3` | `shared3Schema` | `src/models/shared3.ts` |
| `SemanticSearchHistoryResponse` | `semanticSearchHistoryResponseSchema` | `src/models/semantic-search-history-response.ts` |
| `Search400Error1` | `search400Error1Schema` | `src/models/search400-error1.ts` |
| `Search401Error1` | `search401Error1Schema` | `src/models/search401-error1.ts` |
| `Search403Error1` | `search403Error1Schema` | `src/models/search403-error1.ts` |
| `Search500Error1` | `search500Error1Schema` | `src/models/search500-error1.ts` |

### unarchiveSearch

- **Signature**: `unarchiveSearch(request: SemanticSearch.UnarchiveSearchRequest, options?: RequestOptions): ApiPromise<SearchUnarchiveResponse, SemanticSearch.UnarchiveSearchError>`
- **Wire**: `PATCH /search/{searchId}/unarchive`
- **Auth**: any of `bearerAuth`, `oauth2AuthorizationCode`, `oauth2ClientCredentials` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SearchUnarchiveResponse`
- **Error**: `PipesHubApiError` with `kind: "api"`, an instance of `SemanticSearch.UnarchiveSearchError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error400"` [400] no body · `"error401"` [401] no body · `"error403"` [403] no body · `"error404"` [404] no body · `"error500"` [500] no body · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SemanticSearch.UnarchiveSearchRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `searchId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SearchUnarchiveResponse` | `searchUnarchiveResponseSchema` | `src/models/search-unarchive-response.ts` |

