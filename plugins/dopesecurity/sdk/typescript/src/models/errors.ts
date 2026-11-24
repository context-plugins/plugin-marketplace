import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errors1Schema, type Errors1 } from "./errors1.js";

/** Error response containing a list of errors related to 400 and 500 http status */
export type Errors = {
  errors?: Errors1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorsProperties: s.Shape<Errors> = {
  errors: s.optional(s.array(s.lazy(() => errors1Schema))),
};

export const errorsInternalSchema: Schema<Errors> = s.object<Errors>(errorsProperties, {
  additionalProperties: s.json(),
});

export const errorsSchema: Schema<Errors> = s.lazySchema(() =>
  s.object<Errors>(
    {
      ...errorsProperties,
      errors: s.optional(s.array(s.lazy(() => errors1Schema)).check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
