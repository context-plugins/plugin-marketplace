import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1Edits400Error = {
  /** Human-readable error message. */
  msg?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1Edits400ErrorSchema: Schema<ApiV1Edits400Error> = s.object<ApiV1Edits400Error>(
  {
    msg: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
