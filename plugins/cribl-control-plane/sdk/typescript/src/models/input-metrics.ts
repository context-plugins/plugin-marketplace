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

export type InputMetrics = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "metrics" */
  type?: "metrics";
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
  /** Enable if the connection is proxied by a device that supports Proxy Protocol V1 or V2 */
  enableProxyHeader?: boolean;
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
  /** Optional description for this configuration. */
  description?: string;
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
};

export const inputMetricsSchema: Schema<InputMetrics> = s.object<InputMetrics>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("metrics"), "metrics"),
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
  enableProxyHeader: s.optional(s.boolean()),
  tls: s.optional(s.lazy(() => tlsSettingsServerSideSchema)),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  udpSocketRxBufSize: s.optional(s.float64()),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateHost: s.optional(s.string()),
  templateUdpPort: s.optional(s.string()),
  templateTcpPort: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateHost: "__template_host",
    templateUdpPort: "__template_udpPort",
    templateTcpPort: "__template_tcpPort",
  },
});
