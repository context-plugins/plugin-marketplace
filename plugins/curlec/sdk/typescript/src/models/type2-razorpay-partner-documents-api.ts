import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type2RazorpayPartnerDocumentsApi = {
  PersonalPan: "personal_pan",
} as const;
export type Type2RazorpayPartnerDocumentsApi =
  | (typeof Type2RazorpayPartnerDocumentsApi)[keyof typeof Type2RazorpayPartnerDocumentsApi]
  | (string & {});

export const type2RazorpayPartnerDocumentsApiSchema: EnumSchema<Type2RazorpayPartnerDocumentsApi> =
  s.enumOf<Type2RazorpayPartnerDocumentsApi>(Type2RazorpayPartnerDocumentsApi);
