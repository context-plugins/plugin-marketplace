import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A string value of the KnownGender info about the Celebrity. */
export const Type2 = {
  Male: "Male",
  Female: "Female",
  Nonbinary: "Nonbinary",
  Unlisted: "Unlisted",
} as const;
export type Type2 = (typeof Type2)[keyof typeof Type2] | (string & {});

export const type2Schema: EnumSchema<Type2> = s.enumOf<Type2>(Type2);
