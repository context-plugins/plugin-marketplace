import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type Error403 = {
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error403Schema: Schema<Error403> = s.object<Error403>(
  {
    error: errorSchema,
  },
  { additionalProperties: s.json() },
);
