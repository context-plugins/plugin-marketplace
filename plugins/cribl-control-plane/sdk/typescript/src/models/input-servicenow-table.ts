import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationType8Schema, type AuthenticationType8 } from "./authentication-type8.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { grantTypeSchema, type GrantType } from "./grant-type.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import { logLevelEnumSchema, type LogLevelEnum } from "./log-level-enum.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import {
  oauthHeaderConfInputServicenowTableSchema,
  type OauthHeaderConfInputServicenowTable,
} from "./oauth-header-conf-input-servicenow-table.js";
import {
  oauthParamConfInputServicenowTableSchema,
  type OauthParamConfInputServicenowTable,
} from "./oauth-param-conf-input-servicenow-table.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { retryRulesTypeSchema, type RetryRulesType } from "./retry-rules-type.js";
import { sortDirectionSchema, type SortDirection } from "./sort-direction.js";

export type InputServicenowTable = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "servicenow_table" */
  type?: "servicenow_table";
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
   * ServiceNow instance base URL for Table API requests. Enter a literal URL (http or https and the
   * instance host, for example a hostname ending in .service-now.com) or a Cribl expression that
   * resolves to a URL.
   */
  instance: string;
  /** ServiceNow table name to collect from. */
  tableName: string;
  /**
   * Field names to return from the Table API (sysparm_fields). Leave empty to return all fields.
   */
  fields?: string[];
  /**
   * Optional. Sort results by this field (for example sys_created_on or parent.name). Leave empty
   * to use the server default order.
   */
  orderByField?: string;
  /** Used only when Sort by field is set. */
  orderByDirection?: SortDirection;
  /**
   * Optional ServiceNow encoded query for sysparm_query (for example active=true or
   * sys_updated_onRELATIVEGT@hour@ago@1). Enter a literal or a Cribl expression. When combined with
   * Sort by field, the filter and sort are joined with ^. See ServiceNow Table API documentation
   * for encoded query syntax.
   */
  query?: string;
  /**
   * Maximum records per Table API page request (sysparm_limit). Setting a higher value may increase
   * the risk of timeouts.
   */
  pageSize?: number;
  /** Maximum number of pages to retrieve per collection task. Set to 0 to retrieve all pages. */
  maxPages?: number;
  /**
   * Reject certificates that cannot be verified against a valid CA (such as self-signed
   * certificates)
   */
  rejectUnauthorized?: boolean;
  /** ServiceNow Table API authentication method */
  authType?: AuthenticationType8;
  /** Cron schedule on which to run this job */
  cronSchedule: string;
  /**
   * Earliest time, relative to now. Format supported:
   * [+|-]<time_integer><time_unit>@<snap-to_time_unit> (ex: -1hr, -42m, -42m@h)
   */
  earliest: string;
  /**
   * Latest time, relative to now. Format supported:
   * [+|-]<time_integer><time_unit>@<snap-to_time_unit> (ex: -1hr, -42m, -42m@h)
   */
  latest: string;
  /** Track collection progress between consecutive scheduled executions */
  stateTracking?: boolean;
  /** Collector runtime log level */
  logLevel?: LogLevelEnum;
  /** HTTP request inactivity timeout. Use 0 to disable. */
  requestTimeout?: number;
  /**
   * When a DNS server returns multiple addresses, \@{product} cycles through them in the order
   * returned
   */
  useRoundRobinDns?: boolean;
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
  /** Optional description for this configuration. */
  description?: string;
  /** Select or create a secret that references your credentials */
  credentialsSecret?: string;
  /** ServiceNow OAuth grant type used for token requests */
  oauthGrantType?: GrantType;
  /** ServiceNow username for the password grant type */
  username?: string;
  /** Select or create a stored text secret for the ServiceNow password value */
  textSecret?: string;
  /**
   * Enable custom OAuth request parameters or headers for advanced ServiceNow configurations. Leave
   * disabled for standard ServiceNow OAuth flows.
   */
  useCustomOAuthParamsOrHeaders?: boolean;
  /**
   * Additional parameters to send in the OAuth login request. \@{product} will combine the secret
   * with these parameters, and will send the URL-encoded result in a POST request to the endpoint
   * specified in the 'Login URL'. We'll automatically add the content-type header
   * 'application/x-www-form-urlencoded' when sending this request.
   */
  oauthParams?: OauthParamConfInputServicenowTable[];
  /**
   * Additional headers to send in the OAuth login request. \@{product} will automatically add the
   * content-type header 'application/x-www-form-urlencoded' when sending this request.
   */
  oauthHeaders?: OauthHeaderConfInputServicenowTable[];
  /** ServiceNow OAuth client ID */
  clientId?: string;
  /** Select or create a stored text secret for the OAuth client secret value */
  clientTextSecret?: string;
  /**
   * JavaScript expression that defines how to update the state from an event. This source defaults
   * to checking that `_time` is a finite number (not only `__timestampExtracted`), so state still
   * advances when the event breaker assigns a fallback time. See [Understanding State Expression
   * Fields](https://docs.cribl.io/stream/collectors-rest#state-tracking-expression-fields).
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
   * Binds 'instance' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'instance' at runtime.
   */
  templateInstance?: string;
  /**
   * Binds 'orderByField' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'orderByField' at runtime.
   */
  templateOrderByField?: string;
  /**
   * Binds 'query' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'query' at runtime.
   */
  templateQuery?: string;
  /**
   * Binds 'username' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'username' at runtime.
   */
  templateUsername?: string;
  /**
   * Binds 'clientId' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'clientId' at runtime.
   */
  templateClientId?: string;
};

