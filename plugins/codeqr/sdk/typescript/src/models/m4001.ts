import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type M4001 = {
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const m4001Schema: Schema<M4001> = s.object<M4001>(
  {
    error: errorSchema,
  },
  { additionalProperties: s.json() },
);
