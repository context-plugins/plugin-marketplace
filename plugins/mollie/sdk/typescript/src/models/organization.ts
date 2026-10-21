import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";
import { onboardingVatRegulationSchema, type OnboardingVatRegulation } from "./onboarding-vat-regulation.js";

export type Organization = {
  /** The name of the organization. */
  name?: string;
  /** The address of the organization. */
  address?: Address1;
  /** The registration number of the organization at their local chamber of commerce. */
  registrationNumber?: string;
  /**
   * The VAT number of the organization, if based in the European Union or in The United Kingdom.
   * VAT numbers are verified against the international registry *VIES*.
   *
   * The field can be omitted for merchants residing in other countries.
   */
  vatNumber?: string | null;
  /**
   * Mollie applies Dutch VAT for merchants based in The Netherlands, British VAT for merchants
   * based in The United Kingdom, and shifted VAT for merchants in the European Union.
   *
   * The field can be omitted for merchants residing in other countries.
   */
  vatRegulation?: OnboardingVatRegulation | null;
};

export const organizationSchema: Schema<Organization> = s.object<Organization>({
  name: s.optional(s.string()),
  address: s.optional(s.lazy(() => address1Schema)),
  registrationNumber: s.optional(s.string()),
  vatNumber: s.optionalNullable(s.string()),
  vatRegulation: s.optionalNullable(s.lazy(() => onboardingVatRegulationSchema)),
});
