import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { tlsSettingsServerSideSchema, type TlsSettingsServerSide } from "./tls-settings-server-side.js";

export type InputSyslog = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "syslog" */
  type?: "syslog";
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
  /**
   * Address to bind on. For IPv4 (all addresses), use the default '0.0.0.0'. For IPv6, enter '::'
   * (all addresses) or specify an IP address.
   */
  host: string;
  /** Enter UDP port number to listen on. Not required if listening on TCP. */
  udpPort?: number;
  /** Enter TCP port number to listen on. Not required if listening on UDP. */
  tcpPort?: number;
  /** Maximum number of events to buffer when downstream is blocking. Only applies to UDP. */
  maxBufferSize?: number;
  /** Regex matching IP addresses that are allowed to send data */
  ipWhitelistRegex?: string;
  /** Timezone to assign to timestamps without timezone info */
  timestampTimezone?: string;
  /** Treat UDP packet data received as full syslog message */
  singleMsgUdpPackets?: boolean;
  /** Enable if the connection is proxied by a device that supports Proxy Protocol V1 or V2 */
  enableProxyHeader?: boolean;
  /** Wildcard list of fields to keep from source data; * = ALL (default) */
  keepFieldsList?: string[];
  /** Enable if incoming messages use octet counting per RFC 6587. */
  octetCounting?: boolean;
  /** Enable if we should infer the syslog framing of the incoming messages. */
  inferFraming?: boolean;
  /** Enable if we should infer octet counting only if the messages comply with RFC 5424. */
  strictlyInferOctetCounting?: boolean;
  /**
   * Enable if RFC 3164-formatted messages have hyphens in the app name portion of the TAG section.
   * If disabled, only alphanumeric characters and underscores are allowed. Ignored for RFC
   * 5424-formatted messages.
   */
  allowNonStandardAppName?: boolean;
  /**
   * Maximum number of active connections allowed per Worker Process for TCP connections. Use 0 for
   * unlimited.
   */
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
  /** TLS settings (server side) */
  tls?: TlsSettingsServerSide;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /**
   * Optionally, set the SO_RCVBUF socket option for the UDP socket. This value tells the operating
   * system how many bytes can be buffered in the kernel before events are dropped. Leave blank to
   * use the OS default. Caution: Increasing this value will affect OS memory utilization.
   */
  udpSocketRxBufSize?: number;
  /** Load balance traffic across all Worker Processes */
  enableLoadBalancing?: boolean;
  /**
   * Detect the datatype of each event and extract its top-level fields before the data reaches any
   * of the processing pipelines (pre-processing, main processing, post-processing).
   */
  autoParse?: boolean;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * When enabled, parses PROXY protocol headers during the TLS handshake. Disable if compatibility
   * issues arise.
   */
  enableEnhancedProxyHeaderParsing?: boolean;
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
   * Binds 'udpPort' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'udpPort' at runtime.
   */
  templateUdpPort?: string;
  /**
   * Binds 'tcpPort' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'tcpPort' at runtime.
   */
  templateTcpPort?: string;
  /**
   * Binds 'timestampTimezone' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'timestampTimezone' at runtime.
   */
  templateTimestampTimezone?: string;
};

export const inputSyslogSchema: Schema<InputSyslog> = s.object<InputSyslog>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("syslog"), "syslog"),
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
  udpPort: s.optional(s.float64()),
  tcpPort: s.optional(s.float64()),
  maxBufferSize: s.optional(s.float64()),
  ipWhitelistRegex: s.optional(s.string()),
  timestampTimezone: s.optional(s.string()),
  singleMsgUdpPackets: s.optional(s.boolean()),
  enableProxyHeader: s.optional(s.boolean()),
  keepFieldsList: s.optional(s.array(s.string())),
  octetCounting: s.optional(s.boolean()),
  inferFraming: s.optional(s.boolean()),
  strictlyInferOctetCounting: s.optional(s.boolean()),
  allowNonStandardAppName: s.optional(s.boolean()),
  maxActiveCxn: s.optional(s.float64()),
  socketIdleTimeout: s.optional(s.float64()),
  socketEndingMaxWait: s.optional(s.float64()),
  socketMaxLifespan: s.optional(s.float64()),
  tls: s.optional(s.lazy(() => tlsSettingsServerSideSchema)),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  udpSocketRxBufSize: s.optional(s.float64()),
  enableLoadBalancing: s.optional(s.boolean()),
  autoParse: s.optional(s.boolean()),
  description: s.optional(s.string()),
  enableEnhancedProxyHeaderParsing: s.optional(s.boolean()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateHost: s.optional(s.string()),
  templateUdpPort: s.optional(s.string()),
  templateTcpPort: s.optional(s.string()),
  templateTimestampTimezone: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateHost: "__template_host",
    templateUdpPort: "__template_udpPort",
    templateTcpPort: "__template_tcpPort",
    templateTimestampTimezone: "__template_timestampTimezone",
  },
});
