import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type Error403Error = {
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error403ErrorSchema: Schema<Error403Error> = s.object<Error403Error>(
  {
    error: errorSchema,
  },
  { additionalProperties: s.json() },
);
