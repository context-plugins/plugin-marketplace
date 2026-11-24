export { ApibaraClient } from "./client.js";
export type { ClientOptions } from "./client-options.js";

export type { SecretProvider } from "./core/auth/credentials.js";

export { ChangeStream } from "./resources/change-stream.js";
export { Filters } from "./resources/filters.js";
export { ImageProxy } from "./resources/image-proxy.js";
export { Locations } from "./resources/locations.js";
export { Market } from "./resources/market.js";
export { RelatedVehicles } from "./resources/related-vehicles.js";
export { Shipping } from "./resources/shipping.js";
export { UrlTools } from "./resources/url-tools.js";
export { Usage } from "./resources/usage.js";
export { VehicleAuction } from "./resources/vehicle-auction.js";
export { VehicleHistory } from "./resources/vehicle-history.js";
export { Vehicles } from "./resources/vehicles.js";

export { apiErrorModelSchema, type ApiErrorModel } from "./models/api-error-model.js";
export { apiErrorErrorSchema, type ApiErrorError } from "./models/api-error-error.js";
export { Auction, auctionSchema } from "./models/auction.js";
export { auctionInfoSchema, type AuctionInfo } from "./models/auction-info.js";
export { auctionLocationSchema, type AuctionLocation } from "./models/auction-location.js";
export {
  changeCursorExpiredResponseSchema,
  type ChangeCursorExpiredResponse,
} from "./models/change-cursor-expired-response.js";
export {
  changeCursorExpiredResponseErrorSchema,
  type ChangeCursorExpiredResponseError,
} from "./models/change-cursor-expired-response-error.js";
export { cursorMetaSchema, type CursorMeta } from "./models/cursor-meta.js";
export { dataSchema, type Data } from "./models/data.js";
export {
  dataApibaraCopartIaaiVehicleAuctionApiSchema,
  type DataApibaraCopartIaaiVehicleAuctionApi,
} from "./models/data-apibara-copart-iaai-vehicle-auction-api.js";
export { errorSchema, type Error } from "./models/unions/error.js";
export { errorsSchema, type Errors } from "./models/unions/errors.js";
export { estimatedCostSchema, type EstimatedCost } from "./models/estimated-cost.js";
export { Event, eventSchema } from "./models/event.js";
export { filtersResponseSchema, type FiltersResponse } from "./models/filters-response.js";
export {
  includedVehicleHistoryItemSchema,
  type IncludedVehicleHistoryItem,
} from "./models/included-vehicle-history-item.js";
export { includedVinLotSchema, type IncludedVinLot } from "./models/included-vin-lot.js";
export { locationsResponseSchema, type LocationsResponse } from "./models/locations-response.js";
export { lotNumberSchema, type LotNumber } from "./models/unions/lot-number.js";
export {
  marketSoldPriceStatsResponseSchema,
  type MarketSoldPriceStatsResponse,
} from "./models/market-sold-price-stats-response.js";
export { mediaInfoSchema, type MediaInfo } from "./models/media-info.js";
export { metaSchema, type Meta } from "./models/meta.js";
export { meta1Schema, type Meta1 } from "./models/meta1.js";
export { NameSource, nameSourceSchema } from "./models/name-source.js";
export { odometerSchema, type Odometer } from "./models/odometer.js";
export { OutcomeStatus, outcomeStatusSchema } from "./models/outcome-status.js";
export { PendingStatus, pendingStatusSchema } from "./models/pending-status.js";
export { Platform, platformSchema } from "./models/platform.js";
export { pricingInfoSchema, type PricingInfo } from "./models/pricing-info.js";
export { RefinementMethod, refinementMethodSchema } from "./models/refinement-method.js";
export { saleDocumentSchema, type SaleDocument } from "./models/sale-document.js";
export { sellerSchema, type Seller } from "./models/seller.js";
export { shippingPriceSchema, type ShippingPrice } from "./models/shipping-price.js";
export { shippingResponseSchema, type ShippingResponse } from "./models/shipping-response.js";
export { Type, typeSchema } from "./models/type.js";
export { TypeSource, typeSourceSchema } from "./models/type-source.js";
export { usageResponseSchema, type UsageResponse } from "./models/usage-response.js";
export { vehicleSchema, type Vehicle } from "./models/vehicle.js";
export { vehicle1Schema, type Vehicle1 } from "./models/vehicle1.js";
export { vehicleChangeEventSchema, type VehicleChangeEvent } from "./models/vehicle-change-event.js";
export {
  vehicleChangesResponseSchema,
  type VehicleChangesResponse,
} from "./models/vehicle-changes-response.js";
export {
  vehicleDetailsResponseSchema,
  type VehicleDetailsResponse,
} from "./models/vehicle-details-response.js";
export { vehicleGenerationSchema, type VehicleGeneration } from "./models/vehicle-generation.js";
export {
  vehicleHistoryResponseSchema,
  type VehicleHistoryResponse,
} from "./models/vehicle-history-response.js";
export { vehicleListResponseSchema, type VehicleListResponse } from "./models/vehicle-list-response.js";
export { vehicleLocationSchema, type VehicleLocation } from "./models/vehicle-location.js";
export { vehicleSeriesSchema, type VehicleSeries } from "./models/vehicle-series.js";
export { vehicleSpecsSchema, type VehicleSpecs } from "./models/vehicle-specs.js";
export {
  vehiclesReserveResponseSchema,
  type VehiclesReserveResponse,
} from "./models/vehicles-reserve-response.js";
export { AuctionType, auctionTypeSchema } from "./models/auction-type.js";
export { bodyStyleSchema, type BodyStyle } from "./models/unions/body-style.js";
export { bodyTypeSchema, type BodyType } from "./models/unions/body-type.js";
export { Damage, damageSchema } from "./models/damage.js";
export { DriveType, driveTypeSchema } from "./models/drive-type.js";
export { EngineType, engineTypeSchema } from "./models/engine-type.js";
export { engineType1Schema, type EngineType1 } from "./models/unions/engine-type1.js";
export { EventType, eventTypeSchema } from "./models/event-type.js";
export { FuelType, fuelTypeSchema } from "./models/fuel-type.js";
export { generationSchema, type Generation } from "./models/unions/generation.js";
export { generationIdSchema, type GenerationId } from "./models/unions/generation-id.js";
export { HasKey, hasKeySchema } from "./models/has-key.js";
export { IncludeRecord, includeRecordSchema } from "./models/include-record.js";
export { includeRecord1Schema, type IncludeRecord1 } from "./models/unions/include-record1.js";
export { locStateSchema, type LocState } from "./models/unions/loc-state.js";
export { LotStatus, lotStatusSchema } from "./models/lot-status.js";
export { LotSubStatus, lotSubStatusSchema } from "./models/lot-sub-status.js";
export { RunCond, runCondSchema } from "./models/run-cond.js";
export { runCond1Schema, type RunCond1 } from "./models/unions/run-cond1.js";
export { SellerType, sellerTypeSchema } from "./models/seller-type.js";
export { seriesSchema, type Series } from "./models/unions/series.js";
export { Transmission, transmissionSchema } from "./models/transmission.js";
export { type1Schema, type Type1 } from "./models/unions/type1.js";
export { Units, unitsSchema } from "./models/units.js";
export { Upcoming, upcomingSchema } from "./models/upcoming.js";
export { vinPrefixSchema, type VinPrefix } from "./models/unions/vin-prefix.js";

export {
  CoreError as ApibaraError,
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
