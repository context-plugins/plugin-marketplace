import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Sector market capitalisation in INR */
export type SectorMarketCapAmount2 = {
  /** Numeric value of the market capitalisation */
  value?: number;
  /** Unit of the market capitalisation value */
  unit?: string;
  /** Human-readable formatted market capitalisation */
  formatted?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectorMarketCapAmount2Schema: Schema<SectorMarketCapAmount2> = s.object<SectorMarketCapAmount2>(
  {
    value: s.optional(s.float64()),
    unit: s.optional(s.string()),
    formatted: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
