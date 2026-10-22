import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  oauthParamConfInputKafkaSchema,
  type OauthParamConfInputKafka,
} from "./oauth-param-conf-input-kafka.js";

/** Credentials to use when authenticating with the schema registry */
export type AuthType = {
  /** Disabled */
  disabled: boolean;
  /** Authenticate with the schema registry using OAuth instead of basic HTTP authentication */
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
  /**
   * Confluent Cloud identity pool ID. Sent as the `Confluent-Identity-Pool-Id` header on requests
   * to the schema registry.
   */
  identityPoolId?: string;
  /**
   * Confluent Cloud Schema Registry logical cluster ID. Sent as the `target-sr-cluster` header on
   * requests to the schema registry.
   */
  logicalCluster?: string;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
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
  /**
   * Binds 'identityPoolId' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'identityPoolId' at runtime.
   */
  templateIdentityPoolId?: string;
  /**
   * Binds 'logicalCluster' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'logicalCluster' at runtime.
   */
  templateLogicalCluster?: string;
};

export const authTypeSchema: Schema<AuthType> = s.object<AuthType>({
  disabled: s.boolean(),
  oauthEnabled: s.optional(s.boolean()),
  tokenUrl: s.optional(s.string()),
  clientId: s.optional(s.string()),
  oauthSecretType: s.optional(s.string()),
  clientTextSecret: s.optional(s.string()),
  oauthParams: s.optional(s.array(s.lazy(() => oauthParamConfInputKafkaSchema))),
  identityPoolId: s.optional(s.string()),
  logicalCluster: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  templateTokenUrl: s.optional(s.string()),
  templateClientId: s.optional(s.string()),
  templateIdentityPoolId: s.optional(s.string()),
  templateLogicalCluster: s.optional(s.string()),
  _keysMap: {
    templateTokenUrl: "__template_tokenUrl",
    templateClientId: "__template_clientId",
    templateIdentityPoolId: "__template_identityPoolId",
    templateLogicalCluster: "__template_logicalCluster",
  },
});
