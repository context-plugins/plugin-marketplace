import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod98Schema, type AuthenticationMethod98 } from "./authentication-method98.js";
import {
  microsoftEntraIdAuthenticationEndpointSchema,
  type MicrosoftEntraIdAuthenticationEndpoint,
} from "./microsoft-entra-id-authentication-endpoint.js";
import { saslMechanism4Schema, type SaslMechanism4 } from "./sasl-mechanism4.js";

/**
 * Authentication parameters to use when connecting to bootstrap server. Using TLS is highly
 * recommended.
 */
export type Authentication17 = {
  /** Disabled */
  disabled: boolean;
  /** SASL mechanism */
  mechanism?: SaslMechanism4;
  /** The username for authentication. This should always be $ConnectionString. */
  username?: string;
  /**
   * Select or create a stored text secret corresponding to the SASL JASS Password Primary or
   * Password Secondary
   */
  textSecret?: string;
  /** Authentication method */
  clientSecretAuthType?: AuthenticationMethod98;
  /** Select or create a stored text secret */
  clientTextSecret?: string;
  /** Select or create a stored certificate */
  certificateName?: string;
  /** Path to the client certificate file. */
  certPath?: string;
  /** Path to the client private key file. */
  privKeyPath?: string;
  /** Passphrase used to decrypt the client private key. */
  passphrase?: string;
  /** Endpoint used to acquire authentication tokens from Azure */
  oauthEndpoint?: MicrosoftEntraIdAuthenticationEndpoint;
  /** client_id to pass in the OAuth request parameter */
  clientId?: string;
  /** Directory ID (tenant identifier) in Azure Active Directory */
  tenantId?: string;
  /** Scope to pass in the OAuth request parameter */
  scope?: string;
  /**
   * Binds 'mechanism' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'mechanism' at
   * runtime.
   */
  templateMechanism?: string;
  /**
   * Binds 'oauthEndpoint' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'oauthEndpoint' at runtime.
   */
  templateOauthEndpoint?: string;
  /**
   * Binds 'clientId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'clientId' at runtime.
   */
  templateClientId?: string;
  /**
   * Binds 'tenantId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'tenantId' at runtime.
   */
  templateTenantId?: string;
  /**
   * Binds 'scope' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'scope' at runtime.
   */
  templateScope?: string;
};

export const authentication17Schema: Schema<Authentication17> = s.object<Authentication17>({
  disabled: s.boolean(),
  mechanism: s.optional(s.lazy(() => saslMechanism4Schema)),
  username: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  clientSecretAuthType: s.optional(s.lazy(() => authenticationMethod98Schema)),
  clientTextSecret: s.optional(s.string()),
  certificateName: s.optional(s.string()),
  certPath: s.optional(s.string()),
  privKeyPath: s.optional(s.string()),
  passphrase: s.optional(s.string()),
  oauthEndpoint: s.optional(s.lazy(() => microsoftEntraIdAuthenticationEndpointSchema)),
  clientId: s.optional(s.string()),
  tenantId: s.optional(s.string()),
  scope: s.optional(s.string()),
  templateMechanism: s.optional(s.string()),
  templateOauthEndpoint: s.optional(s.string()),
  templateClientId: s.optional(s.string()),
  templateTenantId: s.optional(s.string()),
  templateScope: s.optional(s.string()),
  _keysMap: {
    templateMechanism: "__template_mechanism",
    templateOauthEndpoint: "__template_oauthEndpoint",
    templateClientId: "__template_clientId",
    templateTenantId: "__template_tenantId",
    templateScope: "__template_scope",
  },
});
