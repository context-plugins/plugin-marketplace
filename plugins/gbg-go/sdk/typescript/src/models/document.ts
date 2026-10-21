import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { chipSchema, type Chip } from "./chip.js";
import { classificationSchema, type Classification } from "./classification.js";
import { deviceSchema, type Device } from "./device.js";
import { extractionSchema, type Extraction } from "./extraction.js";
import { subject1Schema, type Subject1 } from "./subject1.js";
import { validationSchema, type Validation } from "./validation.js";

export type Document = {
  oneDBarcode?: string;
  address?: Address;
  applicationDate?: string;
  applicationNumber?: string;
  dateOfBirth?: string;
  placeOfBirth?: string;
  placeOfBirthNative?: string;
  bloodType?: string;
  controlNumber?: string;
  countryCode?: string;
  countryName?: string;
  documentClassCode?: string;
  documentClassName?: string;
  documentNumber?: string;
  documentSignerCertificate?: string;
  employer?: string;
  employerAddress?: string;
  entries?: string;
  expirationDate?: string;
  eyeColor?: string;
  fathersName?: string;
  fathersNameNative?: string;
  fathersSurname?: string;
  firstName?: string;
  fullName?: string;
  fullNameNative?: string;
  givenName?: string;
  givenNameNative?: string;
  hairColor?: string;
  height?: string;
  /**
   * Specified in year, month and day separated by -. For example 2017-1-1 or 2017-01-01 which
   * conforms to ISO 8601
   */
  issueDate?: string;
  issuingAuthority?: string;
  issuingAuthorityNative?: string;
  issuingStateCode?: string;
  issuingStateName?: string;
  licenseClass?: string;
  licenseEndorsements?: string;
  licenseRestrictions?: string;
  mrz?: string;
  mrz1?: string;
  mrz2?: string;
  mrz3?: string;
  middleName?: string;
  mothersName?: string;
  mothersNameNative?: string;
  mothersSurname?: string;
  nameSuffix?: string;
  nationalityCode?: string;
  nationalityName?: string;
  nationalityNameNative?: string;
  occupation?: string;
  organDonor?: boolean;
  passportNumber?: string;
  permitNumber?: string;
  personalNumber?: string;
  photo?: string;
  photoCompressed?: string;
  photoEncoding?: string;
  sex?: string;
  sexNative?: string;
  signature?: string;
  signatureCompressed?: string;
  signatureEncoding?: string;
  socialSecurityNumber?: string;
  startDate?: string;
  surname?: string;
  surnameNative?: string;
  visaClass?: string;
  visaNumber?: string;
  weight?: string;
  cardNumber?: string;
  /** Country the address is in. It must be a valid ISO2 or ISO3 country code */
  issuerCountryCode?: string;
  id?: string;
  type?: string;
  category?: string;
  subtype?: string;
  format?: string;
  device?: Device;
  side1Image?: string;
  side2Image?: string;
  chip?: Chip;
  classification?: Classification;
  extraction?: Extraction;
  validation?: Validation;
  subType?: string;
  number?: string;
  /**
   * Specified in year, month and day separated by -. For example 2017-1-1 or 2017-01-01 which
   * conforms to ISO 8601
   */
  expiryDate?: string;
  subject?: Subject1;
  /** Country the address is in. It must be a valid ISO2 or ISO3 country code */
  country?: string;
};

export const documentSchema: Schema<Document> = s.object<Document>({
  oneDBarcode: s.optional(s.string()),
  address: s.optional(s.lazy(() => addressSchema)),
  applicationDate: s.optional(s.string()),
  applicationNumber: s.optional(s.string()),
  dateOfBirth: s.optional(s.string()),
  placeOfBirth: s.optional(s.string()),
  placeOfBirthNative: s.optional(s.string()),
  bloodType: s.optional(s.string()),
  controlNumber: s.optional(s.string()),
  countryCode: s.optional(s.string()),
  countryName: s.optional(s.string()),
  documentClassCode: s.optional(s.string()),
  documentClassName: s.optional(s.string()),
  documentNumber: s.optional(s.string()),
  documentSignerCertificate: s.optional(s.string()),
  employer: s.optional(s.string()),
  employerAddress: s.optional(s.string()),
  entries: s.optional(s.string()),
  expirationDate: s.optional(s.string()),
  eyeColor: s.optional(s.string()),
  fathersName: s.optional(s.string()),
  fathersNameNative: s.optional(s.string()),
  fathersSurname: s.optional(s.string()),
  firstName: s.optional(s.string()),
  fullName: s.optional(s.string()),
  fullNameNative: s.optional(s.string()),
  givenName: s.optional(s.string()),
  givenNameNative: s.optional(s.string()),
  hairColor: s.optional(s.string()),
  height: s.optional(s.string()),
  issueDate: s.optional(s.string()),
  issuingAuthority: s.optional(s.string()),
  issuingAuthorityNative: s.optional(s.string()),
  issuingStateCode: s.optional(s.string()),
  issuingStateName: s.optional(s.string()),
  licenseClass: s.optional(s.string()),
  licenseEndorsements: s.optional(s.string()),
  licenseRestrictions: s.optional(s.string()),
  mrz: s.optional(s.string()),
  mrz1: s.optional(s.string()),
  mrz2: s.optional(s.string()),
  mrz3: s.optional(s.string()),
  middleName: s.optional(s.string()),
  mothersName: s.optional(s.string()),
  mothersNameNative: s.optional(s.string()),
  mothersSurname: s.optional(s.string()),
  nameSuffix: s.optional(s.string()),
  nationalityCode: s.optional(s.string()),
  nationalityName: s.optional(s.string()),
  nationalityNameNative: s.optional(s.string()),
  occupation: s.optional(s.string()),
  organDonor: s.optional(s.boolean()),
  passportNumber: s.optional(s.string()),
  permitNumber: s.optional(s.string()),
  personalNumber: s.optional(s.string()),
  photo: s.optional(s.string()),
  photoCompressed: s.optional(s.string()),
  photoEncoding: s.optional(s.string()),
  sex: s.optional(s.string()),
  sexNative: s.optional(s.string()),
  signature: s.optional(s.string()),
  signatureCompressed: s.optional(s.string()),
  signatureEncoding: s.optional(s.string()),
  socialSecurityNumber: s.optional(s.string()),
  startDate: s.optional(s.string()),
  surname: s.optional(s.string()),
  surnameNative: s.optional(s.string()),
  visaClass: s.optional(s.string()),
  visaNumber: s.optional(s.string()),
  weight: s.optional(s.string()),
  cardNumber: s.optional(s.string()),
  issuerCountryCode: s.optional(s.string()),
  id: s.optional(s.string()),
  type: s.optional(s.string()),
  category: s.optional(s.string()),
  subtype: s.optional(s.string()),
  format: s.optional(s.string()),
  device: s.optional(s.lazy(() => deviceSchema)),
  side1Image: s.optional(s.string()),
  side2Image: s.optional(s.string()),
  chip: s.optional(s.lazy(() => chipSchema)),
  classification: s.optional(s.lazy(() => classificationSchema)),
  extraction: s.optional(s.lazy(() => extractionSchema)),
  validation: s.optional(s.lazy(() => validationSchema)),
  subType: s.optional(s.string()),
  number: s.optional(s.string()),
  expiryDate: s.optional(s.string()),
  subject: s.optional(s.lazy(() => subject1Schema)),
  country: s.optional(s.string()),
});
