import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";

export type M400 = {
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const m400Schema: Schema<M400> = s.object<M400>(
  {
    error: errorSchema,
  },
  { additionalProperties: s.json() },
);
