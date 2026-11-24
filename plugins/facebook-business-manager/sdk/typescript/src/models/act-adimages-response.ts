import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActAdimagesResponse = {
  /** Map of uploaded image details keyed by filename */
  images?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actAdimagesResponseSchema: Schema<ActAdimagesResponse> = s.object<ActAdimagesResponse>(
  {
    images: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
