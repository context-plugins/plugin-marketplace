import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type FailureDetails = {
  /** The reason for the failure. */
  reason?: Reason;
  /** A message describing the failure. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const failureDetailsSchema: Schema<FailureDetails> = s.object<FailureDetails>(
  {
    reason: s.optional(s.lazy(() => reasonSchema)),
    message: s.optional(s.string()),
    _keysMap: {
      reason: "Reason",
      message: "Message",
    },
  },
  { additionalProperties: s.json() },
);
