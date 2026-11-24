import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the file */
export const LlcFileType = {
  IrsEinLetter: "IRS_EIN_LETTER",
  ArticlesOfOrganization: "ARTICLES_OF_ORGANIZATION",
  LetterOfReinstatement: "LETTER_OF_REINSTATEMENT",
  GovernmentIdentification: "GOVERNMENT_IDENTIFICATION",
  ArticlesOfIncorporation: "ARTICLES_OF_INCORPORATION",
  SignedPartnershipAgreement: "SIGNED_PARTNERSHIP_AGREEMENT",
  AmendmentDocument: "AMENDMENT_DOCUMENT",
  OperatingAgreement: "OPERATING_AGREEMENT",
  UtilityBill: "UTILITY_BILL",
  Passport: "PASSPORT",
  Ss4Document: "SS4_DOCUMENT",
} as const;
export type LlcFileType = (typeof LlcFileType)[keyof typeof LlcFileType] | (string & {});

export const llcFileTypeSchema: EnumSchema<LlcFileType> = s.enumOf<LlcFileType>(LlcFileType);
