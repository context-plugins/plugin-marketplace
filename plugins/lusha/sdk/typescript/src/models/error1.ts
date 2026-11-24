import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code1Schema, type Code1 } from "./code1.js";

export type Error1 = {
  code: Code1;
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error1Schema: Schema<Error1> = s.object<Error1>(
  {
    code: code1Schema,
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
