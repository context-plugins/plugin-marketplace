import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authToken6Schema, type AuthToken6 } from "./auth-token6.js";
import { compression1Schema, type Compression1 } from "./compression1.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import { maxS2SVersionSchema, type MaxS2SVersion } from "./max-s2-sversion.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { tlsSettingsServerSideSchema, type TlsSettingsServerSide } from "./tls-settings-server-side.js";

export type InputSplunk = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "splunk" */
  type?: "splunk";
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
  /** TLS settings (server side) */
  tls?: TlsSettingsServerSide;
  /** Regex matching IP addresses that are allowed to establish a connection */
  ipWhitelistRegex?: string;
  /** Maximum number of active connections allowed per Worker Process. Use 0 for unlimited. */
  maxActiveCxn?: number;
  /**
   * How long \@{product} should wait before assuming that an inactive socket has timed out. After
   * this time, the connection will be closed. Leave at 0 for no inactive socket monitoring.
   */
  socketIdleTimeout?: number;
  /**
   * How long the server will wait after initiating a closure for a client to close its end of the
   * connection. If the client doesn't close the connection within this time, the server will
   * forcefully terminate the socket to prevent resource leaks and ensure efficient connection
   * cleanup and system stability. Leave at 0 for no inactive socket monitoring.
   */
  socketEndingMaxWait?: number;
  /**
   * The maximum duration a socket can remain open, even if active. This helps manage resources and
   * mitigate issues caused by TCP pinning. Set to 0 to disable.
   */
  socketMaxLifespan?: number;
  /** Enable if the connection is proxied by a device that supports proxy protocol v1 or v2 */
  enableProxyHeader?: boolean;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /**
   * Detect the datatype of each event and extract its top-level fields before the data reaches any
   * of the processing pipelines (pre-processing, main processing, post-processing).
   */
  autoParse?: boolean;
  /**
   * Shared secrets to be provided by any Splunk forwarder. If empty, unauthorized access is
   * permitted.
   */
  authTokens?: AuthToken6[];
  /** The highest S2S protocol version to advertise during handshake */
  maxS2Sversion?: MaxS2SVersion;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * Event Breakers will determine events' time zone from UF-provided metadata, when TZ can't be
   * inferred from the raw event
   */
  useFwdTimezone?: boolean;
  /**
   * Drop Splunk control fields such as `crcSalt` and `_savedPort`. If disabled, control fields are
   * stored in the internal field `__ctrlFields`.
   */
  dropControlFields?: boolean;
  /** Extract and process Splunk-generated metrics as Cribl metrics */
  extractMetrics?: boolean;
  /**
   * Controls whether to support reading compressed data from a forwarder. Select 'Automatic' to
   * match the forwarder's configuration, or 'Disabled' to reject compressed connections.
   */
  compress?: Compression1;
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
   * Binds 'maxS2Sversion' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'maxS2Sversion' at runtime.
   */
  templateMaxS2Sversion?: string;
  /**
   * Binds 'compress' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'compress' at runtime.
   */
  templateCompress?: string;
};

export const inputSplunkSchema: Schema<InputSplunk> = s.object<InputSplunk>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("splunk"), "splunk"),
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
  tls: s.optional(s.lazy(() => tlsSettingsServerSideSchema)),
  ipWhitelistRegex: s.optional(s.string()),
  maxActiveCxn: s.optional(s.float64()),
  socketIdleTimeout: s.optional(s.float64()),
  socketEndingMaxWait: s.optional(s.float64()),
  socketMaxLifespan: s.optional(s.float64()),
  enableProxyHeader: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  breakerRulesets: s.optional(s.array(s.string())),
  staleChannelFlushMs: s.optional(s.float64()),
  autoParse: s.optional(s.boolean()),
  authTokens: s.optional(s.array(s.lazy(() => authToken6Schema))),
  maxS2Sversion: s.optional(s.lazy(() => maxS2SVersionSchema)),
  description: s.optional(s.string()),
  useFwdTimezone: s.optional(s.boolean()),
  dropControlFields: s.optional(s.boolean()),
  extractMetrics: s.optional(s.boolean()),
  compress: s.optional(s.lazy(() => compression1Schema)),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateHost: s.optional(s.string()),
  templatePort: s.optional(s.string()),
  templateMaxS2Sversion: s.optional(s.string()),
  templateCompress: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateHost: "__template_host",
    templatePort: "__template_port",
    templateMaxS2Sversion: "__template_maxS2Sversion",
    templateCompress: "__template_compress",
  },
});
