<!-- Generated file — do not edit; regenerated with the SDK. -->

# AppStore — operations

Accessor: `client.appStore` · Source: `src/resources/app-store.ts` · 16 operations · Request and error types: namespace `AppStore`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `appstore-spy`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### devFilterSearchIosDevelopersQueryPost

- **Signature**: `devFilterSearchIosDevelopersQueryPost(request: AppStore.DevFilterSearchIosDevelopersQueryPostRequest, options?: RequestOptions): ApiPromise<IosDevListResponse, AppStore.DevFilterSearchIosDevelopersQueryPostError>`
- **Wire**: `POST /ios/developers/query`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IosDevListResponse`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.DevFilterSearchIosDevelopersQueryPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosDevelopersQuery401Error1"` [401] `IosDevelopersQuery401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.DevFilterSearchIosDevelopersQueryPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IosDevSearchBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IosDevSearchBody` | `iosDevSearchBodySchema` | `src/models/ios-dev-search-body.ts` |
| `IosDevListResponse` | `iosDevListResponseSchema` | `src/models/ios-dev-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosDevelopersQuery401Error1` | `iosDevelopersQuery401Error1Schema` | `src/models/ios-developers-query401-error1.ts` |

### devSearchIosDevelopersGet

- **Signature**: `devSearchIosDevelopersGet(request?: AppStore.DevSearchIosDevelopersGetRequest, options?: RequestOptions): ApiPromise<IosDev[], AppStore.DevSearchIosDevelopersGetError>`
- **Wire**: `GET /ios/developers`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IosDev[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.DevSearchIosDevelopersGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosDevelopers401Error1"` [401] `IosDevelopers401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.DevSearchIosDevelopersGetRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `q` | `query` | `string` | no | — |
| `fields` | `query` | `string` | no | — |
| `sort` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `10` |
| `page` | `query` | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `IosDev` | `iosDevSchema` | `src/models/ios-dev.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosDevelopers401Error1` | `iosDevelopers401Error1Schema` | `src/models/ios-developers401-error1.ts` |

### getAppDetailsIosAppsIdGet

- **Signature**: `getAppDetailsIosAppsIdGet(request: AppStore.GetAppDetailsIosAppsIdGetRequest, options?: RequestOptions): ApiPromise<IosApp, AppStore.GetAppDetailsIosAppsIdGetError>`
- **Wire**: `GET /ios/apps/{id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IosApp`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetAppDetailsIosAppsIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"error"` [403] `Error` · `"error2"` [429] `Error` · `"httpValidationError"` [422] `HttpValidationError` · `"iosApps401Error1"` [401] `IosApps401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.GetAppDetailsIosAppsIdGetRequest` (4):

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
| `IosApp` | `iosAppSchema` | `src/models/ios-app.ts` |
| `Error` | `errorSchema` | `src/models/error.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosApps401Error1` | `iosApps401Error1Schema` | `src/models/ios-apps401-error1.ts` |

### getAppSearchIosAppsGet

- **Signature**: `getAppSearchIosAppsGet(request?: AppStore.GetAppSearchIosAppsGetRequest, options?: RequestOptions): ApiPromise<IosApp[], AppStore.GetAppSearchIosAppsGetError>`
- **Wire**: `GET /ios/apps`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IosApp[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetAppSearchIosAppsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosApps401Error1"` [401] `IosApps401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.GetAppSearchIosAppsGetRequest` (6):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `q` | `query` | `string` | no | — |
| `country` | `query` | `AppCountries` | no | — |
| `fields` | `query` | `string` | no | — |
| `sort` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `10` |
| `page` | `query` | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `IosApp` | `iosAppSchema` | `src/models/ios-app.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosApps401Error1` | `iosApps401Error1Schema` | `src/models/ios-apps401-error1.ts` |

### getAppsEstimatesIosDevelopersIdEstimatesGet

- **Signature**: `getAppsEstimatesIosDevelopersIdEstimatesGet(request: AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetRequest, options?: RequestOptions): ApiPromise<DevAppsEstimates[], AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetError>`
- **Wire**: `GET /ios/developers/{id}/estimates`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DevAppsEstimates[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosDevelopersEstimates401Error1"` [401] `IosDevelopersEstimates401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.GetAppsEstimatesIosDevelopersIdEstimatesGetRequest` (4):

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
| `IosDevelopersEstimates401Error1` | `iosDevelopersEstimates401Error1Schema` | `src/models/ios-developers-estimates401-error1.ts` |

### getAppsEstimatesIosEstimatesGet

- **Signature**: `getAppsEstimatesIosEstimatesGet(request: AppStore.GetAppsEstimatesIosEstimatesGetRequest, options?: RequestOptions): ApiPromise<AppsEstimates[], AppStore.GetAppsEstimatesIosEstimatesGetError>`
- **Wire**: `GET /ios/estimates`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `AppsEstimates[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetAppsEstimatesIosEstimatesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosEstimates401Error1"` [401] `IosEstimates401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.GetAppsEstimatesIosEstimatesGetRequest` (3):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `query` | `string` | yes |
| `start` | `query` | `string` (date) | no |
| `end` | `query` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppsEstimates` | `appsEstimatesSchema` | `src/models/apps-estimates.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosEstimates401Error1` | `iosEstimates401Error1Schema` | `src/models/ios-estimates401-error1.ts` |

### getCountryAggregatesIosAggregatesCountriesGet

- **Signature**: `getCountryAggregatesIosAggregatesCountriesGet(request?: AppStore.GetCountryAggregatesIosAggregatesCountriesGetRequest, options?: RequestOptions): ApiPromise<DevCountryAggregatesResponse, AppStore.GetCountryAggregatesIosAggregatesCountriesGetError>`
- **Wire**: `GET /ios/aggregates/countries`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DevCountryAggregatesResponse`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetCountryAggregatesIosAggregatesCountriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosAggregatesCountries401Error1"` [401] `IosAggregatesCountries401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.GetCountryAggregatesIosAggregatesCountriesGetRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `categoryType` | `query` | `category_type` | `TypeEnum` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TypeEnum` | `typeEnumSchema` | `src/models/type-enum.ts` |
| `DevCountryAggregatesResponse` | `devCountryAggregatesResponseSchema` | `src/models/dev-country-aggregates-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosAggregatesCountries401Error1` | `iosAggregatesCountries401Error1Schema` | `src/models/ios-aggregates-countries401-error1.ts` |

### getDeveloperIosDevelopersIdGet

- **Signature**: `getDeveloperIosDevelopersIdGet(request: AppStore.GetDeveloperIosDevelopersIdGetRequest, options?: RequestOptions): ApiPromise<IosDev, AppStore.GetDeveloperIosDevelopersIdGetError>`
- **Wire**: `GET /ios/developers/{id}`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IosDev`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetDeveloperIosDevelopersIdGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosDevelopers401Error1"` [401] `IosDevelopers401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.GetDeveloperIosDevelopersIdGetRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `id` | `path` | `string` | yes |
| `fields` | `query` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IosDev` | `iosDevSchema` | `src/models/ios-dev.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosDevelopers401Error1` | `iosDevelopers401Error1Schema` | `src/models/ios-developers401-error1.ts` |

### getFilterSearchIosAppsQueryPost

- **Signature**: `getFilterSearchIosAppsQueryPost(request?: AppStore.GetFilterSearchIosAppsQueryPostRequest, options?: RequestOptions): ApiPromise<IosAppListResponse, AppStore.GetFilterSearchIosAppsQueryPostError>`
- **Wire**: `POST /ios/apps/query`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IosAppListResponse`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetFilterSearchIosAppsQueryPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosAppsQuery401Error1"` [401] `IosAppsQuery401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.GetFilterSearchIosAppsQueryPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IosAppSearchBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IosAppSearchBody` | `iosAppSearchBodySchema` | `src/models/ios-app-search-body.ts` |
| `IosAppListResponse` | `iosAppListResponseSchema` | `src/models/ios-app-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosAppsQuery401Error1` | `iosAppsQuery401Error1Schema` | `src/models/ios-apps-query401-error1.ts` |

### getIosRankingsIosRankingsGet

- **Signature**: `getIosRankingsIosRankingsGet(request?: AppStore.GetIosRankingsIosRankingsGetRequest, options?: RequestOptions): ApiPromise<ApiResponseListModelsResponsesResponseIosRankingItem, AppStore.GetIosRankingsIosRankingsGetError>`
- **Wire**: `GET /ios/rankings`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiResponseListModelsResponsesResponseIosRankingItem`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetIosRankingsIosRankingsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosRankings401Error1"` [401] `IosRankings401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.GetIosRankingsIosRankingsGetRequest` (11):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `dateStart` | `query` | `date_start` | `string` (date) | no | — |
| `dateEnd` | `query` | `date_end` | `string` (date) | no | — |
| `app` | `query` | — | `number[]` | no | — |
| `platform` | `query` | — | `IosPlatform[]` | no | — |
| `country` | `query` | — | `AppCountries[]` | no | — |
| `category` | `query` | — | `IosCategory[]` | no | — |
| `collection` | `query` | — | `Collection[]` | no | — |
| `rankStart` | `query` | `rank_start` | `number` | no | — |
| `rankEnd` | `query` | `rank_end` | `number` | no | — |
| `limit` | `query` | — | `number` | no | `10` |
| `page` | `query` | — | `number` | no | `1` |

| Type | Schema value | Source |
| --- | --- | --- |
| `IosPlatform` | `iosPlatformSchema` | `src/models/ios-platform.ts` |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `IosCategory` | `iosCategorySchema` | `src/models/ios-category.ts` |
| `Collection` | `collectionSchema` | `src/models/collection.ts` |
| `ApiResponseListModelsResponsesResponseIosRankingItem` | `apiResponseListModelsResponsesResponseIosRankingItemSchema` | `src/models/api-response-list-models-responses-response-ios-ranking-item.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosRankings401Error1` | `iosRankings401Error1Schema` | `src/models/ios-rankings401-error1.ts` |

### getPlayAppCountriesIosInfoCountriesGet

- **Signature**: `getPlayAppCountriesIosInfoCountriesGet(options?: RequestOptions): ApiPromise<StoreCountries, AppStore.GetPlayAppCountriesIosInfoCountriesGetError>`
- **Wire**: `GET /ios/info/countries`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoreCountries`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetPlayAppCountriesIosInfoCountriesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"iosInfoCountries401Error1"` [401] `IosInfoCountries401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreCountries` | `storeCountriesSchema` | `src/models/store-countries.ts` |
| `IosInfoCountries401Error1` | `iosInfoCountries401Error1Schema` | `src/models/ios-info-countries401-error1.ts` |

### getPlayAppLanguagesIosInfoLanguagesGet

- **Signature**: `getPlayAppLanguagesIosInfoLanguagesGet(options?: RequestOptions): ApiPromise<StoreLanguages, AppStore.GetPlayAppLanguagesIosInfoLanguagesGetError>`
- **Wire**: `GET /ios/info/languages`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StoreLanguages`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetPlayAppLanguagesIosInfoLanguagesGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"iosInfoLanguages401Error1"` [401] `IosInfoLanguages401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `StoreLanguages` | `storeLanguagesSchema` | `src/models/store-languages.ts` |
| `IosInfoLanguages401Error1` | `iosInfoLanguages401Error1Schema` | `src/models/ios-info-languages401-error1.ts` |

### getRecrawlIosAppsIdRecrawlGet

- **Signature**: `getRecrawlIosAppsIdRecrawlGet(request: AppStore.GetRecrawlIosAppsIdRecrawlGetRequest, options?: RequestOptions): ApiPromise<undefined, AppStore.GetRecrawlIosAppsIdRecrawlGetError>`
- **Wire**: `GET /ios/apps/{id}/recrawl`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetRecrawlIosAppsIdRecrawlGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosAppsRecrawl401Error1"` [401] `IosAppsRecrawl401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.GetRecrawlIosAppsIdRecrawlGetRequest` (3):

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
| `IosAppsRecrawl401Error1` | `iosAppsRecrawl401Error1Schema` | `src/models/ios-apps-recrawl401-error1.ts` |

### getReviewsIosAppsIdReviewsGet

- **Signature**: `getReviewsIosAppsIdReviewsGet(request: AppStore.GetReviewsIosAppsIdReviewsGetRequest, options?: RequestOptions): ApiPromise<IosReview[], AppStore.GetReviewsIosAppsIdReviewsGetError>`
- **Wire**: `GET /ios/apps/{id}/reviews`
- **Auth**: `apiKeyHeader`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `IosReview[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetReviewsIosAppsIdReviewsGetError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosAppsReviews401Error1"` [401] `IosAppsReviews401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.GetReviewsIosAppsIdReviewsGetRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `id` | `path` | `string` | yes | — |
| `country` | `query` | `AppCountries` | no | — |
| `fields` | `query` | `string` | no | — |
| `limit` | `query` | `number` | no | `10` |
| `sort` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `AppCountries` | `appCountriesSchema` | `src/models/app-countries.ts` |
| `IosReview` | `iosReviewSchema` | `src/models/ios-review.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosAppsReviews401Error1` | `iosAppsReviews401Error1Schema` | `src/models/ios-apps-reviews401-error1.ts` |

### getSimilarIosAppsSimilarPost

- **Signature**: `getSimilarIosAppsSimilarPost(request?: AppStore.GetSimilarIosAppsSimilarPostRequest, options?: RequestOptions): ApiPromise<IosAppListResponse, AppStore.GetSimilarIosAppsSimilarPostError>`
- **Wire**: `POST /ios/apps/similar`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `IosAppListResponse`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetSimilarIosAppsSimilarPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosAppsSimilar401Error1"` [401] `IosAppsSimilar401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.GetSimilarIosAppsSimilarPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IosSimilarSearchBody` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `IosSimilarSearchBody` | `iosSimilarSearchBodySchema` | `src/models/ios-similar-search-body.ts` |
| `IosAppListResponse` | `iosAppListResponseSchema` | `src/models/ios-app-list-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosAppsSimilar401Error1` | `iosAppsSimilar401Error1Schema` | `src/models/ios-apps-similar401-error1.ts` |

### getSummaryIosAppsSummaryPost

- **Signature**: `getSummaryIosAppsSummaryPost(request: AppStore.GetSummaryIosAppsSummaryPostRequest, options?: RequestOptions): ApiPromise<SummaryResponse, AppStore.GetSummaryIosAppsSummaryPostError>`
- **Wire**: `POST /ios/apps/summary`
- **Auth**: `apiKeyHeader`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SummaryResponse`
- **Error**: `AppstoreSpyError` with `kind: "api"`, an instance of `AppStore.GetSummaryIosAppsSummaryPostError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"httpValidationError"` [422] `HttpValidationError` · `"iosAppsSummary401Error1"` [401] `IosAppsSummary401Error1` · `"error402"` [402] `string` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `AppStore.GetSummaryIosAppsSummaryPostRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `IosSummarySearchBody` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `IosSummarySearchBody` | `iosSummarySearchBodySchema` | `src/models/ios-summary-search-body.ts` |
| `SummaryResponse` | `summaryResponseSchema` | `src/models/summary-response.ts` |
| `HttpValidationError` | `httpValidationErrorSchema` | `src/models/http-validation-error.ts` |
| `IosAppsSummary401Error1` | `iosAppsSummary401Error1Schema` | `src/models/ios-apps-summary401-error1.ts` |

