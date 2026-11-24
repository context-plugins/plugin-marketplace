import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SamplingRateBoost = {
  /**
   * Defines max temporary sampling rate to apply when a boost is triggered. Calculated boost rate
   * by X-Ray will be less than or equal to this max rate.
   */
  maxRate: number;
  /**
   * Sets the time window (in minutes) in which only one sampling rate boost can be triggered. After
   * a boost occurs, no further boosts are allowed until the next window.
   */
  cooldownWindowMinutes: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const samplingRateBoostSchema: Schema<SamplingRateBoost> = s.object<SamplingRateBoost>(
  {
    maxRate: s.float64(),
    cooldownWindowMinutes: s.int(),
    _keysMap: {
      maxRate: "MaxRate",
      cooldownWindowMinutes: "CooldownWindowMinutes",
    },
  },
  { additionalProperties: s.json() },
);
