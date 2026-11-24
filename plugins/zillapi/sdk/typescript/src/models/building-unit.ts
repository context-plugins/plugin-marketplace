import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuildingUnit = {
  /** Zillow property id, always a string. */
  zpid?: string;
  /** Absent on the building's parent record. */
  unitNumber?: string | null;
  price?: number | null;
  beds?: number | null;
  baths?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildingUnitSchema: Schema<BuildingUnit> = s.object<BuildingUnit>(
  {
    zpid: s.optional(s.string()),
    unitNumber: s.optionalNullable(s.string()),
    price: s.optionalNullable(s.float64()),
    beds: s.optionalNullable(s.float64()),
    baths: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
