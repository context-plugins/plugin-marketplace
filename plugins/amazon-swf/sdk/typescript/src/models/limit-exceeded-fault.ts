import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type LimitExceededFault = {
  /** A description that may help with diagnosing the cause of the fault. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const limitExceededFaultSchema: Schema<LimitExceededFault> = s.object<LimitExceededFault>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
