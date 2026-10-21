import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMechanismSchema, type AuthenticationMechanism } from "./authentication-mechanism.js";
import { authenticationMethod98Schema, type AuthenticationMethod98 } from "./authentication-method98.js";
import { certificateSchema, type Certificate } from "./certificate.js";
import {
  microsoftEntraIdAuthenticationEndpointSchema,
  type MicrosoftEntraIdAuthenticationEndpoint,
} from "./microsoft-entra-id-authentication-endpoint.js";

/** Authentication settings for the Event Hubs AMQP connection. */
export type Auth = {
  /** Authentication mechanism */
  mechanism: AuthenticationMechanism;
  /** Select or create a stored text secret */
  textSecret?: string;
  /** Authentication method */
  clientSecretAuthType?: AuthenticationMethod98;
  /** Select or create a stored text secret */
  clientTextSecret?: string;
  /** Certificate credentials for OAuth authentication. */
  certificate?: Certificate;
  /** Endpoint used to acquire authentication tokens from Azure */
  oauthEndpoint?: MicrosoftEntraIdAuthenticationEndpoint;
  /** client_id to pass in the OAuth request parameter */
  clientId?: string;
  /** Directory ID (tenant identifier) in Azure Active Directory */
  tenantId?: string;
  /**
   * The fully qualified Event Hubs namespace that the consumer is associated with. This is likely
   * to be similar to {yournamespace}.servicebus.windows.net.
   */
  fullyQualifiedNamespace?: string;
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
   * Binds 'fullyQualifiedNamespace' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'fullyQualifiedNamespace' at runtime.
   */
  templateFullyQualifiedNamespace?: string;
};

export const authSchema: Schema<Auth> = s.object<Auth>({
  mechanism: authenticationMechanismSchema,
  textSecret: s.optional(s.string()),
  clientSecretAuthType: s.optional(s.lazy(() => authenticationMethod98Schema)),
  clientTextSecret: s.optional(s.string()),
  certificate: s.optional(s.lazy(() => certificateSchema)),
  oauthEndpoint: s.optional(s.lazy(() => microsoftEntraIdAuthenticationEndpointSchema)),
  clientId: s.optional(s.string()),
  tenantId: s.optional(s.string()),
  fullyQualifiedNamespace: s.optional(s.string()),
  templateOauthEndpoint: s.optional(s.string()),
  templateClientId: s.optional(s.string()),
  templateTenantId: s.optional(s.string()),
  templateFullyQualifiedNamespace: s.optional(s.string()),
  _keysMap: {
    templateOauthEndpoint: "__template_oauthEndpoint",
    templateClientId: "__template_clientId",
    templateTenantId: "__template_tenantId",
    templateFullyQualifiedNamespace: "__template_fullyQualifiedNamespace",
  },
});
