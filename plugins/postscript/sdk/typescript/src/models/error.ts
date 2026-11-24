import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  loc?: Record<string, unknown>[];
  msg?: string;
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    loc: s.optional(s.array(s.record(s.string(), s.unknown()))),
    msg: s.optional(s.string()),
    type: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
