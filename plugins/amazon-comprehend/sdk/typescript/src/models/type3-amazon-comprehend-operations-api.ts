import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The entity's type. */
export const Type3AmazonComprehendOperationsApi = {
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
  All: "ALL",
  LicensePlate: "LICENSE_PLATE",
  VehicleIdentificationNumber: "VEHICLE_IDENTIFICATION_NUMBER",
  UkNationalInsuranceNumber: "UK_NATIONAL_INSURANCE_NUMBER",
  CaSocialInsuranceNumber: "CA_SOCIAL_INSURANCE_NUMBER",
  UsIndividualTaxIdentificationNumber: "US_INDIVIDUAL_TAX_IDENTIFICATION_NUMBER",
  UkUniqueTaxpayerReferenceNumber: "UK_UNIQUE_TAXPAYER_REFERENCE_NUMBER",
  InPermanentAccountNumber: "IN_PERMANENT_ACCOUNT_NUMBER",
  InNrega: "IN_NREGA",
  InternationalBankAccountNumber: "INTERNATIONAL_BANK_ACCOUNT_NUMBER",
  SwiftCode: "SWIFT_CODE",
  UkNationalHealthServiceNumber: "UK_NATIONAL_HEALTH_SERVICE_NUMBER",
  CaHealthNumber: "CA_HEALTH_NUMBER",
  InAadhaar: "IN_AADHAAR",
  InVoterNumber: "IN_VOTER_NUMBER",
} as const;
export type Type3AmazonComprehendOperationsApi =
  | (typeof Type3AmazonComprehendOperationsApi)[keyof typeof Type3AmazonComprehendOperationsApi]
  | (string & {});

export const type3AmazonComprehendOperationsApiSchema: EnumSchema<Type3AmazonComprehendOperationsApi> =
  s.enumOf<Type3AmazonComprehendOperationsApi>(Type3AmazonComprehendOperationsApi);
