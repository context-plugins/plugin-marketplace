import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { diskSpoolingSchema, type DiskSpooling } from "./disk-spooling.js";
import { filterRule1Schema, type FilterRule1 } from "./filter-rule1.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";

export type InputKubeLogs = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "kube_logs" */
  type?: "kube_logs";
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
  /** Time, in seconds, between checks for new containers. Default is 15 secs. */
  interval?: number;
  /**
   * Add rules to decide which Pods to collect logs from. Logs are collected if no rules are given
   * or if all the rules' expressions evaluate to true.
   */
  rules?: FilterRule1[];
  /**
   * For use when containers do not emit a timestamp, prefix each line of output with a timestamp.
   * If you enable this setting, you can use the Kubernetes Logs Event Breaker and the
   * kubernetes_logs Pre-processing Pipeline to remove them from the events after the timestamps are
   * extracted.
   */
  timestamps?: boolean;
  /**
   * Maximum bytes to buffer while reassembling a single log line. A line that exceeds this size is
   * flushed as-is, either whole or partially. The default is 1048576 (1 MB).
   */
  lineBufferLimit?: number;
  /** Internal flag to disable LB worker payload reassembly. */
  lbDisableAssembly?: boolean;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** Disk Spooling */
  persistence?: DiskSpooling;
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /** Load balance traffic across all Worker Processes */
  enableLoadBalancing?: boolean;
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
};

export const inputKubeLogsSchema: Schema<InputKubeLogs> = s.object<InputKubeLogs>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("kube_logs"), "kube_logs"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  interval: s.optional(s.float64()),
  rules: s.optional(s.array(s.lazy(() => filterRule1Schema))),
  timestamps: s.optional(s.boolean()),
  lineBufferLimit: s.optional(s.float64()),
  lbDisableAssembly: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  persistence: s.optional(s.lazy(() => diskSpoolingSchema)),
  breakerRulesets: s.optional(s.array(s.string())),
  staleChannelFlushMs: s.optional(s.float64()),
  enableLoadBalancing: s.optional(s.boolean()),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    lbDisableAssembly: "__LBDisableAssembly",
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
  },
});
