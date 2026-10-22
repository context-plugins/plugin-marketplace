import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address2Schema, type Address2 } from "./address2.js";
import { links20Schema, type Links20 } from "./links20.js";
import { ownerSchema, type Owner } from "./owner.js";

export type ClientLinkRequest = {
  /**
   * Indicates the response contains a client link object. Will always contain the string
   * `client-link` for this endpoint.
   */
  resource?: string;
  /** The identifier uniquely referring to this client link. Example: `cl_vZCnNQsV2UtfXxYifWKWH`. */
  id?: string;
  /** Personal data of your customer. */
  owner: Owner;
  /** Name of the organization. */
  name: string;
  /** Address of the organization. */
  address: Address2;
  /** The registration number of the organization at their local chamber of commerce. */
  registrationNumber?: string | null;
  /**
   * The VAT number of the organization, if based in the European Union. VAT numbers are verified
   * against the international registry *VIES*.
   */
  vatNumber?: string | null;
  /**
   * The legal entity type of the organization, based on its country of origin. Please refer to the
   * [legal entity list](common-data-types#legal-entity) for all possible options.
   */
  legalEntity?: string;
  /**
   * The registration office that the organization was registered at. Please refer to the
   * [registration office list](common-data-types#registration-office) for all possible options.
   */
  registrationOffice?: string;
  /** The incorporation date of the organization (format `YYYY-MM-DD`) */
  incorporationDate?: string | null;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links?: Links20;
};

export const clientLinkRequestSchema: Schema<ClientLinkRequest> = s.object<ClientLinkRequest>({
  resource: s.optional(s.string()),
  id: s.optional(s.string()),
  owner: ownerSchema,
  name: s.string(),
  address: address2Schema,
  registrationNumber: s.optionalNullable(s.string()),
  vatNumber: s.optionalNullable(s.string()),
  legalEntity: s.optional(s.string()),
  registrationOffice: s.optional(s.string()),
  incorporationDate: s.optionalNullable(s.string()),
  links: s.optional(s.lazy(() => links20Schema)),
  _keysMap: {
    links: "_links",
  },
});
