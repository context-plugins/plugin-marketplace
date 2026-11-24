import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1IngestPdfToText413Error1 = {
  error?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1IngestPdfToText413Error1Schema: Schema<ApiV1IngestPdfToText413Error1> =
  s.object<ApiV1IngestPdfToText413Error1>(
    {
      error: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
