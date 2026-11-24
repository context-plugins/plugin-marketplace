import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EnvironmentTotalRuntimeSeconds = number;

export const environmentTotalRuntimeSecondsSchema: Schema<EnvironmentTotalRuntimeSeconds> =
  s.of<EnvironmentTotalRuntimeSeconds>(s.union([s.float64()]));
