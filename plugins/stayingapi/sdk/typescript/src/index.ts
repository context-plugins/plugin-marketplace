export { StayingApiClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { AccountApi } from "./resources/account-api.js";
export { DataApi } from "./resources/data-api.js";
export { Jobs } from "./resources/jobs.js";

export { accountSchema, type Account } from "./models/account.js";
export { accountEnvelopeSchema, type AccountEnvelope } from "./models/account-envelope.js";
export { addressSchema, type Address } from "./models/unions/address.js";
export { Amenity, amenitySchema } from "./models/amenity.js";
export { anyDataSchema, type AnyData } from "./models/any-data.js";
export { anyData1Schema, type AnyData1 } from "./models/any-data1.js";
export { anyData2Schema, type AnyData2 } from "./models/any-data2.js";
export { asyncAcceptedSchema, type AsyncAccepted } from "./models/async-accepted.js";
export { authorSchema, type Author } from "./models/unions/author.js";
export { availabilitySchema, type Availability } from "./models/availability.js";
export { availabilityResponseSchema, type AvailabilityResponse } from "./models/availability-response.js";
export { bathroomsSchema, type Bathrooms } from "./models/unions/bathrooms.js";
export { bedroomsSchema, type Bedrooms } from "./models/unions/bedrooms.js";
export { canonicalUrlSchema, type CanonicalUrl } from "./models/unions/canonical-url.js";
export { citySchema, type City } from "./models/unions/city.js";
export { cleaningSchema, type Cleaning } from "./models/unions/cleaning.js";
export { Code, codeSchema } from "./models/code.js";
export { CodeStayingDataApi, codeStayingDataApiSchema } from "./models/code-staying-data-api.js";
export { countrySchema, type Country } from "./models/unions/country.js";
export { creditsSchema, type Credits } from "./models/credits.js";
export { CreditsCharged, creditsChargedSchema } from "./models/credits-charged.js";
export { dataSchema, type Data } from "./models/data.js";
export { data1Schema, type Data1 } from "./models/data1.js";
export { data2Schema, type Data2 } from "./models/data2.js";
export { dataStayingJobsApiSchema, type DataStayingJobsApi } from "./models/data-staying-jobs-api.js";
export { dateModelSchema, type DateModel } from "./models/date-model.js";
export { dislikedSchema, type Disliked } from "./models/unions/disliked.js";
export { Env, envSchema } from "./models/env.js";
export { Environment, environmentSchema } from "./models/environment.js";
export { errorSchema, type Error } from "./models/error.js";
export { errorEnvelopeSchema, type ErrorEnvelope } from "./models/error-envelope.js";
export { errorEnvelopeErrorSchema, type ErrorEnvelopeError } from "./models/error-envelope-error.js";
export { feesSchema, type Fees } from "./models/fees.js";
export { fees1Schema, type Fees1 } from "./models/fees1.js";
export { guestRatingSchema, type GuestRating } from "./models/unions/guest-rating.js";
export { hostSchema, type Host } from "./models/host.js";
export { host1Schema, type Host1 } from "./models/unions/host1.js";
export { identitySchema, type Identity } from "./models/identity.js";
export { identity1Schema, type Identity1 } from "./models/unions/identity1.js";
export { isSuperhostSchema, type IsSuperhost } from "./models/unions/is-superhost.js";
export { jobCompletedSchema, type JobCompleted } from "./models/job-completed.js";
export { jobFailedSchema, type JobFailed } from "./models/job-failed.js";
export { jobInProgressSchema, type JobInProgress } from "./models/job-in-progress.js";
export { jobResponseSchema, type JobResponse } from "./models/unions/job-response.js";
export { keySchema, type Key } from "./models/key.js";
export { languageSchema, type Language } from "./models/unions/language.js";
export { latSchema, type Lat } from "./models/unions/lat.js";
export { likedSchema, type Liked } from "./models/unions/liked.js";
export { listingResponseSchema, type ListingResponse } from "./models/listing-response.js";
export { lngSchema, type Lng } from "./models/unions/lng.js";
export { locationSchema, type Location } from "./models/location.js";
export { maxOccupancySchema, type MaxOccupancy } from "./models/unions/max-occupancy.js";
export { medianSchema, type Median } from "./models/unions/median.js";
export { metaSchema, type Meta } from "./models/meta.js";
export { meta1Schema, type Meta1 } from "./models/meta1.js";
export { meta2Schema, type Meta2 } from "./models/meta2.js";
export { minSchema, type Min } from "./models/unions/min.js";
export { nameSchema, type Name } from "./models/unions/name.js";
export { occupancySchema, type Occupancy } from "./models/occupancy.js";
export { offerSchema, type Offer } from "./models/offer.js";
export { ownerResponseSchema, type OwnerResponse } from "./models/unions/owner-response.js";
export { paginationSchema, type Pagination } from "./models/pagination.js";
export { planSchema, type Plan } from "./models/plan.js";
export { Platform, platformSchema } from "./models/platform.js";
export { Platform2, platform2Schema } from "./models/platform2.js";
export { platformFailureErrorSchema, type PlatformFailureError } from "./models/platform-failure-error.js";
export { platformResultSchema, type PlatformResult } from "./models/platform-result.js";
export { priceSchema, type Price } from "./models/price.js";
export { priceCompareResponseSchema, type PriceCompareResponse } from "./models/price-compare-response.js";
export { priceResponseSchema, type PriceResponse } from "./models/price-response.js";
export { price1Schema, type Price1 } from "./models/unions/price1.js";
export { priceCompareSchema, type PriceCompare } from "./models/price-compare.js";
export { propertySchema, type Property } from "./models/property.js";
export { PropertyType, propertyTypeSchema } from "./models/property-type.js";
export { rateLimitSchema, type RateLimit } from "./models/rate-limit.js";
export { ratingScaleSchema, type RatingScale } from "./models/unions/rating-scale.js";
export { Reason, reasonSchema } from "./models/reason.js";
export { regionSchema, type Region } from "./models/unions/region.js";
export { requestedIdSchema, type RequestedId } from "./models/unions/requested-id.js";
export { resolvedIdSchema, type ResolvedId } from "./models/unions/resolved-id.js";
export { reviewSchema, type Review } from "./models/review.js";
export { reviewCountSchema, type ReviewCount } from "./models/unions/review-count.js";
export { reviewsResponseSchema, type ReviewsResponse } from "./models/reviews-response.js";
export { searchResponseSchema, type SearchResponse } from "./models/search-response.js";
export { serviceSchema, type Service } from "./models/unions/service.js";
export { Source, sourceSchema } from "./models/source.js";
export { starRatingSchema, type StarRating } from "./models/unions/star-rating.js";
export { Status, statusSchema } from "./models/status.js";
export { Status1, status1Schema } from "./models/status1.js";
export { Status1StayingJobsApi, status1StayingJobsApiSchema } from "./models/status1-staying-jobs-api.js";
export { StatusStayingDataApi, statusStayingDataApiSchema } from "./models/status-staying-data-api.js";
export { successEnvelopeSchema, type SuccessEnvelope } from "./models/success-envelope.js";
export { taxesSchema, type Taxes } from "./models/unions/taxes.js";
export { textSchema, type Text } from "./models/unions/text.js";
export { titleSchema, type Title } from "./models/unions/title.js";
export { tripTypeSchema, type TripType } from "./models/unions/trip-type.js";
export { Type, typeSchema } from "./models/type.js";
export { warningSchema, type Warning } from "./models/warning.js";

export {
  CoreError as StayingApiError,
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
