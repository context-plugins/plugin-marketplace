<!-- Generated file — do not edit; regenerated with the SDK. -->

# SupplementalEndpoints — operations

Accessor: `client.SupplementalEndpoints` · Source: `src/Perigon/Api/SupplementalEndpoints.cs` · 6 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### GetJournalistById

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `GetJournalistById(GetJournalistByIdRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Returns**: `Journalist`
- **Error**: `ApiException<GetJournalistByIdError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 404, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetJournalistByIdRequest` | `src/Perigon/Requests/SupplementalEndpoints/GetJournalistByIdRequest.cs` |
| `Journalist` | `src/Perigon/Models/Journalist.cs` |
| `GetJournalistByIdError` | `src/Perigon/Errors/GetJournalistByIdError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### SearchCompanies

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchCompanies(SearchCompaniesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `id` ← `Id`, `symbol` ← `Symbol`, `symbolIsin` ← `SymbolIsin`, `domain` ← `Domain`, `country` ← `Country`, `exchange` ← `Exchange`, `numEmployeesFrom` ← `NumEmployeesFrom`, `numEmployeesTo` ← `NumEmployeesTo`, `ipoFrom` ← `IpoFrom`, `ipoTo` ← `IpoTo`, `q` ← `Q`, `name` ← `Name`, `industry` ← `Industry`, `sector` ← `Sector`, `size` ← `Size`, `page` ← `Page`
- **Returns**: `CompanySearchResult`
- **Error**: `ApiException<SearchCompaniesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchCompaniesRequest` | `src/Perigon/Requests/SupplementalEndpoints/SearchCompaniesRequest.cs` |
| `CompanySearchResult` | `src/Perigon/Models/CompanySearchResult.cs` |
| `SearchCompaniesError` | `src/Perigon/Errors/SearchCompaniesError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### SearchJournalists

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchJournalists(SearchJournalistsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `id` ← `Id`, `q` ← `Q`, `name` ← `Name`, `twitter` ← `Twitter`, `sortBy` ← `SortBy`, `size` ← `Size`, `page` ← `Page`, `source` ← `Source`, `topic` ← `Topic`, `category` ← `Category`, `label` ← `Label`, `minMonthlyPosts` ← `MinMonthlyPosts`, `maxMonthlyPosts` ← `MaxMonthlyPosts`, `country` ← `Country`, `locationCountry` ← `LocationCountry`, `locationState` ← `LocationState`, `locationCounty` ← `LocationCounty`, `locationCity` ← `LocationCity`, `locationArea` ← `LocationArea`, `updatedAtFrom` ← `UpdatedAtFrom`, `updatedAtTo` ← `UpdatedAtTo`, `showNumResults` ← `ShowNumResults`
- **Returns**: `JournalistSearchResult`
- **Error**: `ApiException<SearchJournalistsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchJournalistsRequest` | `src/Perigon/Requests/SupplementalEndpoints/SearchJournalistsRequest.cs` |
| `JournalistsSortBy` | `src/Perigon/Models/Enums/JournalistsSortBy.cs` |
| `JournalistSearchResult` | `src/Perigon/Models/JournalistSearchResult.cs` |
| `SearchJournalistsError` | `src/Perigon/Errors/SearchJournalistsError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### SearchPeople

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchPeople(SearchPeopleRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`, `wikidataId` ← `WikidataId`, `occupationId` ← `OccupationId`, `occupationLabel` ← `OccupationLabel`, `page` ← `Page`, `size` ← `Size`
- **Returns**: `PeopleSearchResult`
- **Error**: `ApiException<SearchPeopleError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchPeopleRequest` | `src/Perigon/Requests/SupplementalEndpoints/SearchPeopleRequest.cs` |
| `PeopleSearchResult` | `src/Perigon/Models/PeopleSearchResult.cs` |
| `SearchPeopleError` | `src/Perigon/Errors/SearchPeopleError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### SearchSources

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchSources(SearchSourcesRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `domain` ← `Domain`, `name` ← `Name`, `sourceGroup` ← `SourceGroup`, `sortBy` ← `SortBy`, `page` ← `Page`, `size` ← `Size`, `minMonthlyVisits` ← `MinMonthlyVisits`, `maxMonthlyVisits` ← `MaxMonthlyVisits`, `minMonthlyPosts` ← `MinMonthlyPosts`, `maxMonthlyPosts` ← `MaxMonthlyPosts`, `country` ← `Country`, `sourceCountry` ← `SourceCountry`, `sourceState` ← `SourceState`, `sourceCounty` ← `SourceCounty`, `sourceCity` ← `SourceCity`, `sourceLat` ← `SourceLat`, `sourceLon` ← `SourceLon`, `sourceMaxDistance` ← `SourceMaxDistance`, `category` ← `Category`, `topic` ← `Topic`, `label` ← `Label`, `paywall` ← `Paywall`, `showSubdomains` ← `ShowSubdomains`, `showNumResults` ← `ShowNumResults`
- **Returns**: `SourceSearchResult`
- **Error**: `ApiException<SearchSourcesError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchSourcesRequest` | `src/Perigon/Requests/SupplementalEndpoints/SearchSourcesRequest.cs` |
| `SourcesSortBy` | `src/Perigon/Models/Enums/SourcesSortBy.cs` |
| `SourceSearchResult` | `src/Perigon/Models/SourceSearchResult.cs` |
| `SearchSourcesError` | `src/Perigon/Errors/SearchSourcesError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

### SearchTopics

- **Auth**: `options.ApiKeyAuth`
- **Signature**: `SearchTopics(SearchTopicsRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `name` ← `Name`, `category` ← `Category`, `subcategory` ← `Subcategory`, `page` ← `Page`, `size` ← `Size`
- **Returns**: `TopicSearchResult`
- **Error**: `ApiException<SearchTopicsError>` — **Case A (typed)**
- **Error accessors**: `TryGetErrorResponseModel([NotNullWhen(true)] out ErrorResponseModel? value)` [400, 401, 403, 429, 500] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `SearchTopicsRequest` | `src/Perigon/Requests/SupplementalEndpoints/SearchTopicsRequest.cs` |
| `TopicSearchResult` | `src/Perigon/Models/TopicSearchResult.cs` |
| `SearchTopicsError` | `src/Perigon/Errors/SearchTopicsError.cs` |
| `ErrorResponseModel` | `src/Perigon/Models/ErrorResponseModel.cs` |

