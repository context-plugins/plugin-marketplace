import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationType24Schema, type AuthenticationType24 } from "./authentication-type24.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { endpointHeaderSchema, type EndpointHeader } from "./endpoint-header.js";
import { endpointParameterSchema, type EndpointParameter } from "./endpoint-parameter.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import { logLevel19Schema, type LogLevel19 } from "./log-level19.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { outputModeSchema, type OutputMode } from "./output-mode.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { retryRulesTypeSchema, type RetryRulesType } from "./retry-rules-type.js";

export type InputSplunkSearch = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "splunk_search" */
  type?: "splunk_search";
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
  /** Search head base URL. Can be an expression. Default is https://localhost:8089. */
  searchHead: string;
  /**
   * Enter Splunk search here. Examples: 'index=myAppLogs level=error channel=myApp' OR '| mstats
   * avg(myStat) as myStat WHERE index=myStatsIndex.'
   */
  search: string;
  /**
   * The earliest time boundary for the search. Can be an exact or relative time. Examples:
   * '2022-01-14T12:00:00Z' or '-16m@m'
   */
  earliest?: string;
  /**
   * The latest time boundary for the search. Can be an exact or relative time. Examples:
   * '2022-01-14T12:00:00Z' or '-1m@m'
   */
  latest?: string;
  /** A cron schedule on which to run this job */
  cronSchedule: string;
  /** REST API used to create a search */
  endpoint: string;
  /** Format of the returned output */
  outputMode: OutputMode;
  /** Optional request parameters to send to the endpoint */
  endpointParams?: EndpointParameter[];
  /** Optional request headers to send to the endpoint */
  endpointHeaders?: EndpointHeader[];
  /** Collector runtime log level (verbosity) */
  logLevel?: LogLevel19;
  /** HTTP request inactivity timeout. Use 0 for no timeout. */
  requestTimeout?: number;
  /**
   * When a DNS server returns multiple addresses, \@{product} will cycle through them in the order
   * returned
   */
  useRoundRobinDns?: boolean;
  /**
   * Reject certificates that cannot be verified against a valid CA (such as self-signed
   * certificates)
   */
  rejectUnauthorized?: boolean;
  /**
   * Character encoding to use when parsing ingested data. When not set, \@{product} will default to
   * UTF-8 but may incorrectly interpret multi-byte characters.
   */
  encoding?: string;
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
  /** HTTP retry behavior for failed collection requests. */
  retryRules?: RetryRulesType;
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /** Splunk Search authentication type */
  authType: AuthenticationType24;
  /** Optional description for this configuration. */
  description?: string;
  /** Username */
  username?: string;
  /** Password */
  password?: string;
  /** Bearer token to include in the authorization header */
  token?: string;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
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
   * Binds 'searchHead' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'searchHead' at
   * runtime.
   */
  templateSearchHead?: string;
  /**
   * Binds 'search' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'search' at runtime.
   */
  templateSearch?: string;
  /**
   * Binds 'earliest' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'earliest' at runtime.
   */
  templateEarliest?: string;
  /**
   * Binds 'latest' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'latest' at runtime.
   */
  templateLatest?: string;
  /**
   * Binds 'endpoint' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'endpoint' at runtime.
   */
  templateEndpoint?: string;
  /**
   * Binds 'logLevel' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'logLevel' at runtime.
   */
  templateLogLevel?: string;
};

export const inputSplunkSearchSchema: Schema<InputSplunkSearch> = s.object<InputSplunkSearch>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("splunk_search"), "splunk_search"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  searchHead: s.string(),
  search: s.string(),
  earliest: s.optional(s.string()),
  latest: s.optional(s.string()),
  cronSchedule: s.string(),
  endpoint: s.string(),
  outputMode: outputModeSchema,
  endpointParams: s.optional(s.array(s.lazy(() => endpointParameterSchema))),
  endpointHeaders: s.optional(s.array(s.lazy(() => endpointHeaderSchema))),
  logLevel: s.optional(s.lazy(() => logLevel19Schema)),
  requestTimeout: s.optional(s.float64()),
  useRoundRobinDns: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  encoding: s.optional(s.string()),
  keepAliveTime: s.optional(s.float64()),
  jobTimeout: s.optional(s.string()),
  maxMissedKeepAlives: s.optional(s.float64()),
  ttl: s.optional(s.string()),
  ignoreGroupJobsLimit: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  retryRules: s.optional(s.lazy(() => retryRulesTypeSchema)),
  breakerRulesets: s.optional(s.array(s.string())),
  staleChannelFlushMs: s.optional(s.float64()),
  authType: authenticationType24Schema,
  description: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  token: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateSearchHead: s.optional(s.string()),
  templateSearch: s.optional(s.string()),
  templateEarliest: s.optional(s.string()),
  templateLatest: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  templateLogLevel: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateSearchHead: "__template_searchHead",
    templateSearch: "__template_search",
    templateEarliest: "__template_earliest",
    templateLatest: "__template_latest",
    templateEndpoint: "__template_endpoint",
    templateLogLevel: "__template_logLevel",
  },
});
