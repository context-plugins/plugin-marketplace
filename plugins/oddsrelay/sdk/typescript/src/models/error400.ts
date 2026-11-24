import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error2Schema, type Error2 } from "./error2.js";

export type Error400 = {
  error: Error2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error400Schema: Schema<Error400> = s.object<Error400>(
  {
    error: error2Schema,
  },
  { additionalProperties: s.json() },
);
