import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Billie is a business-to-business (B2B) payment method. It requires extra information to identify
 * the organization that is completing the payment. It is recommended to include these parameters up
 * front for a seamless flow. Otherwise, Billie will ask the customer to complete the missing fields
 * during checkout.
 *
 * * `billingAddress.organizationName`: The organization's name.
 * * `registrationNumber` _string_: The organization's registration number.
 * * `vatNumber` _string_: The organization's VAT number.
 * * `entityType` _string_: The organization's entity type.
 */
export type Company = {
  /** The organization's registration number. */
  registrationNumber?: string;
  /** The organization's VAT number. */
  vatNumber?: string;
  /** The organization's entity type. */
  entityType?: string;
};

export const companySchema: Schema<Company> = s.object<Company>({
  registrationNumber: s.optional(s.string()),
  vatNumber: s.optional(s.string()),
  entityType: s.optional(s.string()),
});
