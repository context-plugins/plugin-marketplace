import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod91Schema, type AuthenticationMethod91 } from "./authentication-method91.js";
import {
  oauthParamConfInputKafkaSchema,
  type OauthParamConfInputKafka,
} from "./oauth-param-conf-input-kafka.js";
import {
  saslExtensionConfInputKafkaSchema,
  type SaslExtensionConfInputKafka,
} from "./sasl-extension-conf-input-kafka.js";
import { saslMechanismSchema, type SaslMechanism } from "./sasl-mechanism.js";

/** Authentication parameters to use when connecting to brokers. Using TLS is highly recommended. */
export type Authentication = {
  /** Disabled */
  disabled: boolean;
  /** Username */
  username?: string;
  /** Password */
  password?: string;
  /** Enter credentials directly, or select a stored secret */
  authType?: AuthenticationMethod91;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
  /** SASL mechanism */
  mechanism?: SaslMechanism;
  /** Location of keytab file for authentication principal */
  keytabLocation?: string;
  /** Authentication principal, such as `kafka_user@example.com` */
  principal?: string;
  /** Kerberos service class for Kafka brokers, such as `kafka` */
  brokerServiceClass?: string;
  /** Enable OAuth authentication */
  oauthEnabled?: boolean;
  /** URL of the token endpoint to use for OAuth authentication */
  tokenUrl?: string;
  /** Client ID to use for OAuth authentication */
  clientId?: string;
  /** Source of the OAuth client secret. */
  oauthSecretType?: string;
  /** Select or create a stored text secret */
  clientTextSecret?: string;
  /** Additional fields to send to the token endpoint, such as scope or audience */
  oauthParams?: OauthParamConfInputKafka[];
  /** Additional SASL extension fields, such as Confluent's logicalCluster or identityPoolId */
  saslExtensions?: SaslExtensionConfInputKafka[];
  /**
   * Binds 'mechanism' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'mechanism' at
   * runtime.
   */
  templateMechanism?: string;
  /**
   * Binds 'keytabLocation' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'keytabLocation' at runtime.
   */
  templateKeytabLocation?: string;
  /**
   * Binds 'principal' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'principal' at
   * runtime.
   */
  templatePrincipal?: string;
  /**
   * Binds 'brokerServiceClass' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'brokerServiceClass' at runtime.
   */
  templateBrokerServiceClass?: string;
  /**
   * Binds 'tokenUrl' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'tokenUrl' at runtime.
   */
  templateTokenUrl?: string;
  /**
   * Binds 'clientId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'clientId' at runtime.
   */
  templateClientId?: string;
};

export const authenticationSchema: Schema<Authentication> = s.object<Authentication>({
  disabled: s.boolean(),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  authType: s.optional(s.lazy(() => authenticationMethod91Schema)),
  credentialsSecret: s.optional(s.string()),
  mechanism: s.optional(s.lazy(() => saslMechanismSchema)),
  keytabLocation: s.optional(s.string()),
  principal: s.optional(s.string()),
  brokerServiceClass: s.optional(s.string()),
  oauthEnabled: s.optional(s.boolean()),
  tokenUrl: s.optional(s.string()),
  clientId: s.optional(s.string()),
  oauthSecretType: s.optional(s.string()),
  clientTextSecret: s.optional(s.string()),
  oauthParams: s.optional(s.array(s.lazy(() => oauthParamConfInputKafkaSchema))),
  saslExtensions: s.optional(s.array(s.lazy(() => saslExtensionConfInputKafkaSchema))),
  templateMechanism: s.optional(s.string()),
  templateKeytabLocation: s.optional(s.string()),
  templatePrincipal: s.optional(s.string()),
  templateBrokerServiceClass: s.optional(s.string()),
  templateTokenUrl: s.optional(s.string()),
  templateClientId: s.optional(s.string()),
  _keysMap: {
    templateMechanism: "__template_mechanism",
    templateKeytabLocation: "__template_keytabLocation",
    templatePrincipal: "__template_principal",
    templateBrokerServiceClass: "__template_brokerServiceClass",
    templateTokenUrl: "__template_tokenUrl",
    templateClientId: "__template_clientId",
  },
});
