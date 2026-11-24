import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ErrorResponse = {
  /** description of the error */
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorResponseProperties: s.Shape<ErrorResponse> = {
  error: s.string(),
};

export const errorResponseInternalSchema: Schema<ErrorResponse> = s.object<ErrorResponse>(
  errorResponseProperties,
  { additionalProperties: s.json() },
);

export const errorResponseSchema: Schema<ErrorResponse> = s.lazySchema(() =>
  s.object<ErrorResponse>(
    {
      ...errorResponseProperties,
      error: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
