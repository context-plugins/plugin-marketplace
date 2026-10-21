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

export type InputModelDrivenTelemetry = {
  /** Unique ID for this input */
  id?: string;
  /** Connector type identifier. @default "model_driven_telemetry" */
  type?: "model_driven_telemetry";
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
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** Maximum number of active connections allowed per Worker Process. Use 0 for unlimited. */
  maxActiveCxn?: number;
  /**
   * Maximum size, in KB, of a single received gRPC message. Messages exceeding this limit are
   * rejected before processing. Compressed messages are checked against their decompressed size.
   */
  maxMessageSizeKb?: number;
  /**
   * Maximum number of concurrent HTTP/2 streams allowed on a single gRPC connection. Combined with
   * Maximum message size, this bounds per-connection receive and decompress state. Active
   * connection limit only bounds the number of connections, not the streams multiplexed on each.
   */
  maxConcurrentStreams?: number;
  /**
   * Time in milliseconds to allow the server to shutdown gracefully before forcing shutdown.
   * Defaults to 5000.
   */
  shutdownTimeoutMs?: number;
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

export const inputModelDrivenTelemetrySchema: Schema<InputModelDrivenTelemetry> =
  s.object<InputModelDrivenTelemetry>({
    id: s.optional(s.string()),
    type: s.defaulted(s.literal("model_driven_telemetry"), "model_driven_telemetry"),
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
    metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
    maxActiveCxn: s.optional(s.float64()),
    maxMessageSizeKb: s.optional(s.float64()),
    maxConcurrentStreams: s.optional(s.float64()),
    shutdownTimeoutMs: s.optional(s.float64()),
    description: s.optional(s.string()),
    templateEnvironment: s.optional(s.string()),
    templateStreamtags: s.optional(s.string()),
    templateHost: s.optional(s.string()),
    templatePort: s.optional(s.string()),
    _keysMap: {
      maxMessageSizeKb: "maxMessageSizeKB",
      templateEnvironment: "__template_environment",
      templateStreamtags: "__template_streamtags",
      templateHost: "__template_host",
      templatePort: "__template_port",
    },
  });
