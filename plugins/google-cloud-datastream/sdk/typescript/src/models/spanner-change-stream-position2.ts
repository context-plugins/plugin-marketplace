import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Spanner change stream position to start replicating from. */
export type SpannerChangeStreamPosition2 = {
  /**
   * Required. The timestamp to start change stream queries from. The timestamp must be a positive
   * value.
   */
  startTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spannerChangeStreamPosition2Schema: Schema<SpannerChangeStreamPosition2> =
  s.object<SpannerChangeStreamPosition2>(
    {
      startTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
