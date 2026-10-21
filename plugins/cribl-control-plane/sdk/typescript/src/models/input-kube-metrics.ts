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
import { persistence2Schema, type Persistence2 } from "./persistence2.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import {
  ruleConfInputKubeMetricsSchema,
  type RuleConfInputKubeMetrics,
} from "./rule-conf-input-kube-metrics.js";

export type InputKubeMetrics = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "kube_metrics" */
  type?: "kube_metrics";
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
  /** Time, in seconds, between consecutive metrics collections. Default is 15 secs. */
  interval?: number;
  /**
   * Enable to scrape kubelet metrics from https://<nodeIP>:10250/metrics. Requires Edge to run as a
   * DaemonSet with direct network access to the node.
   */
  scrapeKubelet?: boolean;
  /**
   * Scrape cAdvisor container metrics from https://<nodeIP>:10250/metrics/cadvisor. Requires Edge
   * to run as a DaemonSet with direct network access to the Node.
   */
  scrapeCadvisor?: boolean;
  /**
   * Add rules to decide which Kubernetes objects to generate metrics for. Events are generated if
   * no rules are given or of all the rules' expressions evaluate to true.
   */
  rules?: RuleConfInputKubeMetrics[];
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** persistence */
  persistence?: Persistence2;
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

export const inputKubeMetricsSchema: Schema<InputKubeMetrics> = s.object<InputKubeMetrics>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("kube_metrics"), "kube_metrics"),
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
  scrapeKubelet: s.optional(s.boolean()),
  scrapeCadvisor: s.optional(s.boolean()),
  rules: s.optional(s.array(s.lazy(() => ruleConfInputKubeMetricsSchema))),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  persistence: s.optional(s.lazy(() => persistence2Schema)),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
  },
});
