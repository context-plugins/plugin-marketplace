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

export type InputNetflow = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "netflow" */
  type?: "netflow";
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
  /** Port to listen on */
  port: number;
  /**
   * Allow forwarding of events to a NetFlow destination. Enabling this feature will generate an
   * extra event containing __netflowRaw which can be routed to a NetFlow destination. Note that
   * these events will not count against ingest quota.
   */
  enablePassThrough?: boolean;
  /** Messages from matched IP addresses will be processed, unless also matched by the denylist. */
  ipAllowlistRegex?: string;
  /**
   * Messages from matched IP addresses will be ignored. This takes precedence over the allowlist.
   */
  ipDenylistRegex?: string;
  /**
   * Optionally, set the SO_RCVBUF socket option for the UDP socket. This value tells the operating
   * system how many bytes can be buffered in the kernel before events are dropped. Leave blank to
   * use the OS default. Caution: Increasing this value will affect OS memory utilization.
   */
  udpSocketRxBufSize?: number;
  /**
   * Specifies how many minutes NetFlow v9 templates are cached before being discarded if not
   * refreshed. Adjust based on your network's template update frequency to optimize performance and
   * memory usage.
   */
  templateCacheMinutes?: number;
  /** Accept messages in Netflow V5 format. */
  v5Enabled?: boolean;
  /** Accept messages in Netflow V9 format. */
  v9Enabled?: boolean;
  /** Accept messages in IPFIX format. */
  ipfixEnabled?: boolean;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
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
   * Binds 'port' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'port' at runtime.
   */
  templatePort?: string;
};

export const inputNetflowSchema: Schema<InputNetflow> = s.object<InputNetflow>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("netflow"), "netflow"),
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
  enablePassThrough: s.optional(s.boolean()),
  ipAllowlistRegex: s.optional(s.string()),
  ipDenylistRegex: s.optional(s.string()),
  udpSocketRxBufSize: s.optional(s.float64()),
  templateCacheMinutes: s.optional(s.float64()),
  v5Enabled: s.optional(s.boolean()),
  v9Enabled: s.optional(s.boolean()),
  ipfixEnabled: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateHost: s.optional(s.string()),
  templatePort: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateHost: "__template_host",
    templatePort: "__template_port",
  },
});
