import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorInternalSchema, errorSchema, type Error } from "./error.js";

export type ErrorEnvelope = {
  /**
   * The canonical error object (§6.4). `code` is the SINGLE source of truth for error sub-codes.
   */
  error: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorEnvelopeProperties: s.Shape<ErrorEnvelope> = {
  error: errorInternalSchema,
};

export const errorEnvelopeInternalSchema: Schema<ErrorEnvelope> = s.object<ErrorEnvelope>(
  errorEnvelopeProperties,
  { additionalProperties: s.json() },
);

export const errorEnvelopeSchema: Schema<ErrorEnvelope> = s.lazySchema(() =>
  s.object<ErrorEnvelope>(
    {
      ...errorEnvelopeProperties,
      error: errorSchema,
    },
    { additionalProperties: s.json() },
  ),
);
