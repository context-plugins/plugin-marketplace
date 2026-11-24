import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2HlrRequest = {
  /** Array of phone numbers in E.164 format (e.g. +14155552671) */
  numbers?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2HlrRequestSchema: Schema<ApiV2HlrRequest> = s.object<ApiV2HlrRequest>(
  {
    numbers: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
