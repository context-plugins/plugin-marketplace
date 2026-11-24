import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1Schema, type Error1 } from "./error1.js";

export type Error503 = {
  error: Error1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error503Schema: Schema<Error503> = s.object<Error503>(
  {
    error: error1Schema,
  },
  { additionalProperties: s.json() },
);
