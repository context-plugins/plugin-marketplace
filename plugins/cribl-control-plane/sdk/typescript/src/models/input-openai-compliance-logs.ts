import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import { logLevel17Schema, type LogLevel17 } from "./log-level17.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { retryRulesTypeSchema, type RetryRulesType } from "./retry-rules-type.js";

export type InputOpenaiComplianceLogs = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "openai_compliance_logs" */
  type?: "openai_compliance_logs";
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
  /** Select or create a stored text secret */
  textSecret: string;
  /** Account type */
  accountType: AccountType;
  /** Cron schedule */
  cronSchedule: string;
  /** Relative to the current time. Format: [+|-]<time_integer><time_unit> */
  earliest?: string;
  /** Relative to the current time. Format: [+|-]<time_integer><time_unit> */
  latest?: string;
  /**
   * Maximum time the job is allowed to run (examples: 30, 45s, 15m). Enter 0 for unlimited time.
   */
  jobTimeout?: string;
  /** Collector runtime log level */
  logLevel?: LogLevel17;
  /**
   * Maximum number of log file listing pages to retrieve per run. Set to 0 to retrieve all pages.
   */
  maxPages?: number;
  /** Track collection progress between consecutive scheduled executions */
  stateTracking?: boolean;
  /** HTTP request inactivity timeout. Use 0 to disable. */
  requestTimeout?: number;
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
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /** HTTP retry behavior for failed collection requests. */
  retryRules?: RetryRulesType;
  /** Optional description for this configuration. */
  description?: string;
  /** The ID of the ChatGPT workspace to collect logs from (UUID format) */
  workspaceId?: string;
  /** One or more compliance log categories to collect */
  workspaceEventTypes?: string[];
  /** The ID of the OpenAI API Platform Organization (example: org-XXXXXXXXXXXXXXXXXXXXXXXX) */
  organizationId?: string;
  /** One or more compliance log categories to collect */
  organizationEventTypes?: string[];
  /**
   * JavaScript expression that defines how to update the state from an event. Use the event's data
   * and the current state to compute the new state. See [Understanding State Expression
   * Fields](https://docs.cribl.io/stream/collectors-rest#state-tracking-expression-fields) for more
   * information.
   */
  stateUpdateExpression?: string;
  /**
   * JavaScript expression that defines which state to keep when merging a task's newly reported
   * state with previously saved state. Evaluates `prevState` and `newState` variables, resolving to
   * the state to keep.
   */
  stateMergeExpression?: string;
  /** Controls for viewing and managing the collector state. */
  manageState?: Record<string, unknown>;
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
   * Binds 'workspaceId' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'workspaceId' at runtime.
   */
  templateWorkspaceId?: string;
  /**
   * Binds 'organizationId' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'organizationId' at runtime.
   */
  templateOrganizationId?: string;
};

export const inputOpenaiComplianceLogsSchema: Schema<InputOpenaiComplianceLogs> =
  s.object<InputOpenaiComplianceLogs>({
    id: s.optional(s.string()),
    type: s.defaulted(s.literal("openai_compliance_logs"), "openai_compliance_logs"),
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
    accountType: accountTypeSchema,
    cronSchedule: s.string(),
    earliest: s.optional(s.string()),
    latest: s.optional(s.string()),
    jobTimeout: s.optional(s.string()),
    logLevel: s.optional(s.lazy(() => logLevel17Schema)),
    maxPages: s.optional(s.float64()),
    stateTracking: s.optional(s.boolean()),
    requestTimeout: s.optional(s.float64()),
    keepAliveTime: s.optional(s.float64()),
    maxMissedKeepAlives: s.optional(s.float64()),
    ttl: s.optional(s.string()),
    ignoreGroupJobsLimit: s.optional(s.boolean()),
    metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
    breakerRulesets: s.optional(s.array(s.string())),
    staleChannelFlushMs: s.optional(s.float64()),
    retryRules: s.optional(s.lazy(() => retryRulesTypeSchema)),
    description: s.optional(s.string()),
    workspaceId: s.optional(s.string()),
    workspaceEventTypes: s.optional(s.array(s.string())),
    organizationId: s.optional(s.string()),
    organizationEventTypes: s.optional(s.array(s.string())),
    stateUpdateExpression: s.optional(s.string()),
    stateMergeExpression: s.optional(s.string()),
    manageState: s.optional(s.record(s.string(), s.unknown())),
    templateEnvironment: s.optional(s.string()),
    templateStreamtags: s.optional(s.string()),
    templateWorkspaceId: s.optional(s.string()),
    templateOrganizationId: s.optional(s.string()),
    _keysMap: {
      templateEnvironment: "__template_environment",
      templateStreamtags: "__template_streamtags",
      templateWorkspaceId: "__template_workspaceId",
      templateOrganizationId: "__template_organizationId",
    },
  });
