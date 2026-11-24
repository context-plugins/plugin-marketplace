import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { afterDateSchema, type AfterDate } from "./unions/after-date.js";

/**
 * Source policy for web search results.
 *
 * This policy governs which sources are allowed/disallowed in results.
 */
export type SourcePolicy = {
  /**
   * List of domains to restrict the results to. If specified, only sources from these domains will
   * be included. Accepts plain domains (e.g., example.com, subdomain.example.gov) or bare domain
   * extension starting with a period (e.g., .gov, .edu, .co.uk). The combined number of domains in
   * include_domains and exclude_domains cannot exceed 200.
   */
  includeDomains?: string[];
  /**
   * List of domains to exclude from results. If specified, sources from these domains will be
   * excluded. Accepts plain domains (e.g., example.com, subdomain.example.gov) or bare domain
   * extension starting with a period (e.g., .gov, .edu, .co.uk). The combined number of domains in
   * include_domains and exclude_domains cannot exceed 200.
   */
  excludeDomains?: string[];
  /**
   * Optional start date for filtering search results. Results will be limited to content published
   * on or after this date. Provided as an RFC 3339 date string (YYYY-MM-DD).
   */
  afterDate?: AfterDate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourcePolicySchema: Schema<SourcePolicy> = s.object<SourcePolicy>(
  {
    includeDomains: s.optional(s.array(s.string())),
    excludeDomains: s.optional(s.array(s.string())),
    afterDate: s.optional(s.lazy(() => afterDateSchema)),
    _keysMap: {
      includeDomains: "include_domains",
      excludeDomains: "exclude_domains",
      afterDate: "after_date",
    },
  },
  { additionalProperties: s.json() },
);
