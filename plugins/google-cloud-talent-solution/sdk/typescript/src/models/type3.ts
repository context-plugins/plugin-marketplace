import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The completion topic. */
export const Type3 = {
  CompletionTypeUnspecified: "COMPLETION_TYPE_UNSPECIFIED",
  JobTitle: "JOB_TITLE",
  CompanyName: "COMPANY_NAME",
  Combined: "COMBINED",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
