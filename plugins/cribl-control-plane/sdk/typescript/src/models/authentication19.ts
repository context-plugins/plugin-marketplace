import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod96Schema, type AuthenticationMethod96 } from "./authentication-method96.js";
import { authenticationMethod97Schema, type AuthenticationMethod97 } from "./authentication-method97.js";
import {
  microsoftEntraIdAuthenticationEndpointSchema,
  type MicrosoftEntraIdAuthenticationEndpoint,
} from "./microsoft-entra-id-authentication-endpoint.js";
import { saslMechanism4Schema, type SaslMechanism4 } from "./sasl-mechanism4.js";

/** Authentication parameters to use when connecting to brokers. Using TLS is highly recommended. */
export type Authentication19 = {
  /** Disabled */
  disabled: boolean;
  /** Enter password directly, or select a stored secret */
  authType?: AuthenticationMethod96;
  /**
   * Connection-string primary key, or connection-string secondary key, from the Event Hubs
   * workspace
   */
  password?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
  /** SASL mechanism */
  mechanism?: SaslMechanism4;
  /** The username for authentication. For Event Hubs, this should always be $ConnectionString. */
  username?: string;
  /** Authentication method */
  clientSecretAuthType?: AuthenticationMethod97;
  /** client_secret to pass in the OAuth request parameter */
  clientSecret?: string;
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
   * Binds 'password' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'password' at runtime.
   */
  templatePassword?: string;
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

export const authentication19Schema: Schema<Authentication19> = s.object<Authentication19>({
  disabled: s.boolean(),
  authType: s.optional(s.lazy(() => authenticationMethod96Schema)),
  password: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  mechanism: s.optional(s.lazy(() => saslMechanism4Schema)),
  username: s.optional(s.string()),
  clientSecretAuthType: s.optional(s.lazy(() => authenticationMethod97Schema)),
  clientSecret: s.optional(s.string()),
  clientTextSecret: s.optional(s.string()),
  certificateName: s.optional(s.string()),
  certPath: s.optional(s.string()),
  privKeyPath: s.optional(s.string()),
  passphrase: s.optional(s.string()),
  oauthEndpoint: s.optional(s.lazy(() => microsoftEntraIdAuthenticationEndpointSchema)),
  clientId: s.optional(s.string()),
  tenantId: s.optional(s.string()),
  scope: s.optional(s.string()),
  templatePassword: s.optional(s.string()),
  templateMechanism: s.optional(s.string()),
  templateOauthEndpoint: s.optional(s.string()),
  templateClientId: s.optional(s.string()),
  templateTenantId: s.optional(s.string()),
  templateScope: s.optional(s.string()),
  _keysMap: {
    templatePassword: "__template_password",
    templateMechanism: "__template_mechanism",
    templateOauthEndpoint: "__template_oauthEndpoint",
    templateClientId: "__template_clientId",
    templateTenantId: "__template_tenantId",
    templateScope: "__template_scope",
  },
});
