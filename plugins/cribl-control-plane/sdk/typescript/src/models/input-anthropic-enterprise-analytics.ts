import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { contentType4Schema, type ContentType4 } from "./content-type4.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { retryRulesTypeSchema, type RetryRulesType } from "./retry-rules-type.js";

export type InputAnthropicEnterpriseAnalytics = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "anthropic_enterprise_analytics" */
  type?: "anthropic_enterprise_analytics";
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
  /** API key */
  apiKey?: string;
  /** Select or create a stored API key with read:analytics scope */
  textSecret: string;
  /**
   * Analytics endpoints to collect from. Each content type runs on its own schedule as a separate
   * collection job.
   */
  contentConfig: ContentType4[];
  /** HTTP request inactivity timeout. Use 0 to disable. */
  requestTimeout?: number;
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /** How often workers should check in with the scheduler to keep job subscription alive */
  keepAliveTime?: number;
  /**
   * The number of Keep Alive Time periods before an inactive worker will have its job subscription
   * revoked.
   */
  maxMissedKeepAlives?: number;
  /**
   * Time to keep the job's artifacts on disk after job completion. This also affects how long a job
   * is listed in the Job Inspector.
   */
  ttl?: string;
  /**
   * When enabled, this job's artifacts are not counted toward the Worker Group's finished job
   * artifacts limit. Artifacts will be removed only after the Collector's configured time to live.
   */
  ignoreGroupJobsLimit?: boolean;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** HTTP retry behavior for failed collection requests. */
  retryRules?: RetryRulesType;
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

export const inputAnthropicEnterpriseAnalyticsSchema: Schema<InputAnthropicEnterpriseAnalytics> =
  s.object<InputAnthropicEnterpriseAnalytics>({
    id: s.optional(s.string()),
    type: s.defaulted(s.literal("anthropic_enterprise_analytics"), "anthropic_enterprise_analytics"),
    disabled: s.optional(s.boolean()),
    pipeline: s.optional(s.string()),
    sendToRoutes: s.optional(s.boolean()),
    environment: s.optional(s.string()),
    pqEnabled: s.optional(s.boolean()),
    streamtags: s.optional(s.array(s.string())),
    criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
    connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
    pq: s.optional(s.lazy(() => pqTypeSchema)),
    apiKey: s.optional(s.string()),
    textSecret: s.string(),
    contentConfig: s.array(s.lazy(() => contentType4Schema)),
    requestTimeout: s.optional(s.float64()),
    breakerRulesets: s.optional(s.array(s.string())),
    staleChannelFlushMs: s.optional(s.float64()),
    keepAliveTime: s.optional(s.float64()),
    maxMissedKeepAlives: s.optional(s.float64()),
    ttl: s.optional(s.string()),
    ignoreGroupJobsLimit: s.optional(s.boolean()),
    metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
    retryRules: s.optional(s.lazy(() => retryRulesTypeSchema)),
    description: s.optional(s.string()),
    templateEnvironment: s.optional(s.string()),
    templateStreamtags: s.optional(s.string()),
    _keysMap: {
      templateEnvironment: "__template_environment",
      templateStreamtags: "__template_streamtags",
    },
  });
