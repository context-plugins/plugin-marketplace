import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { auctionInfoSchema, type AuctionInfo } from "./auction-info.js";
import { pricingInfoInternalSchema, pricingInfoSchema, type PricingInfo } from "./pricing-info.js";
import { lotNumberSchema, type LotNumber } from "./unions/lot-number.js";

/**
 * Summary-form auction lot for the same VIN. Field availability depends on source and lot state.
 */
export type IncludedVinLot = {
  platform?: string;
  lotNumber?: LotNumber | null;
  vin?: string | null;
  title?: string | null;
  year?: number | null;
  make?: string | null;
  model?: string | null;
  auction?: AuctionInfo;
  pricing?: PricingInfo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const includedVinLotProperties: s.Shape<IncludedVinLot> = {
  platform: s.optional(s.string()),
  lotNumber: s.optionalNullable(s.lazy(() => lotNumberSchema)),
  vin: s.optionalNullable(s.string()),
  title: s.optionalNullable(s.string()),
  year: s.optionalNullable(s.int()),
  make: s.optionalNullable(s.string()),
  model: s.optionalNullable(s.string()),
  auction: s.optional(s.lazy(() => auctionInfoSchema)),
  pricing: s.optional(s.lazy(() => pricingInfoInternalSchema)),
  _keysMap: {
    lotNumber: "lot_number",
  },
};

export const includedVinLotInternalSchema: Schema<IncludedVinLot> = s.object<IncludedVinLot>(
  includedVinLotProperties,
  { additionalProperties: s.json() },
);

export const includedVinLotSchema: Schema<IncludedVinLot> = s.lazySchema(() =>
  s.object<IncludedVinLot>(
    {
      ...includedVinLotProperties,
      pricing: s.optional(s.lazy(() => pricingInfoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
