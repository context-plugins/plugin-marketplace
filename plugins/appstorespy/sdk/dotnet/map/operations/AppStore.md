<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppStore — operations

Accessor: `client.AppStore` · Source: `src/AppstoreSpy/Api/AppStore.cs` · 16 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DevFilterSearchIosDevelopersQueryPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `DevFilterSearchIosDevelopersQueryPost(DevFilterSearchIosDevelopersQueryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `IosDevListResponse`
- **Error**: `ApiException<DevFilterSearchIosDevelopersQueryPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosDevelopersQuery401Error1([NotNullWhen(true)] out IosDevelopersQuery401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DevFilterSearchIosDevelopersQueryPostRequest` | `src/AppstoreSpy/Requests/AppStore/DevFilterSearchIosDevelopersQueryPostRequest.cs` |
| `IosDevSearchBody` | `src/AppstoreSpy/Models/IosDevSearchBody.cs` |
| `IosDevListResponse` | `src/AppstoreSpy/Models/IosDevListResponse.cs` |
| `DevFilterSearchIosDevelopersQueryPostError` | `src/AppstoreSpy/Errors/DevFilterSearchIosDevelopersQueryPostError.cs` |
| `IosDevelopersQuery401Error1` | `src/AppstoreSpy/Models/IosDevelopersQuery401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### DevSearchIosDevelopersGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `DevSearchIosDevelopersGet(DevSearchIosDevelopersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `fields` ← `Fields`, `sort` ← `Sort`, `limit` ← `Limit`, `page` ← `Page`
- **Returns**: `IReadOnlyList<IosDev>`
- **Error**: `ApiException<DevSearchIosDevelopersGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosDevelopers401Error1([NotNullWhen(true)] out IosDevelopers401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DevSearchIosDevelopersGetRequest` | `src/AppstoreSpy/Requests/AppStore/DevSearchIosDevelopersGetRequest.cs` |
| `IosDev` | `src/AppstoreSpy/Models/IosDev.cs` |
| `DevSearchIosDevelopersGetError` | `src/AppstoreSpy/Errors/DevSearchIosDevelopersGetError.cs` |
| `IosDevelopers401Error1` | `src/AppstoreSpy/Models/IosDevelopers401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetAppDetailsIosAppsIdGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetAppDetailsIosAppsIdGet(GetAppDetailsIosAppsIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `fields` ← `Fields`, `country` ← `Country`, `language` ← `Language`
- **Returns**: `IosApp`
- **Error**: `ApiException<GetAppDetailsIosAppsIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosApps401Error1([NotNullWhen(true)] out IosApps401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetError([NotNullWhen(true)] out Error? value)` [403, 429] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAppDetailsIosAppsIdGetRequest` | `src/AppstoreSpy/Requests/AppStore/GetAppDetailsIosAppsIdGetRequest.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `AppLanguages` | `src/AppstoreSpy/Models/Enums/AppLanguages.cs` |
| `IosApp` | `src/AppstoreSpy/Models/IosApp.cs` |
| `GetAppDetailsIosAppsIdGetError` | `src/AppstoreSpy/Errors/GetAppDetailsIosAppsIdGetError.cs` |
| `IosApps401Error1` | `src/AppstoreSpy/Models/IosApps401Error1.cs` |
| `Error` | `src/AppstoreSpy/Models/Error.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetAppSearchIosAppsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetAppSearchIosAppsGet(GetAppSearchIosAppsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `country` ← `Country`, `fields` ← `Fields`, `sort` ← `Sort`, `limit` ← `Limit`, `page` ← `Page`
- **Returns**: `IReadOnlyList<IosApp>`
- **Error**: `ApiException<GetAppSearchIosAppsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosApps401Error1([NotNullWhen(true)] out IosApps401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAppSearchIosAppsGetRequest` | `src/AppstoreSpy/Requests/AppStore/GetAppSearchIosAppsGetRequest.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `IosApp` | `src/AppstoreSpy/Models/IosApp.cs` |
| `GetAppSearchIosAppsGetError` | `src/AppstoreSpy/Errors/GetAppSearchIosAppsGetError.cs` |
| `IosApps401Error1` | `src/AppstoreSpy/Models/IosApps401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetAppsEstimatesIosDevelopersIdEstimatesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetAppsEstimatesIosDevelopersIdEstimatesGet(GetAppsEstimatesIosDevelopersIdEstimatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `start` ← `Start`, `end` ← `End`, `fill_gaps` ← `FillGaps`
- **Returns**: `IReadOnlyList<DevAppsEstimates>`
- **Error**: `ApiException<GetAppsEstimatesIosDevelopersIdEstimatesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosDevelopersEstimates401Error1([NotNullWhen(true)] out IosDevelopersEstimates401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAppsEstimatesIosDevelopersIdEstimatesGetRequest` | `src/AppstoreSpy/Requests/AppStore/GetAppsEstimatesIosDevelopersIdEstimatesGetRequest.cs` |
| `DevAppsEstimates` | `src/AppstoreSpy/Models/DevAppsEstimates.cs` |
| `GetAppsEstimatesIosDevelopersIdEstimatesGetError` | `src/AppstoreSpy/Errors/GetAppsEstimatesIosDevelopersIdEstimatesGetError.cs` |
| `IosDevelopersEstimates401Error1` | `src/AppstoreSpy/Models/IosDevelopersEstimates401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetAppsEstimatesIosEstimatesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetAppsEstimatesIosEstimatesGet(GetAppsEstimatesIosEstimatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `id` ← `Id`, `start` ← `Start`, `end` ← `End`
- **Returns**: `IReadOnlyList<AppsEstimates>`
- **Error**: `ApiException<GetAppsEstimatesIosEstimatesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosEstimates401Error1([NotNullWhen(true)] out IosEstimates401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAppsEstimatesIosEstimatesGetRequest` | `src/AppstoreSpy/Requests/AppStore/GetAppsEstimatesIosEstimatesGetRequest.cs` |
| `AppsEstimates` | `src/AppstoreSpy/Models/AppsEstimates.cs` |
| `GetAppsEstimatesIosEstimatesGetError` | `src/AppstoreSpy/Errors/GetAppsEstimatesIosEstimatesGetError.cs` |
| `IosEstimates401Error1` | `src/AppstoreSpy/Models/IosEstimates401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetCountryAggregatesIosAggregatesCountriesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetCountryAggregatesIosAggregatesCountriesGet(GetCountryAggregatesIosAggregatesCountriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `category_type` ← `CategoryType`
- **Returns**: `DevCountryAggregatesResponse`
- **Error**: `ApiException<GetCountryAggregatesIosAggregatesCountriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosAggregatesCountries401Error1([NotNullWhen(true)] out IosAggregatesCountries401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCountryAggregatesIosAggregatesCountriesGetRequest` | `src/AppstoreSpy/Requests/AppStore/GetCountryAggregatesIosAggregatesCountriesGetRequest.cs` |
| `TypeEnum` | `src/AppstoreSpy/Models/Enums/TypeEnum.cs` |
| `DevCountryAggregatesResponse` | `src/AppstoreSpy/Models/DevCountryAggregatesResponse.cs` |
| `GetCountryAggregatesIosAggregatesCountriesGetError` | `src/AppstoreSpy/Errors/GetCountryAggregatesIosAggregatesCountriesGetError.cs` |
| `IosAggregatesCountries401Error1` | `src/AppstoreSpy/Models/IosAggregatesCountries401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetDeveloperIosDevelopersIdGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetDeveloperIosDevelopersIdGet(GetDeveloperIosDevelopersIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `fields` ← `Fields`
- **Returns**: `IosDev`
- **Error**: `ApiException<GetDeveloperIosDevelopersIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosDevelopers401Error1([NotNullWhen(true)] out IosDevelopers401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDeveloperIosDevelopersIdGetRequest` | `src/AppstoreSpy/Requests/AppStore/GetDeveloperIosDevelopersIdGetRequest.cs` |
| `IosDev` | `src/AppstoreSpy/Models/IosDev.cs` |
| `GetDeveloperIosDevelopersIdGetError` | `src/AppstoreSpy/Errors/GetDeveloperIosDevelopersIdGetError.cs` |
| `IosDevelopers401Error1` | `src/AppstoreSpy/Models/IosDevelopers401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetFilterSearchIosAppsQueryPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetFilterSearchIosAppsQueryPost(GetFilterSearchIosAppsQueryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IosAppListResponse`
- **Error**: `ApiException<GetFilterSearchIosAppsQueryPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosAppsQuery401Error1([NotNullWhen(true)] out IosAppsQuery401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFilterSearchIosAppsQueryPostRequest` | `src/AppstoreSpy/Requests/AppStore/GetFilterSearchIosAppsQueryPostRequest.cs` |
| `IosAppSearchBody` | `src/AppstoreSpy/Models/IosAppSearchBody.cs` |
| `IosAppListResponse` | `src/AppstoreSpy/Models/IosAppListResponse.cs` |
| `GetFilterSearchIosAppsQueryPostError` | `src/AppstoreSpy/Errors/GetFilterSearchIosAppsQueryPostError.cs` |
| `IosAppsQuery401Error1` | `src/AppstoreSpy/Models/IosAppsQuery401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetIosRankingsIosRankingsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetIosRankingsIosRankingsGet(GetIosRankingsIosRankingsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date_start` ← `DateStart`, `date_end` ← `DateEnd`, `app` ← `App`, `platform` ← `Platform`, `country` ← `Country`, `category` ← `Category`, `collection` ← `Collection`, `rank_start` ← `RankStart`, `rank_end` ← `RankEnd`, `limit` ← `Limit`, `page` ← `Page`
- **Returns**: `ApiResponseListModelsResponsesResponseIosRankingItem`
- **Error**: `ApiException<GetIosRankingsIosRankingsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosRankings401Error1([NotNullWhen(true)] out IosRankings401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetIosRankingsIosRankingsGetRequest` | `src/AppstoreSpy/Requests/AppStore/GetIosRankingsIosRankingsGetRequest.cs` |
| `IosPlatform` | `src/AppstoreSpy/Models/Enums/IosPlatform.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `IosCategory` | `src/AppstoreSpy/Models/Enums/IosCategory.cs` |
| `Collection` | `src/AppstoreSpy/Models/Enums/Collection.cs` |
| `ApiResponseListModelsResponsesResponseIosRankingItem` | `src/AppstoreSpy/Models/ApiResponseListModelsResponsesResponseIosRankingItem.cs` |
| `GetIosRankingsIosRankingsGetError` | `src/AppstoreSpy/Errors/GetIosRankingsIosRankingsGetError.cs` |
| `IosRankings401Error1` | `src/AppstoreSpy/Models/IosRankings401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetPlayAppCountriesIosInfoCountriesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetPlayAppCountriesIosInfoCountriesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StoreCountries`
- **Error**: `ApiException<GetPlayAppCountriesIosInfoCountriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosInfoCountries401Error1([NotNullWhen(true)] out IosInfoCountries401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoreCountries` | `src/AppstoreSpy/Models/StoreCountries.cs` |
| `GetPlayAppCountriesIosInfoCountriesGetError` | `src/AppstoreSpy/Errors/GetPlayAppCountriesIosInfoCountriesGetError.cs` |
| `IosInfoCountries401Error1` | `src/AppstoreSpy/Models/IosInfoCountries401Error1.cs` |

### GetPlayAppLanguagesIosInfoLanguagesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetPlayAppLanguagesIosInfoLanguagesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StoreLanguages`
- **Error**: `ApiException<GetPlayAppLanguagesIosInfoLanguagesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosInfoLanguages401Error1([NotNullWhen(true)] out IosInfoLanguages401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoreLanguages` | `src/AppstoreSpy/Models/StoreLanguages.cs` |
| `GetPlayAppLanguagesIosInfoLanguagesGetError` | `src/AppstoreSpy/Errors/GetPlayAppLanguagesIosInfoLanguagesGetError.cs` |
| `IosInfoLanguages401Error1` | `src/AppstoreSpy/Models/IosInfoLanguages401Error1.cs` |

### GetRecrawlIosAppsIdRecrawlGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetRecrawlIosAppsIdRecrawlGet(GetRecrawlIosAppsIdRecrawlGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `country` ← `Country`, `language` ← `Language`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetRecrawlIosAppsIdRecrawlGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosAppsRecrawl401Error1([NotNullWhen(true)] out IosAppsRecrawl401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRecrawlIosAppsIdRecrawlGetRequest` | `src/AppstoreSpy/Requests/AppStore/GetRecrawlIosAppsIdRecrawlGetRequest.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `AppLanguages` | `src/AppstoreSpy/Models/Enums/AppLanguages.cs` |
| `GetRecrawlIosAppsIdRecrawlGetError` | `src/AppstoreSpy/Errors/GetRecrawlIosAppsIdRecrawlGetError.cs` |
| `IosAppsRecrawl401Error1` | `src/AppstoreSpy/Models/IosAppsRecrawl401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetReviewsIosAppsIdReviewsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetReviewsIosAppsIdReviewsGet(GetReviewsIosAppsIdReviewsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `country` ← `Country`, `fields` ← `Fields`, `limit` ← `Limit`, `sort` ← `Sort`
- **Returns**: `IReadOnlyList<IosReview>`
- **Error**: `ApiException<GetReviewsIosAppsIdReviewsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosAppsReviews401Error1([NotNullWhen(true)] out IosAppsReviews401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReviewsIosAppsIdReviewsGetRequest` | `src/AppstoreSpy/Requests/AppStore/GetReviewsIosAppsIdReviewsGetRequest.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `IosReview` | `src/AppstoreSpy/Models/IosReview.cs` |
| `GetReviewsIosAppsIdReviewsGetError` | `src/AppstoreSpy/Errors/GetReviewsIosAppsIdReviewsGetError.cs` |
| `IosAppsReviews401Error1` | `src/AppstoreSpy/Models/IosAppsReviews401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetSimilarIosAppsSimilarPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetSimilarIosAppsSimilarPost(GetSimilarIosAppsSimilarPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `IosAppListResponse`
- **Error**: `ApiException<GetSimilarIosAppsSimilarPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosAppsSimilar401Error1([NotNullWhen(true)] out IosAppsSimilar401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSimilarIosAppsSimilarPostRequest` | `src/AppstoreSpy/Requests/AppStore/GetSimilarIosAppsSimilarPostRequest.cs` |
| `IosSimilarSearchBody` | `src/AppstoreSpy/Models/IosSimilarSearchBody.cs` |
| `IosAppListResponse` | `src/AppstoreSpy/Models/IosAppListResponse.cs` |
| `GetSimilarIosAppsSimilarPostError` | `src/AppstoreSpy/Errors/GetSimilarIosAppsSimilarPostError.cs` |
| `IosAppsSimilar401Error1` | `src/AppstoreSpy/Models/IosAppsSimilar401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetSummaryIosAppsSummaryPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetSummaryIosAppsSummaryPost(GetSummaryIosAppsSummaryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SummaryResponse`
- **Error**: `ApiException<GetSummaryIosAppsSummaryPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetIosAppsSummary401Error1([NotNullWhen(true)] out IosAppsSummary401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSummaryIosAppsSummaryPostRequest` | `src/AppstoreSpy/Requests/AppStore/GetSummaryIosAppsSummaryPostRequest.cs` |
| `IosSummarySearchBody` | `src/AppstoreSpy/Models/IosSummarySearchBody.cs` |
| `SummaryResponse` | `src/AppstoreSpy/Models/SummaryResponse.cs` |
| `GetSummaryIosAppsSummaryPostError` | `src/AppstoreSpy/Errors/GetSummaryIosAppsSummaryPostError.cs` |
| `IosAppsSummary401Error1` | `src/AppstoreSpy/Models/IosAppsSummary401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

