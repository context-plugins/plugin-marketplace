import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for phone type. */
export const PhoneType = {
  Mobile: "MOBILE",
  Home: "HOME",
} as const;
export type PhoneType = (typeof PhoneType)[keyof typeof PhoneType] | (string & {});

export const phoneTypeSchema: EnumSchema<PhoneType> = s.enumOf<PhoneType>(PhoneType);
