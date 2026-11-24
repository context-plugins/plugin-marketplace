import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type Error500 = {
  error: Error3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error500Schema: Schema<Error500> = s.object<Error500>(
  {
    error: error3Schema,
  },
  { additionalProperties: s.json() },
);
