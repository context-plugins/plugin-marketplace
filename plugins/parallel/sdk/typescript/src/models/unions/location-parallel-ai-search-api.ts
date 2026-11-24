import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ISO 3166-1 alpha-2 country code for geo-targeted search results. */
export type LocationParallelAiSearchApi = string;

export const locationParallelAiSearchApiSchema: Schema<LocationParallelAiSearchApi> =
  s.of<LocationParallelAiSearchApi>(s.union([s.string()]));
