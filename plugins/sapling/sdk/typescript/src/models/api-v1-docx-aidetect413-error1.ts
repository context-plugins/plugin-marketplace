import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1DocxAidetect413Error1 = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DocxAidetect413Error1Schema: Schema<ApiV1DocxAidetect413Error1> =
  s.object<ApiV1DocxAidetect413Error1>(
    {
      error: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
