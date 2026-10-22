import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How a connector instance signs in to its source. Each connector type supports a subset; see
 * `supportedAuthTypes` in the registry.
 */
export const ConnectorAuthType = {
  Oauth: "OAUTH",
  OauthAdminConsent: "OAUTH_ADMIN_CONSENT",
  ApiToken: "API_TOKEN",
  BearerToken: "BEARER_TOKEN",
  BasicAuth: "BASIC_AUTH",
  AccessKey: "ACCESS_KEY",
  AccountKey: "ACCOUNT_KEY",
  ConnectionString: "CONNECTION_STRING",
  Custom: "CUSTOM",
  None: "NONE",
} as const;
export type ConnectorAuthType = (typeof ConnectorAuthType)[keyof typeof ConnectorAuthType] | (string & {});

export const connectorAuthTypeSchema: EnumSchema<ConnectorAuthType> =
  s.enumOf<ConnectorAuthType>(ConnectorAuthType);
