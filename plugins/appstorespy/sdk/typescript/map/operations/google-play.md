<!-- Generated file — do not edit; regenerated with the SDK. -->

# GooglePlay — operations

Accessor: `client.googlePlay` · Source: `src/resources/google-play.ts` · 20 operations · Request and error types: namespace `GooglePlay`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `appstore-spy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### devFilterSearchPlayDevelopersQueryPost

- **Signature**: `devFilterSearchPlayDevelopersQueryPost(request: GooglePlay.DevFilterSearchPlayDevelopersQueryPostRequest, options?: RequestOptions): ApiPromise<PlayDevListResponse, GooglePlay.DevFilterSearchPlayDevelopersQueryPostError>`
- **Wire**: `POST /play/developers/query`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlayDevListResponse`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.DevFilterSearchPlayDevelopersQueryPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playDevelopersQuery401Error1"` [401] `PlayDevelopersQuery401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.DevFilterSearchPlayDevelopersQueryPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlayDevSearchBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlayDevSearchBody` | `playDevSearchBodySchema` | `src/models/play-dev-search-body.ts` |
| `PlayDevListResponse` | `playDevListResponseSchema` | `src/models/play-dev-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayDevelopersQuery401Error1` | `playDevelopersQuery401Error1Schema` | `src/models/play-developers-query401-error1.ts` |

### devSearchPlayDevelopersGet

