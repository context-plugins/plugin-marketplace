import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Error code identifying the failure reason. */
export const Code2 = {
  ValidationError: "VALIDATION_ERROR",
  ResourceAlreadyExists: "RESOURCE_ALREADY_EXISTS",
  InsufficientCredits: "INSUFFICIENT_CREDITS",
} as const;
export type Code2 = (typeof Code2)[keyof typeof Code2] | (string & {});

export const code2Schema: EnumSchema<Code2> = s.enumOf<Code2>(Code2);
