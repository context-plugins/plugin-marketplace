import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";
import { links14Schema, type Links14 } from "./links14.js";
import { localeResponseSchema, type LocaleResponse } from "./locale-response.js";
import {
  organizationVatRegulationSchema,
  type OrganizationVatRegulation,
} from "./organization-vat-regulation.js";

export type EntityOrganization = {
  /**
   * Indicates the response contains an organization object. Will always contain the string
   * `organization` for this resource type.
   */
  resource: string;
  id: string;
  /** The name of the organization. */
  name: string;
  /**
   * The email address associated with the organization.
   *
   * If the domain contains non-ASCII characters, encode it as Punycode per [RFC
   * 3492](https://www.rfc-editor.org/rfc/rfc3492).
   */
  email: string;
  /** The preferred locale of the merchant, as set in their Mollie dashboard. */
  locale: LocaleResponse | null;
  /** The address of the organization. */
  address?: Address1;
  /** The registration number of the organization at their local chamber of commerce. */
  registrationNumber?: string | null;
  /**
   * The VAT number of the organization, if based in the European Union or in The United Kingdom.
   * VAT numbers are verified against the international registry *VIES*.
   *
   * The field is not present for merchants residing in other countries.
   */
  vatNumber?: string | null;
  /**
   * Mollie applies Dutch VAT for merchants based in The Netherlands, British VAT for merchants
   * based in The United Kingdom, and shifted VAT for merchants in the European Union.
   *
   * The field is not present for merchants residing in other countries.
   */
  vatRegulation?: OrganizationVatRegulation | null;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links14;
};

export const entityOrganizationSchema: Schema<EntityOrganization> = s.object<EntityOrganization>({
  resource: s.string(),
  id: s.string(),
  name: s.string(),
  email: s.string(),
  locale: s.nullable(s.lazy(() => localeResponseSchema)),
  address: s.optional(s.lazy(() => address1Schema)),
  registrationNumber: s.optionalNullable(s.string()),
  vatNumber: s.optionalNullable(s.string()),
  vatRegulation: s.optionalNullable(s.lazy(() => organizationVatRegulationSchema)),
  links: links14Schema,
  _keysMap: {
    links: "_links",
  },
});
