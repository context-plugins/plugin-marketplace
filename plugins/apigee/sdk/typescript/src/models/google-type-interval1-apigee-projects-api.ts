import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required. The observation window. The server quantizes to day boundaries and caps the span at 90
 * days.
 */
export type GoogleTypeInterval1ApigeeProjectsApi = {
  /**
   * Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval
   * will have to be the same or after the start.
   */
  startTime?: string;
  /**
   * Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will
   * have to be before the end.
   */
  endTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleTypeInterval1ApigeeProjectsApiSchema: Schema<GoogleTypeInterval1ApigeeProjectsApi> =
  s.object<GoogleTypeInterval1ApigeeProjectsApi>(
    {
      startTime: s.optional(s.string()),
      endTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
