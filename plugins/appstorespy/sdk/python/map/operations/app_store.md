<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppStore — operations

Accessor: `client.app_store` · Source: `appstore_spy/apis/app_store.py` · 16 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.app_store.dev_filter_search_ios_developers_query_post

- **Route**: `POST /ios/developers/query`
- **Auth**: `api_key_header`
- **Signature**: `def dev_filter_search_ios_developers_query_post(body: IosDevSearchBody | IosDevSearchBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `IosDevListResponse`
- **Returns (raw)**: `ApiResult[IosDevListResponse, DevFilterSearchIosDevelopersQueryPostErrorBody]`
- **Error**: `DevFilterSearchIosDevelopersQueryPostErrorBody` — **Case A (typed)**
- **Error arms**: `IosDevelopersQuery401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IosDevSearchBody` | `appstore_spy/models/ios_dev_search_body.py` |
| `IosDevSearchBodyDict` | `appstore_spy/models/ios_dev_search_body.py` |
| `IosDevListResponse` | `appstore_spy/models/ios_dev_list_response.py` |
| `DevFilterSearchIosDevelopersQueryPostErrorBody` | `appstore_spy/errors/dev_filter_search_ios_developers_query_post_error.py` |
| `IosDevelopersQuery401Error1` | `appstore_spy/models/ios_developers_query401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.dev_search_ios_developers_get

- **Route**: `GET /ios/developers`
- **Auth**: `api_key_header`
- **Signature**: `def dev_search_ios_developers_get(*, q: str | None = None, fields: str | None = None, sort: str | None = None, limit: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `fields` — query · `sort` — query · `limit` — query · `page` — query
- **Returns (parsed)**: `list[IosDev]`
- **Returns (raw)**: `ApiResult[list[IosDev], DevSearchIosDevelopersGetErrorBody]`
- **Error**: `DevSearchIosDevelopersGetErrorBody` — **Case A (typed)**
- **Error arms**: `IosDevelopers401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IosDev` | `appstore_spy/models/ios_dev.py` |
| `DevSearchIosDevelopersGetErrorBody` | `appstore_spy/errors/dev_search_ios_developers_get_error.py` |
| `IosDevelopers401Error1` | `appstore_spy/models/ios_developers401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.get_app_details_ios_apps_id_get

