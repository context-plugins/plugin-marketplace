import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { logLevel7Schema, type LogLevel7 } from "./log-level7.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { paginationTypeSchema, type PaginationType } from "./pagination-type.js";
import {
  refreshRequestParamConfHealthCheckAuthenticationOauthSecretSchema,
  type RefreshRequestParamConfHealthCheckAuthenticationOauthSecret,
} from "./refresh-request-param-conf-health-check-authentication-oauth-secret.js";

export type ContentType3 = {
  /** Content type */
  contentType: string;
  /** Description */
  contentDescription?: string;
  /** OpenAI Organization API path */
  collectPath: string;
  /** Docs URL */
  docsUrl?: string;
  /** Enabled */
  disabled?: boolean;
  /** Track collection progress between consecutive scheduled executions. */
  stateTracking?: boolean;
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
  /** Query-string parameters to send with this endpoint */
  requestParams: RefreshRequestParamConfHealthCheckAuthenticationOauthSecret[];
  /** Pagination type */
  paginationType: PaginationType;
  /** Pagination attributes */
  paginationAttribute?: string[];
  /** Last page expression */
  paginationLastPageExpr?: string;
  /**
   * Maximum number of pages to retrieve per collection task. Set to 0 only when unlimited
   * pagination is required.
   */
  maxPages?: number;
  /** Used only for RFC 5988 link-header pagination */
  paginationNextRelationAttribute?: string;
  /** Optional relation that represents the current page */
  paginationCurRelationAttribute?: string;
  /** A cron schedule on which to run this job */
  cronSchedule: string;
  /** Relative to the current time */
  earliest: string;
  /** Relative to the current time */
  latest: string;
  /**
   * Maximum time the job is allowed to run (examples: 30, 45s, 15m). Enter 0 for unlimited time.
   */
  jobTimeout?: string;
  /** Collector runtime log level. */
  logLevel?: LogLevel7;
  /** Fields automatically added to events from this Content Type */
  endpointMetadata?: MetadataConfInputCollection[];
};

export const contentType3Schema: Schema<ContentType3> = s.object<ContentType3>({
  contentType: s.string(),
  contentDescription: s.optional(s.string()),
  collectPath: s.string(),
  docsUrl: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  stateTracking: s.optional(s.boolean()),
  stateUpdateExpression: s.optional(s.string()),
  stateMergeExpression: s.optional(s.string()),
  manageState: s.optional(s.record(s.string(), s.unknown())),
  requestParams: s.array(s.lazy(() => refreshRequestParamConfHealthCheckAuthenticationOauthSecretSchema)),
  paginationType: paginationTypeSchema,
  paginationAttribute: s.optional(s.array(s.string())),
  paginationLastPageExpr: s.optional(s.string()),
  maxPages: s.optional(s.float64()),
  paginationNextRelationAttribute: s.optional(s.string()),
  paginationCurRelationAttribute: s.optional(s.string()),
  cronSchedule: s.string(),
  earliest: s.string(),
  latest: s.string(),
  jobTimeout: s.optional(s.string()),
  logLevel: s.optional(s.lazy(() => logLevel7Schema)),
  endpointMetadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
});
