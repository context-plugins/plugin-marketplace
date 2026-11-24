import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error1AirtableCommentsApi = {
  /** The type of error (e.g., AUTHENTICATION_REQUIRED, NOT_FOUND, INVALID_REQUEST). */
  type: string;
  /** A human-readable description of the error. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const error1AirtableCommentsApiSchema: Schema<Error1AirtableCommentsApi> =
  s.object<Error1AirtableCommentsApi>(
    {
      type: s.string(),
      message: s.string(),
    },
    { additionalProperties: s.json() },
  );
