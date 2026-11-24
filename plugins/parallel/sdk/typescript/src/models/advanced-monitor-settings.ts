import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  locationParallelAiMonitorApiSchema,
  type LocationParallelAiMonitorApi,
} from "./unions/location-parallel-ai-monitor-api.js";
import { sourcePolicy1Schema, type SourcePolicy1 } from "./unions/source-policy1.js";

/** Advanced monitor configuration. */
export type AdvancedMonitorSettings = {
  /** Domain filtering preferences: preferred and disallowed domains for monitor search results. */
  sourcePolicy?: SourcePolicy1;
  /** ISO 3166-1 alpha-2 country code for geo-targeted monitor results. */
  location?: LocationParallelAiMonitorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const advancedMonitorSettingsSchema: Schema<AdvancedMonitorSettings> =
  s.object<AdvancedMonitorSettings>(
    {
      sourcePolicy: s.optional(s.lazy(() => sourcePolicy1Schema)),
      location: s.optional(s.lazy(() => locationParallelAiMonitorApiSchema)),
      _keysMap: {
        sourcePolicy: "source_policy",
      },
    },
    { additionalProperties: s.json() },
  );
