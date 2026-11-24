import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error4Schema, type Error4 } from "./error4.js";

/** Every JSON 4xx and 5xx this API writes. */
export type ErrorBody = {
  error: Error4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorBodySchema: Schema<ErrorBody> = s.object<ErrorBody>(
  {
    error: error4Schema,
  },
  { additionalProperties: s.json() },
);
