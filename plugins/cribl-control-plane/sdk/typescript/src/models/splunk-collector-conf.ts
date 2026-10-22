import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication9Schema, type Authentication9 } from "./authentication9.js";
import { extraHeaderSchema, type ExtraHeader } from "./extra-header.js";
import { extraParameterSchema, type ExtraParameter } from "./extra-parameter.js";
import { outputModeSchema, type OutputMode } from "./output-mode.js";
import { retryRulesSchema, type RetryRules } from "./retry-rules.js";

export type SplunkCollectorConf = {
  /** Search head base URL. Can be an expression. Default is https://localhost:8089. */
  searchHead: string;
  /**
   * Examples: 'index=myAppLogs level=error channel=myApp' OR '| mstats avg(myStat) as myStat WHERE
   * index=myStatsIndex.'
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
  /** REST API used to create a search */
  endpoint: string;
  /** Format of the returned output */
  outputMode: OutputMode;
  /** Optional collect request parameters */
  collectRequestParams?: ExtraParameter[];
  /** Optional collect request headers */
  collectRequestHeaders?: ExtraHeader[];
  /** Authentication method for Discover and Collect REST calls */
  authentication: Authentication9;
  /** HTTP request inactivity timeout. Use 0 for no timeout. */
  timeout?: number;
  /**
   * Use round-robin DNS lookup. Suitable when DNS server returns multiple addresses in sort order.
   */
  useRoundRobinDns?: boolean;
  /** Disable collector event time filtering when a date range is specified */
  disableTimeFilter?: boolean;
  /**
   * Reject certificates that cannot be verified against a valid CA (such as self-signed
   * certificates)
   */
  rejectUnauthorized?: boolean;
  /** Escape characters (\") in search queries will be passed directly to Splunk */
  handleEscapedChars?: boolean;
  /** Settings that control how the Collector retries failed HTTP requests. */
  retryRules?: RetryRules;
  /** Basic authentication username */
  username?: string;
  /** Basic authentication password */
  password?: string;
  /** Select or create a stored secret that references your credentials */
  credentialsSecret?: string;
  /** Bearer token */
  token?: string;
  /** Select or create a stored secret that references your Bearer token */
  tokenSecret?: string;
  /** URL to use for login API call. This call is expected to be a POST. */
  loginUrl?: string;
  /**
   * Template for POST body to send with login request. ${username} and ${password} are used to
   * specify location of these attributes in the message.
   */
  loginBody?: string;
  /** Path to token attribute in login response body. Nested attributes are allowed. */
  tokenRespAttribute?: string;
  /**
   * JavaScript expression to compute the Authorization header to pass in discover and collect
   * calls. The value ${token} is used to reference the token obtained from login.
   */
  authHeaderExpr?: string;
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
   * Binds 'outputMode' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'outputMode' at
   * runtime.
   */
  templateOutputMode?: string;
};

export const splunkCollectorConfSchema: Schema<SplunkCollectorConf> = s.object<SplunkCollectorConf>({
  searchHead: s.string(),
  search: s.string(),
  earliest: s.optional(s.string()),
  latest: s.optional(s.string()),
  endpoint: s.string(),
  outputMode: outputModeSchema,
  collectRequestParams: s.optional(s.array(s.lazy(() => extraParameterSchema))),
  collectRequestHeaders: s.optional(s.array(s.lazy(() => extraHeaderSchema))),
  authentication: authentication9Schema,
  timeout: s.optional(s.float64()),
  useRoundRobinDns: s.optional(s.boolean()),
  disableTimeFilter: s.optional(s.boolean()),
  rejectUnauthorized: s.optional(s.boolean()),
  handleEscapedChars: s.optional(s.boolean()),
  retryRules: s.optional(s.lazy(() => retryRulesSchema)),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  token: s.optional(s.string()),
  tokenSecret: s.optional(s.string()),
  loginUrl: s.optional(s.string()),
  loginBody: s.optional(s.string()),
  tokenRespAttribute: s.optional(s.string()),
  authHeaderExpr: s.optional(s.string()),
  templateSearchHead: s.optional(s.string()),
  templateSearch: s.optional(s.string()),
  templateEarliest: s.optional(s.string()),
  templateLatest: s.optional(s.string()),
  templateEndpoint: s.optional(s.string()),
  templateOutputMode: s.optional(s.string()),
  _keysMap: {
    templateSearchHead: "__template_searchHead",
    templateSearch: "__template_search",
    templateEarliest: "__template_earliest",
    templateLatest: "__template_latest",
    templateEndpoint: "__template_endpoint",
    templateOutputMode: "__template_outputMode",
  },
});
