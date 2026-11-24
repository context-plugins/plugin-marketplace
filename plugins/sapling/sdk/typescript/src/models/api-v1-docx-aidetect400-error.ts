import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1DocxAidetect400Error = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1DocxAidetect400ErrorSchema: Schema<ApiV1DocxAidetect400Error> =
  s.object<ApiV1DocxAidetect400Error>(
    {
      error: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
