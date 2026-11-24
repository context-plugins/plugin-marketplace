export { OddsRelayClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { AccountApi } from "./resources/account-api.js";
export { Discovery } from "./resources/discovery.js";
export { Odds } from "./resources/odds.js";
export { Service } from "./resources/service.js";

export { accountSchema, type Account } from "./models/account.js";
export { backSchema, type Back } from "./models/back.js";
export { backPriceSchema, type BackPrice } from "./models/unions/back-price.js";
export { Board, boardSchema } from "./models/board.js";
export { boardsSchema, type Boards } from "./models/boards.js";
export { bookmakerSchema, type Bookmaker } from "./models/bookmaker.js";
export {
  bookmakerOddsRelayServiceApiSchema,
  type BookmakerOddsRelayServiceApi,
} from "./models/bookmaker-odds-relay-service-api.js";
export { Code, codeSchema } from "./models/code.js";
export { Code1, code1Schema } from "./models/code1.js";
export {
  Code1OddsRelayDiscoveryApi,
  code1OddsRelayDiscoveryApiSchema,
} from "./models/code1-odds-relay-discovery-api.js";
export { Code2, code2Schema } from "./models/code2.js";
export {
  Code2OddsRelayDiscoveryApi,
  code2OddsRelayDiscoveryApiSchema,
} from "./models/code2-odds-relay-discovery-api.js";
export {
  Code2OddsRelayServiceApi,
  code2OddsRelayServiceApiSchema,
} from "./models/code2-odds-relay-service-api.js";
export { Code3, code3Schema } from "./models/code3.js";
export {
  Code3OddsRelayDiscoveryApi,
  code3OddsRelayDiscoveryApiSchema,
} from "./models/code3-odds-relay-discovery-api.js";
export {
  Code3OddsRelayServiceApi,
  code3OddsRelayServiceApiSchema,
} from "./models/code3-odds-relay-service-api.js";
export { Code4, code4Schema } from "./models/code4.js";
export {
  Code4OddsRelayDiscoveryApi,
  code4OddsRelayDiscoveryApiSchema,
} from "./models/code4-odds-relay-discovery-api.js";
export {
  Code4OddsRelayServiceApi,
  code4OddsRelayServiceApiSchema,
} from "./models/code4-odds-relay-service-api.js";
export {
  CodeOddsRelayDiscoveryApi,
  codeOddsRelayDiscoveryApiSchema,
} from "./models/code-odds-relay-discovery-api.js";
export {
  CodeOddsRelayServiceApi,
  codeOddsRelayServiceApiSchema,
} from "./models/code-odds-relay-service-api.js";
export { commenceTimeSchema, type CommenceTime } from "./models/unions/commence-time.js";
export { ContentEncoding, contentEncodingSchema } from "./models/content-encoding.js";
export { coverageKeyedSchema, type CoverageKeyed } from "./models/coverage-keyed.js";
export { CoverageModel, coverageModelSchema } from "./models/coverage-model.js";
export { coverageSummarySchema, type CoverageSummary } from "./models/coverage-summary.js";
export { errorSchema, type Error } from "./models/error.js";
export { error1Schema, type Error1 } from "./models/error1.js";
export {
  error1OddsRelayDiscoveryApiSchema,
  type Error1OddsRelayDiscoveryApi,
} from "./models/error1-odds-relay-discovery-api.js";
export { error2Schema, type Error2 } from "./models/error2.js";
export {
  error2OddsRelayDiscoveryApiSchema,
  type Error2OddsRelayDiscoveryApi,
} from "./models/error2-odds-relay-discovery-api.js";
export { error3Schema, type Error3 } from "./models/error3.js";
export {
  error3OddsRelayDiscoveryApiSchema,
  type Error3OddsRelayDiscoveryApi,
} from "./models/error3-odds-relay-discovery-api.js";
export {
  error3OddsRelayServiceApiSchema,
  type Error3OddsRelayServiceApi,
} from "./models/error3-odds-relay-service-api.js";
export { error4Schema, type Error4 } from "./models/error4.js";
export { error400Schema, type Error400 } from "./models/error400.js";
export { error400ErrorSchema, type Error400Error } from "./models/error400-error.js";
export {
  error400ErrorOddsRelayDiscoveryApiSchema,
  type Error400ErrorOddsRelayDiscoveryApi,
} from "./models/error400-error-odds-relay-discovery-api.js";
export {
  error400ErrorOddsRelayServiceApiSchema,
  type Error400ErrorOddsRelayServiceApi,
} from "./models/error400-error-odds-relay-service-api.js";
export {
  error400OddsRelayDiscoveryApiSchema,
  type Error400OddsRelayDiscoveryApi,
} from "./models/error400-odds-relay-discovery-api.js";
export {
  error400OddsRelayServiceApiSchema,
  type Error400OddsRelayServiceApi,
} from "./models/error400-odds-relay-service-api.js";
export { error401Schema, type Error401 } from "./models/error401.js";
export { error401ErrorSchema, type Error401Error } from "./models/error401-error.js";
export {
  error401ErrorOddsRelayDiscoveryApiSchema,
  type Error401ErrorOddsRelayDiscoveryApi,
} from "./models/error401-error-odds-relay-discovery-api.js";
export {
  error401ErrorOddsRelayServiceApiSchema,
  type Error401ErrorOddsRelayServiceApi,
} from "./models/error401-error-odds-relay-service-api.js";
export {
  error401OddsRelayDiscoveryApiSchema,
  type Error401OddsRelayDiscoveryApi,
} from "./models/error401-odds-relay-discovery-api.js";
export {
  error401OddsRelayServiceApiSchema,
  type Error401OddsRelayServiceApi,
} from "./models/error401-odds-relay-service-api.js";
export { error402Schema, type Error402 } from "./models/error402.js";
export { error402ErrorSchema, type Error402Error } from "./models/error402-error.js";
export { error403Schema, type Error403 } from "./models/error403.js";
export { error403ErrorSchema, type Error403Error } from "./models/error403-error.js";
export {
  error403ErrorOddsRelayDiscoveryApiSchema,
  type Error403ErrorOddsRelayDiscoveryApi,
} from "./models/error403-error-odds-relay-discovery-api.js";
export {
  error403ErrorOddsRelayServiceApiSchema,
  type Error403ErrorOddsRelayServiceApi,
} from "./models/error403-error-odds-relay-service-api.js";
export {
  error403OddsRelayDiscoveryApiSchema,
  type Error403OddsRelayDiscoveryApi,
} from "./models/error403-odds-relay-discovery-api.js";
export {
  error403OddsRelayServiceApiSchema,
  type Error403OddsRelayServiceApi,
} from "./models/error403-odds-relay-service-api.js";
export { error404Schema, type Error404 } from "./models/error404.js";
export { error404ErrorSchema, type Error404Error } from "./models/error404-error.js";
export {
  error404ErrorOddsRelayServiceApiSchema,
  type Error404ErrorOddsRelayServiceApi,
} from "./models/error404-error-odds-relay-service-api.js";
export {
  error404OddsRelayServiceApiSchema,
  type Error404OddsRelayServiceApi,
} from "./models/error404-odds-relay-service-api.js";
export { error429Schema, type Error429 } from "./models/error429.js";
export { error429ErrorSchema, type Error429Error } from "./models/error429-error.js";
export {
  error429ErrorOddsRelayDiscoveryApiSchema,
  type Error429ErrorOddsRelayDiscoveryApi,
} from "./models/error429-error-odds-relay-discovery-api.js";
export {
  error429ErrorOddsRelayServiceApiSchema,
  type Error429ErrorOddsRelayServiceApi,
} from "./models/error429-error-odds-relay-service-api.js";
export {
  error429OddsRelayDiscoveryApiSchema,
  type Error429OddsRelayDiscoveryApi,
} from "./models/error429-odds-relay-discovery-api.js";
export {
  error429OddsRelayServiceApiSchema,
  type Error429OddsRelayServiceApi,
} from "./models/error429-odds-relay-service-api.js";
export {
  error4OddsRelayDiscoveryApiSchema,
  type Error4OddsRelayDiscoveryApi,
} from "./models/error4-odds-relay-discovery-api.js";
export {
  error4OddsRelayServiceApiSchema,
  type Error4OddsRelayServiceApi,
} from "./models/error4-odds-relay-service-api.js";
export { error5Schema, type Error5 } from "./models/error5.js";
export { error500Schema, type Error500 } from "./models/error500.js";
export { error500ErrorSchema, type Error500Error } from "./models/error500-error.js";
export {
  error500ErrorOddsRelayDiscoveryApiSchema,
  type Error500ErrorOddsRelayDiscoveryApi,
} from "./models/error500-error-odds-relay-discovery-api.js";
export {
  error500ErrorOddsRelayServiceApiSchema,
  type Error500ErrorOddsRelayServiceApi,
} from "./models/error500-error-odds-relay-service-api.js";
export {
  error500OddsRelayDiscoveryApiSchema,
  type Error500OddsRelayDiscoveryApi,
} from "./models/error500-odds-relay-discovery-api.js";
export {
  error500OddsRelayServiceApiSchema,
  type Error500OddsRelayServiceApi,
} from "./models/error500-odds-relay-service-api.js";
export { error503Schema, type Error503 } from "./models/error503.js";
export { error503ErrorSchema, type Error503Error } from "./models/error503-error.js";
export {
  error503ErrorOddsRelayDiscoveryApiSchema,
  type Error503ErrorOddsRelayDiscoveryApi,
} from "./models/error503-error-odds-relay-discovery-api.js";
export {
  error503ErrorOddsRelayServiceApiSchema,
  type Error503ErrorOddsRelayServiceApi,
} from "./models/error503-error-odds-relay-service-api.js";
export {
  error503OddsRelayDiscoveryApiSchema,
  type Error503OddsRelayDiscoveryApi,
} from "./models/error503-odds-relay-discovery-api.js";
export {
  error503OddsRelayServiceApiSchema,
  type Error503OddsRelayServiceApi,
} from "./models/error503-odds-relay-service-api.js";
export {
  error5OddsRelayDiscoveryApiSchema,
  type Error5OddsRelayDiscoveryApi,
} from "./models/error5-odds-relay-discovery-api.js";
export {
  error5OddsRelayServiceApiSchema,
  type Error5OddsRelayServiceApi,
} from "./models/error5-odds-relay-service-api.js";
export { error6Schema, type Error6 } from "./models/error6.js";
export {
  error6OddsRelayDiscoveryApiSchema,
  type Error6OddsRelayDiscoveryApi,
} from "./models/error6-odds-relay-discovery-api.js";
export { error7Schema, type Error7 } from "./models/error7.js";
export {
  error7OddsRelayServiceApiSchema,
  type Error7OddsRelayServiceApi,
} from "./models/error7-odds-relay-service-api.js";
export { errorBodySchema, type ErrorBody } from "./models/error-body.js";
export {
  errorBodyOddsRelayServiceApiSchema,
  type ErrorBodyOddsRelayServiceApi,
} from "./models/error-body-odds-relay-service-api.js";
export {
  errorOddsRelayDiscoveryApiSchema,
  type ErrorOddsRelayDiscoveryApi,
} from "./models/error-odds-relay-discovery-api.js";
export { eventSchema, type Event } from "./models/event.js";
export { exchangeSchema, type Exchange } from "./models/exchange.js";
export { floodCapSchema, type FloodCap } from "./models/flood-cap.js";
export { healthSchema, type Health } from "./models/health.js";
export { keySchema, type Key } from "./models/key.js";
export { Kind, kindSchema } from "./models/kind.js";
export { lastUpdateSchema, type LastUpdate } from "./models/unions/last-update.js";
export { lastUpdate1Schema, type LastUpdate1 } from "./models/unions/last-update1.js";
export { laySchema, type Lay } from "./models/lay.js";
export { lay1Schema, type Lay1 } from "./models/lay1.js";
export { lay2Schema, type Lay2 } from "./models/unions/lay2.js";
export { layPriceSchema, type LayPrice } from "./models/unions/lay-price.js";
export { limitSchema, type Limit } from "./models/unions/limit.js";
export { marketSchema, type Market } from "./models/market.js";
export { market1Schema, type Market1 } from "./models/market1.js";
export { matchedEnvelopeSchema, type MatchedEnvelope } from "./models/matched-envelope.js";
export { matchedEventSchema, type MatchedEvent } from "./models/matched-event.js";
export { matchedMetaSchema, type MatchedMeta } from "./models/matched-meta.js";
export { matchedOutcomeSchema, type MatchedOutcome } from "./models/matched-outcome.js";
export { metaSchema, type Meta } from "./models/meta.js";
export { OddsFormat, oddsFormatSchema } from "./models/odds-format.js";
export { pageMetaSchema, type PageMeta } from "./models/page-meta.js";
export { placeSchema, type Place } from "./models/place.js";
export { priceSchema, type Price } from "./models/unions/price.js";
export { priceTableSchema, type PriceTable } from "./models/price-table.js";
export { processedAtSchema, type ProcessedAt } from "./models/unions/processed-at.js";
export { processedAt1Schema, type ProcessedAt1 } from "./models/unions/processed-at1.js";
export { Products, productsSchema } from "./models/products.js";
export { products1Schema, type Products1 } from "./models/products1.js";
export { products2Schema, type Products2 } from "./models/products2.js";
export { quoteSchema, type Quote } from "./models/quote.js";
export { rawEnvelopeSchema, type RawEnvelope } from "./models/raw-envelope.js";
export { rawEventSchema, type RawEvent } from "./models/raw-event.js";
export { rawMetaSchema, type RawMeta } from "./models/raw-meta.js";
export { rawOutcomeSchema, type RawOutcome } from "./models/raw-outcome.js";
export { Reason, reasonSchema } from "./models/reason.js";
export { recentSchema, type Recent } from "./models/recent.js";
export { regionsSchema, type Regions } from "./models/regions.js";
export { regions1Schema, type Regions1 } from "./models/regions1.js";
export { remainingSchema, type Remaining } from "./models/unions/remaining.js";
export { sportSchema, type Sport } from "./models/sport.js";
export { sportsSchema, type Sports } from "./models/sports.js";
export { Status, statusSchema } from "./models/status.js";
export { Status2, status2Schema } from "./models/status2.js";
export { Status3, status3Schema } from "./models/status3.js";
export {
  StatusOddsRelayDiscoveryApi,
  statusOddsRelayDiscoveryApiSchema,
} from "./models/status-odds-relay-discovery-api.js";
export {
  statusOddsRelayServiceApiSchema,
  type StatusOddsRelayServiceApi,
} from "./models/status-odds-relay-service-api.js";
export { tokensSchema, type Tokens } from "./models/tokens.js";
export { Type, typeSchema } from "./models/type.js";
export { usageSchema, type Usage } from "./models/usage.js";
export { v2BookmakersResponseSchema, type V2BookmakersResponse } from "./models/v2-bookmakers-response.js";
export {
  v2BookmakersResponse1Schema,
  type V2BookmakersResponse1,
} from "./models/unions/v2-bookmakers-response1.js";
export { v2CoverageResponseSchema, type V2CoverageResponse } from "./models/unions/v2-coverage-response.js";
export { v2EventsResponseSchema, type V2EventsResponse } from "./models/v2-events-response.js";
export { v2EventsResponse1Schema, type V2EventsResponse1 } from "./models/unions/v2-events-response1.js";
export {
  v2OddsEventResponseSchema,
  type V2OddsEventResponse,
} from "./models/unions/v2-odds-event-response.js";
export { v2OddsRawResponseSchema, type V2OddsRawResponse } from "./models/unions/v2-odds-raw-response.js";
export { v2OddsResponseSchema, type V2OddsResponse } from "./models/unions/v2-odds-response.js";
export { v2SportsResponseSchema, type V2SportsResponse } from "./models/v2-sports-response.js";
export { v2SportsResponse1Schema, type V2SportsResponse1 } from "./models/unions/v2-sports-response1.js";
export { venueSchema, type Venue } from "./models/venue.js";
export { winSchema, type Win } from "./models/win.js";
export { DateFormat, dateFormatSchema } from "./models/date-format.js";
export { ExchangesOnly, exchangesOnlySchema } from "./models/exchanges-only.js";
export { Format, formatSchema } from "./models/format.js";
export { IncludeLinks, includeLinksSchema } from "./models/include-links.js";
export { IncludeLiquidity, includeLiquiditySchema } from "./models/include-liquidity.js";
export { Type1, type1Schema } from "./models/type1.js";

export {
  CoreError as OddsRelayError,
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
