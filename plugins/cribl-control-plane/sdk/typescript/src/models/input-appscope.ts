import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod92Schema, type AuthenticationMethod92 } from "./authentication-method92.js";
import {
  connectionConfInputCollectionSchema,
  type ConnectionConfInputCollection,
} from "./connection-conf-input-collection.js";
import { filterSchema, type Filter } from "./filter.js";
import { inputProvenanceSchema, type InputProvenance } from "./input-provenance.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { persistence4Schema, type Persistence4 } from "./persistence4.js";
import { pqTypeSchema, type PqType } from "./pq-type.js";
import { tlsSettingsServerSideSchema, type TlsSettingsServerSide } from "./tls-settings-server-side.js";
import { unixSocketPermissionsSchema, type UnixSocketPermissions } from "./unions/unix-socket-permissions.js";

export type InputAppscope = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "appscope" */
  type?: "appscope";
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
  /** Regex matching IP addresses that are allowed to establish a connection */
  ipWhitelistRegex?: string;
  /** Maximum number of active connections allowed per Worker Process. Use 0 for unlimited. */
  maxActiveCxn?: number;
  /**
   * How long \@{product} should wait before assuming that an inactive socket has timed out. After
   * this time, the connection will be closed. Leave at 0 for no inactive socket monitoring.
   */
  socketIdleTimeout?: number;
  /**
   * How long the server will wait after initiating a closure for a client to close its end of the
   * connection. If the client doesn't close the connection within this time, the server will
   * forcefully terminate the socket to prevent resource leaks and ensure efficient connection
   * cleanup and system stability. Leave at 0 for no inactive socket monitoring.
   */
  socketEndingMaxWait?: number;
  /**
   * The maximum duration a socket can remain open, even if active. This helps manage resources and
   * mitigate issues caused by TCP pinning. Set to 0 to disable.
   */
  socketMaxLifespan?: number;
  /** Enable if the connection is proxied by a device that supports proxy protocol v1 or v2 */
  enableProxyHeader?: boolean;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /**
   * Toggle to Yes to specify a file-backed UNIX domain socket connection, instead of a network host
   * and port.
   */
  enableUnixPath?: boolean;
  /** Rules that select processes for AppScope instrumentation. */
  filter?: Filter;
  /** Persistence */
  persistence?: Persistence4;
  /**
   * Select Manual to enter an auth token directly, or select Secret to use a text secret to
   * authenticate
   */
  authType?: AuthenticationMethod92;
  /** Optional description for this configuration. */
  description?: string;
  /** Address to bind on. Defaults to 0.0.0.0 (all addresses). */
  host?: string;
  /** Port to listen on */
  port?: number;
  /** TLS settings (server side) */
  tls?: TlsSettingsServerSide;
  /** Path to the UNIX domain socket to listen on. */
  unixSocketPath?: string;
  /**
   * Permissions to set for socket e.g., 777. If empty, falls back to the runtime user's default
   * permissions.
   */
  unixSocketPerms?: UnixSocketPermissions;
  /**
   * Shared secret to be provided by any client (in authToken header field). If empty, unauthorized
   * access is permitted.
   */
  authToken?: string;
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
};

export const inputAppscopeSchema: Schema<InputAppscope> = s.object<InputAppscope>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("appscope"), "appscope"),
  disabled: s.optional(s.boolean()),
  pipeline: s.optional(s.string()),
  sendToRoutes: s.optional(s.boolean()),
  environment: s.optional(s.string()),
  pqEnabled: s.optional(s.boolean()),
  streamtags: s.optional(s.array(s.string())),
  criblSourceProvenance: s.optional(s.lazy(() => inputProvenanceSchema)),
  connections: s.optional(s.array(s.lazy(() => connectionConfInputCollectionSchema))),
  pq: s.optional(s.lazy(() => pqTypeSchema)),
  ipWhitelistRegex: s.optional(s.string()),
  maxActiveCxn: s.optional(s.float64()),
  socketIdleTimeout: s.optional(s.float64()),
  socketEndingMaxWait: s.optional(s.float64()),
  socketMaxLifespan: s.optional(s.float64()),
  enableProxyHeader: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  breakerRulesets: s.optional(s.array(s.string())),
  staleChannelFlushMs: s.optional(s.float64()),
  enableUnixPath: s.optional(s.boolean()),
  filter: s.optional(s.lazy(() => filterSchema)),
  persistence: s.optional(s.lazy(() => persistence4Schema)),
  authType: s.optional(s.lazy(() => authenticationMethod92Schema)),
  description: s.optional(s.string()),
  host: s.optional(s.string()),
  port: s.optional(s.float64()),
  tls: s.optional(s.lazy(() => tlsSettingsServerSideSchema)),
  unixSocketPath: s.optional(s.string()),
  unixSocketPerms: s.optional(s.lazy(() => unixSocketPermissionsSchema)),
  authToken: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  templateEnvironment: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateHost: s.optional(s.string()),
  templatePort: s.optional(s.string()),
  _keysMap: {
    templateEnvironment: "__template_environment",
    templateStreamtags: "__template_streamtags",
    templateHost: "__template_host",
    templatePort: "__template_port",
  },
});
