import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  locationParallelAiSearchApiSchema,
  type LocationParallelAiSearchApi,
} from "./unions/location-parallel-ai-search-api.js";

/** Advanced search configuration for a task run. */
export type TaskAdvancedSettings = {
  /** ISO 3166-1 alpha-2 country code for geo-targeted search results. */
  location?: LocationParallelAiSearchApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskAdvancedSettingsSchema: Schema<TaskAdvancedSettings> = s.object<TaskAdvancedSettings>(
  {
    location: s.optional(s.lazy(() => locationParallelAiSearchApiSchema)),
  },
  { additionalProperties: s.json() },
);
