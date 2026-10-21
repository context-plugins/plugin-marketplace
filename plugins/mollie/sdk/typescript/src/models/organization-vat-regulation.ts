import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Mollie applies Dutch VAT for merchants based in The Netherlands, British VAT for merchants based
 * in The United Kingdom, and shifted VAT for merchants in the European Union.
 *
 * The field is not present for merchants residing in other countries.
 */
export const OrganizationVatRegulation = {
  Dutch: "dutch",
  British: "british",
  Shifted: "shifted",
} as const;
export type OrganizationVatRegulation =
  | (typeof OrganizationVatRegulation)[keyof typeof OrganizationVatRegulation]
  | (string & {});

export const organizationVatRegulationSchema: EnumSchema<OrganizationVatRegulation> =
  s.enumOf<OrganizationVatRegulation>(OrganizationVatRegulation);
