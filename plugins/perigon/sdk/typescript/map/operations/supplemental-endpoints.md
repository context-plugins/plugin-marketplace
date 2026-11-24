<!-- Generated file — do not edit; regenerated with the SDK. -->

# SupplementalEndpoints — operations

Accessor: `client.supplementalEndpoints` · Source: `src/resources/supplemental-endpoints.ts` · 6 operations · Request and error types: namespace `SupplementalEndpoints`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `perigon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### getJournalistById

- **Signature**: `getJournalistById(request: SupplementalEndpoints.GetJournalistByIdRequest, options?: RequestOptions): ApiPromise<Journalist, SupplementalEndpoints.GetJournalistByIdError>`
- **Wire**: `GET /v1/journalists/{id}`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Journalist`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `SupplementalEndpoints.GetJournalistByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [404] `ErrorResponse` · `"errorResponse3"` [500] `ErrorResponse` · `"errorResponse4"` [400] `ErrorResponse` · `"errorResponse5"` [403] `ErrorResponse` · `"errorResponse6"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupplementalEndpoints.GetJournalistByIdRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Journalist` | `journalistSchema` | `src/models/journalist.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchCompanies

- **Signature**: `searchCompanies(request?: SupplementalEndpoints.SearchCompaniesRequest, options?: RequestOptions): ApiPromise<CompanySearchResult, SupplementalEndpoints.SearchCompaniesError>`
- **Wire**: `GET /v1/companies/all`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompanySearchResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `SupplementalEndpoints.SearchCompaniesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupplementalEndpoints.SearchCompaniesRequest` (16):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `query` | `string[]` | no |
| `symbol` | `query` | `string[]` | no |
| `symbolIsin` | `query` | `string[]` | no |
| `domain` | `query` | `string[]` | no |
| `country` | `query` | `string[]` | no |
| `exchange` | `query` | `string[]` | no |
| `numEmployeesFrom` | `query` | `number` | no |
| `numEmployeesTo` | `query` | `number` | no |
| `ipoFrom` | `query` | `Date` (date-time) | no |
| `ipoTo` | `query` | `Date` (date-time) | no |
| `q` | `query` | `string` | no |
| `name` | `query` | `string` | no |
| `industry` | `query` | `string` | no |
| `sector` | `query` | `string` | no |
| `size` | `query` | `number` | no |
| `page` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompanySearchResult` | `companySearchResultSchema` | `src/models/company-search-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchJournalists

- **Signature**: `searchJournalists(request?: SupplementalEndpoints.SearchJournalistsRequest, options?: RequestOptions): ApiPromise<JournalistSearchResult, SupplementalEndpoints.SearchJournalistsError>`
- **Wire**: `GET /v1/journalists/all`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `JournalistSearchResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `SupplementalEndpoints.SearchJournalistsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupplementalEndpoints.SearchJournalistsRequest` (22):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `query` | `string[]` | no |
| `q` | `query` | `string` | no |
| `name` | `query` | `string` | no |
| `twitter` | `query` | `string` | no |
| `sortBy` | `query` | `JournalistsSortBy` | no |
| `size` | `query` | `number` | no |
| `page` | `query` | `number` | no |
| `source` | `query` | `string[]` | no |
| `topic` | `query` | `string[]` | no |
| `category` | `query` | `string[]` | no |
| `label` | `query` | `string[]` | no |
| `minMonthlyPosts` | `query` | `number` | no |
| `maxMonthlyPosts` | `query` | `number` | no |
| `country` | `query` | `string[]` | no |
| `locationCountry` | `query` | `string[]` | no |
| `locationState` | `query` | `string[]` | no |
| `locationCounty` | `query` | `string[]` | no |
| `locationCity` | `query` | `string[]` | no |
| `locationArea` | `query` | `string[]` | no |
| `updatedAtFrom` | `query` | `Date` (date-time) | no |
| `updatedAtTo` | `query` | `Date` (date-time) | no |
| `showNumResults` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `JournalistsSortBy` | `journalistsSortBySchema` | `src/models/journalists-sort-by.ts` |
| `JournalistSearchResult` | `journalistSearchResultSchema` | `src/models/journalist-search-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchPeople

- **Signature**: `searchPeople(request?: SupplementalEndpoints.SearchPeopleRequest, options?: RequestOptions): ApiPromise<PeopleSearchResult, SupplementalEndpoints.SearchPeopleError>`
- **Wire**: `GET /v1/people/all`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PeopleSearchResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `SupplementalEndpoints.SearchPeopleError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupplementalEndpoints.SearchPeopleRequest` (6):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | no |
| `wikidataId` | `query` | `string[]` | no |
| `occupationId` | `query` | `string[]` | no |
| `occupationLabel` | `query` | `string` | no |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PeopleSearchResult` | `peopleSearchResultSchema` | `src/models/people-search-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchSources

- **Signature**: `searchSources(request?: SupplementalEndpoints.SearchSourcesRequest, options?: RequestOptions): ApiPromise<SourceSearchResult, SupplementalEndpoints.SearchSourcesError>`
- **Wire**: `GET /v1/sources/all`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SourceSearchResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `SupplementalEndpoints.SearchSourcesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupplementalEndpoints.SearchSourcesRequest` (24):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `domain` | `query` | `string[]` | no |
| `name` | `query` | `string` | no |
| `sourceGroup` | `query` | `string` | no |
| `sortBy` | `query` | `SourcesSortBy` | no |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |
| `minMonthlyVisits` | `query` | `number` | no |
| `maxMonthlyVisits` | `query` | `number` | no |
| `minMonthlyPosts` | `query` | `number` | no |
| `maxMonthlyPosts` | `query` | `number` | no |
| `country` | `query` | `string[]` | no |
| `sourceCountry` | `query` | `string[]` | no |
| `sourceState` | `query` | `string[]` | no |
| `sourceCounty` | `query` | `string[]` | no |
| `sourceCity` | `query` | `string[]` | no |
| `sourceLat` | `query` | `number` | no |
| `sourceLon` | `query` | `number` | no |
| `sourceMaxDistance` | `query` | `number` | no |
| `category` | `query` | `string[]` | no |
| `topic` | `query` | `string[]` | no |
| `label` | `query` | `string[]` | no |
| `paywall` | `query` | `boolean` | no |
| `showSubdomains` | `query` | `boolean` | no |
| `showNumResults` | `query` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SourcesSortBy` | `sourcesSortBySchema` | `src/models/sources-sort-by.ts` |
| `SourceSearchResult` | `sourceSearchResultSchema` | `src/models/source-search-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

### searchTopics

- **Signature**: `searchTopics(request?: SupplementalEndpoints.SearchTopicsRequest, options?: RequestOptions): ApiPromise<TopicSearchResult, SupplementalEndpoints.SearchTopicsError>`
- **Wire**: `GET /v1/topics/all`
- **Auth**: `apiKeyAuth`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TopicSearchResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `SupplementalEndpoints.SearchTopicsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SupplementalEndpoints.SearchTopicsRequest` (5):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `name` | `query` | `string` | no |
| `category` | `query` | `string` | no |
| `subcategory` | `query` | `string` | no |
| `page` | `query` | `number` | no |
| `size` | `query` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TopicSearchResult` | `topicSearchResultSchema` | `src/models/topic-search-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

