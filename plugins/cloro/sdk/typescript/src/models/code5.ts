import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Error code identifying the failure reason. */
export const Code5 = {
  ValidationError: "VALIDATION_ERROR",
  ResourceAlreadyExists: "RESOURCE_ALREADY_EXISTS",
  InsufficientCredits: "INSUFFICIENT_CREDITS",
  ModelUnavailable: "MODEL_UNAVAILABLE",
} as const;
export type Code5 = (typeof Code5)[keyof typeof Code5] | (string & {});

export const code5Schema: EnumSchema<Code5> = s.enumOf<Code5>(Code5);
