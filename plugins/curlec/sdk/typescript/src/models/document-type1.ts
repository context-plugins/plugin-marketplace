import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DocumentType1 = {
  PersonalPan: "personal_pan",
  AadharFront: "aadhar_front",
  AadharBack: "aadhar_back",
  PassportFront: "passport_front",
  PassportBack: "passport_back",
  VoterIdFront: "voter_id_front",
  VoterIdBack: "voter_id_back",
} as const;
export type DocumentType1 = (typeof DocumentType1)[keyof typeof DocumentType1] | (string & {});

export const documentType1Schema: EnumSchema<DocumentType1> = s.enumOf<DocumentType1>(DocumentType1);
