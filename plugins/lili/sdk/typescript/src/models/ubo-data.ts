import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addressData5InternalSchema, addressData5Schema, type AddressData5 } from "./address-data5.js";
import { roleSchema, type Role } from "./role.js";

export type UboData = {
  /** The unique ID of the webhook */
  email: string;
  /** Customer phone number. E.164 format. */
  phoneNumber?: string;
  /** Customer SSN */
  ssn?: string;
  /** Customer birth date */
  birthDate?: string;
  /** Customer first name */
  firstName?: string;
  /** Customer last name */
  lastName?: string;
  /** Passport number */
  passportNumber?: string;
  /** Non US customer National ID number */
  idGovNumber?: string;
  /**
   * National ID country (Alpha 2, ISO 3166 format). Note that if a passport number is supplied,
   * this is the passport issuance country
   */
  idCountry?: string;
  /**
   * National ID expiration date. Note that if passport number is supplied, this is the passport
   * expiration date
   */
  idExpirationDate?: string;
  /** The UBO role in the account */
  role?: Role;
  /** The ownership percentage of the UBO */
  ownershipPercent?: number;
  /** The UBO address */
  address?: AddressData5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const uboDataProperties: s.Shape<UboData> = {
  email: s.string(),
  phoneNumber: s.optional(s.string()),
  ssn: s.optional(s.string()),
  birthDate: s.optional(s.dateOnly()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  passportNumber: s.optional(s.string()),
  idGovNumber: s.optional(s.string()),
  idCountry: s.optional(s.string()),
  idExpirationDate: s.optional(s.string()),
  role: s.optional(s.lazy(() => roleSchema)),
  ownershipPercent: s.optional(s.float64()),
  address: s.optional(s.lazy(() => addressData5InternalSchema)),
};

export const uboDataInternalSchema: Schema<UboData> = s.object<UboData>(uboDataProperties, {
  additionalProperties: s.json(),
});

export const uboDataSchema: Schema<UboData> = s.lazySchema(() =>
  s.object<UboData>(
    {
      ...uboDataProperties,
      email: s.string().check(s.email()),
      ssn: s.optional(
        s
          .string()
          .check(
            s.pattern(
              "^(?!666|000|9\\d{2})\\d{3}-\\d{2}-(?!0{4})\\d{4}$|^(?!666|000|9\\d{2})\\d{3}\\d{2}(?!0{4})\\d{4}$",
            ),
          ),
      ),
      ownershipPercent: s.optional(s.float64().check(s.gte(25), s.lte(100))),
      address: s.optional(s.lazy(() => addressData5Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
