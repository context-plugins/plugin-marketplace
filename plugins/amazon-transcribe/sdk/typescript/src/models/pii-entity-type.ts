import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PiiEntityType = {
  BankAccountNumber: "BANK_ACCOUNT_NUMBER",
  BankRouting: "BANK_ROUTING",
  CreditDebitNumber: "CREDIT_DEBIT_NUMBER",
  CreditDebitCvv: "CREDIT_DEBIT_CVV",
  CreditDebitExpiry: "CREDIT_DEBIT_EXPIRY",
  Pin: "PIN",
  Email: "EMAIL",
  Address: "ADDRESS",
  Name: "NAME",
  Phone: "PHONE",
  Ssn: "SSN",
  DateTime: "DATE_TIME",
  PassportNumber: "PASSPORT_NUMBER",
  DriverId: "DRIVER_ID",
  Url: "URL",
  Age: "AGE",
  Username: "USERNAME",
  Password: "PASSWORD",
  AwsAccessKey: "AWS_ACCESS_KEY",
  AwsSecretKey: "AWS_SECRET_KEY",
  IpAddress: "IP_ADDRESS",
  MacAddress: "MAC_ADDRESS",
  LicensePlate: "LICENSE_PLATE",
  VehicleIdentificationNumber: "VEHICLE_IDENTIFICATION_NUMBER",
  UsIndividualTaxIdentificationNumber: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
  CaHealthNumber: "CA_HEALTH_NUMBER",
  CaSocialInsuranceNumber: "CA_SOCIAL_INSURANCE_NUMBER",
  InternationalBankAccountNumber: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
  SwiftCode: "SWIFT_CODE",
  All: "ALL",
} as const;
export type PiiEntityType = (typeof PiiEntityType)[keyof typeof PiiEntityType] | (string & {});

export const piiEntityTypeSchema: EnumSchema<PiiEntityType> = s.enumOf<PiiEntityType>(PiiEntityType);
