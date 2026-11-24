<!-- Generated file — do not edit; regenerated with the SDK. -->

# AiAdvancedSearch — operations

Accessor: `client.AiAdvancedSearch` · Source: `src/Perigon/Api/AiAdvancedSearch.cs` · 1 operation

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchSummarizer

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchSummarizer(SearchSummarizerRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Query params (wire ← C#)**: `q` ← `Q`, `title` ← `Title`, `desc` ← `Desc`, `content` ← `Content`, `summary` ← `Summary`, `url` ← `Url`, `articleId` ← `ArticleId`, `clusterId` ← `ClusterId`, `sortBy` ← `SortBy`, `page` ← `Page`, `from` ← `From`, `to` ← `To`, `addDateFrom` ← `AddDateFrom`, `addDateTo` ← `AddDateTo`, `refreshDateFrom` ← `RefreshDateFrom`, `refreshDateTo` ← `RefreshDateTo`, `medium` ← `Medium`, `source` ← `Source`, `sourceGroup` ← `SourceGroup`, `excludeSourceGroup` ← `ExcludeSourceGroup`, `excludeSource` ← `ExcludeSource`, `watchlist` ← `Watchlist`, `excludeWatchlist` ← `ExcludeWatchlist`, `paywall` ← `Paywall`, `byline` ← `Byline`, `author` ← `Author`, `excludeAuthor` ← `ExcludeAuthor`, `journalistId` ← `JournalistId`, `excludeJournalistId` ← `ExcludeJournalistId`, `language` ← `Language`, `excludeLanguage` ← `ExcludeLanguage`, `searchTranslation` ← `SearchTranslation`, `label` ← `Label`, `excludeLabel` ← `ExcludeLabel`, `category` ← `Category`, `excludeCategory` ← `ExcludeCategory`, `topic` ← `Topic`, `excludeTopic` ← `ExcludeTopic`, `linkTo` ← `LinkTo`, `showReprints` ← `ShowReprints`, `reprintGroupId` ← `ReprintGroupId`, `city` ← `City`, `excludeCity` ← `ExcludeCity`, `area` ← `Area`, `state` ← `State`, `excludeState` ← `ExcludeState`, `county` ← `County`, `excludeCounty` ← `ExcludeCounty`, `locationsCountry` ← `LocationsCountry`, `country` ← `Country`, `excludeLocationsCountry` ← `ExcludeLocationsCountry`, `location` ← `Location`, `lat` ← `Lat`, `lon` ← `Lon`, `maxDistance` ← `MaxDistance`, `sourceCity` ← `SourceCity`, `excludeSourceCity` ← `ExcludeSourceCity`, `sourceCounty` ← `SourceCounty`, `excludeSourceCounty` ← `ExcludeSourceCounty`, `sourceCountry` ← `SourceCountry`, `excludeSourceCountry` ← `ExcludeSourceCountry`, `sourceState` ← `SourceState`, `excludeSourceState` ← `ExcludeSourceState`, `sourceLat` ← `SourceLat`, `sourceLon` ← `SourceLon`, `sourceMaxDistance` ← `SourceMaxDistance`, `personWikidataId` ← `PersonWikidataId`, `excludePersonWikidataId` ← `ExcludePersonWikidataId`, `personName` ← `PersonName`, `excludePersonName` ← `ExcludePersonName`, `companyId` ← `CompanyId`, `excludeCompanyId` ← `ExcludeCompanyId`, `companyName` ← `CompanyName`, `companyDomain` ← `CompanyDomain`, `excludeCompanyDomain` ← `ExcludeCompanyDomain`, `companySymbol` ← `CompanySymbol`, `companyIsin` ← `CompanyIsin`, `companySymbolIsin` ← `CompanySymbolIsin`, `excludeCompanyIsin` ← `ExcludeCompanyIsin`, `excludeCompanySymbolIsin` ← `ExcludeCompanySymbolIsin`, `excludeCompanySymbol` ← `ExcludeCompanySymbol`, `positiveSentimentFrom` ← `PositiveSentimentFrom`, `positiveSentimentTo` ← `PositiveSentimentTo`, `neutralSentimentFrom` ← `NeutralSentimentFrom`, `neutralSentimentTo` ← `NeutralSentimentTo`, `negativeSentimentFrom` ← `NegativeSentimentFrom`, `negativeSentimentTo` ← `NegativeSentimentTo`, `taxonomy` ← `Taxonomy`, `prefixTaxonomy` ← `PrefixTaxonomy`, `showHighlighting` ← `ShowHighlighting`, `highlightFragmentSize` ← `HighlightFragmentSize`, `highlightNumFragments` ← `HighlightNumFragments`, `highlightPreTag` ← `HighlightPreTag`, `highlightPostTag` ← `HighlightPostTag`, `highlightQ` ← `HighlightQ`
- **Returns**: `SummarySearchResult`
- **Error**: `ApiException<SearchSummarizerError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchSummarizerRequest` | `src/Perigon/Requests/AiAdvancedSearch/SearchSummarizerRequest.cs` |
| `AllEndpointSortBy` | `src/Perigon/Models/Enums/AllEndpointSortBy.cs` |
| `SummaryBody` | `src/Perigon/Models/SummaryBody.cs` |
| `SummarySearchResult` | `src/Perigon/Models/SummarySearchResult.cs` |
| `SearchSummarizerError` | `src/Perigon/Errors/SearchSummarizerError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

