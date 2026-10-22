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
import { retryRulesTypeSchema, type RetryRulesType } from "./retry-rules-type.js";

export type InputOkta = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "okta" */
  type?: "okta";
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
   * Your Okta subdomain (example: your-org). Do not include the domain suffix, https://, or
   * trailing slashes.
   */
  oktaDomain: string;
  /**
   * Host suffix for your Okta cell/region. Defaults to okta.com (US commercial). Choose
   * okta-emea.com (EMEA), oktapreview.com (preview), okta-gov.com (US gov), or okta.mil (US
   * military).
   */
  oktaDomainSuffix?: string;
  /** Your Okta API token for authentication */
  oktaToken?: string;
  /** Select or create a stored text secret */
  textSecret: string;
  /** Schedule on which to run this collection job */
  cronSchedule?: string;
  /** Earliest time for data collection, relative to now */
  earliest?: string;
  /** Latest time for data collection, relative to now */
  latest?: string;
  /** Controls for viewing and managing the collector state. */
  manageState?: Record<string, unknown>;
  /**
   * Maximum time the job is allowed to run (e.g., 30, 45s or 15m). Units are seconds, if not
   * specified. Enter 0 for unlimited time.
   */
  jobTimeout?: string;
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
  /**
   * Binds 'oktaDomain' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'oktaDomain' at
   * runtime.
   */
  templateOktaDomain?: string;
};

export const inputOktaSchema: Schema<InputOkta> = s.object<InputOkta>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("okta"), "okta"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  oktaDomain: s.string(),
  oktaDomainSuffix: s.optional(s.string()),
  oktaToken: s.optional(s.string()),
  textSecret: s.string(),
  cronSchedule: s.optional(s.string()),
  earliest: s.optional(s.string()),
  latest: s.optional(s.string()),
  manageState: s.optional(s.record(s.string(), s.unknown())),
  jobTimeout: s.optional(s.string()),
  requestTimeout: s.optional(s.float64()),
  keepAliveTime: s.optional(s.float64()),
  maxMissedKeepAlives: s.optional(s.float64()),
  ttl: s.optional(s.string()),
  ignoreGroupJobsLimit: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  retryRules: s.optional(s.lazy(() => retryRulesTypeSchema)),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateOktaDomain: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateOktaDomain: "__template_oktaDomain",
  },
});
