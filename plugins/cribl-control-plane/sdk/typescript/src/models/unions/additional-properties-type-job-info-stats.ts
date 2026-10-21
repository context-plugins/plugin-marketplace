import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AdditionalPropertiesTypeJobInfoStats = number | Record<string, number>;

export const additionalPropertiesTypeJobInfoStatsSchema: Schema<AdditionalPropertiesTypeJobInfoStats> =
  s.of<AdditionalPropertiesTypeJobInfoStats>(s.union([s.float64(), s.record(s.string(), s.float64())]));
