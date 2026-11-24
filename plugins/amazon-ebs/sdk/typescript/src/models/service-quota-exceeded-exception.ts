import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reason3Schema, type Reason3 } from "./reason3.js";

export type ServiceQuotaExceededException = {
  message?: string;
  /** The reason for the exception. */
  reason?: Reason3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const serviceQuotaExceededExceptionSchema: Schema<ServiceQuotaExceededException> =
  s.object<ServiceQuotaExceededException>(
    {
      message: s.optional(s.string()),
      reason: s.optional(s.lazy(() => reason3Schema)),
      _keysMap: {
        message: "Message",
        reason: "Reason",
      },
    },
    { additionalProperties: s.json() },
  );
