import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error3Schema, type Error3 } from "./error3.js";

export type Error500Error = {
  error: Error3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error500ErrorSchema: Schema<Error500Error> = s.object<Error500Error>(
  {
    error: error3Schema,
  },
  { additionalProperties: s.json() },
);
