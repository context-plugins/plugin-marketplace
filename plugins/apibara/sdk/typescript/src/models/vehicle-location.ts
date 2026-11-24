import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type VehicleLocation = {
  display?: string;
  state?: string | null;
  facilityId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const vehicleLocationSchema: Schema<VehicleLocation> = s.object<VehicleLocation>(
  {
    display: s.optional(s.string()),
    state: s.optionalNullable(s.string()),
    facilityId: s.optional(s.string()),
    _keysMap: {
      facilityId: "facility_id",
    },
  },
  { additionalProperties: s.json() },
);
