import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sampleModeSchema, type SampleMode } from "./sample-mode.js";

export type FunctionConfSchemaDynamicSampling = {
  /**
   * Defines how sample rate will be derived: log(previousPeriodCount) or sqrt(previousPeriodCount)
   */
  mode?: SampleMode;
  /**
   * Expression used to derive sample group key. Example:`${domain}:${status}`. Each sample group
   * will have its own derived sampling rate based on volume. Defaults to `${host}`.
   */
  keyExpr?: string;
  /** How often (in seconds) sample rates will be adjusted */
  samplePeriod?: number;
  /**
   * Minimum number of events that must be received in previous sample period for sampling mode to
   * be applied to current period. If the number of events received for a sample group is less than
   * this minimum, a sample rate of 1:1 is used.
   */
  minEvents?: number;
  /**
   * Maximum sampling rate. If computed sampling rate is above this value, it will be limited to
   * this value.
   */
  maxSampleRate?: number;
};

export const functionConfSchemaDynamicSamplingSchema: Schema<FunctionConfSchemaDynamicSampling> =
  s.object<FunctionConfSchemaDynamicSampling>({
    mode: s.optional(s.lazy(() => sampleModeSchema)),
    keyExpr: s.optional(s.string()),
    samplePeriod: s.optional(s.float64()),
    minEvents: s.optional(s.float64()),
    maxSampleRate: s.optional(s.float64()),
  });
