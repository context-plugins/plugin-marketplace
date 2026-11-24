import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reason2Schema, type Reason2 } from "./reason2.js";

export type ResourceNotFoundExceptionError = {
  message?: string;
  /** The reason for the exception. */
  reason?: Reason2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceNotFoundExceptionErrorSchema: Schema<ResourceNotFoundExceptionError> =
  s.object<ResourceNotFoundExceptionError>(
    {
      message: s.optional(s.string()),
      reason: s.optional(s.lazy(() => reason2Schema)),
      _keysMap: {
        message: "Message",
        reason: "Reason",
      },
    },
    { additionalProperties: s.json() },
  );
