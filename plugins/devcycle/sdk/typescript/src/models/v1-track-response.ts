import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1TrackResponse = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TrackResponseSchema: Schema<V1TrackResponse> = s.object<V1TrackResponse>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
