import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { propertySchema, type Property } from "./property.js";

export type VciOfferCreateRequest = {
  /**
   * The flag indicating whether the `authorization_code` object is included in the `grants` object.
   */
  authorizationCodeGrantIncluded?: boolean;
  /**
   * The flag indicating whether the `issuer_state` property is included in the `authorization_code`
   * object in the `grants` object.
   */
  issuerStateIncluded?: boolean;
  /**
   * The flag to include the `urn:ietf:params:oauth:grant-type:pre-authorized_code` object in the
   * `grants` object.
   */
  preAuthorizedCodeGrantIncluded?: boolean;
  /** The subject associated with the credential offer. */
  subject?: string;
  /** The duration of the credential offer. */
  duration?: number;
  /** The general-purpose arbitrary string. */
  context?: string;
  /** Extra properties to associate with the credential offer. */
  properties?: Property[];
  /** Additional claims that are added to the payload part of the JWT access token. */
  jwtAtClaims?: string;
  /**
   * The time at which the user authentication was performed during the course of issuing the
   * credential offer.
   */
  authTime?: number;
  /**
   * The Authentication Context Class Reference of the user authentication performed during the
   * course of issuing the credential offer.
   */
  acr?: string;
  /** The value of the `credential_configuration_ids` array. */
  credentialConfigurationIds?: string[];
  /** The transaction code that should be associated with the credential offer. */
  txCode?: string;
  /** The input mode of the transaction code. */
  txCodeInputMode?: string;
  /** The description of the transaction code. */
  txCodeDescription?: string;
};

export const vciOfferCreateRequestSchema: Schema<VciOfferCreateRequest> = s.object<VciOfferCreateRequest>({
  authorizationCodeGrantIncluded: s.optional(s.boolean()),
  issuerStateIncluded: s.optional(s.boolean()),
  preAuthorizedCodeGrantIncluded: s.optional(s.boolean()),
  subject: s.optional(s.string()),
  duration: s.optional(s.int()),
  context: s.optional(s.string()),
  properties: s.optional(s.array(s.lazy(() => propertySchema))),
  jwtAtClaims: s.optional(s.string()),
  authTime: s.optional(s.int()),
  acr: s.optional(s.string()),
  credentialConfigurationIds: s.optional(s.array(s.string())),
  txCode: s.optional(s.string()),
  txCodeInputMode: s.optional(s.string()),
  txCodeDescription: s.optional(s.string()),
});
