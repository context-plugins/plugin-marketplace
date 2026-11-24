<!-- Generated file — do not edit; regenerated with the SDK. -->

# GooglePlay — operations

Accessor: `client.GooglePlay` · Source: `src/AppstoreSpy/Api/GooglePlay.cs` · 20 operations

**Type sources**: the file declaring each type an operation names (`RawError` excluded — see sdk-map.md).

### DevFilterSearchPlayDevelopersQueryPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `DevFilterSearchPlayDevelopersQueryPost(DevFilterSearchPlayDevelopersQueryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `PlayDevListResponse`
- **Error**: `ApiException<DevFilterSearchPlayDevelopersQueryPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayDevelopersQuery401Error1([NotNullWhen(true)] out PlayDevelopersQuery401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DevFilterSearchPlayDevelopersQueryPostRequest` | `src/AppstoreSpy/Requests/GooglePlay/DevFilterSearchPlayDevelopersQueryPostRequest.cs` |
| `PlayDevSearchBody` | `src/AppstoreSpy/Models/PlayDevSearchBody.cs` |
| `PlayDevListResponse` | `src/AppstoreSpy/Models/PlayDevListResponse.cs` |
| `DevFilterSearchPlayDevelopersQueryPostError` | `src/AppstoreSpy/Errors/DevFilterSearchPlayDevelopersQueryPostError.cs` |
| `PlayDevelopersQuery401Error1` | `src/AppstoreSpy/Models/PlayDevelopersQuery401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### DevSearchPlayDevelopersGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `DevSearchPlayDevelopersGet(DevSearchPlayDevelopersGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `fields` ← `Fields`, `sort` ← `Sort`, `limit` ← `Limit`, `page` ← `Page`
- **Returns**: `IReadOnlyList<PlayDev>`
- **Error**: `ApiException<DevSearchPlayDevelopersGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayDevelopers401Error1([NotNullWhen(true)] out PlayDevelopers401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `DevSearchPlayDevelopersGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/DevSearchPlayDevelopersGetRequest.cs` |
| `PlayDev` | `src/AppstoreSpy/Models/PlayDev.cs` |
| `DevSearchPlayDevelopersGetError` | `src/AppstoreSpy/Errors/DevSearchPlayDevelopersGetError.cs` |
| `PlayDevelopers401Error1` | `src/AppstoreSpy/Models/PlayDevelopers401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetAppDetailsPlayAppsIdGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetAppDetailsPlayAppsIdGet(GetAppDetailsPlayAppsIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `fields` ← `Fields`, `country` ← `Country`, `language` ← `Language`
- **Returns**: `PlayApp`
- **Error**: `ApiException<GetAppDetailsPlayAppsIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayApps401Error1([NotNullWhen(true)] out PlayApps401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAppDetailsPlayAppsIdGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetAppDetailsPlayAppsIdGetRequest.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `AppLanguages` | `src/AppstoreSpy/Models/Enums/AppLanguages.cs` |
| `PlayApp` | `src/AppstoreSpy/Models/PlayApp.cs` |
| `GetAppDetailsPlayAppsIdGetError` | `src/AppstoreSpy/Errors/GetAppDetailsPlayAppsIdGetError.cs` |
| `PlayApps401Error1` | `src/AppstoreSpy/Models/PlayApps401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetAppSearchPlayAppsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetAppSearchPlayAppsGet(GetAppSearchPlayAppsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `q` ← `Q`, `published` ← `Published`, `country` ← `Country`, `language` ← `Language`, `fields` ← `Fields`, `sort` ← `Sort`, `limit` ← `Limit`, `page` ← `Page`
- **Returns**: `IReadOnlyList<PlayApp>`
- **Error**: `ApiException<GetAppSearchPlayAppsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayApps401Error1([NotNullWhen(true)] out PlayApps401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAppSearchPlayAppsGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetAppSearchPlayAppsGetRequest.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `AppLanguages` | `src/AppstoreSpy/Models/Enums/AppLanguages.cs` |
| `PlayApp` | `src/AppstoreSpy/Models/PlayApp.cs` |
| `GetAppSearchPlayAppsGetError` | `src/AppstoreSpy/Errors/GetAppSearchPlayAppsGetError.cs` |
| `PlayApps401Error1` | `src/AppstoreSpy/Models/PlayApps401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetAppsEstimatesPlayDevelopersIdEstimatesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetAppsEstimatesPlayDevelopersIdEstimatesGet(GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `start` ← `Start`, `end` ← `End`, `fill_gaps` ← `FillGaps`
- **Returns**: `IReadOnlyList<DevAppsEstimates>`
- **Error**: `ApiException<GetAppsEstimatesPlayDevelopersIdEstimatesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayDevelopersEstimates401Error1([NotNullWhen(true)] out PlayDevelopersEstimates401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest.cs` |
| `DevAppsEstimates` | `src/AppstoreSpy/Models/DevAppsEstimates.cs` |
| `GetAppsEstimatesPlayDevelopersIdEstimatesGetError` | `src/AppstoreSpy/Errors/GetAppsEstimatesPlayDevelopersIdEstimatesGetError.cs` |
| `PlayDevelopersEstimates401Error1` | `src/AppstoreSpy/Models/PlayDevelopersEstimates401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetAppsEstimatesPlayEstimatesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetAppsEstimatesPlayEstimatesGet(GetAppsEstimatesPlayEstimatesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `id` ← `Id`, `start` ← `Start`, `end` ← `End`
- **Returns**: `IReadOnlyList<AppsEstimates>`
- **Error**: `ApiException<GetAppsEstimatesPlayEstimatesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayEstimates401Error1([NotNullWhen(true)] out PlayEstimates401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAppsEstimatesPlayEstimatesGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetAppsEstimatesPlayEstimatesGetRequest.cs` |
| `AppsEstimates` | `src/AppstoreSpy/Models/AppsEstimates.cs` |
| `GetAppsEstimatesPlayEstimatesGetError` | `src/AppstoreSpy/Errors/GetAppsEstimatesPlayEstimatesGetError.cs` |
| `PlayEstimates401Error1` | `src/AppstoreSpy/Models/PlayEstimates401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetAppsInstallsDailyPlayAppsIdInstallsDailyGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetAppsInstallsDailyPlayAppsIdInstallsDailyGet(GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `start` ← `Start`, `end` ← `End`, `smooth` ← `Smooth`
- **Returns**: `IReadOnlyList<AppsDailyInstalls>`
- **Error**: `ApiException<GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayAppsInstallsDaily401Error1([NotNullWhen(true)] out PlayAppsInstallsDaily401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest.cs` |
| `AppsDailyInstalls` | `src/AppstoreSpy/Models/AppsDailyInstalls.cs` |
| `GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError` | `src/AppstoreSpy/Errors/GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError.cs` |
| `PlayAppsInstallsDaily401Error1` | `src/AppstoreSpy/Models/PlayAppsInstallsDaily401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetCountryAggregatesPlayAggregatesCountriesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetCountryAggregatesPlayAggregatesCountriesGet(GetCountryAggregatesPlayAggregatesCountriesGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `category_type` ← `CategoryType`
- **Returns**: `DevCountryAggregatesResponse`
- **Error**: `ApiException<GetCountryAggregatesPlayAggregatesCountriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayAggregatesCountries401Error1([NotNullWhen(true)] out PlayAggregatesCountries401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetCountryAggregatesPlayAggregatesCountriesGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetCountryAggregatesPlayAggregatesCountriesGetRequest.cs` |
| `TypeEnum` | `src/AppstoreSpy/Models/Enums/TypeEnum.cs` |
| `DevCountryAggregatesResponse` | `src/AppstoreSpy/Models/DevCountryAggregatesResponse.cs` |
| `GetCountryAggregatesPlayAggregatesCountriesGetError` | `src/AppstoreSpy/Errors/GetCountryAggregatesPlayAggregatesCountriesGetError.cs` |
| `PlayAggregatesCountries401Error1` | `src/AppstoreSpy/Models/PlayAggregatesCountries401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetDeveloperPlayDevelopersIdGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetDeveloperPlayDevelopersIdGet(GetDeveloperPlayDevelopersIdGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `fields` ← `Fields`
- **Returns**: `PlayDev`
- **Error**: `ApiException<GetDeveloperPlayDevelopersIdGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayDevelopers401Error1([NotNullWhen(true)] out PlayDevelopers401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetDeveloperPlayDevelopersIdGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetDeveloperPlayDevelopersIdGetRequest.cs` |
| `PlayDev` | `src/AppstoreSpy/Models/PlayDev.cs` |
| `GetDeveloperPlayDevelopersIdGetError` | `src/AppstoreSpy/Errors/GetDeveloperPlayDevelopersIdGetError.cs` |
| `PlayDevelopers401Error1` | `src/AppstoreSpy/Models/PlayDevelopers401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetEventsPlayLiveopsGet2

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetEventsPlayLiveopsGet2(GetEventsPlayLiveopsGet2Request request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `App`
- **Query params (wire ← C#)**: `app` ← `App`, `country` ← `Country`, `freshness` ← `Freshness`
- **Returns**: `IReadOnlyList<Event>`
- **Error**: `ApiException<GetEventsPlayLiveopsGet2Error>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayLiveops401Error1([NotNullWhen(true)] out PlayLiveops401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetEventsPlayLiveopsGet2Request` | `src/AppstoreSpy/Requests/GooglePlay/GetEventsPlayLiveopsGet2Request.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `CacheTime` | `src/AppstoreSpy/Models/Enums/CacheTime.cs` |
| `Event` | `src/AppstoreSpy/Models/Event.cs` |
| `GetEventsPlayLiveopsGet2Error` | `src/AppstoreSpy/Errors/GetEventsPlayLiveopsGet2Error.cs` |
| `PlayLiveops401Error1` | `src/AppstoreSpy/Models/PlayLiveops401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetFilterSearchPlayAppsQueryPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetFilterSearchPlayAppsQueryPost(GetFilterSearchPlayAppsQueryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PlayAppListResponse`
- **Error**: `ApiException<GetFilterSearchPlayAppsQueryPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayAppsQuery401Error1([NotNullWhen(true)] out PlayAppsQuery401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetFilterSearchPlayAppsQueryPostRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetFilterSearchPlayAppsQueryPostRequest.cs` |
| `PlayAppSearchBody` | `src/AppstoreSpy/Models/PlayAppSearchBody.cs` |
| `PlayAppListResponse` | `src/AppstoreSpy/Models/PlayAppListResponse.cs` |
| `GetFilterSearchPlayAppsQueryPostError` | `src/AppstoreSpy/Errors/GetFilterSearchPlayAppsQueryPostError.cs` |
| `PlayAppsQuery401Error1` | `src/AppstoreSpy/Models/PlayAppsQuery401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetListingPlayAppsIdListingGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetListingPlayAppsIdListingGet(GetListingPlayAppsIdListingGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `country` ← `Country`, `language` ← `Language`, `freshness` ← `Freshness`, `wait` ← `Wait`
- **Returns**: `PlayListing`
- **Error**: `ApiException<GetListingPlayAppsIdListingGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayAppsListing401Error1([NotNullWhen(true)] out PlayAppsListing401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetNoContent([NotNullWhen(true)] out RawError? value)` [404, 502] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetPlayAppsListing429Error1([NotNullWhen(true)] out PlayAppsListing429Error1? value)` [429] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetListingPlayAppsIdListingGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetListingPlayAppsIdListingGetRequest.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `PlayListingLanguages` | `src/AppstoreSpy/Models/Enums/PlayListingLanguages.cs` |
| `CacheTime` | `src/AppstoreSpy/Models/Enums/CacheTime.cs` |
| `PlayListing` | `src/AppstoreSpy/Models/PlayListing.cs` |
| `GetListingPlayAppsIdListingGetError` | `src/AppstoreSpy/Errors/GetListingPlayAppsIdListingGetError.cs` |
| `PlayAppsListing401Error1` | `src/AppstoreSpy/Models/PlayAppsListing401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |
| `PlayAppsListing429Error1` | `src/AppstoreSpy/Models/PlayAppsListing429Error1.cs` |

### GetPlayAppCountriesPlayInfoCountriesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetPlayAppCountriesPlayInfoCountriesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StoreCountries`
- **Error**: `ApiException<GetPlayAppCountriesPlayInfoCountriesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayInfoCountries401Error1([NotNullWhen(true)] out PlayInfoCountries401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoreCountries` | `src/AppstoreSpy/Models/StoreCountries.cs` |
| `GetPlayAppCountriesPlayInfoCountriesGetError` | `src/AppstoreSpy/Errors/GetPlayAppCountriesPlayInfoCountriesGetError.cs` |
| `PlayInfoCountries401Error1` | `src/AppstoreSpy/Models/PlayInfoCountries401Error1.cs` |

### GetPlayAppLanguagesPlayInfoLanguagesGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetPlayAppLanguagesPlayInfoLanguagesGet(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `StoreLanguages`
- **Error**: `ApiException<GetPlayAppLanguagesPlayInfoLanguagesGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayInfoLanguages401Error1([NotNullWhen(true)] out PlayInfoLanguages401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `StoreLanguages` | `src/AppstoreSpy/Models/StoreLanguages.cs` |
| `GetPlayAppLanguagesPlayInfoLanguagesGetError` | `src/AppstoreSpy/Errors/GetPlayAppLanguagesPlayInfoLanguagesGetError.cs` |
| `PlayInfoLanguages401Error1` | `src/AppstoreSpy/Models/PlayInfoLanguages401Error1.cs` |

### GetPlayRankingsPlayRankingsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetPlayRankingsPlayRankingsGet(GetPlayRankingsPlayRankingsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Query params (wire ← C#)**: `date_start` ← `DateStart`, `date_end` ← `DateEnd`, `app` ← `App`, `country` ← `Country`, `category` ← `Category`, `collection` ← `Collection`, `rank_start` ← `RankStart`, `rank_end` ← `RankEnd`, `limit` ← `Limit`, `page` ← `Page`
- **Returns**: `ApiResponseListModelsResponsesResponsePlayRankingItem`
- **Error**: `ApiException<GetPlayRankingsPlayRankingsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayRankings401Error1([NotNullWhen(true)] out PlayRankings401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetPlayRankingsPlayRankingsGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetPlayRankingsPlayRankingsGetRequest.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `PlayCategory` | `src/AppstoreSpy/Models/Enums/PlayCategory.cs` |
| `Collection` | `src/AppstoreSpy/Models/Enums/Collection.cs` |
| `ApiResponseListModelsResponsesResponsePlayRankingItem` | `src/AppstoreSpy/Models/ApiResponseListModelsResponsesResponsePlayRankingItem.cs` |
| `GetPlayRankingsPlayRankingsGetError` | `src/AppstoreSpy/Errors/GetPlayRankingsPlayRankingsGetError.cs` |
| `PlayRankings401Error1` | `src/AppstoreSpy/Models/PlayRankings401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetRecrawlPlayAppsIdRecrawlGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetRecrawlPlayAppsIdRecrawlGet(GetRecrawlPlayAppsIdRecrawlGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`
- **Query params (wire ← C#)**: `country` ← `Country`, `language` ← `Language`
- **Returns**: `void` (Task)
- **Error**: `ApiException<GetRecrawlPlayAppsIdRecrawlGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayAppsRecrawl401Error1([NotNullWhen(true)] out PlayAppsRecrawl401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetRecrawlPlayAppsIdRecrawlGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetRecrawlPlayAppsIdRecrawlGetRequest.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `AppLanguages` | `src/AppstoreSpy/Models/Enums/AppLanguages.cs` |
| `GetRecrawlPlayAppsIdRecrawlGetError` | `src/AppstoreSpy/Errors/GetRecrawlPlayAppsIdRecrawlGetError.cs` |
| `PlayAppsRecrawl401Error1` | `src/AppstoreSpy/Models/PlayAppsRecrawl401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetReviewsPlayAppsIdReviewsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetReviewsPlayAppsIdReviewsGet(GetReviewsPlayAppsIdReviewsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Id`, `Language`
- **Query params (wire ← C#)**: `language` ← `Language`, `country` ← `Country`, `limit` ← `Limit`, `sort` ← `Sort`
- **Returns**: `IReadOnlyList<PlayReview>`
- **Error**: `ApiException<GetReviewsPlayAppsIdReviewsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayAppsReviews401Error1([NotNullWhen(true)] out PlayAppsReviews401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetReviewsPlayAppsIdReviewsGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetReviewsPlayAppsIdReviewsGetRequest.cs` |
| `AppLanguages` | `src/AppstoreSpy/Models/Enums/AppLanguages.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `PlayReview` | `src/AppstoreSpy/Models/PlayReview.cs` |
| `GetReviewsPlayAppsIdReviewsGetError` | `src/AppstoreSpy/Errors/GetReviewsPlayAppsIdReviewsGetError.cs` |
| `PlayAppsReviews401Error1` | `src/AppstoreSpy/Models/PlayAppsReviews401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetSimilarPlayAppsSimilarPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetSimilarPlayAppsSimilarPost(GetSimilarPlayAppsSimilarPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
- **Returns**: `PlayAppListResponse`
- **Error**: `ApiException<GetSimilarPlayAppsSimilarPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayAppsSimilar401Error1([NotNullWhen(true)] out PlayAppsSimilar401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSimilarPlayAppsSimilarPostRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetSimilarPlayAppsSimilarPostRequest.cs` |
| `SimilarSearchBody` | `src/AppstoreSpy/Models/SimilarSearchBody.cs` |
| `PlayAppListResponse` | `src/AppstoreSpy/Models/PlayAppListResponse.cs` |
| `GetSimilarPlayAppsSimilarPostError` | `src/AppstoreSpy/Errors/GetSimilarPlayAppsSimilarPostError.cs` |
| `PlayAppsSimilar401Error1` | `src/AppstoreSpy/Models/PlayAppsSimilar401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetSuggestsPlaySuggestionsGet

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetSuggestsPlaySuggestionsGet(GetSuggestsPlaySuggestionsGetRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Q`
- **Query params (wire ← C#)**: `q` ← `Q`, `country` ← `Country`, `lang` ← `Lang`, `freshness` ← `Freshness`
- **Returns**: `Suggest`
- **Error**: `ApiException<GetSuggestsPlaySuggestionsGetError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlaySuggestions401Error1([NotNullWhen(true)] out PlaySuggestions401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSuggestsPlaySuggestionsGetRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetSuggestsPlaySuggestionsGetRequest.cs` |
| `AppCountries` | `src/AppstoreSpy/Models/Enums/AppCountries.cs` |
| `AppLanguages` | `src/AppstoreSpy/Models/Enums/AppLanguages.cs` |
| `CacheTime` | `src/AppstoreSpy/Models/Enums/CacheTime.cs` |
| `Suggest` | `src/AppstoreSpy/Models/Suggest.cs` |
| `GetSuggestsPlaySuggestionsGetError` | `src/AppstoreSpy/Errors/GetSuggestsPlaySuggestionsGetError.cs` |
| `PlaySuggestions401Error1` | `src/AppstoreSpy/Models/PlaySuggestions401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

### GetSummaryPlayAppsSummaryPost

- **Auth**: `options.ApiKeyHeader`
- **Signature**: `GetSummaryPlayAppsSummaryPost(GetSummaryPlayAppsSummaryPostRequest request, RequestOptions? requestOptions = null, CancellationToken cancellationToken = default)`
  - required: `Body`
- **Returns**: `SummaryResponse`
- **Error**: `ApiException<GetSummaryPlayAppsSummaryPostError>` — **Case A (typed)**
- **Error accessors**: `TryGetPlayAppsSummary401Error1([NotNullWhen(true)] out PlayAppsSummary401Error1? value)` [401] · `TryGetString([NotNullWhen(true)] out string? value)` [402] · `TryGetHttpValidationError([NotNullWhen(true)] out HttpValidationError? value)` [422] · `TryGetRawError([NotNullWhen(true)] out RawError? error)` [fallback]

| Type | Source |
| --- | --- |
| `GetSummaryPlayAppsSummaryPostRequest` | `src/AppstoreSpy/Requests/GooglePlay/GetSummaryPlayAppsSummaryPostRequest.cs` |
| `SummarySearchBody` | `src/AppstoreSpy/Models/SummarySearchBody.cs` |
| `SummaryResponse` | `src/AppstoreSpy/Models/SummaryResponse.cs` |
| `GetSummaryPlayAppsSummaryPostError` | `src/AppstoreSpy/Errors/GetSummaryPlayAppsSummaryPostError.cs` |
| `PlayAppsSummary401Error1` | `src/AppstoreSpy/Models/PlayAppsSummary401Error1.cs` |
| `HttpValidationError` | `src/AppstoreSpy/Models/HttpValidationError.cs` |

