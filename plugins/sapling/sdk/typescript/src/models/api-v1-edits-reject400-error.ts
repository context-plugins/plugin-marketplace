import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1EditsReject400Error = {
  /** Human-readable error message. */
  msg?: string;
  message?: string;
  result?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1EditsReject400ErrorSchema: Schema<ApiV1EditsReject400Error> =
  s.object<ApiV1EditsReject400Error>(
    {
      msg: s.optional(s.string()),
      message: s.optional(s.string()),
      result: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
