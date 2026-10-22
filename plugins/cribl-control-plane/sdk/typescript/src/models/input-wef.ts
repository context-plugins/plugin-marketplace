import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod35Schema, type AuthenticationMethod35 } from "./authentication-method35.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { mTlsSettingsSchema, type MTlsSettings } from "./mtls-settings.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { subscriptionSchema, type Subscription } from "./subscription.js";

export type InputWef = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "wef" */
  type?: "wef";
  /** If true, the Source is disabled and will not collect data. */
  disabled?: boolean;
  /** Pipeline to process data from this Source before sending it through the Routes */
  pipeline?: string;
  /** Select whether to send data to Routes, or directly to Destinations. */
  sendToRoutes?: boolean;
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /**
   * Use a disk queue to minimize data loss when connected services block. See [Cribl
   * Docs](https://docs.cribl.io/stream/persistent-queues) for PQ defaults (Cribl-managed Cloud
   * Workers) and configuration options (on-prem and hybrid Workers).
   */
  pqEnabled?: boolean;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /**
   * Read-only metadata that records how the Source was created. Preserved on update when omitted
   * from the request body. Cannot be set on create.
   */
  criblSourceProvenance?: InputProvenance;
  /** Direct connections to Destinations, and optionally via a Pipeline or a Pack */
  connections?: ConnectionConfInputCollection[];
  /** Persistent queue settings for this Source. */
  pq?: PqType;
  /** Address to bind on. Defaults to 0.0.0.0 (all addresses). */
  host: string;
  /** Port to listen on */
  port: number;
  /** How to authenticate incoming client connections */
  authMethod?: AuthenticationMethod35;
  /** mTLS settings */
  tls?: MTlsSettings;
  /**
   * Maximum number of active requests allowed per Worker Process. Set to 0 for unlimited. Caution:
   * Increasing the limit above the default value, or setting it to unlimited, may degrade
   * performance and reduce throughput.
   */
  maxActiveReq?: number;
  /**
   * Maximum number of requests per socket before \@{product} instructs the client to close the
   * connection. Default is 0 (unlimited).
   */
  maxRequestsPerSocket?: number;
  /**
   * Preserve the client’s original IP address in the __srcIpPort field when connecting through an
   * HTTP proxy that supports the X-Forwarded-For header. This does not apply to TCP-layer Proxy
   * Protocol v1/v2.
   */
  enableProxyHeader?: boolean;
  /** Add request headers to events in the __headers field */
  captureHeaders?: boolean;
  /** Warning displayed when request-header capture is enabled. */
  captureHeadersWarning?: string;
  /**
   * After the last response is sent, \@{product} will wait this long for additional data before
   * closing the socket connection. Minimum 1 second, maximum 600 seconds (10 minutes).
   */
  keepAliveTimeout?: number;
  /** Expose the /cribl_health endpoint, which returns 200 OK when this Source is healthy */
  enableHealthCheck?: boolean;
  /** Messages from matched IP addresses will be processed, unless also matched by the denylist */
  ipAllowlistRegex?: string;
  /**
   * Messages from matched IP addresses will be ignored. This takes precedence over the allowlist.
   */
  ipDenylistRegex?: string;
  /**
   * How long \@{product} should wait before assuming that an inactive socket has timed out. To wait
   * forever, set to 0.
   */
  socketTimeout?: number;
  /**
   * SHA1 fingerprint expected by the client, if it does not match the first certificate in the
   * configured CA chain
   */
  caFingerprint?: string;
  /**
   * Path to the keytab file containing the service principal credentials. \@{product} will use
   * `/etc/krb5.keytab` if not provided.
   */
  keytab?: string;
  /** Kerberos principal used for authentication, typically in the form HTTP/<hostname>@<REALM> */
  principal?: string;
  /**
   * Allow events to be ingested even if their MachineID does not match the client certificate CN
   */
  allowMachineIdMismatch?: boolean;
  /** Subscriptions to events on forwarding endpoints */
  subscriptions: Subscription[];
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** Optional description for this configuration. */
  description?: string;
  /**
   * Log a warning if the client certificate authority (CA) fingerprint does not match the expected
   * value. A mismatch prevents Cribl from receiving events from the Windows Event Forwarder.
   */
  logFingerprintMismatch?: boolean;
  /**
   * Binds 'environment' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'environment' at runtime.
   */
  templateEnvironment?: string;
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
  /**
   * Binds 'host' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'host' at runtime.
   */
  templateHost?: string;
  /**
   * Binds 'port' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'port' at runtime.
   */
  templatePort?: string;
  /**
   * Binds 'keytab' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'keytab' at runtime.
   */
  templateKeytab?: string;
  /**
   * Binds 'principal' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'principal' at
   * runtime.
   */
  templatePrincipal?: string;
};

export const inputWefSchema: Schema<InputWef> = s.object<InputWef>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("wef"), "wef"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  host: s.string(),
  port: s.float64(),
  authMethod: s.optional(s.lazy(() => authenticationMethod35Schema)),
  tls: s.optional(s.lazy(() => mTlsSettingsSchema)),
  maxActiveReq: s.optional(s.float64()),
  maxRequestsPerSocket: s.optional(s.int()),
  enableProxyHeader: s.optional(s.boolean()),
  captureHeaders: s.optional(s.boolean()),
  captureHeadersWarning: s.optional(s.string()),
  keepAliveTimeout: s.optional(s.float64()),
  enableHealthCheck: s.optional(s.boolean()),
  ipAllowlistRegex: s.optional(s.string()),
  ipDenylistRegex: s.optional(s.string()),
  socketTimeout: s.optional(s.float64()),
  caFingerprint: s.optional(s.string()),
  keytab: s.optional(s.string()),
  principal: s.optional(s.string()),
  allowMachineIdMismatch: s.optional(s.boolean()),
  subscriptions: s.array(s.lazy(() => subscriptionSchema)),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  description: s.optional(s.string()),
  logFingerprintMismatch: s.optional(s.boolean()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateHost: s.optional(s.string()),
  templatePort: s.optional(s.string()),
  templateKeytab: s.optional(s.string()),
  templatePrincipal: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateHost: "__template_host",
    templatePort: "__template_port",
    templateKeytab: "__template_keytab",
    templatePrincipal: "__template_principal",
  },
});
