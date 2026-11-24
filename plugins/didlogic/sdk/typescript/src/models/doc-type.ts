import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Document type identifier */
export const DocType = {
  PersonalId: "Personal ID",
  ProofOfAddress: "Proof of address",
  BusinessRegistration: "Business Registration",
  LetterOfIntent: "Letter of Intent",
} as const;
export type DocType = (typeof DocType)[keyof typeof DocType] | (string & {});

export const docTypeSchema: EnumSchema<DocType> = s.enumOf<DocType>(DocType);
