import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorInternalSchema, errorSchema, type Error } from "./error.js";

export type ErrorEnvelopeError = {
  /**
   * The canonical error object (§6.4). `code` is the SINGLE source of truth for error sub-codes.
   */
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorEnvelopeErrorProperties: s.Shape<ErrorEnvelopeError> = {
  error: errorInternalSchema,
};

export const errorEnvelopeErrorInternalSchema: Schema<ErrorEnvelopeError> = s.object<ErrorEnvelopeError>(
  errorEnvelopeErrorProperties,
  { additionalProperties: s.json() },
);

export const errorEnvelopeErrorSchema: Schema<ErrorEnvelopeError> = s.lazySchema(() =>
  s.object<ErrorEnvelopeError>(
    {
      ...errorEnvelopeErrorProperties,
      error: errorSchema,
    },
    { additionalProperties: s.json() },
  ),
);
