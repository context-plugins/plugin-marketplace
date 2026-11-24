import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LimitExceededExceptionError = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const limitExceededExceptionErrorSchema: Schema<LimitExceededExceptionError> =
  s.object<LimitExceededExceptionError>(
    {
      message: s.optional(s.string()),
      _keysMap: {
        message: "Message",
      },
    },
    { additionalProperties: s.json() },
  );
