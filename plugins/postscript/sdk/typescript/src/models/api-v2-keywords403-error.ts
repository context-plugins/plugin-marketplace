import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2Keywords403Error = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2Keywords403ErrorSchema: Schema<ApiV2Keywords403Error> = s.object<ApiV2Keywords403Error>(
  {
    error: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
