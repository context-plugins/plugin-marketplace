import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A general error response from the service */
export type OfrepGeneralErrorResponseError = {
  /** An error description for logging or other needs */
  errorDetails?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ofrepGeneralErrorResponseErrorSchema: Schema<OfrepGeneralErrorResponseError> =
  s.object<OfrepGeneralErrorResponseError>(
    {
      errorDetails: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
