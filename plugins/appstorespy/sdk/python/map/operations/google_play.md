<!-- Generated file — do not edit; regenerated with the SDK. -->

# GooglePlay — operations

Accessor: `client.google_play` · Source: `appstore_spy/apis/google_play.py` · 20 operations

Each `###` block is one operation and assumes `sdk-map.md` is loaded: blocks omit what its invariants table covers and are otherwise self-contained, so chunk at block level. Signatures are the sync parsed spelling; the async and raw spellings take the same parameter names, the async ones typing `request_options` as `AsyncRequestOptionsOrDict` (see sdk-map.md). **Type sources** names the module declaring each type an operation mentions, so resolving a body, return or error payload is a lookup rather than a search; the runtime types `RawError` and `ApiResult` are excluded.

### client.google_play.dev_filter_search_play_developers_query_post

- **Route**: `POST /play/developers/query`
- **Auth**: `api_key_header`
- **Signature**: `def dev_filter_search_play_developers_query_post(body: PlayDevSearchBody | PlayDevSearchBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PlayDevListResponse`
- **Returns (raw)**: `ApiResult[PlayDevListResponse, DevFilterSearchPlayDevelopersQueryPostErrorBody]`
- **Error**: `DevFilterSearchPlayDevelopersQueryPostErrorBody` — **Case A (typed)**
- **Error arms**: `PlayDevelopersQuery401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlayDevSearchBody` | `appstore_spy/models/play_dev_search_body.py` |
| `PlayDevSearchBodyDict` | `appstore_spy/models/play_dev_search_body.py` |
| `PlayDevListResponse` | `appstore_spy/models/play_dev_list_response.py` |
| `DevFilterSearchPlayDevelopersQueryPostErrorBody` | `appstore_spy/errors/dev_filter_search_play_developers_query_post_error.py` |
| `PlayDevelopersQuery401Error1` | `appstore_spy/models/play_developers_query401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.dev_search_play_developers_get

- **Route**: `GET /play/developers`
- **Auth**: `api_key_header`
- **Signature**: `def dev_search_play_developers_get(*, q: str | None = None, fields: str | None = None, sort: str | None = None, limit: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `fields` — query · `sort` — query · `limit` — query · `page` — query
- **Returns (parsed)**: `list[PlayDev]`
- **Returns (raw)**: `ApiResult[list[PlayDev], DevSearchPlayDevelopersGetErrorBody]`
- **Error**: `DevSearchPlayDevelopersGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayDevelopers401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlayDev` | `appstore_spy/models/play_dev.py` |
| `DevSearchPlayDevelopersGetErrorBody` | `appstore_spy/errors/dev_search_play_developers_get_error.py` |
| `PlayDevelopers401Error1` | `appstore_spy/models/play_developers401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_app_details_play_apps_id_get

- **Route**: `GET /play/apps/{id}`
- **Auth**: `api_key_header`
- **Signature**: `def get_app_details_play_apps_id_get(id_: str, *, fields: str | None = None, country: AppCountriesOrStr | None = None, language: AppLanguagesOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `fields` — query · `country` — query · `language` — query
- **Returns (parsed)**: `PlayApp`
- **Returns (raw)**: `ApiResult[PlayApp, GetAppDetailsPlayAppsIdGetErrorBody]`
- **Error**: `GetAppDetailsPlayAppsIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayApps401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `AppLanguagesOrStr` | `appstore_spy/models/enums/app_languages.py` |
| `PlayApp` | `appstore_spy/models/play_app.py` |
| `GetAppDetailsPlayAppsIdGetErrorBody` | `appstore_spy/errors/get_app_details_play_apps_id_get_error.py` |
| `PlayApps401Error1` | `appstore_spy/models/play_apps401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_app_search_play_apps_get

- **Route**: `GET /play/apps`
- **Auth**: `api_key_header`
- **Signature**: `def get_app_search_play_apps_get(*, q: str | None = None, published: bool | None = None, country: AppCountriesOrStr | None = None, language: AppLanguagesOrStr | None = None, fields: str | None = None, sort: str | None = None, limit: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `q` — query · `published` — query · `country` — query · `language` — query · `fields` — query · `sort` — query · `limit` — query · `page` — query
- **Returns (parsed)**: `list[PlayApp]`
- **Returns (raw)**: `ApiResult[list[PlayApp], GetAppSearchPlayAppsGetErrorBody]`
- **Error**: `GetAppSearchPlayAppsGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayApps401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `AppLanguagesOrStr` | `appstore_spy/models/enums/app_languages.py` |
| `PlayApp` | `appstore_spy/models/play_app.py` |
| `GetAppSearchPlayAppsGetErrorBody` | `appstore_spy/errors/get_app_search_play_apps_get_error.py` |
| `PlayApps401Error1` | `appstore_spy/models/play_apps401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_apps_estimates_play_developers_id_estimates_get

- **Route**: `GET /play/developers/{id}/estimates`
- **Auth**: `api_key_header`
- **Signature**: `def get_apps_estimates_play_developers_id_estimates_get(id_: str, *, start: Date | None = None, end: Date | None = None, fill_gaps: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `start` — query · `end` — query · `fill_gaps` — query
- **Returns (parsed)**: `list[DevAppsEstimates]`
- **Returns (raw)**: `ApiResult[list[DevAppsEstimates], GetAppsEstimatesPlayDevelopersIdEstimatesGetErrorBody]`
- **Error**: `GetAppsEstimatesPlayDevelopersIdEstimatesGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayDevelopersEstimates401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `DevAppsEstimates` | `appstore_spy/models/dev_apps_estimates.py` |
| `GetAppsEstimatesPlayDevelopersIdEstimatesGetErrorBody` | `appstore_spy/errors/get_apps_estimates_play_developers_id_estimates_get_error.py` |
| `PlayDevelopersEstimates401Error1` | `appstore_spy/models/play_developers_estimates401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_apps_estimates_play_estimates_get

- **Route**: `GET /play/estimates`
- **Auth**: `api_key_header`
- **Signature**: `def get_apps_estimates_play_estimates_get(id_: str, *, start: Date | None = None, end: Date | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — query `id` · `start` — query · `end` — query
- **Returns (parsed)**: `list[AppsEstimates]`
- **Returns (raw)**: `ApiResult[list[AppsEstimates], GetAppsEstimatesPlayEstimatesGetErrorBody]`
- **Error**: `GetAppsEstimatesPlayEstimatesGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayEstimates401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppsEstimates` | `appstore_spy/models/apps_estimates.py` |
| `GetAppsEstimatesPlayEstimatesGetErrorBody` | `appstore_spy/errors/get_apps_estimates_play_estimates_get_error.py` |
| `PlayEstimates401Error1` | `appstore_spy/models/play_estimates401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_apps_installs_daily_play_apps_id_installs_daily_get

- **Route**: `GET /play/apps/{id}/installs_daily`
- **Auth**: `api_key_header`
- **Signature**: `def get_apps_installs_daily_play_apps_id_installs_daily_get(id_: str, *, start: Date | None = None, end: Date | None = None, smooth: bool | None = False, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `start` — query · `end` — query · `smooth` — query
- **Returns (parsed)**: `list[AppsDailyInstalls]`
- **Returns (raw)**: `ApiResult[list[AppsDailyInstalls], GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody]`
- **Error**: `GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayAppsInstallsDaily401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppsDailyInstalls` | `appstore_spy/models/apps_daily_installs.py` |
| `GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody` | `appstore_spy/errors/get_apps_installs_daily_play_apps_id_installs_daily_get_error.py` |
| `PlayAppsInstallsDaily401Error1` | `appstore_spy/models/play_apps_installs_daily401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_country_aggregates_play_aggregates_countries_get

- **Route**: `GET /play/aggregates/countries`
- **Auth**: `api_key_header`
- **Signature**: `def get_country_aggregates_play_aggregates_countries_get(*, category_type: TypeEnumOrStr | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `category_type` — query
- **Returns (parsed)**: `DevCountryAggregatesResponse`
- **Returns (raw)**: `ApiResult[DevCountryAggregatesResponse, GetCountryAggregatesPlayAggregatesCountriesGetErrorBody]`
- **Error**: `GetCountryAggregatesPlayAggregatesCountriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayAggregatesCountries401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `TypeEnumOrStr` | `appstore_spy/models/enums/type_enum.py` |
| `DevCountryAggregatesResponse` | `appstore_spy/models/dev_country_aggregates_response.py` |
| `GetCountryAggregatesPlayAggregatesCountriesGetErrorBody` | `appstore_spy/errors/get_country_aggregates_play_aggregates_countries_get_error.py` |
| `PlayAggregatesCountries401Error1` | `appstore_spy/models/play_aggregates_countries401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_developer_play_developers_id_get

- **Route**: `GET /play/developers/{id}`
- **Auth**: `api_key_header`
- **Signature**: `def get_developer_play_developers_id_get(id_: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `fields` — query
- **Returns (parsed)**: `PlayDev`
- **Returns (raw)**: `ApiResult[PlayDev, GetDeveloperPlayDevelopersIdGetErrorBody]`
- **Error**: `GetDeveloperPlayDevelopersIdGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayDevelopers401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlayDev` | `appstore_spy/models/play_dev.py` |
| `GetDeveloperPlayDevelopersIdGetErrorBody` | `appstore_spy/errors/get_developer_play_developers_id_get_error.py` |
| `PlayDevelopers401Error1` | `appstore_spy/models/play_developers401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_events_play_liveops_get2

- **Route**: `GET /play/liveops`
- **Auth**: `api_key_header`
- **Signature**: `def get_events_play_liveops_get2(app: str, *, country: AppCountriesOrStr | None = AppCountries.US, freshness: CacheTimeOrStr | None = CacheTime._7D, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `app`
- **Params**: `app` — query · `country` — query · `freshness` — query
- **Returns (parsed)**: `list[Event]`
- **Returns (raw)**: `ApiResult[list[Event], GetEventsPlayLiveopsGet2ErrorBody]`
- **Error**: `GetEventsPlayLiveopsGet2ErrorBody` — **Case A (typed)**
- **Error arms**: `PlayLiveops401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `CacheTimeOrStr` | `appstore_spy/models/enums/cache_time.py` |
| `Event` | `appstore_spy/models/event.py` |
| `GetEventsPlayLiveopsGet2ErrorBody` | `appstore_spy/errors/get_events_play_liveops_get2_error.py` |
| `PlayLiveops401Error1` | `appstore_spy/models/play_liveops401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_filter_search_play_apps_query_post

- **Route**: `POST /play/apps/query`
- **Auth**: `api_key_header`
- **Signature**: `def get_filter_search_play_apps_query_post(*, body: PlayAppSearchBody | PlayAppSearchBodyDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PlayAppListResponse`
- **Returns (raw)**: `ApiResult[PlayAppListResponse, GetFilterSearchPlayAppsQueryPostErrorBody]`
- **Error**: `GetFilterSearchPlayAppsQueryPostErrorBody` — **Case A (typed)**
- **Error arms**: `PlayAppsQuery401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `PlayAppSearchBody` | `appstore_spy/models/play_app_search_body.py` |
| `PlayAppSearchBodyDict` | `appstore_spy/models/play_app_search_body.py` |
| `PlayAppListResponse` | `appstore_spy/models/play_app_list_response.py` |
| `GetFilterSearchPlayAppsQueryPostErrorBody` | `appstore_spy/errors/get_filter_search_play_apps_query_post_error.py` |
| `PlayAppsQuery401Error1` | `appstore_spy/models/play_apps_query401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_listing_play_apps_id_listing_get

- **Route**: `GET /play/apps/{id}/listing`
- **Auth**: `api_key_header`
- **Signature**: `def get_listing_play_apps_id_listing_get(id_: str, *, country: AppCountriesOrStr | None = AppCountries.US, language: PlayListingLanguagesOrStr | None = PlayListingLanguages.EN_US, freshness: CacheTimeOrStr | None = CacheTime._1D, wait: bool | None = True, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `country` — query · `language` — query · `freshness` — query · `wait` — query
- **Returns (parsed)**: `PlayListing`
- **Returns (raw)**: `ApiResult[PlayListing, GetListingPlayAppsIdListingGetErrorBody]`
- **Error**: `GetListingPlayAppsIdListingGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayAppsListing401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `PlayAppsListing429Error1` [429] · `RawError` [404, 502, anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `PlayListingLanguagesOrStr` | `appstore_spy/models/enums/play_listing_languages.py` |
| `CacheTimeOrStr` | `appstore_spy/models/enums/cache_time.py` |
| `PlayListing` | `appstore_spy/models/play_listing.py` |
| `GetListingPlayAppsIdListingGetErrorBody` | `appstore_spy/errors/get_listing_play_apps_id_listing_get_error.py` |
| `PlayAppsListing401Error1` | `appstore_spy/models/play_apps_listing401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |
| `PlayAppsListing429Error1` | `appstore_spy/models/play_apps_listing429_error1.py` |

### client.google_play.get_play_app_countries_play_info_countries_get

- **Route**: `GET /play/info/countries`
- **Auth**: `api_key_header`
- **Signature**: `def get_play_app_countries_play_info_countries_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `StoreCountries`
- **Returns (raw)**: `ApiResult[StoreCountries, GetPlayAppCountriesPlayInfoCountriesGetErrorBody]`
- **Error**: `GetPlayAppCountriesPlayInfoCountriesGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayInfoCountries401Error1` [401] · `str` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoreCountries` | `appstore_spy/models/store_countries.py` |
| `GetPlayAppCountriesPlayInfoCountriesGetErrorBody` | `appstore_spy/errors/get_play_app_countries_play_info_countries_get_error.py` |
| `PlayInfoCountries401Error1` | `appstore_spy/models/play_info_countries401_error1.py` |

### client.google_play.get_play_app_languages_play_info_languages_get

- **Route**: `GET /play/info/languages`
- **Auth**: `api_key_header`
- **Signature**: `def get_play_app_languages_play_info_languages_get(*, request_options: RequestOptionsOrDict | None = None)`
- **Returns (parsed)**: `StoreLanguages`
- **Returns (raw)**: `ApiResult[StoreLanguages, GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody]`
- **Error**: `GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayInfoLanguages401Error1` [401] · `str` [402] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `StoreLanguages` | `appstore_spy/models/store_languages.py` |
| `GetPlayAppLanguagesPlayInfoLanguagesGetErrorBody` | `appstore_spy/errors/get_play_app_languages_play_info_languages_get_error.py` |
| `PlayInfoLanguages401Error1` | `appstore_spy/models/play_info_languages401_error1.py` |

### client.google_play.get_play_rankings_play_rankings_get

- **Route**: `GET /play/rankings`
- **Auth**: `api_key_header`
- **Signature**: `def get_play_rankings_play_rankings_get(*, date_start: Date | None = None, date_end: Date | None = None, app: list[str] | None = None, country: list[AppCountriesOrStr] | None = None, category: list[PlayCategoryOrStr] | None = None, collection: list[CollectionOrStr] | None = None, rank_start: int | None = None, rank_end: int | None = None, limit: int | None = 10, page: int | None = 1, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `date_start` — query · `date_end` — query · `app` — query · `country` — query · `category` — query · `collection` — query · `rank_start` — query · `rank_end` — query · `limit` — query · `page` — query
- **Returns (parsed)**: `ApiResponseListModelsResponsesResponsePlayRankingItem`
- **Returns (raw)**: `ApiResult[ApiResponseListModelsResponsesResponsePlayRankingItem, GetPlayRankingsPlayRankingsGetErrorBody]`
- **Error**: `GetPlayRankingsPlayRankingsGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayRankings401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `PlayCategoryOrStr` | `appstore_spy/models/enums/play_category.py` |
| `CollectionOrStr` | `appstore_spy/models/enums/collection.py` |
| `ApiResponseListModelsResponsesResponsePlayRankingItem` | `appstore_spy/models/api_response_list_models_responses_response_play_ranking_item.py` |
| `GetPlayRankingsPlayRankingsGetErrorBody` | `appstore_spy/errors/get_play_rankings_play_rankings_get_error.py` |
| `PlayRankings401Error1` | `appstore_spy/models/play_rankings401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_recrawl_play_apps_id_recrawl_get

- **Route**: `GET /play/apps/{id}/recrawl`
- **Auth**: `api_key_header`
- **Signature**: `def get_recrawl_play_apps_id_recrawl_get(id_: str, *, country: AppCountriesOrStr | None = AppCountries.US, language: AppLanguagesOrStr | None = AppLanguages.EN_US, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`
- **Params**: `id_` — path `id` · `country` — query · `language` — query
- **Returns (parsed)**: `None`
- **Returns (raw)**: `ApiResult[None, GetRecrawlPlayAppsIdRecrawlGetErrorBody]`
- **Error**: `GetRecrawlPlayAppsIdRecrawlGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayAppsRecrawl401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `AppLanguagesOrStr` | `appstore_spy/models/enums/app_languages.py` |
| `GetRecrawlPlayAppsIdRecrawlGetErrorBody` | `appstore_spy/errors/get_recrawl_play_apps_id_recrawl_get_error.py` |
| `PlayAppsRecrawl401Error1` | `appstore_spy/models/play_apps_recrawl401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_reviews_play_apps_id_reviews_get

- **Route**: `GET /play/apps/{id}/reviews`
- **Auth**: `api_key_header`
- **Signature**: `def get_reviews_play_apps_id_reviews_get(id_: str, language: AppLanguagesOrStr, *, country: AppCountriesOrStr | None = None, limit: int | None = 10, sort: str | None = None, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `id_`, `language`
- **Params**: `id_` — path `id` · `language` — query · `country` — query · `limit` — query · `sort` — query
- **Returns (parsed)**: `list[PlayReview]`
- **Returns (raw)**: `ApiResult[list[PlayReview], GetReviewsPlayAppsIdReviewsGetErrorBody]`
- **Error**: `GetReviewsPlayAppsIdReviewsGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlayAppsReviews401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppLanguagesOrStr` | `appstore_spy/models/enums/app_languages.py` |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `PlayReview` | `appstore_spy/models/play_review.py` |
| `GetReviewsPlayAppsIdReviewsGetErrorBody` | `appstore_spy/errors/get_reviews_play_apps_id_reviews_get_error.py` |
| `PlayAppsReviews401Error1` | `appstore_spy/models/play_apps_reviews401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_similar_play_apps_similar_post

- **Route**: `POST /play/apps/similar`
- **Auth**: `api_key_header`
- **Signature**: `def get_similar_play_apps_similar_post(*, body: SimilarSearchBody | SimilarSearchBodyDict | None = None, request_options: RequestOptionsOrDict | None = None)`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `PlayAppListResponse`
- **Returns (raw)**: `ApiResult[PlayAppListResponse, GetSimilarPlayAppsSimilarPostErrorBody]`
- **Error**: `GetSimilarPlayAppsSimilarPostErrorBody` — **Case A (typed)**
- **Error arms**: `PlayAppsSimilar401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SimilarSearchBody` | `appstore_spy/models/similar_search_body.py` |
| `SimilarSearchBodyDict` | `appstore_spy/models/similar_search_body.py` |
| `PlayAppListResponse` | `appstore_spy/models/play_app_list_response.py` |
| `GetSimilarPlayAppsSimilarPostErrorBody` | `appstore_spy/errors/get_similar_play_apps_similar_post_error.py` |
| `PlayAppsSimilar401Error1` | `appstore_spy/models/play_apps_similar401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_suggests_play_suggestions_get

- **Route**: `GET /play/suggestions`
- **Auth**: `api_key_header`
- **Signature**: `def get_suggests_play_suggestions_get(q: str, *, country: AppCountriesOrStr | None = AppCountries.US, lang: AppLanguagesOrStr | None = AppLanguages.EN_US, freshness: CacheTimeOrStr | None = CacheTime._7D, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `q`
- **Params**: `q` — query · `country` — query · `lang` — query · `freshness` — query
- **Returns (parsed)**: `Suggest`
- **Returns (raw)**: `ApiResult[Suggest, GetSuggestsPlaySuggestionsGetErrorBody]`
- **Error**: `GetSuggestsPlaySuggestionsGetErrorBody` — **Case A (typed)**
- **Error arms**: `PlaySuggestions401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `AppCountriesOrStr` | `appstore_spy/models/enums/app_countries.py` |
| `AppLanguagesOrStr` | `appstore_spy/models/enums/app_languages.py` |
| `CacheTimeOrStr` | `appstore_spy/models/enums/cache_time.py` |
| `Suggest` | `appstore_spy/models/suggest.py` |
| `GetSuggestsPlaySuggestionsGetErrorBody` | `appstore_spy/errors/get_suggests_play_suggestions_get_error.py` |
| `PlaySuggestions401Error1` | `appstore_spy/models/play_suggestions401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

### client.google_play.get_summary_play_apps_summary_post

- **Route**: `POST /play/apps/summary`
- **Auth**: `api_key_header`
- **Signature**: `def get_summary_play_apps_summary_post(body: SummarySearchBody | SummarySearchBodyDict, *, request_options: RequestOptionsOrDict | None = None)`
  - required, positional: `body`
- **Params**: `body` — JSON body
- **Returns (parsed)**: `SummaryResponse`
- **Returns (raw)**: `ApiResult[SummaryResponse, GetSummaryPlayAppsSummaryPostErrorBody]`
- **Error**: `GetSummaryPlayAppsSummaryPostErrorBody` — **Case A (typed)**
- **Error arms**: `PlayAppsSummary401Error1` [401] · `str` [402] · `HttpValidationError` [422] · `RawError` [anything unmapped]

| Type | Source |
| --- | --- |
| `SummarySearchBody` | `appstore_spy/models/summary_search_body.py` |
| `SummarySearchBodyDict` | `appstore_spy/models/summary_search_body.py` |
| `SummaryResponse` | `appstore_spy/models/summary_response.py` |
| `GetSummaryPlayAppsSummaryPostErrorBody` | `appstore_spy/errors/get_summary_play_apps_summary_post_error.py` |
| `PlayAppsSummary401Error1` | `appstore_spy/models/play_apps_summary401_error1.py` |
| `HttpValidationError` | `appstore_spy/models/http_validation_error.py` |

