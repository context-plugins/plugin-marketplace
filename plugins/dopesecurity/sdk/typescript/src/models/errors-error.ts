import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errors1Schema, type Errors1 } from "./errors1.js";

/** Error response containing a list of errors related to 400 and 500 http status */
export type ErrorsError = {
  errors?: Errors1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorsErrorProperties: s.Shape<ErrorsError> = {
  errors: s.optional(s.array(s.lazy(() => errors1Schema))),
};

export const errorsErrorInternalSchema: Schema<ErrorsError> = s.object<ErrorsError>(errorsErrorProperties, {
  additionalProperties: s.json(),
});

export const errorsErrorSchema: Schema<ErrorsError> = s.lazySchema(() =>
  s.object<ErrorsError>(
    {
      ...errorsErrorProperties,
      errors: s.optional(s.array(s.lazy(() => errors1Schema)).check(s.minLength(1))),
    },
    { additionalProperties: s.json() },
  ),
);
