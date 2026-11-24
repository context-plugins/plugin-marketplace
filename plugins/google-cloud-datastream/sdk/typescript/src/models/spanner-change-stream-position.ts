import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Represents a position in a Spanner change stream from which to start replicating. */
export type SpannerChangeStreamPosition = {
  /**
   * Required. The timestamp to start change stream queries from. The timestamp must be a positive
   * value.
   */
  startTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spannerChangeStreamPositionSchema: Schema<SpannerChangeStreamPosition> =
  s.object<SpannerChangeStreamPosition>(
    {
      startTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
