import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authHeaderTypeSchema, type AuthHeaderType } from "./auth-header-type.js";
import { grantTypeSchema, type GrantType } from "./grant-type.js";
import { status2Schema, type Status2 } from "./status2.js";
import { tokenEndpointAuthMethodSchema, type TokenEndpointAuthMethod } from "./token-endpoint-auth-method.js";
import { type3Schema, type Type3 } from "./type3.js";

/** Config for tool's authentication method. */
export type AuthConfig = {
  /** Whether or not this tool is hosted on-premise. */
  isOnPrem?: boolean;
  /** Whether or not this uses central auth. */
  usesCentralAuth?: boolean;
  /**
   * The type of authentication being used. Use 'OAUTH_*' when Glean calls an external API (e.g.,
   * Jira) on behalf of a user to obtain an OAuth token. 'OAUTH_ADMIN' utilizes an admin token for
   * external API calls on behalf all users. 'OAUTH_USER' uses individual user tokens for external
   * API calls. 'DWD' refers to domain wide delegation.
   */
  type?: Type3;
  /** The type of grant type being used. */
  grantType?: GrantType;
  /** Auth status of the tool. */
  status?: Status2;
  /** The URL where users will be directed to start the OAuth flow. */
  clientUrl?: string;
  /** A list of strings denoting the different scopes or access levels required by the tool. */
  scopes?: string[];
  /** A list of strings denoting the different audience which can access the tool. */
  audiences?: string[];
  /** The OAuth provider's endpoint, where access tokens are requested. */
  authorizationUrl?: string;
  /**
   * The OAuth 2.0 Resource Indicator (RFC 8707) for the protected resource. Discovered from
   * Protected Resource Metadata (RFC 9728) during DCR. Included in authorization and token exchange
   * requests when present.
   */
  resource?: string;
  /**
   * The OAuth 2.0 token endpoint authentication method (RFC 7591). Determines how the client
   * authenticates when exchanging an authorization code for a token. Values use lowercase to match
   * the OAuth 2.0 wire format (RFC 7591 Section 2).
   */
  tokenEndpointAuthMethod?: TokenEndpointAuthMethod;
  /**
   * Defines the header structure for sending the API key or token to the server. Defaults to
   * AUTHORIZATION_BEARER. Select the specific header format the server expects for transmitting the
   * key.
   */
  authHeaderType?: AuthHeaderType;
  /** The time the tool was last authorized in ISO format (ISO 8601). */
  lastAuthorizedAt?: Date;
};

export const authConfigSchema: Schema<AuthConfig> = s.object<AuthConfig>({
  isOnPrem: s.optional(s.boolean()),
  usesCentralAuth: s.optional(s.boolean()),
  type: s.optional(s.lazy(() => type3Schema)),
  grantType: s.optional(s.lazy(() => grantTypeSchema)),
  status: s.optional(s.lazy(() => status2Schema)),
  clientUrl: s.optional(s.string()),
  scopes: s.optional(s.array(s.string())),
  audiences: s.optional(s.array(s.string())),
  authorizationUrl: s.optional(s.string()),
  resource: s.optional(s.string()),
  tokenEndpointAuthMethod: s.optional(s.lazy(() => tokenEndpointAuthMethodSchema)),
  authHeaderType: s.optional(s.lazy(() => authHeaderTypeSchema)),
  lastAuthorizedAt: s.optional(s.dateTime()),
  _keysMap: {
    clientUrl: "client_url",
    authorizationUrl: "authorization_url",
    tokenEndpointAuthMethod: "token_endpoint_auth_method",
  },
});
