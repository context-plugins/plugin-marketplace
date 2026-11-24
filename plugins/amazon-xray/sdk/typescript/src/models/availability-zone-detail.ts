import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AvailabilityZoneDetail = {
  /** The name of a corresponding Availability Zone. */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const availabilityZoneDetailSchema: Schema<AvailabilityZoneDetail> = s.object<AvailabilityZoneDetail>(
  {
    name: s.optional(s.string()),
    _keysMap: {
      name: "Name",
    },
  },
  { additionalProperties: s.json() },
);
