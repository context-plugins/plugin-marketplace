import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Document type */
export const DocumentDocType = {
  PersonalId: "personal_id",
  AddressProof: "address_proof",
  BusinessRegistration: "business_registration",
  LetterOfIntent: "letter_of_intent",
} as const;
export type DocumentDocType = (typeof DocumentDocType)[keyof typeof DocumentDocType] | (string & {});

export const documentDocTypeSchema: EnumSchema<DocumentDocType> = s.enumOf<DocumentDocType>(DocumentDocType);
