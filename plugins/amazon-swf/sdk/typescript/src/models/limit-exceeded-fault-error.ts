import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LimitExceededFaultError = {
  /** A description that may help with diagnosing the cause of the fault. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const limitExceededFaultErrorSchema: Schema<LimitExceededFaultError> =
  s.object<LimitExceededFaultError>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
