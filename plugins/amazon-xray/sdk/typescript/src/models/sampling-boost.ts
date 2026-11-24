import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SamplingBoost = {
  /** The calculated sampling boost rate for this service */
  boostRate: number;
  /** When the sampling boost expires. */
  boostRateTtl: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const samplingBoostSchema: Schema<SamplingBoost> = s.object<SamplingBoost>(
  {
    boostRate: s.float64(),
    boostRateTtl: s.dateTime(),
    _keysMap: {
      boostRate: "BoostRate",
      boostRateTtl: "BoostRateTTL",
    },
  },
  { additionalProperties: s.json() },
);
