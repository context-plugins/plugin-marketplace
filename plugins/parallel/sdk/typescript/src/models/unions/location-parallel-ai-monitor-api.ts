import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ISO 3166-1 alpha-2 country code for geo-targeted monitor results. */
export type LocationParallelAiMonitorApi = string;

export const locationParallelAiMonitorApiSchema: Schema<LocationParallelAiMonitorApi> =
  s.of<LocationParallelAiMonitorApi>(s.union([s.string()]));
