import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorResponseError = {
  /** description of the error */
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorResponseErrorProperties: s.Shape<ErrorResponseError> = {
  error: s.string(),
};

export const errorResponseErrorInternalSchema: Schema<ErrorResponseError> = s.object<ErrorResponseError>(
  errorResponseErrorProperties,
  { additionalProperties: s.json() },
);

export const errorResponseErrorSchema: Schema<ErrorResponseError> = s.lazySchema(() =>
  s.object<ErrorResponseError>(
    {
      ...errorResponseErrorProperties,
      error: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
