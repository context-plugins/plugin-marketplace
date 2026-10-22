import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod95Schema, type AuthenticationMethod95 } from "./authentication-method95.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { contentTypeSchema, type ContentType } from "./content-type.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { retryRulesTypeFailedSchema, type RetryRulesTypeFailed } from "./retry-rules-type-failed.js";
import { subscriptionPlanSchema, type SubscriptionPlan } from "./subscription-plan.js";

export type InputOffice365Mgmt = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "office365_mgmt" */
  type?: "office365_mgmt";
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
  /** Microsoft 365 subscription plan for your organization, typically Microsoft 365 Enterprise */
  planType: SubscriptionPlan;
  /** Microsoft 365 Azure Tenant ID */
  tenantId: string;
  /** Microsoft 365 Azure Application ID */
  appId: string;
  /** HTTP request inactivity timeout, use 0 to disable */
  timeout?: number;
  /**
   * Reject certificates that cannot be verified against a valid CA (such as self-signed
   * certificates)
   */
  rejectUnauthorized?: boolean;
  /** How often workers should check in with the scheduler to keep job subscription alive */
  keepAliveTime?: number;
  /**
   * Maximum time the job is allowed to run (e.g., 30, 45s or 15m). Units are seconds, if not
   * specified. Enter 0 for unlimited time.
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
  /**
   * Optional Publisher Identifier to use in API requests, defaults to tenant id if not defined. For
   * more information see
   * [here](https://docs.microsoft.com/en-us/office/office-365-management-api/office-365-management-activity-api-reference#start-a-subscription)
   */
  publisherIdentifier?: string;
  /**
   * Enable Microsoft 365 Management Activity API content types and polling intervals. Polling
   * intervals are used to set up search date range and cron schedule, e.g.: *&#47;${interval} * * *
   * *. Because of this, intervals entered must be evenly divisible by 60 to give a predictable
   * schedule.
   */
  contentConfig?: ContentType[];
  /**
   * Use this setting to account for ingestion lag. This is necessary because there can be a lag of
   * 60 - 90 minutes (or longer) before Microsoft 365 events are available for retrieval.
   */
  ingestionLag?: number;
  /** HTTP retry behavior for failed collection requests. */
  retryRules?: RetryRulesTypeFailed;
  /** Enter client secret directly, or select a stored secret */
  authType?: AuthenticationMethod95;
  /** Optional description for this configuration. */
  description?: string;
  /** Microsoft 365 Azure client secret */
  clientSecret?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
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
   * Binds 'planType' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'planType' at runtime.
   */
  templatePlanType?: string;
  /**
   * Binds 'tenantId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'tenantId' at runtime.
   */
  templateTenantId?: string;
  /**
   * Binds 'appId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'appId' at runtime.
   */
  templateAppId?: string;
  /**
   * Binds 'publisherIdentifier' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'publisherIdentifier' at runtime.
   */
  templatePublisherIdentifier?: string;
  /**
   * Binds 'clientSecret' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'clientSecret' at runtime.
   */
  templateClientSecret?: string;
};

export const inputOffice365MgmtSchema: Schema<InputOffice365Mgmt> = s.object<InputOffice365Mgmt>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("office365_mgmt"), "office365_mgmt"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  planType: subscriptionPlanSchema,
  tenantId: s.string(),
  appId: s.string(),
  timeout: s.optional(s.float64()),
  rejectUnauthorized: s.optional(s.boolean()),
  keepAliveTime: s.optional(s.float64()),
  jobTimeout: s.optional(s.string()),
  maxMissedKeepAlives: s.optional(s.float64()),
  ttl: s.optional(s.string()),
  ignoreGroupJobsLimit: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  publisherIdentifier: s.optional(s.string()),
  contentConfig: s.optional(s.array(s.lazy(() => contentTypeSchema))),
  ingestionLag: s.optional(s.float64()),
  retryRules: s.optional(s.lazy(() => retryRulesTypeFailedSchema)),
  authType: s.optional(s.lazy(() => authenticationMethod95Schema)),
  description: s.optional(s.string()),
  clientSecret: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templatePlanType: s.optional(s.string()),
  templateTenantId: s.optional(s.string()),
  templateAppId: s.optional(s.string()),
  templatePublisherIdentifier: s.optional(s.string()),
  templateClientSecret: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templatePlanType: "__template_planType",
    templateTenantId: "__template_tenantId",
    templateAppId: "__template_appId",
    templatePublisherIdentifier: "__template_publisherIdentifier",
    templateClientSecret: "__template_clientSecret",
  },
});
