import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1FileExtract400Error = {
  error?: string;
  msg?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1FileExtract400ErrorSchema: Schema<ApiV1FileExtract400Error> =
  s.object<ApiV1FileExtract400Error>(
    {
      error: s.optional(s.string()),
      msg: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