- **Route**: `GET /ios/apps/{id}`
- **Auth**: `api_key_header`
- **Signature**: `def get_app_details_ios_apps_id_get(id_: str, *, fields: str | None = None, country: AppCountriesOrStr | None = None, language: AppLanguagesOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `fields` — query · `country` — query · `language` — query
- **Returns (parsed)**: `IosApp`
- **Returns (raw)**: `ApiResult[IosApp, GetAppDetailsIosAppsIdGetErrorBody]`
- **Error**: `GetAppDetailsIosAppsIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `IosApps401Error1` [401] · `str` [402] · `Error` [403, 429] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `AppLanguagesOrStr` | `appstore_spy/models/enums/app_languages.py` |
| `IosApp` | `appstore_spy/models/ios_app.py` |
| `GetAppDetailsIosAppsIdGetErrorBody` | `appstore_spy/errors/get_app_details_ios_apps_id_get_error.py` |
| `IosApps401Error1` | `appstore_spy/models/ios_apps401_error1.py` |
| `Error` | `appstore_spy/models/error.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.get_app_search_ios_apps_get

- **Route**: `GET /ios/apps`
- **Auth**: `api_key_header`
- **Signature**: `def get_app_search_ios_apps_get(*, q: str | None = None, country: AppCountriesOrStr | None = None, fields: str | None = None, sort: str | None = None, limit: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `country` — query · `fields` — query · `sort` — query · `limit` — query · `page` — query
- **Returns (parsed)**: `list[IosApp]`
- **Returns (raw)**: `ApiResult[list[IosApp], GetAppSearchIosAppsGetErrorBody]`
- **Error**: `GetAppSearchIosAppsGetErrorBody` — **Case A (typed)**
- **Error arms**: `IosApps401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `IosApp` | `appstore_spy/models/ios_app.py` |
| `GetAppSearchIosAppsGetErrorBody` | `appstore_spy/errors/get_app_search_ios_apps_get_error.py` |
| `IosApps401Error1` | `appstore_spy/models/ios_apps401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.get_apps_estimates_ios_developers_id_estimates_get

- **Route**: `GET /ios/developers/{id}/estimates`
- **Auth**: `api_key_header`
- **Signature**: `def get_apps_estimates_ios_developers_id_estimates_get(id_: str, *, start: Date | None = None, end: Date | None = None, fill_gaps: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `start` — query · `end` — query · `fill_gaps` — query
- **Returns (parsed)**: `list[DevAppsEstimates]`
- **Returns (raw)**: `ApiResult[list[DevAppsEstimates], GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody]`
- **Error**: `GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody` — **Case A (typed)**
- **Error arms**: `IosDevelopersEstimates401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DevAppsEstimates` | `appstore_spy/models/dev_apps_estimates.py` |
| `GetAppsEstimatesIosDevelopersIdEstimatesGetErrorBody` | `appstore_spy/errors/get_apps_estimates_ios_developers_id_estimates_get_error.py` |
| `IosDevelopersEstimates401Error1` | `appstore_spy/models/ios_developers_estimates401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.get_apps_estimates_ios_estimates_get

- **Route**: `GET /ios/estimates`
- **Auth**: `api_key_header`
- **Signature**: `def get_apps_estimates_ios_estimates_get(id_: str, *, start: Date | None = None, end: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — query `id` · `start` — query · `end` — query
- **Returns (parsed)**: `list[AppsEstimates]`
- **Returns (raw)**: `ApiResult[list[AppsEstimates], GetAppsEstimatesIosEstimatesGetErrorBody]`
- **Error**: `GetAppsEstimatesIosEstimatesGetErrorBody` — **Case A (typed)**
- **Error arms**: `IosEstimates401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppsEstimates` | `appstore_spy/models/apps_estimates.py` |
| `GetAppsEstimatesIosEstimatesGetErrorBody` | `appstore_spy/errors/get_apps_estimates_ios_estimates_get_error.py` |
| `IosEstimates401Error1` | `appstore_spy/models/ios_estimates401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.get_country_aggregates_ios_aggregates_countries_get

- **Route**: `GET /ios/aggregates/countries`
- **Auth**: `api_key_header`
- **Signature**: `def get_country_aggregates_ios_aggregates_countries_get(*, category_type: TypeEnumOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `category_type` — query
- **Returns (parsed)**: `DevCountryAggregatesResponse`
- **Returns (raw)**: `ApiResult[DevCountryAggregatesResponse, GetCountryAggregatesIosAggregatesCountriesGetErrorBody]`
- **Error**: `GetCountryAggregatesIosAggregatesCountriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `IosAggregatesCountries401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeEnumOrStr` | `appstore_spy/models/enums/type_enum.py` |
| `DevCountryAggregatesResponse` | `appstore_spy/models/dev_country_aggregates_response.py` |
| `GetCountryAggregatesIosAggregatesCountriesGetErrorBody` | `appstore_spy/errors/get_country_aggregates_ios_aggregates_countries_get_error.py` |
| `IosAggregatesCountries401Error1` | `appstore_spy/models/ios_aggregates_countries401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.get_developer_ios_developers_id_get

- **Route**: `GET /ios/developers/{id}`
- **Auth**: `api_key_header`
- **Signature**: `def get_developer_ios_developers_id_get(id_: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `fields` — query
- **Returns (parsed)**: `IosDev`
- **Returns (raw)**: `ApiResult[IosDev, GetDeveloperIosDevelopersIdGetErrorBody]`
- **Error**: `GetDeveloperIosDevelopersIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `IosDevelopers401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IosDev` | `appstore_spy/models/ios_dev.py` |
| `GetDeveloperIosDevelopersIdGetErrorBody` | `appstore_spy/errors/get_developer_ios_developers_id_get_error.py` |
| `IosDevelopers401Error1` | `appstore_spy/models/ios_developers401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.get_filter_search_ios_apps_query_post

- **Route**: `POST /ios/apps/query`
- **Auth**: `api_key_header`
- **Signature**: `def get_filter_search_ios_apps_query_post(*, body: IosAppSearchBody | IosAppSearchBodyDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `IosAppListResponse`
- **Returns (raw)**: `ApiResult[IosAppListResponse, GetFilterSearchIosAppsQueryPostErrorBody]`
- **Error**: `GetFilterSearchIosAppsQueryPostErrorBody` — **Case A (typed)**
- **Error arms**: `IosAppsQuery401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IosAppSearchBody` | `appstore_spy/models/ios_app_search_body.py` |
| `IosAppSearchBodyDict` | `appstore_spy/models/ios_app_search_body.py` |
| `IosAppListResponse` | `appstore_spy/models/ios_app_list_response.py` |
| `GetFilterSearchIosAppsQueryPostErrorBody` | `appstore_spy/errors/get_filter_search_ios_apps_query_post_error.py` |
| `IosAppsQuery401Error1` | `appstore_spy/models/ios_apps_query401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.get_ios_rankings_ios_rankings_get

- **Route**: `GET /ios/rankings`
- **Auth**: `api_key_header`
- **Signature**: `def get_ios_rankings_ios_rankings_get(*, date_start: Date | None = None, date_end: Date | None = None, app: list[int] | None = None, platform: list[IosPlatformOrStr] | None = None, country: list[AppCountriesOrStr] | None = None, category: list[IosCategoryOrStr] | None = None, collection: list[CollectionOrStr] | None = None, rank_start: int | None = None, rank_end: int | None = None, limit: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date_start` — query · `date_end` — query · `app` — query · `platform` — query · `country` — query · `category` — query · `collection` — query · `rank_start` — query · `rank_end` — query · `limit` — query · `page` — query
- **Returns (parsed)**: `ApiResponseListModelsResponsesResponseIosRankingItem`
- **Returns (raw)**: `ApiResult[ApiResponseListModelsResponsesResponseIosRankingItem, GetIosRankingsIosRankingsGetErrorBody]`
- **Error**: `GetIosRankingsIosRankingsGetErrorBody` — **Case A (typed)**
- **Error arms**: `IosRankings401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IosPlatformOrStr` | `appstore_spy/models/enums/ios_platform.py` |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `IosCategoryOrStr` | `appstore_spy/models/enums/ios_category.py` |
| `CollectionOrStr` | `appstore_spy/models/enums/collection.py` |
| `ApiResponseListModelsResponsesResponseIosRankingItem` | `appstore_spy/models/api_response_list_models_responses_response_ios_ranking_item.py` |
| `GetIosRankingsIosRankingsGetErrorBody` | `appstore_spy/errors/get_ios_rankings_ios_rankings_get_error.py` |
| `IosRankings401Error1` | `appstore_spy/models/ios_rankings401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.get_play_app_countries_ios_info_countries_get

- **Route**: `GET /ios/info/countries`
- **Auth**: `api_key_header`
- **Signature**: `def get_play_app_countries_ios_info_countries_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `StoreCountries`
- **Returns (raw)**: `ApiResult[StoreCountries, GetPlayAppCountriesIosInfoCountriesGetErrorBody]`
- **Error**: `GetPlayAppCountriesIosInfoCountriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `IosInfoCountries401Error1` [401] · `str` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoreCountries` | `appstore_spy/models/store_countries.py` |
| `GetPlayAppCountriesIosInfoCountriesGetErrorBody` | `appstore_spy/errors/get_play_app_countries_ios_info_countries_get_error.py` |
| `IosInfoCountries401Error1` | `appstore_spy/models/ios_info_countries401_error1.py` |

### client.app_store.get_play_app_languages_ios_info_languages_get

- **Route**: `GET /ios/info/languages`
- **Auth**: `api_key_header`
- **Signature**: `def get_play_app_languages_ios_info_languages_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `StoreLanguages`
- **Returns (raw)**: `ApiResult[StoreLanguages, GetPlayAppLanguagesIosInfoLanguagesGetErrorBody]`
- **Error**: `GetPlayAppLanguagesIosInfoLanguagesGetErrorBody` — **Case A (typed)**
- **Error arms**: `IosInfoLanguages401Error1` [401] · `str` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoreLanguages` | `appstore_spy/models/store_languages.py` |
| `GetPlayAppLanguagesIosInfoLanguagesGetErrorBody` | `appstore_spy/errors/get_play_app_languages_ios_info_languages_get_error.py` |
| `IosInfoLanguages401Error1` | `appstore_spy/models/ios_info_languages401_error1.py` |

### client.app_store.get_recrawl_ios_apps_id_recrawl_get

- **Route**: `GET /ios/apps/{id}/recrawl`
- **Auth**: `api_key_header`
- **Signature**: `def get_recrawl_ios_apps_id_recrawl_get(id_: str, *, country: AppCountriesOrStr | None = AppCountries.US, language: AppLanguagesOrStr | None = AppLanguages.EN_US, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `country` — query · `language` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetRecrawlIosAppsIdRecrawlGetErrorBody]`
- **Error**: `GetRecrawlIosAppsIdRecrawlGetErrorBody` — **Case A (typed)**
- **Error arms**: `IosAppsRecrawl401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `AppLanguagesOrStr` | `appstore_spy/models/enums/app_languages.py` |
| `GetRecrawlIosAppsIdRecrawlGetErrorBody` | `appstore_spy/errors/get_recrawl_ios_apps_id_recrawl_get_error.py` |
| `IosAppsRecrawl401Error1` | `appstore_spy/models/ios_apps_recrawl401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.get_reviews_ios_apps_id_reviews_get

- **Route**: `GET /ios/apps/{id}/reviews`
- **Auth**: `api_key_header`
- **Signature**: `def get_reviews_ios_apps_id_reviews_get(id_: str, *, country: AppCountriesOrStr | None = None, fields: str | None = None, limit: int | None = 10, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `country` — query · `fields` — query · `limit` — query · `sort` — query
- **Returns (parsed)**: `list[IosReview]`
- **Returns (raw)**: `ApiResult[list[IosReview], GetReviewsIosAppsIdReviewsGetErrorBody]`
- **Error**: `GetReviewsIosAppsIdReviewsGetErrorBody` — **Case A (typed)**
- **Error arms**: `IosAppsReviews401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `IosReview` | `appstore_spy/models/ios_review.py` |
| `GetReviewsIosAppsIdReviewsGetErrorBody` | `appstore_spy/errors/get_reviews_ios_apps_id_reviews_get_error.py` |
| `IosAppsReviews401Error1` | `appstore_spy/models/ios_apps_reviews401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.get_similar_ios_apps_similar_post

- **Route**: `POST /ios/apps/similar`
- **Auth**: `api_key_header`
- **Signature**: `def get_similar_ios_apps_similar_post(*, body: IosSimilarSearchBody | IosSimilarSearchBodyDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `IosAppListResponse`
- **Returns (raw)**: `ApiResult[IosAppListResponse, GetSimilarIosAppsSimilarPostErrorBody]`
- **Error**: `GetSimilarIosAppsSimilarPostErrorBody` — **Case A (typed)**
- **Error arms**: `IosAppsSimilar401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IosSimilarSearchBody` | `appstore_spy/models/ios_similar_search_body.py` |
| `IosSimilarSearchBodyDict` | `appstore_spy/models/ios_similar_search_body.py` |
| `IosAppListResponse` | `appstore_spy/models/ios_app_list_response.py` |
| `GetSimilarIosAppsSimilarPostErrorBody` | `appstore_spy/errors/get_similar_ios_apps_similar_post_error.py` |
| `IosAppsSimilar401Error1` | `appstore_spy/models/ios_apps_similar401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.app_store.get_summary_ios_apps_summary_post

- **Route**: `POST /ios/apps/summary`
- **Auth**: `api_key_header`
- **Signature**: `def get_summary_ios_apps_summary_post(body: IosSummarySearchBody | IosSummarySearchBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SummaryResponse`
- **Returns (raw)**: `ApiResult[SummaryResponse, GetSummaryIosAppsSummaryPostErrorBody]`
- **Error**: `GetSummaryIosAppsSummaryPostErrorBody` — **Case A (typed)**
- **Error arms**: `IosAppsSummary401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `IosSummarySearchBody` | `appstore_spy/models/ios_summary_search_body.py` |
| `IosSummarySearchBodyDict` | `appstore_spy/models/ios_summary_search_body.py` |
| `SummaryResponse` | `appstore_spy/models/summary_response.py` |
| `GetSummaryIosAppsSummaryPostErrorBody` | `appstore_spy/errors/get_summary_ios_apps_summary_post_error.py` |
| `IosAppsSummary401Error1` | `appstore_spy/models/ios_apps_summary401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

