import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValidateErrorJsonError = {
  /** @default "Validation failed" */
  message?: "Validation failed";
  details: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const validateErrorJsonErrorSchema: Schema<ValidateErrorJsonError> = s.object<ValidateErrorJsonError>(
  {
    message: s.defaulted(s.literal("Validation failed"), "Validation failed"),
    details: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
