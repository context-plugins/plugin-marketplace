import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether a business justification is required when requesting a usage limit increase. */
export const BusinessJustification = {
  Optional: "OPTIONAL",
  Required: "REQUIRED",
} as const;
export type BusinessJustification =
  | (typeof BusinessJustification)[keyof typeof BusinessJustification]
  | (string & {});

export const businessJustificationSchema: EnumSchema<BusinessJustification> =
  s.enumOf<BusinessJustification>(BusinessJustification);
