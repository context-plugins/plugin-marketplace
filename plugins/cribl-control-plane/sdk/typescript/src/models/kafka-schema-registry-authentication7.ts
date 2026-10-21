import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authTypeSchema, type AuthType } from "./auth-type.js";
import { tlsSettingsClientSide33Schema, type TlsSettingsClientSide33 } from "./tls-settings-client-side33.js";

/** Kafka Schema Registry Authentication */
export type KafkaSchemaRegistryAuthentication7 = {
  /** Disabled */
  disabled: boolean;
  /**
   * URL for accessing the Confluent Schema Registry. Example: http://localhost:8081. To connect
   * over TLS, use https instead of http.
   */
  schemaRegistryUrl?: string;
  /** Maximum time to wait for a Schema Registry connection to complete successfully */
  connectionTimeout?: number;
  /** Maximum time to wait for the Schema Registry to respond to a request */
  requestTimeout?: number;
  /** Maximum number of times to try fetching schemas from the Schema Registry */
  maxRetries?: number;
  /** Credentials to use when authenticating with the schema registry */
  auth?: AuthType;
  /** TLS settings (client side) */
  tls?: TlsSettingsClientSide33;
  /**
   * Used when __keySchemaIdOut is not present, to transform key values, leave blank if key
   * transformation is not required by default.
   */
  defaultKeySchemaId?: number;
  /**
   * Used when __valueSchemaIdOut is not present, to transform _raw, leave blank if value
   * transformation is not required by default.
   */
  defaultValueSchemaId?: number;
  /**
   * Binds 'schemaRegistryURL' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'schemaRegistryURL' at runtime.
   */
  templateSchemaRegistryUrl?: string;
};

export const kafkaSchemaRegistryAuthentication7Schema: Schema<KafkaSchemaRegistryAuthentication7> =
  s.object<KafkaSchemaRegistryAuthentication7>({
    disabled: s.boolean(),
    schemaRegistryUrl: s.optional(s.string()),
    connectionTimeout: s.optional(s.float64()),
    requestTimeout: s.optional(s.float64()),
    maxRetries: s.optional(s.float64()),
    auth: s.optional(s.lazy(() => authTypeSchema)),
    tls: s.optional(s.lazy(() => tlsSettingsClientSide33Schema)),
    defaultKeySchemaId: s.optional(s.float64()),
    defaultValueSchemaId: s.optional(s.float64()),
    templateSchemaRegistryUrl: s.optional(s.string()),
    _keysMap: {
      schemaRegistryUrl: "schemaRegistryURL",
      templateSchemaRegistryUrl: "__template_schemaRegistryURL",
    },
  });
