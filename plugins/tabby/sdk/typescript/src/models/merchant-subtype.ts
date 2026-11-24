import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Duplicated from onboarding config for self-check. */
export const MerchantSubtype = {
  FormalEducation: "formal_education",
  CoursesTraining: "courses_training",
} as const;
export type MerchantSubtype = (typeof MerchantSubtype)[keyof typeof MerchantSubtype] | (string & {});

export const merchantSubtypeSchema: EnumSchema<MerchantSubtype> = s.enumOf<MerchantSubtype>(MerchantSubtype);
