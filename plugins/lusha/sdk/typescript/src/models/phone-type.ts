import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of phone number */
export const PhoneType = {
  Mobile: "Mobile",
  Direct: "Direct",
  Phone: "Phone",
} as const;
export type PhoneType = (typeof PhoneType)[keyof typeof PhoneType] | (string & {});

export const phoneTypeSchema: EnumSchema<PhoneType> = s.enumOf<PhoneType>(PhoneType);
