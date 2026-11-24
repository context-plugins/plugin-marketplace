import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type1RazorpayPartnerDocumentsApi = {
  AadharFront: "aadhar_front",
  AadharBack: "aadhar_back",
  PassportFront: "passport_front",
  PassportBack: "passport_back",
  VoterIdFront: "voter_id_front",
  VoterIdBack: "voter_id_back",
} as const;
export type Type1RazorpayPartnerDocumentsApi =
  | (typeof Type1RazorpayPartnerDocumentsApi)[keyof typeof Type1RazorpayPartnerDocumentsApi]
  | (string & {});

export const type1RazorpayPartnerDocumentsApiSchema: EnumSchema<Type1RazorpayPartnerDocumentsApi> =
  s.enumOf<Type1RazorpayPartnerDocumentsApi>(Type1RazorpayPartnerDocumentsApi);
