import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The entity type, as defined in OpenID Federation 1.0. */
export const EntityType = {
  OpenidRelyingParty: "OPENID_RELYING_PARTY",
  OpenidProvider: "OPENID_PROVIDER",
  OauthAuthorizationServer: "OAUTH_AUTHORIZATION_SERVER",
  OauthClient: "OAUTH_CLIENT",
  OauthResource: "OAUTH_RESOURCE",
  FederationEntity: "FEDERATION_ENTITY",
  OpenidCredentialIssuer: "OPENID_CREDENTIAL_ISSUER",
} as const;
export type EntityType = (typeof EntityType)[keyof typeof EntityType] | (string & {});

export const entityTypeSchema: EnumSchema<EntityType> = s.enumOf<EntityType>(EntityType);
