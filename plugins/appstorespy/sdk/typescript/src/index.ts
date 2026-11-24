export { AppstoreSpyClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { AppStore } from "./resources/app-store.js";
export { Events } from "./resources/events.js";
export { GooglePlay } from "./resources/google-play.js";
export { Jobs } from "./resources/jobs.js";
export { SearchFilterV2 } from "./resources/search-filter-v2.js";
export { Suggestions } from "./resources/suggestions.js";

export {
  apiResponseListModelsResponsesResponseIosRankingItemSchema,
  type ApiResponseListModelsResponsesResponseIosRankingItem,
} from "./models/api-response-list-models-responses-response-ios-ranking-item.js";
export {
  apiResponseListModelsResponsesResponsePlayRankingItemSchema,
  type ApiResponseListModelsResponsesResponsePlayRankingItem,
} from "./models/api-response-list-models-responses-response-play-ranking-item.js";
export { AppCountries, appCountriesSchema } from "./models/app-countries.js";
export { appCreativeVideoSchema, type AppCreativeVideo } from "./models/app-creative-video.js";
export { AppLanguages, appLanguagesSchema } from "./models/app-languages.js";
export { appsDailyInstallsSchema, type AppsDailyInstalls } from "./models/apps-daily-installs.js";
export { appsEstimatesSchema, type AppsEstimates } from "./models/apps-estimates.js";
export { CacheTime, cacheTimeSchema } from "./models/cache-time.js";
export { chartFilterIosSchema, type ChartFilterIos } from "./models/chart-filter-ios.js";
export { chartFilterPlaySchema, type ChartFilterPlay } from "./models/chart-filter-play.js";
export { clusterSchema, type Cluster } from "./models/cluster.js";
export { Collection, collectionSchema } from "./models/collection.js";
export { creativesSchema, type Creatives } from "./models/creatives.js";
export { dateRangeSchema, type DateRange } from "./models/date-range.js";
export { detailedErrorSchema, type DetailedError } from "./models/detailed-error.js";
export { devAppsEstimatesSchema, type DevAppsEstimates } from "./models/dev-apps-estimates.js";
export { devCountryAggregateSchema, type DevCountryAggregate } from "./models/dev-country-aggregate.js";
export {
  devCountryAggregatesResponseSchema,
  type DevCountryAggregatesResponse,
} from "./models/dev-country-aggregates-response.js";
export { DevSortEnum, devSortEnumSchema } from "./models/dev-sort-enum.js";
export { errorSchema, type Error } from "./models/error.js";
export { errorErrorSchema, type ErrorError } from "./models/error-error.js";
export { eventSchema, type Event } from "./models/event.js";
export { gteSchema, type Gte } from "./models/unions/gte.js";
export { httpValidationErrorSchema, type HttpValidationError } from "./models/http-validation-error.js";
export {
  httpValidationErrorErrorSchema,
  type HttpValidationErrorError,
} from "./models/http-validation-error-error.js";
export { imageSchema, type Image } from "./models/image.js";
export {
  iosAggregatesCountries401ErrorSchema,
  type IosAggregatesCountries401Error,
} from "./models/ios-aggregates-countries401-error.js";
export {
  iosAggregatesCountries401Error1Schema,
  type IosAggregatesCountries401Error1,
} from "./models/ios-aggregates-countries401-error1.js";
export { iosApps401ErrorSchema, type IosApps401Error } from "./models/ios-apps401-error.js";
export { iosApps401Error1Schema, type IosApps401Error1 } from "./models/ios-apps401-error1.js";
export { iosAppsQuery401ErrorSchema, type IosAppsQuery401Error } from "./models/ios-apps-query401-error.js";
export {
  iosAppsQuery401Error1Schema,
  type IosAppsQuery401Error1,
} from "./models/ios-apps-query401-error1.js";
export {
  iosAppsRecrawl401ErrorSchema,
  type IosAppsRecrawl401Error,
} from "./models/ios-apps-recrawl401-error.js";
export {
  iosAppsRecrawl401Error1Schema,
  type IosAppsRecrawl401Error1,
} from "./models/ios-apps-recrawl401-error1.js";
export {
  iosAppsReviews401ErrorSchema,
  type IosAppsReviews401Error,
} from "./models/ios-apps-reviews401-error.js";
export {
  iosAppsReviews401Error1Schema,
  type IosAppsReviews401Error1,
} from "./models/ios-apps-reviews401-error1.js";
export {
  iosAppsSimilar401ErrorSchema,
  type IosAppsSimilar401Error,
} from "./models/ios-apps-similar401-error.js";
export {
  iosAppsSimilar401Error1Schema,
  type IosAppsSimilar401Error1,
} from "./models/ios-apps-similar401-error1.js";
export {
  iosAppsSummary401ErrorSchema,
  type IosAppsSummary401Error,
} from "./models/ios-apps-summary401-error.js";
export {
  iosAppsSummary401Error1Schema,
  type IosAppsSummary401Error1,
} from "./models/ios-apps-summary401-error1.js";
export { iosDevelopers401ErrorSchema, type IosDevelopers401Error } from "./models/ios-developers401-error.js";
export {
  iosDevelopers401Error1Schema,
  type IosDevelopers401Error1,
} from "./models/ios-developers401-error1.js";
export {
  iosDevelopersEstimates401ErrorSchema,
  type IosDevelopersEstimates401Error,
} from "./models/ios-developers-estimates401-error.js";
export {
  iosDevelopersEstimates401Error1Schema,
  type IosDevelopersEstimates401Error1,
} from "./models/ios-developers-estimates401-error1.js";
export {
  iosDevelopersQuery401ErrorSchema,
  type IosDevelopersQuery401Error,
} from "./models/ios-developers-query401-error.js";
export {
  iosDevelopersQuery401Error1Schema,
  type IosDevelopersQuery401Error1,
} from "./models/ios-developers-query401-error1.js";
export { iosEstimates401ErrorSchema, type IosEstimates401Error } from "./models/ios-estimates401-error.js";
export { iosEstimates401Error1Schema, type IosEstimates401Error1 } from "./models/ios-estimates401-error1.js";
export {
  iosInfoCountries401ErrorSchema,
  type IosInfoCountries401Error,
} from "./models/ios-info-countries401-error.js";
export {
  iosInfoCountries401Error1Schema,
  type IosInfoCountries401Error1,
} from "./models/ios-info-countries401-error1.js";
export {
  iosInfoLanguages401ErrorSchema,
  type IosInfoLanguages401Error,
} from "./models/ios-info-languages401-error.js";
export {
  iosInfoLanguages401Error1Schema,
  type IosInfoLanguages401Error1,
} from "./models/ios-info-languages401-error1.js";
export { iosRankings401ErrorSchema, type IosRankings401Error } from "./models/ios-rankings401-error.js";
export { iosRankings401Error1Schema, type IosRankings401Error1 } from "./models/ios-rankings401-error1.js";
export { iosAppSchema, type IosApp } from "./models/ios-app.js";
export { iosAppListResponseSchema, type IosAppListResponse } from "./models/ios-app-list-response.js";
export { iosAppSearchBodySchema, type IosAppSearchBody } from "./models/ios-app-search-body.js";
export { IosCategory, iosCategorySchema } from "./models/ios-category.js";
export { iosChartSchema, type IosChart } from "./models/ios-chart.js";
export { iosDevSchema, type IosDev } from "./models/ios-dev.js";
export { iosDevListResponseSchema, type IosDevListResponse } from "./models/ios-dev-list-response.js";
export { iosDevSearchBodySchema, type IosDevSearchBody } from "./models/ios-dev-search-body.js";
export { IosPlatform, iosPlatformSchema } from "./models/ios-platform.js";
export { iosRankingItemSchema, type IosRankingItem } from "./models/ios-ranking-item.js";
export { iosReviewSchema, type IosReview } from "./models/ios-review.js";
export { iosSimilarSearchBodySchema, type IosSimilarSearchBody } from "./models/ios-similar-search-body.js";
export { IosSortEnum, iosSortEnumSchema } from "./models/ios-sort-enum.js";
export { iosSummarySearchBodySchema, type IosSummarySearchBody } from "./models/ios-summary-search-body.js";
export { jobsSearch401ErrorSchema, type JobsSearch401Error } from "./models/jobs-search401-error.js";
export { jobsSearch401Error1Schema, type JobsSearch401Error1 } from "./models/jobs-search401-error1.js";
export { locationSchema, type Location } from "./models/unions/location.js";
export { lteSchema, type Lte } from "./models/unions/lte.js";
export { networkSchema, type Network } from "./models/unions/network.js";
export { newIosAppSchema, type NewIosApp } from "./models/new-ios-app.js";
export { newPlayAppSchema, type NewPlayApp } from "./models/new-play-app.js";
export {
  playAggregatesCountries401ErrorSchema,
  type PlayAggregatesCountries401Error,
} from "./models/play-aggregates-countries401-error.js";
export {
  playAggregatesCountries401Error1Schema,
  type PlayAggregatesCountries401Error1,
} from "./models/play-aggregates-countries401-error1.js";
export { playApps401ErrorSchema, type PlayApps401Error } from "./models/play-apps401-error.js";
export { playApps401Error1Schema, type PlayApps401Error1 } from "./models/play-apps401-error1.js";
export {
  playAppsInstallsDaily401ErrorSchema,
  type PlayAppsInstallsDaily401Error,
} from "./models/play-apps-installs-daily401-error.js";
export {
  playAppsInstallsDaily401Error1Schema,
  type PlayAppsInstallsDaily401Error1,
} from "./models/play-apps-installs-daily401-error1.js";
export {
  playAppsListing401ErrorSchema,
  type PlayAppsListing401Error,
} from "./models/play-apps-listing401-error.js";
export {
  playAppsListing401Error1Schema,
  type PlayAppsListing401Error1,
} from "./models/play-apps-listing401-error1.js";
export {
  playAppsListing429ErrorSchema,
  type PlayAppsListing429Error,
} from "./models/play-apps-listing429-error.js";
export {
  playAppsListing429Error1Schema,
  type PlayAppsListing429Error1,
} from "./models/play-apps-listing429-error1.js";
export {
  playAppsQuery401ErrorSchema,
  type PlayAppsQuery401Error,
} from "./models/play-apps-query401-error.js";
export {
  playAppsQuery401Error1Schema,
  type PlayAppsQuery401Error1,
} from "./models/play-apps-query401-error1.js";
export {
  playAppsRecrawl401ErrorSchema,
  type PlayAppsRecrawl401Error,
} from "./models/play-apps-recrawl401-error.js";
export {
  playAppsRecrawl401Error1Schema,
  type PlayAppsRecrawl401Error1,
} from "./models/play-apps-recrawl401-error1.js";
export {
  playAppsReviews401ErrorSchema,
  type PlayAppsReviews401Error,
} from "./models/play-apps-reviews401-error.js";
export {
  playAppsReviews401Error1Schema,
  type PlayAppsReviews401Error1,
} from "./models/play-apps-reviews401-error1.js";
export {
  playAppsSimilar401ErrorSchema,
  type PlayAppsSimilar401Error,
} from "./models/play-apps-similar401-error.js";
export {
  playAppsSimilar401Error1Schema,
  type PlayAppsSimilar401Error1,
} from "./models/play-apps-similar401-error1.js";
export {
  playAppsSummary401ErrorSchema,
  type PlayAppsSummary401Error,
} from "./models/play-apps-summary401-error.js";
export {
  playAppsSummary401Error1Schema,
  type PlayAppsSummary401Error1,
} from "./models/play-apps-summary401-error1.js";
export {
  playDevelopers401ErrorSchema,
  type PlayDevelopers401Error,
} from "./models/play-developers401-error.js";
export {
  playDevelopers401Error1Schema,
  type PlayDevelopers401Error1,
} from "./models/play-developers401-error1.js";
export {
  playDevelopersEstimates401ErrorSchema,
  type PlayDevelopersEstimates401Error,
} from "./models/play-developers-estimates401-error.js";
export {
  playDevelopersEstimates401Error1Schema,
  type PlayDevelopersEstimates401Error1,
} from "./models/play-developers-estimates401-error1.js";
export {
  playDevelopersQuery401ErrorSchema,
  type PlayDevelopersQuery401Error,
} from "./models/play-developers-query401-error.js";
export {
  playDevelopersQuery401Error1Schema,
  type PlayDevelopersQuery401Error1,
} from "./models/play-developers-query401-error1.js";
export { playEstimates401ErrorSchema, type PlayEstimates401Error } from "./models/play-estimates401-error.js";
export {
  playEstimates401Error1Schema,
  type PlayEstimates401Error1,
} from "./models/play-estimates401-error1.js";
export {
  playInfoCountries401ErrorSchema,
  type PlayInfoCountries401Error,
} from "./models/play-info-countries401-error.js";
export {
  playInfoCountries401Error1Schema,
  type PlayInfoCountries401Error1,
} from "./models/play-info-countries401-error1.js";
export {
  playInfoLanguages401ErrorSchema,
  type PlayInfoLanguages401Error,
} from "./models/play-info-languages401-error.js";
export {
  playInfoLanguages401Error1Schema,
  type PlayInfoLanguages401Error1,
} from "./models/play-info-languages401-error1.js";
export { playLiveops401ErrorSchema, type PlayLiveops401Error } from "./models/play-liveops401-error.js";
export { playLiveops401Error1Schema, type PlayLiveops401Error1 } from "./models/play-liveops401-error1.js";
export { playRankings401ErrorSchema, type PlayRankings401Error } from "./models/play-rankings401-error.js";
export { playRankings401Error1Schema, type PlayRankings401Error1 } from "./models/play-rankings401-error1.js";
export {
  playSuggestions401ErrorSchema,
  type PlaySuggestions401Error,
} from "./models/play-suggestions401-error.js";
export {
  playSuggestions401Error1Schema,
  type PlaySuggestions401Error1,
} from "./models/play-suggestions401-error1.js";
export { playAppSchema, type PlayApp } from "./models/play-app.js";
export { playAppListResponseSchema, type PlayAppListResponse } from "./models/play-app-list-response.js";
export { playAppSearchBodySchema, type PlayAppSearchBody } from "./models/play-app-search-body.js";
export { PlayCategory, playCategorySchema } from "./models/play-category.js";
export { playChartSchema, type PlayChart } from "./models/play-chart.js";
export { playDevSchema, type PlayDev } from "./models/play-dev.js";
export { playDevListResponseSchema, type PlayDevListResponse } from "./models/play-dev-list-response.js";
export { playDevSearchBodySchema, type PlayDevSearchBody } from "./models/play-dev-search-body.js";
export { playListingSchema, type PlayListing } from "./models/play-listing.js";
export { PlayListingLanguages, playListingLanguagesSchema } from "./models/play-listing-languages.js";
export { playListingPendingSchema, type PlayListingPending } from "./models/play-listing-pending.js";
export { playRankingItemSchema, type PlayRankingItem } from "./models/play-ranking-item.js";
export { playReviewSchema, type PlayReview } from "./models/play-review.js";
export { PlaySortEnum, playSortEnumSchema } from "./models/play-sort-enum.js";
export { searchCreateSchema, type SearchCreate } from "./models/search-create.js";
export { searchFilterDevIosSchema, type SearchFilterDevIos } from "./models/search-filter-dev-ios.js";
export { searchFilterDevPlaySchema, type SearchFilterDevPlay } from "./models/search-filter-dev-play.js";
export { searchFilterIosSchema, type SearchFilterIos } from "./models/search-filter-ios.js";
export { searchFilterPlaySchema, type SearchFilterPlay } from "./models/search-filter-play.js";
export { searchResultSchema, type SearchResult } from "./models/search-result.js";
export { SimilarEnum, similarEnumSchema } from "./models/similar-enum.js";
export { similarSearchBodySchema, type SimilarSearchBody } from "./models/similar-search-body.js";
export { Store, storeSchema } from "./models/store.js";
export { storeCountriesSchema, type StoreCountries } from "./models/store-countries.js";
export { storeLanguagesSchema, type StoreLanguages } from "./models/store-languages.js";
export { suggestSchema, type Suggest } from "./models/suggest.js";
export { suggestLiteSchema, type SuggestLite } from "./models/suggest-lite.js";
export { summaryResponseSchema, type SummaryResponse } from "./models/summary-response.js";
export { summarySearchBodySchema, type SummarySearchBody } from "./models/summary-search-body.js";
export { TypeEnum, typeEnumSchema } from "./models/type-enum.js";
export { validationErrorSchema, type ValidationError } from "./models/validation-error.js";
export { valueSchema, type Value } from "./models/unions/value.js";
export { valueRangeSchema, type ValueRange } from "./models/value-range.js";

export {
  CoreError as AppstoreSpyError,
  ResponseError,
  DecodeError,
  EncodeError,
  ConnectionError,
  TimeoutError,
  AuthError,
  PaginationError,
  ConfigurationError,
} from "./core/errors.js";
export { ApiError } from "./core/api-error.js";
export { SchemaError } from "./core/validation/schema-error.js";
export {
  defaultLoggingOptions,
  type LoggingOptions,
  type RequestLoggingOptions,
  type Logger,
  type LogDetails,
  type HttpRequestDetails,
  type RequestHeadersDetails,
  type RequestBodyDetails,
  type HttpResponseDetails,
  type ResponseHeadersDetails,
  type HttpRetryingDetails,
  type HttpFailedDetails,
  type LogLevel,
} from "./core/logging.js";
export type { ApiPromise, ApiResult } from "./core/api-promise.js";
export type { Pageable, PageableApiResult } from "./core/pagination/pageable.js";
export type { HttpMethod, RequestOptions } from "./core/api-request.js";
export type { RetryOptions, RequestRetryOptions, RetryAttempt, RetryReason } from "./core/retry.js";
export type { HookOptions, BeforeRequestHook, AfterResponseHook, HookContext } from "./core/hooks.js";
export type { BinaryContent, BinaryData, BinaryErrorContent, FileData, FileInput } from "./core/binary.js";
export type { ErrorKind } from "./core/errors.js";
export type { Declared, Undeclared } from "./core/api-error.js";
export type { Schema, EnumSchema, Encoded, ValidationResult, JsonValue } from "./core/validation/schema.js";
