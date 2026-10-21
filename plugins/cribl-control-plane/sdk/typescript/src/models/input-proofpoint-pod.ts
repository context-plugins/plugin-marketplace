import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { feedTypeSchema, type FeedType } from "./feed-type.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { tlsSettingsClientSide33Schema, type TlsSettingsClientSide33 } from "./tls-settings-client-side33.js";

export type InputProofpointPod = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "proofpoint_pod" */
  type?: "proofpoint_pod";
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
  /** Proofpoint on Demand cluster ID. */
  clusterId: string;
  /** Proofpoint on Demand feed to ingest. */
  feedType: FeedType;
  /** Select or create a stored text secret */
  textSecret: string;
  /** TLS settings (client side) */
  tls?: TlsSettingsClientSide33;
  /** Compress the feed connection. */
  compress?: boolean;
  /** Maximum time to wait for the connection handshake to complete. */
  handshakeTimeout?: number;
  /**
   * How often to send a keepalive ping while the feed is idle. Use 0 to disable keepalive pings.
   */
  keepAliveIntervalSec?: number;
  /** Maximum number of consecutive keepalive pings that can go unanswered before reconnecting. */
  maxMissedKeepAlives?: number;
  /** The maximum size of a single feed message. Enter a numeral with units of KB, MB, etc. */
  maxMessageSize?: string;
  /**
   * The maximum size to hold in memory before applying backpressure. Enter a numeral with units of
   * KB, MB, etc.
   */
  readBufferSize?: string;
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
   * Binds 'clusterId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'clusterId' at
   * runtime.
   */
  templateClusterId?: string;
};

export const inputProofpointPodSchema: Schema<InputProofpointPod> = s.object<InputProofpointPod>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("proofpoint_pod"), "proofpoint_pod"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  clusterId: s.string(),
  feedType: feedTypeSchema,
  textSecret: s.string(),
  tls: s.optional(s.lazy(() => tlsSettingsClientSide33Schema)),
  compress: s.optional(s.boolean()),
  handshakeTimeout: s.optional(s.float64()),
  keepAliveIntervalSec: s.optional(s.float64()),
  maxMissedKeepAlives: s.optional(s.float64()),
  maxMessageSize: s.optional(s.string()),
  readBufferSize: s.optional(s.string()),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateClusterId: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateClusterId: "__template_clusterId",
  },
});
