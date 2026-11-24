import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reason1Schema, type Reason1 } from "./reason1.js";

export type RequestThrottledException = {
  message?: string;
  /** The reason for the exception. */
  reason?: Reason1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requestThrottledExceptionSchema: Schema<RequestThrottledException> =
  s.object<RequestThrottledException>(
    {
      message: s.optional(s.string()),
      reason: s.optional(s.lazy(() => reason1Schema)),
      _keysMap: {
        message: "Message",
        reason: "Reason",
      },
    },
    { additionalProperties: s.json() },
  );
