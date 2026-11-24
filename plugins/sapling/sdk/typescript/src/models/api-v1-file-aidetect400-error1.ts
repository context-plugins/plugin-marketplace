import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1FileAidetect400Error1 = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1FileAidetect400Error1Schema: Schema<ApiV1FileAidetect400Error1> =
  s.object<ApiV1FileAidetect400Error1>(
    {
      error: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
