<!-- Generated file — do not edit; regenerated with the SDK. -->

# AiAdvancedSearch — operations

Accessor: `client.aiAdvancedSearch` · Source: `src/resources/ai-advanced-search.ts` · 1 operation · Request and error types: namespace `AiAdvancedSearch`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `perigon`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### searchSummarizer

- **Signature**: `searchSummarizer(request: AiAdvancedSearch.SearchSummarizerRequest, options?: RequestOptions): ApiPromise<SummarySearchResult, AiAdvancedSearch.SearchSummarizerError>`
- **Wire**: `POST /v1/summarize`
- **Auth**: `apiKeyAuth`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SummarySearchResult`
- **Error**: `PerigonError` with `kind: "api"`, an instance of `AiAdvancedSearch.SearchSummarizerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"errorResponse"` [401] `ErrorResponse` · `"errorResponse2"` [500] `ErrorResponse` · `"errorResponse3"` [400] `ErrorResponse` · `"errorResponse4"` [403] `ErrorResponse` · `"errorResponse5"` [429] `ErrorResponse` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AiAdvancedSearch.SearchSummarizerRequest` (96):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `q` | `query` | `string` | no |
| `title` | `query` | `string` | no |
| `desc` | `query` | `string` | no |
| `content` | `query` | `string` | no |
| `summary` | `query` | `string` | no |
| `url` | `query` | `string` | no |
| `articleId` | `query` | `string[]` | no |
| `clusterId` | `query` | `string[]` | no |
| `sortBy` | `query` | `AllEndpointSortBy` | no |
| `page` | `query` | `number` | no |
| `from` | `query` | `Date` (date-time) | no |
| `to` | `query` | `Date` (date-time) | no |
| `addDateFrom` | `query` | `Date` (date-time) | no |
| `addDateTo` | `query` | `Date` (date-time) | no |
| `refreshDateFrom` | `query` | `Date` (date-time) | no |
| `refreshDateTo` | `query` | `Date` (date-time) | no |
| `medium` | `query` | `string[]` | no |
| `source` | `query` | `string[]` | no |
| `sourceGroup` | `query` | `string[]` | no |
| `excludeSourceGroup` | `query` | `string[]` | no |
| `excludeSource` | `query` | `string[]` | no |
| `watchlist` | `query` | `string[]` | no |
| `excludeWatchlist` | `query` | `string[]` | no |
| `paywall` | `query` | `boolean` | no |
| `byline` | `query` | `string[]` | no |
| `author` | `query` | `string[]` | no |
| `excludeAuthor` | `query` | `string[]` | no |
| `journalistId` | `query` | `string[]` | no |
| `excludeJournalistId` | `query` | `string[]` | no |
| `language` | `query` | `string[]` | no |
| `excludeLanguage` | `query` | `string[]` | no |
| `searchTranslation` | `query` | `boolean` | no |
| `label` | `query` | `string[]` | no |
| `excludeLabel` | `query` | `string[]` | no |
| `category` | `query` | `string[]` | no |
| `excludeCategory` | `query` | `string[]` | no |
| `topic` | `query` | `string[]` | no |
| `excludeTopic` | `query` | `string[]` | no |
| `linkTo` | `query` | `string` | no |
| `showReprints` | `query` | `boolean` | no |
| `reprintGroupId` | `query` | `string` | no |
| `city` | `query` | `string[]` | no |
| `excludeCity` | `query` | `string[]` | no |
| `area` | `query` | `string[]` | no |
| `state` | `query` | `string[]` | no |
| `excludeState` | `query` | `string[]` | no |
| `county` | `query` | `string[]` | no |
| `excludeCounty` | `query` | `string[]` | no |
| `locationsCountry` | `query` | `string[]` | no |
| `country` | `query` | `string[]` | no |
| `excludeLocationsCountry` | `query` | `string[]` | no |
| `location` | `query` | `string[]` | no |
| `lat` | `query` | `number` | no |
| `lon` | `query` | `number` | no |
| `maxDistance` | `query` | `number` | no |
| `sourceCity` | `query` | `string[]` | no |
| `excludeSourceCity` | `query` | `string[]` | no |
| `sourceCounty` | `query` | `string[]` | no |
| `excludeSourceCounty` | `query` | `string[]` | no |
| `sourceCountry` | `query` | `string[]` | no |
| `excludeSourceCountry` | `query` | `string[]` | no |
| `sourceState` | `query` | `string[]` | no |
| `excludeSourceState` | `query` | `string[]` | no |
| `sourceLat` | `query` | `number` | no |
| `sourceLon` | `query` | `number` | no |
| `sourceMaxDistance` | `query` | `number` | no |
| `personWikidataId` | `query` | `string[]` | no |
| `excludePersonWikidataId` | `query` | `string[]` | no |
| `personName` | `query` | `string[]` | no |
| `excludePersonName` | `query` | `string[]` | no |
| `companyId` | `query` | `string[]` | no |
| `excludeCompanyId` | `query` | `string[]` | no |
| `companyName` | `query` | `string` | no |
| `companyDomain` | `query` | `string[]` | no |
| `excludeCompanyDomain` | `query` | `string[]` | no |
| `companySymbol` | `query` | `string[]` | no |
| `companyIsin` | `query` | `string[]` | no |
| `companySymbolIsin` | `query` | `string[]` | no |
| `excludeCompanyIsin` | `query` | `string[]` | no |
| `excludeCompanySymbolIsin` | `query` | `string[]` | no |
| `excludeCompanySymbol` | `query` | `string[]` | no |
| `positiveSentimentFrom` | `query` | `number` | no |
| `positiveSentimentTo` | `query` | `number` | no |
| `neutralSentimentFrom` | `query` | `number` | no |
| `neutralSentimentTo` | `query` | `number` | no |
| `negativeSentimentFrom` | `query` | `number` | no |
| `negativeSentimentTo` | `query` | `number` | no |
| `taxonomy` | `query` | `string[]` | no |
| `prefixTaxonomy` | `query` | `string` | no |
| `showHighlighting` | `query` | `boolean` | no |
| `highlightFragmentSize` | `query` | `number` | no |
| `highlightNumFragments` | `query` | `number` | no |
| `highlightPreTag` | `query` | `string` | no |
| `highlightPostTag` | `query` | `string` | no |
| `highlightQ` | `query` | `string` | no |
| `body` | `body` | `SummaryBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AllEndpointSortBy` | `allEndpointSortBySchema` | `src/models/all-endpoint-sort-by.ts` |
| `SummaryBody` | `summaryBodySchema` | `src/models/summary-body.ts` |
| `SummarySearchResult` | `summarySearchResultSchema` | `src/models/summary-search-result.ts` |
| `ErrorResponse` | `errorResponseSchema` | `src/models/error-response.ts` |

