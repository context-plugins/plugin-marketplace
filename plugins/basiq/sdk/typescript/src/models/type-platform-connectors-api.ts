import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const TypePlatformConnectorsApi = {
  Bank: "Bank",
  BankForeign: "Bank (Foreign)",
  TestBank: "Test Bank",
  CreditUnion: "Credit Union",
  FinancialServices: "Financial Services",
  Superannuation: "Superannuation",
  BuildingSociety: "Building Society",
  Government: "Government",
} as const;
export type TypePlatformConnectorsApi =
  | (typeof TypePlatformConnectorsApi)[keyof typeof TypePlatformConnectorsApi]
  | (string & {});

export const typePlatformConnectorsApiSchema: EnumSchema<TypePlatformConnectorsApi> =
  s.enumOf<TypePlatformConnectorsApi>(TypePlatformConnectorsApi);
