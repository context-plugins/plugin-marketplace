import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { error1InternalSchema, error1Schema, type Error1 } from "./error1.js";

/**
 * Every error has this shape. Some codes add fields (for example `platform`, `url`, `max_length`,
 * `connection_id`, `upgrade_url`, `required_fields`).
 */
export type Error = {
  error: Error1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorProperties: s.Shape<Error> = {
  error: error1InternalSchema,
};

export const errorInternalSchema: Schema<Error> = s.object<Error>(errorProperties, {
  additionalProperties: s.json(),
});

export const errorSchema: Schema<Error> = s.lazySchema(() =>
  s.object<Error>(
    {
      ...errorProperties,
      error: error1Schema,
    },
    { additionalProperties: s.json() },
  ),
);