export const inputServicenowTableSchema: Schema<InputServicenowTable> = s.object<InputServicenowTable>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("servicenow_table"), "servicenow_table"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  instance: s.string(),
  tableName: s.string(),
  fields: s.optional(s.array(s.string())),
  orderByField: s.optional(s.string()),
  orderByDirection: s.optional(s.lazy(() => sortDirectionSchema)),
  query: s.optional(s.string()),
  pageSize: s.optional(s.int()),
  maxPages: s.optional(s.int()),
  rejectUnauthorized: s.optional(s.boolean()),
  authType: s.optional(s.lazy(() => authenticationType8Schema)),
  cronSchedule: s.string(),
  earliest: s.string(),
  latest: s.string(),
  stateTracking: s.optional(s.boolean()),
  logLevel: s.optional(s.lazy(() => logLevelEnumSchema)),
  requestTimeout: s.optional(s.float64()),
  useRoundRobinDns: s.optional(s.boolean()),
  keepAliveTime: s.optional(s.float64()),
  jobTimeout: s.optional(s.string()),
  maxMissedKeepAlives: s.optional(s.float64()),
  ttl: s.optional(s.string()),
  ignoreGroupJobsLimit: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  retryRules: s.optional(s.lazy(() => retryRulesTypeSchema)),
  description: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  oauthGrantType: s.optional(s.lazy(() => grantTypeSchema)),
  username: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  useCustomOAuthParamsOrHeaders: s.optional(s.boolean()),
  oauthParams: s.optional(s.array(s.lazy(() => oauthParamConfInputServicenowTableSchema))),
  oauthHeaders: s.optional(s.array(s.lazy(() => oauthHeaderConfInputServicenowTableSchema))),
  clientId: s.optional(s.string()),
  clientTextSecret: s.optional(s.string()),
  stateUpdateExpression: s.optional(s.string()),
  stateMergeExpression: s.optional(s.string()),
  manageState: s.optional(s.record(s.string(), s.unknown())),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateInstance: s.optional(s.string()),
  templateOrderByField: s.optional(s.string()),
  templateQuery: s.optional(s.string()),
  templateUsername: s.optional(s.string()),
  templateClientId: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateInstance: "__template_instance",
    templateOrderByField: "__template_orderByField",
    templateQuery: "__template_query",
    templateUsername: "__template_username",
    templateClientId: "__template_clientId",
  },
});
