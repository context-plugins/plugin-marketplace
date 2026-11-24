<!-- Generated file — do not edit; regenerated with the SDK. -->

# Wikipedia — operations

Accessor: `client.Wikipedia` · Source: `src/Perigon/Api/Wikipedia.cs` · 2 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### SearchWikipedia

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchWikipedia(SearchWikipediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `title` ← `Title`, `summary` ← `Summary`, `text` ← `Text`, `reference` ← `Reference`, `id` ← `Id`, `wikiPageId` ← `WikiPageId`, `wikiRevisionId` ← `WikiRevisionId`, `wikiCode` ← `WikiCode`, `wikiNamespace` ← `WikiNamespace`, `wikidataId` ← `WikidataId`, `wikidataInstanceOfId` ← `WikidataInstanceOfId`, `wikidataInstanceOfLabel` ← `WikidataInstanceOfLabel`, `category` ← `Category`, `sectionId` ← `SectionId`, `wikiRevisionFrom` ← `WikiRevisionFrom`, `wikiRevisionTo` ← `WikiRevisionTo`, `scrapedAtFrom` ← `ScrapedAtFrom`, `scrapedAtTo` ← `ScrapedAtTo`, `pageviewsFrom` ← `PageviewsFrom`, `pageviewsTo` ← `PageviewsTo`, `withPageviews` ← `WithPageviews`, `showNumResults` ← `ShowNumResults`, `page` ← `Page`, `size` ← `Size`, `sortBy` ← `SortBy`
- **Returns**: `WikipediaSearchResult`
- **Error**: `ApiException<SearchWikipediaError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchWikipediaRequest` | `src/Perigon/Requests/Wikipedia/SearchWikipediaRequest.cs` |
| `SortByPerigonWikipediaApi` | `src/Perigon/Models/Enums/SortByPerigonWikipediaApi.cs` |
| `WikipediaSearchResult` | `src/Perigon/Models/WikipediaSearchResult.cs` |
| `SearchWikipediaError` | `src/Perigon/Errors/SearchWikipediaError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### VectorSearchWikipedia

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `VectorSearchWikipedia(VectorSearchWikipediaRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `WikipediaVectorSearchResult`
- **Error**: `ApiException<VectorSearchWikipediaError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `VectorSearchWikipediaRequest` | `src/Perigon/Requests/Wikipedia/VectorSearchWikipediaRequest.cs` |
| `WikipediaSearchParams` | `src/Perigon/Models/WikipediaSearchParams.cs` |
| `WikipediaVectorSearchResult` | `src/Perigon/Models/WikipediaVectorSearchResult.cs` |
| `VectorSearchWikipediaError` | `src/Perigon/Errors/VectorSearchWikipediaError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

