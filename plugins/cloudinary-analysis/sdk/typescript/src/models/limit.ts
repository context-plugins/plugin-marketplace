import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { featureSchema, type Feature } from "./feature.js";

export type Limit = {
  type: Feature;
  /** The amount of quota used by the current request */
  usedByRequest?: number | null;
  /** The remaining quota */
  remaining?: number | null;
  /** The total quota limit */
  limit?: number | null;
  /** Time in UTC when the limit will be reset */
  resetTime?: Date | null;
};

export const limitSchema: Schema<Limit> = s.object<Limit>({
  type: featureSchema,
  usedByRequest: s.optionalNullable(s.int()),
  remaining: s.optionalNullable(s.int()),
  limit: s.optionalNullable(s.int()),
  resetTime: s.optionalNullable(s.dateTime()),
  _keysMap: {
    usedByRequest: "used_by_request",
    resetTime: "reset_time",
  },
});
