import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationType21Schema, type AuthenticationType21 } from "./authentication-type21.js";
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

export type InputLoki = {
  /** Unique ID for this input */
  id?: string;
  /** Source type identifier. @default "loki" */
  type?: "loki";
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
  /**
   * Absolute path on which to listen for Loki logs requests. Defaults to /loki/api/v1/push, which
   * will (in this example) expand as: 'http://<your‑upstream‑URL>:<your‑port>/loki/api/v1/push'.
   */
  lokiApi: string;
  /** Loki logs authentication type */
  authType?: AuthenticationType21;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
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
   * Binds 'lokiAPI' to a variable for dynamic value resolution. Set to variable ID (pack-scoped) or
   * 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'lokiAPI' at runtime.
   */
  templateLokiApi?: string;
};

export const inputLokiSchema: Schema<InputLoki> = s.object<InputLoki>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("loki"), "loki"),
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
  lokiApi: s.string(),
  authType: s.optional(s.lazy(() => authenticationType21Schema)),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  description: s.optional(s.string()),
  username: s.optional(s.string()),
  password: s.optional(s.string()),
  token: s.optional(s.string()),
  credentialsSecret: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateHost: s.optional(s.string()),
  templatePort: s.optional(s.string()),
  templateLokiApi: s.optional(s.string()),
  _keysMap: {
    lokiApi: "lokiAPI",
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateHost: "__template_host",
    templatePort: "__template_port",
    templateLokiApi: "__template_lokiAPI",
  },
});
