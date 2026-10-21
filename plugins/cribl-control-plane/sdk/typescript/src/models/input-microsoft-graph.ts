import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod21Schema, type AuthenticationMethod21 } from "./authentication-method21.js";
import { certOptionsTypeSchema, type CertOptionsType } from "./cert-options-type.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import { logLevel16Schema, type LogLevel16 } from "./log-level16.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { retryRulesTypeFailedSchema, type RetryRulesTypeFailed } from "./retry-rules-type-failed.js";
import { subscriptionPlan3Schema, type SubscriptionPlan3 } from "./subscription-plan3.js";

export type InputMicrosoftGraph = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "microsoft_graph" */
  type?: "microsoft_graph";
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
   * Microsoft Graph API endpoint URL. (ex.
   * https://graph.microsoft.com/v1.0/admin/exchange/tracing/messageTraces)
   */
  url: string;
  /**
   * How often (in minutes) to run the report. Must divide evenly into 60 minutes to create a
   * predictable schedule, or Save will fail.
   */
  interval: number;
  /**
   * Backward offset for the search range's head. (E.g.: -3h@h) Microsoft Graph data is delayed;
   * this parameter (with Date range end) compensates for delay and gaps.
   */
  startDate?: string;
  /**
   * Backward offset for the search range's tail. (E.g.: -2h@h) Microsoft Graph data is delayed;
   * this parameter (with Date range start) compensates for delay and gaps.
   */
  endDate?: string;
  /**
   * HTTP request inactivity timeout. Maximum is 2400 (40 minutes); enter 0 to wait indefinitely.
   */
  timeout?: number;
  /** Disables time filtering of events when a date range is specified. */
  disableTimeFilter?: boolean;
  /** Maximum number of pages to retrieve per collection task. Set to 0 to retrieve all pages. */
  maxPages?: number;
  /** Select authentication method. */
  authType?: AuthenticationMethod21;
  /** How often workers should check in with the scheduler to keep job subscription alive */
  keepAliveTime?: number;
  /**
   * Maximum time the job is allowed to run. Time unit defaults to seconds if not specified
   * (examples: 30, 45s, 15m). Enter 0 for unlimited time.
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
  /** Reschedule tasks that failed with non-fatal errors */
  rescheduleDroppedTasks?: boolean;
  /** Maximum number of times a task can be rescheduled */
  maxTaskReschedule?: number;
  /** Log Level (verbosity) for collection runtime behavior. */
  logLevel?: LogLevel16;
  /** HTTP retry behavior for failed collection requests. */
  retryRules?: RetryRulesTypeFailed;
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /** Optional description for this configuration. */
  description?: string;
  /** client_secret to pass in the OAuth request parameter. */
  clientSecret?: string;
  /** Directory ID (tenant identifier) in Azure Active Directory. */
  tenantId?: string;
  /** client_id to pass in the OAuth request parameter. */
  clientId?: string;
  /** Resource to pass in the OAuth request parameter. */
  resource?: string;
  /** Microsoft 365 subscription plan for your organization, typically Microsoft 365 Enterprise */
  planType?: SubscriptionPlan3;
  /**
   * Select or create a secret that references your client_secret to pass in the OAuth request
   * parameter.
   */
  textSecret?: string;
  /** Certificate credentials for Microsoft OAuth authentication. */
  certOptions?: CertOptionsType;
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
   * Binds 'url' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'url' at runtime.
   */
  templateUrl?: string;
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
   * Binds 'resource' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'resource' at runtime.
   */
  templateResource?: string;
  /**
   * Binds 'planType' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'planType' at runtime.
   */
  templatePlanType?: string;
};

export const inputMicrosoftGraphSchema: Schema<InputMicrosoftGraph> = s.object<InputMicrosoftGraph>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("microsoft_graph"), "microsoft_graph"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  url: s.string(),
  interval: s.int(),
  startDate: s.optional(s.string()),
  endDate: s.optional(s.string()),
  timeout: s.optional(s.float64()),
  disableTimeFilter: s.optional(s.boolean()),
  maxPages: s.optional(s.int()),
  authType: s.optional(s.lazy(() => authenticationMethod21Schema)),
  keepAliveTime: s.optional(s.float64()),
  jobTimeout: s.optional(s.string()),
  maxMissedKeepAlives: s.optional(s.float64()),
  ttl: s.optional(s.string()),
  ignoreGroupJobsLimit: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  rescheduleDroppedTasks: s.optional(s.boolean()),
  maxTaskReschedule: s.optional(s.float64()),
  logLevel: s.optional(s.lazy(() => logLevel16Schema)),
  retryRules: s.optional(s.lazy(() => retryRulesTypeFailedSchema)),
  breakerRulesets: s.optional(s.array(s.string())),
  staleChannelFlushMs: s.optional(s.float64()),
  description: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
  tenantId: s.optional(s.string()),
  clientId: s.optional(s.string()),
  resource: s.optional(s.string()),
  planType: s.optional(s.lazy(() => subscriptionPlan3Schema)),
  textSecret: s.optional(s.string()),
  certOptions: s.optional(s.lazy(() => certOptionsTypeSchema)),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateUrl: s.optional(s.string()),
  templateTenantId: s.optional(s.string()),
  templateClientId: s.optional(s.string()),
  templateResource: s.optional(s.string()),
  templatePlanType: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateUrl: "__template_url",
    templateTenantId: "__template_tenantId",
    templateClientId: "__template_clientId",
    templateResource: "__template_resource",
    templatePlanType: "__template_planType",
  },
});
