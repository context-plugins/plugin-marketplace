import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PdfAidetect400Error = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PdfAidetect400ErrorSchema: Schema<ApiV1PdfAidetect400Error> =
  s.object<ApiV1PdfAidetect400Error>(
    {
      error: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
