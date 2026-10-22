import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { contentType3Schema, type ContentType3 } from "./content-type3.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { retryRulesTypeSchema, type RetryRulesType } from "./retry-rules-type.js";

export type InputOpenai = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "openai" */
  type?: "openai";
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
   * Optional `OpenAI-Organization` request header value, typically `org-xxxxxxxxxxxxxxxxxxxxxxxx`
   */
  openaiOrganization?: string;
  /** Optional `OpenAI-Project` request header value, typically `proj_xxxxxxxxxxxxxxxxxxxxxxxx` */
  openaiProject?: string;
  /** Content Types */
  contentConfig: ContentType3[];
  /** HTTP request inactivity timeout. Use 0 to disable. */
  requestTimeout?: number;
  /** API key */
  apiKey?: string;
  /**
   * Select or create a stored API key. Visit [OpenAI's organization admin keys
   * page](https://platform.openai.com/settings/organization/admin-keys) to create an organization
   * admin key.
   */
  textSecret: string;
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
   * Binds 'openaiOrganization' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'openaiOrganization' at runtime.
   */
  templateOpenaiOrganization?: string;
  /**
   * Binds 'openaiProject' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'openaiProject' at runtime.
   */
  templateOpenaiProject?: string;
};

export const inputOpenaiSchema: Schema<InputOpenai> = s.object<InputOpenai>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("openai"), "openai"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  openaiOrganization: s.optional(s.string()),
  openaiProject: s.optional(s.string()),
  contentConfig: s.array(s.lazy(() => contentType3Schema)),
  requestTimeout: s.optional(s.float64()),
  apiKey: s.optional(s.string()),
  textSecret: s.string(),
  keepAliveTime: s.optional(s.float64()),
  maxMissedKeepAlives: s.optional(s.float64()),
  ttl: s.optional(s.string()),
  ignoreGroupJobsLimit: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  retryRules: s.optional(s.lazy(() => retryRulesTypeSchema)),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateOpenaiOrganization: s.optional(s.string()),
  templateOpenaiProject: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateOpenaiOrganization: "__template_openaiOrganization",
    templateOpenaiProject: "__template_openaiProject",
  },
});
