import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type AccessDeniedException = {
  message?: string;
  /** The reason for the exception. */
  reason: Reason;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accessDeniedExceptionSchema: Schema<AccessDeniedException> = s.object<AccessDeniedException>(
  {
    message: s.optional(s.string()),
    reason: reasonSchema,
    _keysMap: {
      message: "Message",
      reason: "Reason",
    },
  },
  { additionalProperties: s.json() },
);
