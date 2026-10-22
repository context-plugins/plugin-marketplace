import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { internationalAddressSchema, type InternationalAddress } from "./international-address.js";

/**
 * Create a US Beneficial Owner (identified by SSN). For US-based beneficial owners only. Use SSN
 * for identity verification instead of passport.
 */
export type CreateUsBeneficialOwner = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  address: InternationalAddress;
  ssn: string;
};

export const createUsBeneficialOwnerSchema: Schema<CreateUsBeneficialOwner> =
  s.object<CreateUsBeneficialOwner>({
    firstName: s.string(),
    lastName: s.string(),
    dateOfBirth: s.string(),
    address: internationalAddressSchema,
    ssn: s.string(),
  });
