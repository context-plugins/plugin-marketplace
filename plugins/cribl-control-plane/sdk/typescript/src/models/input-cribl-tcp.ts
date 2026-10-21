import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authTokenConfInputCriblTcpSchema,
  type AuthTokenConfInputCriblTcp,
} from "./auth-token-conf-input-cribl-tcp.js";
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

export type InputCriblTcp = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "cribl_tcp" */
  type?: "cribl_tcp";
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
  /** Load balance traffic across all Worker Processes */
  enableLoadBalancing?: boolean;
  /**
   * Shared secrets to be used by connected environments to authorize connections. These tokens
   * should be installed in Cribl TCP destinations in connected environments.
   */
  authTokens?: AuthTokenConfInputCriblTcp[];
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
};

export const inputCriblTcpSchema: Schema<InputCriblTcp> = s.object<InputCriblTcp>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("cribl_tcp"), "cribl_tcp"),
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
  maxActiveCxn: s.optional(s.float64()),
  socketIdleTimeout: s.optional(s.float64()),
  socketEndingMaxWait: s.optional(s.float64()),
  socketMaxLifespan: s.optional(s.float64()),
  enableProxyHeader: s.optional(s.boolean()),
  metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
  enableLoadBalancing: s.optional(s.boolean()),
  authTokens: s.optional(s.array(s.lazy(() => authTokenConfInputCriblTcpSchema))),
  description: s.optional(s.string()),
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
