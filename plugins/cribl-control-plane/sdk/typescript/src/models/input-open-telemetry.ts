import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authMethodSchema, type AuthMethod } from "./auth-method.js";
import { authenticationType6Schema, type AuthenticationType6 } from "./authentication-type6.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { otlpVersion2Schema, type OtlpVersion2 } from "./otlp-version2.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { protocol2Schema, type Protocol2 } from "./protocol2.js";
import { tlsSettingsServerSideSchema, type TlsSettingsServerSide } from "./tls-settings-server-side.js";

export type InputOpenTelemetry = {
  /** Unique ID for this input */
  id?: string;
  /** Source type identifier. @default "open_telemetry" */
  type?: "open_telemetry";
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
  /** Warning displayed when request-header capture is enabled. */
  captureHeadersWarning?: string;
  /** How long to wait for an incoming request to complete before aborting it. Use 0 to disable. */
  requestTimeout?: number;
  /**
   * How long \@{product} should wait before assuming that an inactive socket has timed out. To wait
   * forever, set to 0.
   */
  socketTimeout?: number;
  /**
   * After the last response is sent, \@{product} will wait this long for additional data before
   * closing the socket connection. Minimum 1 sec.; maximum 600 sec. (10 min.).
   */
  keepAliveTimeout?: number;
  /**
   * Enable to expose the /cribl_health endpoint, which returns 200 OK when this Source is healthy
   */
  enableHealthCheck?: boolean;
  /** Messages from matched IP addresses will be processed, unless also matched by the denylist. */
  ipAllowlistRegex?: string;
  /**
   * Messages from matched IP addresses will be ignored. This takes precedence over the allowlist.
   */
  ipDenylistRegex?: string;
  /** Select whether to leverage gRPC or HTTP for OpenTelemetry */
  protocol?: Protocol2;
  /** Enable to extract each incoming span to a separate event */
  extractSpans?: boolean;
  /**
   * Enable to extract each incoming Gauge or IntGauge metric to multiple events, one per data point
   */
  extractMetrics?: boolean;
  /** The version of OTLP Protobuf definitions to use when interpreting received data */
  otlpVersion?: OtlpVersion2;
  /** OpenTelemetry authentication type */
  authType?: AuthenticationType6;
  /**
   * Shared secrets to authenticate clients. Supports Bearer tokens, Basic auth, and OAuth
   * (JWKS-backed JWT) methods. If empty, unauthenticated access is permitted.
   */
  authMethodsExt?: AuthMethod[];
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /**
   * Maximum number of active connections allowed per Worker Process. Use 0 for unlimited. This does
   * not limit concurrent HTTP/2 streams on a connection; use Maximum concurrent streams and Maximum
   * message size for that bound.
   */
  maxActiveCxn?: number;
  /**
   * Maximum size, in KB, of a single received gRPC message (OTLP export request). Requests
   * exceeding this limit are rejected before processing. Compressed requests are checked against
   * their decompressed size.
   */
  maxMessageSizeKb?: number;
  /**
   * Maximum number of concurrent HTTP/2 streams allowed on a single gRPC connection. Combined with
   * Maximum message size, this bounds per-connection receive and decompress state. Active
   * connection limit only bounds connections.
   */
  maxConcurrentStreams?: number;
  /**
   * Maximum time a gRPC connection may stay open, including while idle, before \@{product} closes
   * it and frees the slot for new clients. Use 0 for unlimited; maximum 86400 sec. (24 hours).
   */
  maxConnectionAgeSec?: number;
  /**
   * After the maximum connection age is reached, how long \@{product} waits for in-flight requests
   * to complete before forcibly closing the connection. Only applies when Maximum connection age is
   * not 0. Maximum 3600 sec. (1 hour).
   */
  maxConnectionAgeGraceSec?: number;
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
  /** Enable to extract each incoming log record to a separate event */
  extractLogs?: boolean;
  /**
   * HTTP origins allowed to send CORS requests (example: https://pivot.claude.ai). Supports
   * wildcards. Leave empty to disable CORS. Note: IP allowlist/denylist rules are applied before
   * CORS.
   */
  accessControlAllowOrigin?: string[];
  /**
   * HTTP headers echoed in Access-Control-Allow-Headers on preflight. Use "*" to allow all headers.
   * Leave empty to allow all requested headers from an allowed origin. Origin matching and
   * authentication still apply.
   */
  accessControlAllowHeaders?: string[];
  /** HTTP methods echoed in Access-Control-Allow-Methods on preflight */
  accessControlAllowMethods?: string[];
  /** Headers the browser is allowed to access from the response */
  accessControlExposeHeaders?: string[];
  /** Include credentials in cross-origin requests. Cannot be used with wildcard origins. */
  accessControlAllowCredentials?: boolean;
  /**
   * How long browsers should cache the preflight response, in whole seconds. Fractional values are
   * invalid; browsers that cannot parse the header fall back to 5 seconds.
   */
  accessControlMaxAge?: number;
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
   * Binds 'protocol' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'protocol' at runtime.
   */
  templateProtocol?: string;
  /**
   * Binds 'otlpVersion' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'otlpVersion' at runtime.
   */
  templateOtlpVersion?: string;
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

export const inputOpenTelemetrySchema: Schema<InputOpenTelemetry> = s.object<InputOpenTelemetry>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("open_telemetry"), "open_telemetry"),
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
  tls: s.optional(s.lazy(() => tlsSettingsServerSideSchema)),
  maxActiveReq: s.optional(s.float64()),
  maxRequestsPerSocket: s.optional(s.int()),
  captureHeadersWarning: s.optional(s.string()),
  requestTimeout: s.optional(s.float64()),
  socketTimeout: s.optional(s.float64()),
  keepAliveTimeout: s.optional(s.float64()),
  enableHealthCheck: s.optional(s.boolean()),
  ipAllowlistRegex: s.optional(s.string()),
  ipDenylistRegex: s.optional(s.string()),
  protocol: s.optional(s.lazy(() => protocol2Schema)),
  extractSpans: s.optional(s.boolean()),
  extractMetrics: s.optional(s.boolean()),
  otlpVersion: s.optional(s.lazy(() => otlpVersion2Schema)),
  authType: s.optional(s.lazy(() => authenticationType6Schema)),
  authMethodsExt: s.optional(s.array(s.lazy(() => authMethodSchema))),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  maxActiveCxn: s.optional(s.float64()),
  maxMessageSizeKb: s.optional(s.float64()),
  maxConcurrentStreams: s.optional(s.float64()),
  maxConnectionAgeSec: s.optional(s.float64()),
  maxConnectionAgeGraceSec: s.optional(s.float64()),
  description: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  token: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  extractLogs: s.optional(s.boolean()),
  accessControlAllowOrigin: s.optional(s.array(s.string())),
  accessControlAllowHeaders: s.optional(s.array(s.string())),
  accessControlAllowMethods: s.optional(s.array(s.string())),
  accessControlExposeHeaders: s.optional(s.array(s.string())),
  accessControlAllowCredentials: s.optional(s.boolean()),
  accessControlMaxAge: s.optional(s.int()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateHost: s.optional(s.string()),
  templatePort: s.optional(s.string()),
  templateProtocol: s.optional(s.string()),
  templateOtlpVersion: s.optional(s.string()),
  templateAccessControlAllowOrigin: s.optional(s.string()),
  templateAccessControlAllowHeaders: s.optional(s.string()),
  _keysMap: {
    maxMessageSizeKb: "maxMessageSizeKB",
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateHost: "__template_host",
    templatePort: "__template_port",
    templateProtocol: "__template_protocol",
    templateOtlpVersion: "__template_otlpVersion",
    templateAccessControlAllowOrigin: "__template_accessControlAllowOrigin",
    templateAccessControlAllowHeaders: "__template_accessControlAllowHeaders",
  },
});
