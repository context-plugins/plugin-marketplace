import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiKeyStatusSchema, type ApiKeyStatus } from "./api-key-status.js";

/**
 * Current API usage and limits for the authenticated account, optionally including the status of
 * additional API keys that were requested. Reading this does not count against the account's
 * request quota or rate limit.
 */
export type ApiLimitsDto = {
  /** Name of the account (organization) the API key belongs to. */
  organizationName?: string | null;
  /** Number of billable requests used in the current tracking period. */
  requestsUsed?: number | null;
  /**
   * Maximum number of requests allowed in the current tracking period. Null means the account has
   * no request limit.
   */
  requestLimit?: number | null;
  /** Maximum number of results allowed per page (page size). */
  maxPageSize?: number | null;
  /** Maximum number of results that can be paginated through. */
  paginationLimit?: number | null;
  /** Number of characters article content is truncated to. Null means content is not truncated. */
  articleContentTruncation?: number | null;
  /** Start of the current tracking period. */
  since?: Date | null;
  /** Timestamp of the last billable request. */
  lastMadeAt?: Date | null;
  /** When the request counter resets to zero. */
  resetAt?: Date | null;
  /**
   * Date the API subscription is scheduled to be cancelled. Absent when the subscription is not set
   * to cancel.
   */
  subscriptionCancelAt?: Date | null;
  /**
   * Status of each API key supplied via the 'apiKeys' parameter, in the same order as the request.
   * Absent when no keys were supplied.
   */
  keyStatuses?: ApiKeyStatus[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiLimitsDtoSchema: Schema<ApiLimitsDto> = s.object<ApiLimitsDto>(
  {
    organizationName: s.optionalNullable(s.string()),
    requestsUsed: s.optionalNullable(s.int()),
    requestLimit: s.optionalNullable(s.int()),
    maxPageSize: s.optionalNullable(s.int()),
    paginationLimit: s.optionalNullable(s.int()),
    articleContentTruncation: s.optionalNullable(s.int()),
    since: s.optionalNullable(s.dateTime()),
    lastMadeAt: s.optionalNullable(s.dateTime()),
    resetAt: s.optionalNullable(s.dateTime()),
    subscriptionCancelAt: s.optionalNullable(s.dateTime()),
    keyStatuses: s.optionalNullable(s.array(s.lazy(() => apiKeyStatusSchema))),
  },
  { additionalProperties: s.json() },
);
