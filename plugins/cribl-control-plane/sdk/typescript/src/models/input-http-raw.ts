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
import { tlsSettingsServerSideSchema, type TlsSettingsServerSide } from "./tls-settings-server-side.js";
import { authToken211Schema, type AuthToken211 } from "./unions/auth-token211.js";

export type InputHttpRaw = {
  /** Unique ID for this input */
  id?: string;
  /** Source type identifier. @default "http_raw" */
  type?: "http_raw";
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
  /** Address to bind on. Defaults to 0.0.0.0 (all addresses). */
  host: string;
  /** Port to listen on */
  port: number;
  /**
   * Shared secrets to be provided by any client (Authorization: <token>). If empty, unauthorized
   * access is permitted.
   */
  authTokens?: string[];
  /** TLS settings (server side) */
  tls?: TlsSettingsServerSide;
  /**
   * Maximum number of active requests allowed per Worker Process. Set to 0 for unlimited. Caution:
   * Increasing the limit above the default value, or setting it to unlimited, may degrade
   * performance and reduce throughput.
   */
  maxActiveReq?: number;
  /**
   * Maximum number of requests per socket before \@{product} instructs the client to close the
   * connection. Default is 0 (unlimited).
   */
  maxRequestsPerSocket?: number;
  /**
   * Extract the client IP and port from PROXY protocol v1/v2. When enabled, the X-Forwarded-For
   * header is ignored. Disable to use the X-Forwarded-For header for client IP extraction.
   */
  enableProxyHeader?: boolean;
  /** Add request headers to events, in the __headers field */
  captureHeaders?: boolean;
  /** Warning displayed when request-header capture is enabled. */
  captureHeadersWarning?: string;
  /**
   * How often request activity is logged at the `info` level. A value of 1 would log every request,
   * 10 every 10th request, etc.
   */
  activityLogSampleRate?: number;
  /** How long to wait for an incoming request to complete before aborting it. Use 0 to disable. */
  requestTimeout?: number;
  /**
   * How long \@{product} should wait before assuming that an inactive socket has timed out. To wait
   * forever, set to 0.
   */
  socketTimeout?: number;
  /**
   * After the last response is sent, \@{product} will wait this long for additional data before
   * closing the socket connection. Minimum 1 second, maximum 600 seconds (10 minutes).
   */
  keepAliveTimeout?: number;
  /** Expose the /cribl_health endpoint, which returns 200 OK when this Source is healthy */
  enableHealthCheck?: boolean;
  /** Messages from matched IP addresses will be processed, unless also matched by the denylist */
  ipAllowlistRegex?: string;
  /**
   * Messages from matched IP addresses will be ignored. This takes precedence over the allowlist.
   */
  ipDenylistRegex?: string;
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /**
   * Detect the datatype of each event and extract its top-level fields before the data reaches any
   * of the processing pipelines (pre-processing, main processing, post-processing).
   */
  autoParse?: boolean;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /**
   * List of URI paths accepted by this input, wildcards are supported, e.g /api/v*&#47;hook.
   * Defaults to allow all.
   */
  allowedPaths?: string[];
  /**
   * List of HTTP methods accepted by this input. Wildcards are supported (such as P*, GET).
   * Defaults to allow all.
   */
  allowedMethods?: string[];
  /**
   * Shared secrets to be provided by any client (Authorization: <token>). If empty, unauthorized
   * access is permitted.
   */
  authTokensExt?: AuthToken211[];
  /**
   * HTTP origins allowed to send CORS requests (example: https://pivot.claude.ai). Supports
   * wildcards. Leave empty to disable CORS. Note: IP allowlist/denylist rules are applied before
   * CORS.
   */
  accessControlAllowOrigin?: string[];
  /**
   * HTTP headers echoed in Access-Control-Allow-Headers on preflight. Use "*" to allow all headers.
   */
  accessControlAllowHeaders?: string[];
  /** HTTP methods echoed in Access-Control-Allow-Methods on preflight */
  accessControlAllowMethods?: string[];
  /** Headers the browser is allowed to access from the response */
  accessControlExposeHeaders?: string[];
  /** Include credentials in cross-origin requests. Cannot be used with wildcard origins. */
  accessControlAllowCredentials?: boolean;
  /** How long browsers should cache the preflight response */
  accessControlMaxAge?: number;
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
   * Binds 'host' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'host' at runtime.
   */
  templateHost?: string;
  /**
   * Binds 'port' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'port' at runtime.
   */
  templatePort?: string;
  /**
   * Binds 'authTokens' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'authTokens' at
   * runtime.
   */
  templateAuthTokens?: string;
  /**
   * Binds 'allowedPaths' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'allowedPaths' at runtime.
   */
  templateAllowedPaths?: string;
  /**
   * Binds 'accessControlAllowOrigin' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'accessControlAllowOrigin' at runtime.
   */
  templateAccessControlAllowOrigin?: string;
  /**
   * Binds 'accessControlAllowHeaders' to a variable for dynamic value resolution. Set to variable
   * ID (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'accessControlAllowHeaders' at runtime.
   */
  templateAccessControlAllowHeaders?: string;
};

export const inputHttpRawSchema: Schema<InputHttpRaw> = s.object<InputHttpRaw>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("http_raw"), "http_raw"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  host: s.string(),
  port: s.float64(),
  authTokens: s.optional(s.array(s.string())),
  tls: s.optional(s.lazy(() => tlsSettingsServerSideSchema)),
  maxActiveReq: s.optional(s.float64()),
  maxRequestsPerSocket: s.optional(s.int()),
  enableProxyHeader: s.optional(s.boolean()),
  captureHeaders: s.optional(s.boolean()),
  captureHeadersWarning: s.optional(s.string()),
  activityLogSampleRate: s.optional(s.float64()),
  requestTimeout: s.optional(s.float64()),
  socketTimeout: s.optional(s.float64()),
  keepAliveTimeout: s.optional(s.float64()),
  enableHealthCheck: s.optional(s.boolean()),
  ipAllowlistRegex: s.optional(s.string()),
  ipDenylistRegex: s.optional(s.string()),
  breakerRulesets: s.optional(s.array(s.string())),
  staleChannelFlushMs: s.optional(s.float64()),
  autoParse: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  allowedPaths: s.optional(s.array(s.string())),
  allowedMethods: s.optional(s.array(s.string())),
  authTokensExt: s.optional(s.array(s.lazy(() => authToken211Schema))),
  accessControlAllowOrigin: s.optional(s.array(s.string())),
  accessControlAllowHeaders: s.optional(s.array(s.string())),
  accessControlAllowMethods: s.optional(s.array(s.string())),
  accessControlExposeHeaders: s.optional(s.array(s.string())),
  accessControlAllowCredentials: s.optional(s.boolean()),
  accessControlMaxAge: s.optional(s.float64()),
  description: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateHost: s.optional(s.string()),
  templatePort: s.optional(s.string()),
  templateAuthTokens: s.optional(s.string()),
  templateAllowedPaths: s.optional(s.string()),
  templateAccessControlAllowOrigin: s.optional(s.string()),
  templateAccessControlAllowHeaders: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateHost: "__template_host",
    templatePort: "__template_port",
    templateAuthTokens: "__template_authTokens",
    templateAllowedPaths: "__template_allowedPaths",
    templateAccessControlAllowOrigin: "__template_accessControlAllowOrigin",
    templateAccessControlAllowHeaders: "__template_accessControlAllowHeaders",
  },
});
