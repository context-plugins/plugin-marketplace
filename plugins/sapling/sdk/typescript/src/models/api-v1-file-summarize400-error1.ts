import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1FileSummarize400Error1 = {
  error?: string;
  msg?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1FileSummarize400Error1Schema: Schema<ApiV1FileSummarize400Error1> =
  s.object<ApiV1FileSummarize400Error1>(
    {
      error: s.optional(s.string()),
      msg: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
