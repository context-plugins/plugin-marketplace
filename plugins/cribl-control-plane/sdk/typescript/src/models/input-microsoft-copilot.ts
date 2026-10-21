import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod42Schema, type AuthenticationMethod42 } from "./authentication-method42.js";
import { certOptionsSchema, type CertOptions } from "./cert-options.js";
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
import { retryRules3Schema, type RetryRules3 } from "./retry-rules3.js";
import { subscriptionPlan4Schema, type SubscriptionPlan4 } from "./subscription-plan4.js";

export type InputMicrosoftCopilot = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "microsoft_copilot" */
  type?: "microsoft_copilot";
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
  /** Directory (tenant) ID from Azure Active Directory */
  tenantId: string;
  /** Application (client) ID from the app registration */
  clientId: string;
  /**
   * Microsoft Graph resource URI used in the OAuth token request scope parameter. Derived
   * automatically from the selected plan type.
   */
  resource?: string;
  /** Select authentication method. */
  authType?: AuthenticationMethod42;
  /** Microsoft 365 subscription plan for your organization, typically Microsoft 365 Enterprise. */
  planType?: SubscriptionPlan4;
  /** Cron schedule for collection runs */
  cronSchedule?: string;
  /**
   * Earliest time for data collection, relative to now. Used as the initial lower bound on first
   * run.
   */
  earliest?: string;
  /** Latest time for data collection, relative to now */
  latest?: string;
  /** Number of interactions to request per page ($top). Maximum 1000. */
  pageSize?: number;
  /** Limit collection to specific Copilot app classes. Leave empty to collect all. */
  appClassFilter?: string[];
  /**
   * Add a $filter to the /users call for assigned Copilot SKUs. This reduces unnecessary API calls
   * by excluding unlicensed users during discovery rather than skipping them at collection time.
   */
  filterByLicense?: boolean;
  /**
   * Microsoft 365 SKU GUIDs that grant access to the Copilot Interaction Export API. During
   * discovery, users are filtered to those with at least one of these SKUs in their
   * assignedLicenses. Pre-populated with known Copilot SKUs; add custom entries for tenant-specific
   * or new plans.
   */
  skuIds?: string[];
  /** Controls for viewing and managing the collector state. */
  manageState?: Record<string, unknown>;
  /** HTTP request inactivity timeout, in seconds. Enter 0 to wait indefinitely. */
  timeout?: number;
  /** How often workers should check in with the scheduler to keep job subscription alive */
  keepAliveTime?: number;
  /**
   * Maximum time the job is allowed to run (examples: 30, 45s, 15m). Enter 0 for unlimited time.
   */
  jobTimeout?: string;
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
  retryRules?: RetryRules3;
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /** Optional description for this configuration. */
  description?: string;
  /** Select or create a secret that references the client secret from your app registration */
  textSecret?: string;
  /** Certificate credentials for Microsoft Graph OAuth authentication. */
  certOptions?: CertOptions;
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
   * Binds 'tenantId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'tenantId' at runtime.
   */
  templateTenantId?: string;
  /**
   * Binds 'clientId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'clientId' at runtime.
   */
  templateClientId?: string;
  /**
   * Binds 'planType' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'planType' at runtime.
   */
  templatePlanType?: string;
};

export const inputMicrosoftCopilotSchema: Schema<InputMicrosoftCopilot> = s.object<InputMicrosoftCopilot>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("microsoft_copilot"), "microsoft_copilot"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  tenantId: s.string(),
  clientId: s.string(),
  resource: s.optional(s.string()),
  authType: s.optional(s.lazy(() => authenticationMethod42Schema)),
  planType: s.optional(s.lazy(() => subscriptionPlan4Schema)),
  cronSchedule: s.optional(s.string()),
  earliest: s.optional(s.string()),
  latest: s.optional(s.string()),
  pageSize: s.optional(s.int()),
  appClassFilter: s.optional(s.array(s.string())),
  filterByLicense: s.optional(s.boolean()),
  skuIds: s.optional(s.array(s.string())),
  manageState: s.optional(s.record(s.string(), s.unknown())),
  timeout: s.optional(s.float64()),
  keepAliveTime: s.optional(s.float64()),
  jobTimeout: s.optional(s.string()),
  maxMissedKeepAlives: s.optional(s.float64()),
  ttl: s.optional(s.string()),
  ignoreGroupJobsLimit: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  retryRules: s.optional(s.lazy(() => retryRules3Schema)),
  breakerRulesets: s.optional(s.array(s.string())),
  staleChannelFlushMs: s.optional(s.float64()),
  description: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  certOptions: s.optional(s.lazy(() => certOptionsSchema)),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateTenantId: s.optional(s.string()),
  templateClientId: s.optional(s.string()),
  templatePlanType: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateTenantId: "__template_tenantId",
    templateClientId: "__template_clientId",
    templatePlanType: "__template_planType",
  },
});
