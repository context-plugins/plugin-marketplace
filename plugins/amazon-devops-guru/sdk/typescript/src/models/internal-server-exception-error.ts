import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InternalServerExceptionError = {
  message: string;
  /**
   * The number of seconds after which the action that caused the internal server exception can be
   * retried.
   */
  retryAfterSeconds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const internalServerExceptionErrorSchema: Schema<InternalServerExceptionError> =
  s.object<InternalServerExceptionError>(
    {
      message: s.string(),
      retryAfterSeconds: s.optional(s.int()),
      _keysMap: {
        message: "Message",
        retryAfterSeconds: "RetryAfterSeconds",
      },
    },
    { additionalProperties: s.json() },
  );
