import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auctionInfoSchema, type AuctionInfo } from "./auction-info.js";
import {
  includedVehicleHistoryItemSchema,
  type IncludedVehicleHistoryItem,
} from "./included-vehicle-history-item.js";
import {
  includedVinLotInternalSchema,
  includedVinLotSchema,
  type IncludedVinLot,
} from "./included-vin-lot.js";
import { mediaInfoInternalSchema, mediaInfoSchema, type MediaInfo } from "./media-info.js";
import { odometerInternalSchema, odometerSchema, type Odometer } from "./odometer.js";
import { pricingInfoInternalSchema, pricingInfoSchema, type PricingInfo } from "./pricing-info.js";
import { saleDocumentSchema, type SaleDocument } from "./sale-document.js";
import { sellerSchema, type Seller } from "./seller.js";
import { vehicleGenerationSchema, type VehicleGeneration } from "./vehicle-generation.js";
import { vehicleLocationSchema, type VehicleLocation } from "./vehicle-location.js";
import { vehicleSeriesSchema, type VehicleSeries } from "./vehicle-series.js";
import { vehicleSpecsSchema, type VehicleSpecs } from "./vehicle-specs.js";

/** Normalized Copart or IAAI auction vehicle record. */
export type Vehicle = {
  platform?: string;
  lotNumber?: string;
  vin?: string;
  title?: string;
  year?: number;
  make?: string;
  model?: string;
  /** Canonical model-family / series resolved from the generation catalog. */
  series?: VehicleSeries | null;
  /** Resolved vehicle generation metadata when the source vehicle can be matched unambiguously. */
  generation?: VehicleGeneration | null;
  type?: string;
  color?: string;
  fuelType?: string;
  transmission?: string;
  driveType?: string;
  /**
   * Source-backed odometer readings in miles and kilometres. Missing readings may be null; unknown
   * mileage is not zero.
   */
  odometer?: Odometer | null;
  damage?: string;
  auction?: AuctionInfo;
  pricing?: PricingInfo;
  location?: VehicleLocation;
  /**
   * Normalized auction sale/title document metadata. issuing_state is the document/title issuer
   * state and is distinct from the auction yard/location state.
   */
  saleDocument?: SaleDocument;
  media?: MediaInfo;
  /**
   * Present only when include contains history. Retained sale-history entries for known auction
   * lots of the same VIN.
   */
  history?: IncludedVehicleHistoryItem[];
  /**
   * Present only when include contains vin_lots. Other known auction lot records for the same VIN,
   * returned in summary form.
   */
  vinLots?: IncludedVinLot[];
  /**
   * Source-aware detail metadata. IAAI includes normalized inventory sections;
   * auction_information.prebidInformation.reserveMet is a raw IAAI prebid signal and is not
   * equivalent to Copart seller_reserve_met. Copart includes source-backed sale_status (including
   * ess values such as Minimum Bid) and seller_reserve_met when the Copart source explicitly
   * supplies the flag, plus sanitized bid/yard/media metadata. Null in summary view.
   */
  details?: Record<string, unknown> | null;
  /** Normalized vehicle specifications. Field availability varies by auction source and lot. */
  vehicleSpecs?: VehicleSpecs;
  /**
   * Available seller name and name-based classification. Unknown means the source does not supply
   * enough evidence; damage, title and missing valuations do not establish seller type. Name-based
   * classification is inferred, not a verified source category.
   */
  seller?: Seller | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const vehicleProperties: s.Shape<Vehicle> = {
  platform: s.optional(s.string()),
  lotNumber: s.optional(s.string()),
  vin: s.optional(s.string()),
  title: s.optional(s.string()),
  year: s.optional(s.int()),
  make: s.optional(s.string()),
  model: s.optional(s.string()),
  series: s.optionalNullable(s.lazy(() => vehicleSeriesSchema)),
  generation: s.optionalNullable(s.lazy(() => vehicleGenerationSchema)),
  type: s.optional(s.string()),
  color: s.optional(s.string()),
  fuelType: s.optional(s.string()),
  transmission: s.optional(s.string()),
  driveType: s.optional(s.string()),
  odometer: s.optionalNullable(s.lazy(() => odometerInternalSchema)),
  damage: s.optional(s.string()),
  auction: s.optional(s.lazy(() => auctionInfoSchema)),
  pricing: s.optional(s.lazy(() => pricingInfoInternalSchema)),
  location: s.optional(s.lazy(() => vehicleLocationSchema)),
  saleDocument: s.optional(s.lazy(() => saleDocumentSchema)),
  media: s.optional(s.lazy(() => mediaInfoInternalSchema)),
  history: s.optional(s.array(s.lazy(() => includedVehicleHistoryItemSchema))),
  vinLots: s.optional(s.array(s.lazy(() => includedVinLotInternalSchema))),
  details: s.optionalNullable(s.record(s.string(), s.unknown())),
  vehicleSpecs: s.optional(s.lazy(() => vehicleSpecsSchema)),
  seller: s.optionalNullable(s.lazy(() => sellerSchema)),
  _keysMap: {
    lotNumber: "lot_number",
    fuelType: "fuel_type",
    driveType: "drive_type",
    saleDocument: "sale_document",
    vinLots: "vin_lots",
    vehicleSpecs: "vehicle_specs",
  },
};

export const vehicleInternalSchema: Schema<Vehicle> = s.object<Vehicle>(vehicleProperties, {
  additionalProperties: s.json(),
});

export const vehicleSchema: Schema<Vehicle> = s.lazySchema(() =>
  s.object<Vehicle>(
    {
      ...vehicleProperties,
      odometer: s.optionalNullable(s.lazy(() => odometerSchema)),
      pricing: s.optional(s.lazy(() => pricingInfoSchema)),
      media: s.optional(s.lazy(() => mediaInfoSchema)),
      vinLots: s.optional(s.array(s.lazy(() => includedVinLotSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
