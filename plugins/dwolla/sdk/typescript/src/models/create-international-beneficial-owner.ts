import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { internationalAddressSchema, type InternationalAddress } from "./international-address.js";
import { passportSchema, type Passport } from "./passport.js";

/**
 * Create an International Beneficial Owner (identified by Passport). For non-US beneficial owners
 * who don't have a US SSN. Requires passport information for identity verification.
 */
export type CreateInternationalBeneficialOwner = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: InternationalAddress;
  passport: Passport;
};

export const createInternationalBeneficialOwnerSchema: Schema<CreateInternationalBeneficialOwner> =
  s.object<CreateInternationalBeneficialOwner>({
    firstName: s.string(),
    lastName: s.string(),
    dateOfBirth: s.string(),
    address: internationalAddressSchema,
    passport: passportSchema,
  });
