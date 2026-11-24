import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reasonSchema, type Reason } from "./reason.js";

export type ValidationExceptionError = {
  message?: string;
  /** The input does not satisfy the constraints specified by an Amazon Web Services service. */
  reason?: Reason;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validationExceptionErrorSchema: Schema<ValidationExceptionError> =
  s.object<ValidationExceptionError>(
    {
      message: s.optional(s.string()),
      reason: s.optional(s.lazy(() => reasonSchema)),
    },
    { additionalProperties: s.json() },
  );
