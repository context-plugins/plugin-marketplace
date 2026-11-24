import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiErrorModelInternalSchema, type ApiErrorModel } from "../models/api-error-model.js";
import { AuctionType, auctionTypeSchema } from "../models/auction-type.js";
import { damageSchema, type Damage } from "../models/damage.js";
import { driveTypeSchema, type DriveType } from "../models/drive-type.js";
import { fuelTypeSchema, type FuelType } from "../models/fuel-type.js";
import { hasKeySchema, type HasKey } from "../models/has-key.js";
import { LotStatus, lotStatusSchema } from "../models/lot-status.js";
import { LotSubStatus, lotSubStatusSchema } from "../models/lot-sub-status.js";
import { platformSchema, type Platform } from "../models/platform.js";
import { sellerTypeSchema, type SellerType } from "../models/seller-type.js";
import { transmissionSchema, type Transmission } from "../models/transmission.js";
import { bodyStyleSchema, type BodyStyle } from "../models/unions/body-style.js";
import { bodyTypeSchema, type BodyType } from "../models/unions/body-type.js";
import { engineType1Schema, type EngineType1 } from "../models/unions/engine-type1.js";
import {
  generationIdInternalSchema,
  generationIdSchema,
  type GenerationId,
} from "../models/unions/generation-id.js";
import { generationSchema, type Generation } from "../models/unions/generation.js";
import { locStateInternalSchema, locStateSchema, type LocState } from "../models/unions/loc-state.js";
import { runCond1Schema, type RunCond1 } from "../models/unions/run-cond1.js";
import { seriesSchema, type Series } from "../models/unions/series.js";
import { type1Schema, type Type1 } from "../models/unions/type1.js";
import { vinPrefixInternalSchema, vinPrefixSchema, type VinPrefix } from "../models/unions/vin-prefix.js";
import { Units, unitsSchema } from "../models/units.js";
import { Upcoming, upcomingSchema } from "../models/upcoming.js";
import {
  vehicleDetailsResponseInternalSchema,
  type VehicleDetailsResponse,
} from "../models/vehicle-details-response.js";
import {
  vehicleListResponseInternalSchema,
  type VehicleListResponse,
} from "../models/vehicle-list-response.js";
import type { Servers } from "../servers.js";

/**
 * Search and retrieve vehicle auction records.
 */
