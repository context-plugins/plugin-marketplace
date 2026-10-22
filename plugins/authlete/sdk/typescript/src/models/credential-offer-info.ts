import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { propertySchema, type Property } from "./property.js";

export type CredentialOfferInfo = {
  /** The identifier of the credential offer. */
  identifier?: string;
  /** The credential offer in the JSON format. */
  credentialOffer?: string;
  /** The identifier of the credential issuer. */
  credentialIssuer?: string;
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
   * The value of the `issuer_state` property in the `authorization_code` object in the `grants`
   * object.
   */
  issuerState?: string;
  /**
   * The flag indicating whether the `urn:ietf:params:oauth:grant-type:pre-authorized_code` object
   * is included in the `grants` object.
   */
  preAuthorizedCodeGrantIncluded?: boolean;
  /**
   * The value of the `pre-authorized_code` property in the
   * `urn:ietf:params:oauth:grant-type:pre-authorized_code` object in the `grants` object.
   */
  preAuthorizedCode?: string;
  /** The subject associated with the credential offer. */
  subject?: string;
  /** The time at which the credential offer will expire. */
  expiresAt?: number;
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
  /** The value of the `credential_configuration_ids` property of the credential offer. */
  credentialConfigurationIds?: string[];
  /** The transaction code. */
  txCode?: string;
  /** The input mode of the transaction code. */
  txCodeInputMode?: string;
  /** The description of the transaction code. */
  txCodeDescription?: string;
};

export const credentialOfferInfoSchema: Schema<CredentialOfferInfo> = s.object<CredentialOfferInfo>({
  identifier: s.optional(s.string()),
  credentialOffer: s.optional(s.string()),
  credentialIssuer: s.optional(s.string()),
  authorizationCodeGrantIncluded: s.optional(s.boolean()),
  issuerStateIncluded: s.optional(s.boolean()),
  issuerState: s.optional(s.string()),
  preAuthorizedCodeGrantIncluded: s.optional(s.boolean()),
  preAuthorizedCode: s.optional(s.string()),
  subject: s.optional(s.string()),
  expiresAt: s.optional(s.int()),
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
