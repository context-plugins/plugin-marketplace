import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

export type Error2 = {
  code: Code;
  field?: string;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error2Schema: Schema<Error2> = s.object<Error2>(
  {
    code: codeSchema,
    field: s.optional(s.string()),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