export class Vehicles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get vehicle details
   *
   * @remarks
   * Get vehicle auction details by VIN or lot number. Use include=history,vin_lots to embed
   * retained sale history and other known lots for the same VIN in one response. Full vehicle
   * detail pricing.seller_reserve contains source-observed reserve status, optional confirmed price
   * and inferred bid bounds. Unknown or ambiguous Reserve Off will not be presented as an exact
   * reserve price.
   *
   * @returns Vehicle auction details.
   *
   * @throws {@link Vehicles.GetVehicleDetailsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApibaraError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVehicleDetails(
    request: Vehicles.GetVehicleDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<VehicleDetailsResponse, Vehicles.GetVehicleDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/vehicles/{slugVin}"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [{ name: "slugVin", value: request.slugVin, schema: s.string() }],
        query: [{ name: "include", value: request.include, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vehicleDetailsResponseInternalSchema },
        errorFactory: Vehicles.GetVehicleDetailsError,
      },
      options,
    );
  }

  /**
   * List auction vehicles
   *
   * @remarks
   * Search and incrementally synchronize normalized Copart and IAAI inventory. Filters are
   * cumulative. Applied filters are echoed in meta.applied_filters; unrecognized query keys are
   * reported in meta.unknown_filters. Use include_total=true only when an exact reconciliation
   * count is required.
   *
   * @returns Paginated list of vehicle auction records.
   *
   * @throws {@link Vehicles.ListAuctionVehiclesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApibaraError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listAuctionVehicles(
    request: Vehicles.ListAuctionVehiclesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<VehicleListResponse, Vehicles.ListAuctionVehiclesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/vehicles"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [
          { name: "s", value: request.s, schema: s.optional(s.string()) },
          {
            name: "lot_status",
            value: request.lotStatus,
            schema: s.defaulted(lotStatusSchema, LotStatus.All),
          },
          {
            name: "lot_sub_status",
            value: request.lotSubStatus,
            schema: s.defaulted(lotSubStatusSchema, LotSubStatus.Open),
          },
          { name: "upcoming", value: request.upcoming, schema: s.defaulted(upcomingSchema, Upcoming.All) },
          {
            name: "auction_date_pending",
            value: request.auctionDatePending,
            schema: s.optional(s.boolean()),
          },
          {
            name: "updated_within_minutes",
            value: request.updatedWithinMinutes,
            schema: s.optional(s.int()),
          },
          { name: "price_min", value: request.priceMin, schema: s.optional(s.float64()) },
          { name: "price_max", value: request.priceMax, schema: s.optional(s.float64()) },
          { name: "year_from", value: request.yearFrom, schema: s.optional(s.int()) },
          { name: "year_to", value: request.yearTo, schema: s.optional(s.int()) },
          {
            name: "auction_type",
            value: request.auctionType,
            schema: s.defaulted(auctionTypeSchema, AuctionType._0),
          },
          { name: "platform", value: request.platform, schema: s.optional(s.lazy(() => platformSchema)) },
          { name: "type", value: request.type, schema: s.optional(s.lazy(() => type1Schema)) },
          { name: "body_style", value: request.bodyStyle, schema: s.optional(s.lazy(() => bodyStyleSchema)) },
          { name: "body_type", value: request.bodyType, schema: s.optional(s.lazy(() => bodyTypeSchema)) },
          { name: "make", value: request.make, schema: s.optional(s.string()) },
          { name: "series", value: request.series, schema: s.optional(s.lazy(() => seriesSchema)) },
          { name: "model", value: request.model, schema: s.optional(s.string()) },
          {
            name: "generation_id",
            value: request.generationId,
            schema: s.optional(s.lazy(() => generationIdInternalSchema)),
          },
          {
            name: "generation",
            value: request.generation,
            schema: s.optional(s.lazy(() => generationSchema)),
          },
          { name: "color", value: request.color, schema: s.optional(s.array(s.string())) },
          {
            name: "vin_prefix",
            value: request.vinPrefix,
            schema: s.optional(s.lazy(() => vinPrefixInternalSchema)),
          },
          {
            name: "fuel_type",
            value: request.fuelType,
            schema: s.optional(s.array(s.lazy(() => fuelTypeSchema))),
          },
          { name: "odometer_from", value: request.odometerFrom, schema: s.optional(s.float64()) },
          { name: "odometer_to", value: request.odometerTo, schema: s.optional(s.float64()) },
          { name: "engine_size_from", value: request.engineSizeFrom, schema: s.optional(s.float64()) },
          { name: "engine_size_to", value: request.engineSizeTo, schema: s.optional(s.float64()) },
          {
            name: "engine_type",
            value: request.engineType,
            schema: s.optional(s.lazy(() => engineType1Schema)),
          },
          {
            name: "transmission",
            value: request.transmission,
            schema: s.optional(s.array(s.lazy(() => transmissionSchema))),
          },
          { name: "cylinders", value: request.cylinders, schema: s.optional(s.array(s.int())) },
          {
            name: "drive_type",
            value: request.driveType,
            schema: s.optional(s.array(s.lazy(() => driveTypeSchema))),
          },
          { name: "run_cond", value: request.runCond, schema: s.optional(s.lazy(() => runCond1Schema)) },
          { name: "damage", value: request.damage, schema: s.optional(s.array(s.lazy(() => damageSchema))) },
          { name: "has_key", value: request.hasKey, schema: s.optional(s.lazy(() => hasKeySchema)) },
          { name: "cursor", value: request.cursor, schema: s.optional(s.string()) },
          { name: "zip", value: request.zip, schema: s.optional(s.string()) },
          { name: "radius", value: request.radius, schema: s.optional(s.float64()) },
          { name: "units", value: request.units, schema: s.defaulted(unitsSchema, Units.Mi) },
          { name: "per_page", value: request.perPage, schema: s.defaulted(s.int(), 20) },
          { name: "include_total", value: request.includeTotal, schema: s.defaulted(s.boolean(), false) },
          { name: "facility_id", value: request.facilityId, schema: s.optional(s.string()) },
          {
            name: "loc_state",
            value: request.locState,
            schema: s.optional(s.lazy(() => locStateInternalSchema)),
          },
          { name: "office_name", value: request.officeName, schema: s.optional(s.string()) },
          { name: "auction_date_from", value: request.auctionDateFrom, schema: s.optional(s.dateOnly()) },
          { name: "auction_date_to", value: request.auctionDateTo, schema: s.optional(s.dateOnly()) },
          { name: "today_only", value: request.todayOnly, schema: s.defaulted(s.boolean(), false) },
          {
            name: "sale_document_pending",
            value: request.saleDocumentPending,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "sale_document_type", value: request.saleDocumentType, schema: s.optional(s.string()) },
          {
            name: "seller_type",
            value: request.sellerType,
            schema: s.optional(s.lazy(() => sellerTypeSchema)),
          },
          {
            name: "has_shipping_price",
            value: request.hasShippingPrice,
            schema: s.defaulted(s.boolean(), false),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vehicleListResponseInternalSchema },
        errorFactory: Vehicles.ListAuctionVehiclesError,
      },
      options,
    );
  }
}

export namespace Vehicles {
  export type GetVehicleDetailsRequest = {
    /**
     * Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin
     * returned by list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI
     * 1110xxxxxxxx is normalized to the canonical 8-digit lot number.
     */
    slugVin: string;
    /**
     * Optionally embed related detail-page data in the same response. Comma-separated values:
     * history adds retained sale-history records across known Copart/IAAI lots for the VIN;
     * vin_lots adds other known auction lots for the same VIN in summary form. Example:
     * include=history,vin_lots.
     */
    include?: string;
  };

  export class GetVehicleDetailsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVehicleDetailsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 503, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }

  export type ListAuctionVehiclesRequest = {
    /** Search by lot number, VIN, or vehicle title. */
    s?: string;
    /** Lot status filter. @default LotStatus.All */
    lotStatus?: LotStatus;
    /**
     * Normalized lot sub-status. Open = active/open and not sold; Live = currently live when
     * supported; Ended = ended/closed state. Open also includes imported active lots with an
     * unassigned auction date. Their auction_at is null and auction_date_pending is true. Explicit
     * date-range filters exclude unassigned dates.
     *
     * @default LotSubStatus.Open
     */
    lotSubStatus?: LotSubStatus;
    /**
     * Upcoming selector. all = no restriction; only = only upcoming eligible lots; without =
     * exclude upcoming lots. This does not override Open/Sold state logic.
     *
     * @default Upcoming.All
     */
    upcoming?: Upcoming;
    /**
     * true returns only source listings whose auction date is not yet assigned; false excludes
     * date-pending lots.
     */
    auctionDatePending?: boolean;
    /**
     * Return records whose updated_at changed within the requested number of minutes. Designed for
     * incremental synchronization; combine with cursor pagination and auction filters.
     */
    updatedWithinMinutes?: number;
    /** Minimum price. */
    priceMin?: number;
    /** Maximum price. */
    priceMax?: number;
    /** Minimum vehicle year. */
    yearFrom?: number;
    /** Maximum vehicle year. */
    yearTo?: number;
    /**
     * Numeric auction platform filter: 0 = all supported platforms, 1 = Copart, 2 = IAAI. Use
     * either auction_type or platform in the same request.
     *
     * @default AuctionType._0
     */
    auctionType?: AuctionType;
    /**
     * Readable auction platform filter. Use copart or iaai. Use either platform or auction_type in
     * the same request.
     */
    platform?: Platform;
    /**
     * Vehicle type. Multiple values are OR-ed; query-array syntax such as
     * type[]=COUPE&type[]=AUTOMOBILE is supported.
     */
    type?: Type1;
    /**
     * Filter by vehicle_specs.body_style. Multiple values are OR-ed. Query-array syntax is
     * supported, for example body_style[]=Coupe&body_style[]=Convertible. IAAI uses its
     * VehicleClass value; Copart uses the source-backed Body Style field.
     */
    bodyStyle?: BodyStyle;
    /**
     * Compatibility alias for body_style. Multiple values are OR-ed. Prefer body_style for new
     * integrations.
     *
     * @deprecated
     */
    bodyType?: BodyType;
    /** Vehicle make. */
    make?: string;
    /**
     * Canonical vehicle series / model family. Examples: BMW Series 3, Mercedes-Benz C-Class,
     * Toyota Camry, Audi A4, Ford F-150. Optional; can be combined with model and generation
     * filters.
     */
    series?: Series;
    /** Vehicle model. */
    model?: string;
    /**
     * Vehicle generation catalog ID. Use /vehicles/filters?make=BMW&model=X5 to discover valid IDs.
     * Multiple IDs are supported.
     */
    generationId?: GenerationId;
    /**
     * Human-readable generation alias, for example F15, E70 or G05. generation_id is preferred for
     * stable integrations.
     */
    generation?: Generation;
    /** Vehicle color. Multiple values are supported. */
    color?: string[];
    /**
     * Match VINs that start with any supplied prefix (OR). Supports comma-separated values
     * vin_prefix=1,4,5 and array syntax vin_prefix[]=1&vin_prefix[]=4&vin_prefix[]=5. Prefixes
     * consist of 1–3 VIN letters/numbers; at most 20 unique prefixes. Combines with other filters,
     * cursor, and include_total. Prefix does not guarantee manufacturing country.
     */
    vinPrefix?: VinPrefix;
    /**
     * Normalized fuel type; Hybrid includes source values Hybrid, Electric and Gas Hybrid, Hybrid
     * Engine, and Electric and Diesel Hybrid. Multiple values are supported.
     */
    fuelType?: FuelType[];
    /** Minimum odometer value in miles. Vehicle responses also include the converted km value. */
    odometerFrom?: number;
    /** Maximum odometer value in miles. Vehicle responses also include the converted km value. */
    odometerTo?: number;
    /** Minimum engine size. */
    engineSizeFrom?: number;
    /** Maximum engine size. */
    engineSizeTo?: number;
    /**
     * Engine layout. I=inline, V=V engine, W=W engine, B/H=boxer/horizontally opposed. Scalar and
     * repeated-array forms are supported.
     */
    engineType?: EngineType1;
    /** Transmission type. Multiple values are supported. */
    transmission?: Transmission[];
    /** Number of cylinders. Multiple values are supported. */
    cylinders?: number[];
    /** Drive type. Multiple values are supported. */
    driveType?: DriveType[];
    /**
     * Source-backed running-condition filter. Multiple values are OR-ed; use both Run & Drive
     * Verified and RUNS AND DRIVES for a combined Copart + IAAI running-vehicle filter.
     */
    runCond?: RunCond1;
    /** Damage type. Multiple values are supported. */
    damage?: Damage[];
    /** Filter vehicles by key availability. */
    hasKey?: HasKey;
    /** Cursor for pagination. */
    cursor?: string;
    /** ZIP code for location-based search. */
    zip?: string;
    /** Search radius around ZIP. */
    radius?: number;
    /** Distance units. @default Units.Mi */
    units?: Units;
    /**
     * Records per vehicle-search page. Default 20. The effective maximum is plan-dependent; public
     * plan entitlements can use maxima of 20, 30 or 40, while approved custom plans may differ. Use
     * the active account entitlement as the runtime source of truth.
     *
     * @default 20
     */
    perPage?: number;
    /**
     * When true, meta.total attempts an exact filtered count. For very large or expensive result
     * sets the safety-bounded count may return null; cursor pagination remains available.
     *
     * @default false
     */
    includeTotal?: boolean;
    /** Auction facility ID. */
    facilityId?: string;
    /**
     * Auction facility state/region code. Accepts a scalar or repeated/form-style array, e.g.
     * loc_state=FL or loc_state[]=FL.
     */
    locState?: LocState;
    /** Auction office or branch name. */
    officeName?: string;
    /** Auction date from. */
    auctionDateFrom?: string;
    /** Auction date to. */
    auctionDateTo?: string;
    /** Return only vehicles with auctions today. @default false */
    todayOnly?: boolean;
    /** Filter by pending sale document. @default false */
    saleDocumentPending?: boolean;
    /** Sale document type. */
    saleDocumentType?: string;
    /**
     * Filter by name-based seller classification, not damage/title heuristics. Missing seller names
     * are unknown and do not match non_insurance. For non_insurance, also provide make, model,
     * facility_id or s with a specific VIN/lot; unscoped searches return 422
     * selective_filter_required. For a full catalogue, sync and filter known seller types locally.
     */
    sellerType?: SellerType;
    /** Return only vehicles with shipping price data. @default false */
    hasShippingPrice?: boolean;
  };

  export const listAuctionVehiclesRequestSchema: Schema<ListAuctionVehiclesRequest> = s.lazySchema(() =>
    s.object<ListAuctionVehiclesRequest>({
      s: s.optional(s.string()),
      lotStatus: s.defaulted(lotStatusSchema, LotStatus.All),
      lotSubStatus: s.defaulted(lotSubStatusSchema, LotSubStatus.Open),
      upcoming: s.defaulted(upcomingSchema, Upcoming.All),
      auctionDatePending: s.optional(s.boolean()),
      updatedWithinMinutes: s.optional(s.int().check(s.gte(1), s.lte(525600))),
      priceMin: s.optional(s.float64()),
      priceMax: s.optional(s.float64()),
      yearFrom: s.optional(s.int()),
      yearTo: s.optional(s.int()),
      auctionType: s.defaulted(auctionTypeSchema, AuctionType._0),
      platform: s.optional(s.lazy(() => platformSchema)),
      type: s.optional(s.lazy(() => type1Schema)),
      bodyStyle: s.optional(s.lazy(() => bodyStyleSchema)),
      bodyType: s.optional(s.lazy(() => bodyTypeSchema)),
      make: s.optional(s.string()),
      series: s.optional(s.lazy(() => seriesSchema)),
      model: s.optional(s.string()),
      generationId: s.optional(s.lazy(() => generationIdSchema)),
      generation: s.optional(s.lazy(() => generationSchema)),
      color: s.optional(s.array(s.string())),
      vinPrefix: s.optional(s.lazy(() => vinPrefixSchema)),
      fuelType: s.optional(s.array(s.lazy(() => fuelTypeSchema))),
      odometerFrom: s.optional(s.float64()),
      odometerTo: s.optional(s.float64()),
      engineSizeFrom: s.optional(s.float64()),
      engineSizeTo: s.optional(s.float64()),
      engineType: s.optional(s.lazy(() => engineType1Schema)),
      transmission: s.optional(s.array(s.lazy(() => transmissionSchema))),
      cylinders: s.optional(s.array(s.int())),
      driveType: s.optional(s.array(s.lazy(() => driveTypeSchema))),
      runCond: s.optional(s.lazy(() => runCond1Schema)),
      damage: s.optional(s.array(s.lazy(() => damageSchema))),
      hasKey: s.optional(s.lazy(() => hasKeySchema)),
      cursor: s.optional(s.string()),
      zip: s.optional(s.string()),
      radius: s.optional(s.float64()),
      units: s.defaulted(unitsSchema, Units.Mi),
      perPage: s.defaulted(s.int().check(s.gte(1)), 20),
      includeTotal: s.defaulted(s.boolean(), false),
      facilityId: s.optional(s.string()),
      locState: s.optional(s.lazy(() => locStateSchema)),
      officeName: s.optional(s.string()),
      auctionDateFrom: s.optional(s.dateOnly()),
      auctionDateTo: s.optional(s.dateOnly()),
      todayOnly: s.defaulted(s.boolean(), false),
      saleDocumentPending: s.defaulted(s.boolean(), false),
      saleDocumentType: s.optional(s.string()),
      sellerType: s.optional(s.lazy(() => sellerTypeSchema)),
      hasShippingPrice: s.defaulted(s.boolean(), false),
    }),
  );

  export class ListAuctionVehiclesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"apiErrorModel", ApiErrorModel>
      | Declared<"error429", undefined>
      | Declared<"error500", undefined>
      | Declared<"apiErrorModel2", ApiErrorModel>
      | Declared<"apiErrorModel3", ApiErrorModel>
      | Declared<"apiErrorModel4", ApiErrorModel>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAuctionVehiclesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "apiErrorModel", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 403, kind: "apiErrorModel2", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 422, kind: "apiErrorModel3", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
      { on: 503, kind: "apiErrorModel4", decode: { kind: "json", schema: apiErrorModelInternalSchema } },
    ];
  }
}
