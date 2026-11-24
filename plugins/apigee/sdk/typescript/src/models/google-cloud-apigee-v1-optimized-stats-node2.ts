import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** `stats` results. */
export type GoogleCloudApigeeV1OptimizedStatsNode2 = {
  /** List of data values. */
  data?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1OptimizedStatsNode2Schema: Schema<GoogleCloudApigeeV1OptimizedStatsNode2> =
  s.object<GoogleCloudApigeeV1OptimizedStatsNode2>(
    {
      data: s.optional(s.array(s.record(s.string(), s.unknown()))),
    },
    { additionalProperties: s.json() },
  );
