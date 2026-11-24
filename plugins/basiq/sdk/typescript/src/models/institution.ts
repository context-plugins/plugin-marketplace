import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logoSchema, type Logo } from "./logo.js";
import {
  tierPlatformConnectorsApiSchema,
  type TierPlatformConnectorsApi,
} from "./tier-platform-connectors-api.js";
import {
  typePlatformConnectorsApiSchema,
  type TypePlatformConnectorsApi,
} from "./type-platform-connectors-api.js";

/** ConnectorInstitutionResource connector Institution resource type */
export type Institution = {
  /**
   * Institution type identifier Bank BankInstitutionType BankInstitutionType institution type
   * identifier for Banks Bank (Foreign) BankForeignInstitutionType BankForeignInstitutionType
   * institution type identifier for Foreign banks Test Bank TestBankInstitutionType
   * TestBankInstitutionType institution type identifier for Test banks Credit Union
   * CreditUnionInstitutionType CreditUnionInstitutionType institution type identifier for Credit
   * union institutions Financial Services FinancialServicesInstitutionType
   * FinancialServicesInstitutionType institution type identifier for Financial service institutions
   * Superannuation SuperannuationInstitutionType SuperannuationInstitutionType institution type
   * identifier for Superannuation institutions Building Society BuildingSociety BuildingSociety
   * institution type identifier for Building Society institutions Government Government Government
   * institution type identifier for Government institutions
   */
  type: TypePlatformConnectorsApi;
  /** Institution name */
  name: string;
  /** Institution short name */
  shortName: string;
  /**
   * Institution tier identifier 1 TierOne TierOne tier identifier for tier1 institution 2 TierTwo
   * TierTwo tier identifier for tier2 institution 3 TierThree TierThree tier identifier for tier3
   * institution 4 TierFour TierFour tier identifier for tier4 institution
   */
  tier: TierPlatformConnectorsApi;
  /** Institution country name */
  country: string;
  /** A link for Data Holder (where available) to a page explaining CDR data sharing process. */
  cdrFaq?: string;
  /** The email address for CDR-related inquiries. */
  cdrEmail?: string;
  /**
   * The URL to the CDR policy document detailing the institution's data practices and consumer
   * rights.
   */
  cdrPolicy?: string;
  /** A unique identifier assigned to the CDR institution by the CDR program. */
  cdrProviderNumber?: string;
  /** ABN for the Data Holder ( only available in openbanking ). */
  abn?: string;
  /** ACN for the Data Holder ( only available in openbanking ). */
  acn?: string;
  /** Institution logo resource type */
  logo: Logo;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const institutionSchema: Schema<Institution> = s.object<Institution>(
  {
    type: typePlatformConnectorsApiSchema,
    name: s.string(),
    shortName: s.string(),
    tier: tierPlatformConnectorsApiSchema,
    country: s.string(),
    cdrFaq: s.optional(s.string()),
    cdrEmail: s.optional(s.string()),
    cdrPolicy: s.optional(s.string()),
    cdrProviderNumber: s.optional(s.string()),
    abn: s.optional(s.string()),
    acn: s.optional(s.string()),
    logo: logoSchema,
    _keysMap: {
      cdrFaq: "cdrFAQ",
    },
  },
  { additionalProperties: s.json() },
);
