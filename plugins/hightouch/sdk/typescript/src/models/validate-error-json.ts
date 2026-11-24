import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ValidateErrorJson = {
  /** @default "Validation failed" */
  message?: "Validation failed";
  details: Record<string, unknown>;
};

export const validateErrorJsonSchema: Schema<ValidateErrorJson> = s.object<ValidateErrorJson>({
  message: s.defaulted(s.literal("Validation failed"), "Validation failed"),
  details: s.record(s.string(), s.unknown()),
});