- **Signature**: `devSearchPlayDevelopersGet(request?: GooglePlay.DevSearchPlayDevelopersGetRequest, options?: RequestOptions): ApiPromise<PlayDev[], GooglePlay.DevSearchPlayDevelopersGetError>`
- **Wire**: `GET /play/developers`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayDev[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.DevSearchPlayDevelopersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playDevelopers401Error1"` [401] `PlayDevelopers401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.DevSearchPlayDevelopersGetRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `q` | `query` | `string` | no | — |
| `fields` | `query` | `string` | no | — |
| `sort` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `10` |
| `page` | `query` | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlayDev` | `playDevSchema` | `src/models/play-dev.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayDevelopers401Error1` | `playDevelopers401Error1Schema` | `src/models/play-developers401-error1.ts` |

### getAppDetailsPlayAppsIdGet

- **Signature**: `getAppDetailsPlayAppsIdGet(request: GooglePlay.GetAppDetailsPlayAppsIdGetRequest, options?: RequestOptions): ApiPromise<PlayApp, GooglePlay.GetAppDetailsPlayAppsIdGetError>`
- **Wire**: `GET /play/apps/{id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayApp`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetAppDetailsPlayAppsIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playApps401Error1"` [401] `PlayApps401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetAppDetailsPlayAppsIdGetRequest` (4):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `fields` | `query` | `string` | no |
| `country` | `query` | `AppCountries` | no |
| `language` | `query` | `AppLanguages` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `AppLanguages` | `appLanguagesSchema` | `src/models/app-languages.ts` |
| `PlayApp` | `playAppSchema` | `src/models/play-app.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayApps401Error1` | `playApps401Error1Schema` | `src/models/play-apps401-error1.ts` |

### getAppSearchPlayAppsGet

- **Signature**: `getAppSearchPlayAppsGet(request?: GooglePlay.GetAppSearchPlayAppsGetRequest, options?: RequestOptions): ApiPromise<PlayApp[], GooglePlay.GetAppSearchPlayAppsGetError>`
- **Wire**: `GET /play/apps`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayApp[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetAppSearchPlayAppsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playApps401Error1"` [401] `PlayApps401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetAppSearchPlayAppsGetRequest` (8):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `q` | `query` | `string` | no | — |
| `published` | `query` | `boolean` | no | — |
| `country` | `query` | `AppCountries` | no | — |
| `language` | `query` | `AppLanguages` | no | — |
| `fields` | `query` | `string` | no | — |
| `sort` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `10` |
| `page` | `query` | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `AppLanguages` | `appLanguagesSchema` | `src/models/app-languages.ts` |
| `PlayApp` | `playAppSchema` | `src/models/play-app.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayApps401Error1` | `playApps401Error1Schema` | `src/models/play-apps401-error1.ts` |

### getAppsEstimatesPlayDevelopersIdEstimatesGet

- **Signature**: `getAppsEstimatesPlayDevelopersIdEstimatesGet(request: GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest, options?: RequestOptions): ApiPromise<DevAppsEstimates[], GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetError>`
- **Wire**: `GET /play/developers/{id}/estimates`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DevAppsEstimates[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playDevelopersEstimates401Error1"` [401] `PlayDevelopersEstimates401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetAppsEstimatesPlayDevelopersIdEstimatesGetRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `id` | `path` | — | `string` | yes | — |
| `start` | `query` | — | `string` (date) | no | — |
| `end` | `query` | — | `string` (date) | no | — |
| `fillGaps` | `query` | `fill_gaps` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `DevAppsEstimates` | `devAppsEstimatesSchema` | `src/models/dev-apps-estimates.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayDevelopersEstimates401Error1` | `playDevelopersEstimates401Error1Schema` | `src/models/play-developers-estimates401-error1.ts` |

### getAppsEstimatesPlayEstimatesGet

- **Signature**: `getAppsEstimatesPlayEstimatesGet(request: GooglePlay.GetAppsEstimatesPlayEstimatesGetRequest, options?: RequestOptions): ApiPromise<AppsEstimates[], GooglePlay.GetAppsEstimatesPlayEstimatesGetError>`
- **Wire**: `GET /play/estimates`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsEstimates[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetAppsEstimatesPlayEstimatesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playEstimates401Error1"` [401] `PlayEstimates401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetAppsEstimatesPlayEstimatesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `query` | `string` | yes |
| `start` | `query` | `string` (date) | no |
| `end` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppsEstimates` | `appsEstimatesSchema` | `src/models/apps-estimates.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayEstimates401Error1` | `playEstimates401Error1Schema` | `src/models/play-estimates401-error1.ts` |

### getAppsInstallsDailyPlayAppsIdInstallsDailyGet

- **Signature**: `getAppsInstallsDailyPlayAppsIdInstallsDailyGet(request: GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest, options?: RequestOptions): ApiPromise<AppsDailyInstalls[], GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError>`
- **Wire**: `GET /play/apps/{id}/installs_daily`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsDailyInstalls[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playAppsInstallsDaily401Error1"` [401] `PlayAppsInstallsDaily401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetAppsInstallsDailyPlayAppsIdInstallsDailyGetRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `start` | `query` | `string` (date) | no | — |
| `end` | `query` | `string` (date) | no | — |
| `smooth` | `query` | `boolean` | no | `false` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppsDailyInstalls` | `appsDailyInstallsSchema` | `src/models/apps-daily-installs.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayAppsInstallsDaily401Error1` | `playAppsInstallsDaily401Error1Schema` | `src/models/play-apps-installs-daily401-error1.ts` |

### getCountryAggregatesPlayAggregatesCountriesGet

- **Signature**: `getCountryAggregatesPlayAggregatesCountriesGet(request?: GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetRequest, options?: RequestOptions): ApiPromise<DevCountryAggregatesResponse, GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetError>`
- **Wire**: `GET /play/aggregates/countries`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DevCountryAggregatesResponse`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playAggregatesCountries401Error1"` [401] `PlayAggregatesCountries401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetCountryAggregatesPlayAggregatesCountriesGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryType` | `query` | `category_type` | `TypeEnum` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TypeEnum` | `typeEnumSchema` | `src/models/type-enum.ts` |
| `DevCountryAggregatesResponse` | `devCountryAggregatesResponseSchema` | `src/models/dev-country-aggregates-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayAggregatesCountries401Error1` | `playAggregatesCountries401Error1Schema` | `src/models/play-aggregates-countries401-error1.ts` |

### getDeveloperPlayDevelopersIdGet

- **Signature**: `getDeveloperPlayDevelopersIdGet(request: GooglePlay.GetDeveloperPlayDevelopersIdGetRequest, options?: RequestOptions): ApiPromise<PlayDev, GooglePlay.GetDeveloperPlayDevelopersIdGetError>`
- **Wire**: `GET /play/developers/{id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayDev`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetDeveloperPlayDevelopersIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playDevelopers401Error1"` [401] `PlayDevelopers401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetDeveloperPlayDevelopersIdGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `fields` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlayDev` | `playDevSchema` | `src/models/play-dev.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayDevelopers401Error1` | `playDevelopers401Error1Schema` | `src/models/play-developers401-error1.ts` |

### getEventsPlayLiveopsGet2

- **Signature**: `getEventsPlayLiveopsGet2(request: GooglePlay.GetEventsPlayLiveopsGet2Request, options?: RequestOptions): ApiPromise<Event[], GooglePlay.GetEventsPlayLiveopsGet2Error>`
- **Wire**: `GET /play/liveops`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Event[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetEventsPlayLiveopsGet2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playLiveops401Error1"` [401] `PlayLiveops401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetEventsPlayLiveopsGet2Request` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `app` | `query` | `string` | yes | — |
| `country` | `query` | `AppCountries` | no | `AppCountries.Us` |
| `freshness` | `query` | `CacheTime` | no | `CacheTime._7D` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `CacheTime` | `cacheTimeSchema` | `src/models/cache-time.ts` |
| `Event` | `eventSchema` | `src/models/event.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayLiveops401Error1` | `playLiveops401Error1Schema` | `src/models/play-liveops401-error1.ts` |

### getFilterSearchPlayAppsQueryPost

- **Signature**: `getFilterSearchPlayAppsQueryPost(request?: GooglePlay.GetFilterSearchPlayAppsQueryPostRequest, options?: RequestOptions): ApiPromise<PlayAppListResponse, GooglePlay.GetFilterSearchPlayAppsQueryPostError>`
- **Wire**: `POST /play/apps/query`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlayAppListResponse`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetFilterSearchPlayAppsQueryPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playAppsQuery401Error1"` [401] `PlayAppsQuery401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetFilterSearchPlayAppsQueryPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `PlayAppSearchBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PlayAppSearchBody` | `playAppSearchBodySchema` | `src/models/play-app-search-body.ts` |
| `PlayAppListResponse` | `playAppListResponseSchema` | `src/models/play-app-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayAppsQuery401Error1` | `playAppsQuery401Error1Schema` | `src/models/play-apps-query401-error1.ts` |

### getListingPlayAppsIdListingGet

- **Signature**: `getListingPlayAppsIdListingGet(request: GooglePlay.GetListingPlayAppsIdListingGetRequest, options?: RequestOptions): ApiPromise<PlayListing, GooglePlay.GetListingPlayAppsIdListingGetError>`
- **Wire**: `GET /play/apps/{id}/listing`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayListing`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetListingPlayAppsIdListingGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error404"` [404] no body · `"error502"` [502] no body · `"httpValidationError"` [422] `HttpValidationError` · `"playAppsListing401Error1"` [401] `PlayAppsListing401Error1` · `"playAppsListing429Error1"` [429] `PlayAppsListing429Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetListingPlayAppsIdListingGetRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `country` | `query` | `AppCountries` | no | `AppCountries.Us` |
| `language` | `query` | `PlayListingLanguages` | no | `PlayListingLanguages.EnUs` |
| `freshness` | `query` | `CacheTime` | no | `CacheTime._1D` |
| `wait` | `query` | `boolean` | no | `true` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `PlayListingLanguages` | `playListingLanguagesSchema` | `src/models/play-listing-languages.ts` |
| `CacheTime` | `cacheTimeSchema` | `src/models/cache-time.ts` |
| `PlayListing` | `playListingSchema` | `src/models/play-listing.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayAppsListing401Error1` | `playAppsListing401Error1Schema` | `src/models/play-apps-listing401-error1.ts` |
| `PlayAppsListing429Error1` | `playAppsListing429Error1Schema` | `src/models/play-apps-listing429-error1.ts` |

### getPlayAppCountriesPlayInfoCountriesGet

- **Signature**: `getPlayAppCountriesPlayInfoCountriesGet(options?: RequestOptions): ApiPromise<StoreCountries, GooglePlay.GetPlayAppCountriesPlayInfoCountriesGetError>`
- **Wire**: `GET /play/info/countries`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoreCountries`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetPlayAppCountriesPlayInfoCountriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"playInfoCountries401Error1"` [401] `PlayInfoCountries401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreCountries` | `storeCountriesSchema` | `src/models/store-countries.ts` |
| `PlayInfoCountries401Error1` | `playInfoCountries401Error1Schema` | `src/models/play-info-countries401-error1.ts` |

### getPlayAppLanguagesPlayInfoLanguagesGet

- **Signature**: `getPlayAppLanguagesPlayInfoLanguagesGet(options?: RequestOptions): ApiPromise<StoreLanguages, GooglePlay.GetPlayAppLanguagesPlayInfoLanguagesGetError>`
- **Wire**: `GET /play/info/languages`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoreLanguages`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetPlayAppLanguagesPlayInfoLanguagesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"playInfoLanguages401Error1"` [401] `PlayInfoLanguages401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreLanguages` | `storeLanguagesSchema` | `src/models/store-languages.ts` |
| `PlayInfoLanguages401Error1` | `playInfoLanguages401Error1Schema` | `src/models/play-info-languages401-error1.ts` |

### getPlayRankingsPlayRankingsGet

- **Signature**: `getPlayRankingsPlayRankingsGet(request?: GooglePlay.GetPlayRankingsPlayRankingsGetRequest, options?: RequestOptions): ApiPromise<ApiResponseListModelsResponsesResponsePlayRankingItem, GooglePlay.GetPlayRankingsPlayRankingsGetError>`
- **Wire**: `GET /play/rankings`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiResponseListModelsResponsesResponsePlayRankingItem`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetPlayRankingsPlayRankingsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playRankings401Error1"` [401] `PlayRankings401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetPlayRankingsPlayRankingsGetRequest` (10):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `dateStart` | `query` | `date_start` | `string` (date) | no | — |
| `dateEnd` | `query` | `date_end` | `string` (date) | no | — |
| `app` | `query` | — | `string[]` | no | — |
| `country` | `query` | — | `AppCountries[]` | no | — |
| `category` | `query` | — | `PlayCategory[]` | no | — |
| `collection` | `query` | — | `Collection[]` | no | — |
| `rankStart` | `query` | `rank_start` | `number` | no | — |
| `rankEnd` | `query` | `rank_end` | `number` | no | — |
| `limit` | `query` | — | `number` | no | `10` |
| `page` | `query` | — | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `PlayCategory` | `playCategorySchema` | `src/models/play-category.ts` |
| `Collection` | `collectionSchema` | `src/models/collection.ts` |
| `ApiResponseListModelsResponsesResponsePlayRankingItem` | `apiResponseListModelsResponsesResponsePlayRankingItemSchema` | `src/models/api-response-list-models-responses-response-play-ranking-item.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayRankings401Error1` | `playRankings401Error1Schema` | `src/models/play-rankings401-error1.ts` |

### getRecrawlPlayAppsIdRecrawlGet

- **Signature**: `getRecrawlPlayAppsIdRecrawlGet(request: GooglePlay.GetRecrawlPlayAppsIdRecrawlGetRequest, options?: RequestOptions): ApiPromise<undefined, GooglePlay.GetRecrawlPlayAppsIdRecrawlGetError>`
- **Wire**: `GET /play/apps/{id}/recrawl`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetRecrawlPlayAppsIdRecrawlGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playAppsRecrawl401Error1"` [401] `PlayAppsRecrawl401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetRecrawlPlayAppsIdRecrawlGetRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `country` | `query` | `AppCountries` | no | `AppCountries.Us` |
| `language` | `query` | `AppLanguages` | no | `AppLanguages.EnUs` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `AppLanguages` | `appLanguagesSchema` | `src/models/app-languages.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayAppsRecrawl401Error1` | `playAppsRecrawl401Error1Schema` | `src/models/play-apps-recrawl401-error1.ts` |

### getReviewsPlayAppsIdReviewsGet

- **Signature**: `getReviewsPlayAppsIdReviewsGet(request: GooglePlay.GetReviewsPlayAppsIdReviewsGetRequest, options?: RequestOptions): ApiPromise<PlayReview[], GooglePlay.GetReviewsPlayAppsIdReviewsGetError>`
- **Wire**: `GET /play/apps/{id}/reviews`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayReview[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetReviewsPlayAppsIdReviewsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playAppsReviews401Error1"` [401] `PlayAppsReviews401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetReviewsPlayAppsIdReviewsGetRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `language` | `query` | `AppLanguages` | yes | — |
| `country` | `query` | `AppCountries` | no | — |
| `limit` | `query` | `number` | no | `10` |
| `sort` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppLanguages` | `appLanguagesSchema` | `src/models/app-languages.ts` |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `PlayReview` | `playReviewSchema` | `src/models/play-review.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayAppsReviews401Error1` | `playAppsReviews401Error1Schema` | `src/models/play-apps-reviews401-error1.ts` |

### getSimilarPlayAppsSimilarPost

- **Signature**: `getSimilarPlayAppsSimilarPost(request?: GooglePlay.GetSimilarPlayAppsSimilarPostRequest, options?: RequestOptions): ApiPromise<PlayAppListResponse, GooglePlay.GetSimilarPlayAppsSimilarPostError>`
- **Wire**: `POST /play/apps/similar`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `PlayAppListResponse`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetSimilarPlayAppsSimilarPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playAppsSimilar401Error1"` [401] `PlayAppsSimilar401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetSimilarPlayAppsSimilarPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SimilarSearchBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SimilarSearchBody` | `similarSearchBodySchema` | `src/models/similar-search-body.ts` |
| `PlayAppListResponse` | `playAppListResponseSchema` | `src/models/play-app-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayAppsSimilar401Error1` | `playAppsSimilar401Error1Schema` | `src/models/play-apps-similar401-error1.ts` |

### getSuggestsPlaySuggestionsGet

- **Signature**: `getSuggestsPlaySuggestionsGet(request: GooglePlay.GetSuggestsPlaySuggestionsGetRequest, options?: RequestOptions): ApiPromise<Suggest, GooglePlay.GetSuggestsPlaySuggestionsGetError>`
- **Wire**: `GET /play/suggestions`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Suggest`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetSuggestsPlaySuggestionsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playSuggestions401Error1"` [401] `PlaySuggestions401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetSuggestsPlaySuggestionsGetRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `q` | `query` | `string` | yes | — |
| `country` | `query` | `AppCountries` | no | `AppCountries.Us` |
| `lang` | `query` | `AppLanguages` | no | `AppLanguages.EnUs` |
| `freshness` | `query` | `CacheTime` | no | `CacheTime._7D` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `AppLanguages` | `appLanguagesSchema` | `src/models/app-languages.ts` |
| `CacheTime` | `cacheTimeSchema` | `src/models/cache-time.ts` |
| `Suggest` | `suggestSchema` | `src/models/suggest.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlaySuggestions401Error1` | `playSuggestions401Error1Schema` | `src/models/play-suggestions401-error1.ts` |

### getSummaryPlayAppsSummaryPost

- **Signature**: `getSummaryPlayAppsSummaryPost(request: GooglePlay.GetSummaryPlayAppsSummaryPostRequest, options?: RequestOptions): ApiPromise<SummaryResponse, GooglePlay.GetSummaryPlayAppsSummaryPostError>`
- **Wire**: `POST /play/apps/summary`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SummaryResponse`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `GooglePlay.GetSummaryPlayAppsSummaryPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"playAppsSummary401Error1"` [401] `PlayAppsSummary401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GooglePlay.GetSummaryPlayAppsSummaryPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `SummarySearchBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SummarySearchBody` | `summarySearchBodySchema` | `src/models/summary-search-body.ts` |
| `SummaryResponse` | `summaryResponseSchema` | `src/models/summary-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `PlayAppsSummary401Error1` | `playAppsSummary401Error1Schema` | `src/models/play-apps-summary401-error1.ts` |

