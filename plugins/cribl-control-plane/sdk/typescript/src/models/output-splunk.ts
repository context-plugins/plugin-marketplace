import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authenticationMethod92Schema, type AuthenticationMethod92 } from "./authentication-method92.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import { compression102Schema, type Compression102 } from "./compression102.js";
import { maxS2SVersionSchema, type MaxS2SVersion } from "./max-s2-sversion.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import {
  nestedFieldSerializationSchema,
  type NestedFieldSerialization,
} from "./nested-field-serialization.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";
import { tlsSettingsClientSide33Schema, type TlsSettingsClientSide33 } from "./tls-settings-client-side33.js";

export type OutputSplunk = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "splunk" */
  type?: "splunk";
  /** Pipeline to process data before sending out to this output */
  pipeline?: string;
  /** Fields to automatically add to events, such as cribl_pipe. Supports wildcards. */
  systemFields?: string[];
  /**
   * Optionally, enable this config only on a specified Git branch. If empty, will be enabled
   * everywhere.
   */
  environment?: string;
  /** Metadata tags used for categorization and filtering. */
  streamtags?: string[];
  /** The hostname of the receiver */
  host: string;
  /** The port to connect to on the provided host */
  port: number;
  /** How to serialize nested fields into index-time fields */
  nestedFields?: NestedFieldSerialization;
  /**
   * Rate (in bytes per second) to throttle while writing to an output. Accepts values with
   * multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no
   * throttling.
   */
  throttleRatePerSec?: string;
  /** Amount of time (milliseconds) to wait for the connection to establish before retrying */
  connectionTimeout?: number;
  /**
   * Amount of time (milliseconds) to wait for a write to complete before assuming connection is
   * dead
   */
  writeTimeout?: number;
  /** TLS settings (client side) */
  tls?: TlsSettingsClientSide33;
  /**
   * Output metrics in multiple-metric format in a single event. Supported in Splunk 8.0 and above.
   */
  enableMultiMetrics?: boolean;
  /**
   * Check if indexer is shutting down and stop sending data. This helps minimize data loss during
   * shutdown.
   */
  enableAck?: boolean;
  /** Use to troubleshoot issues with sending data */
  logFailedRequests?: boolean;
  /** The highest S2S protocol version to advertise during handshake */
  maxS2Sversion?: MaxS2SVersion;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /**
   * Select Manual to enter an auth token directly, or select Secret to use a text secret to
   * authenticate
   */
  authType?: AuthenticationMethod92;
  /** Optional description for this configuration. */
  description?: string;
  /**
   * Maximum number of times healthcheck can fail before we close connection. If set to 0
   * (disabled), and the connection to Splunk is forcibly closed, some data loss might occur.
   */
  maxFailedHealthChecks?: number;
  /**
   * Controls whether the sender should send compressed data to the server. Select 'Disabled' to
   * reject compressed connections or 'Always' to ignore server's configuration and send compressed
   * data.
   */
  compress?: Compression102;
  /**
   * Use FIFO (first in, first out) processing. Disable to forward new events to receivers before
   * queue is flushed.
   */
  pqStrictOrdering?: boolean;
  /**
   * Throttling rate (in events per second) to impose while writing to Destinations from PQ.
   * Defaults to 0, which disables throttling.
   */
  pqRatePerSec?: number;
  /**
   * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In
   * Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the
   * Destination. In Always On mode, PQ always writes events to the filesystem.
   */
  pqMode?: Mode76;
  /**
   * Maximum number of events to hold in memory before writing the events to disk. Deprecated and
   * only supported in workers < v4.17.0. Use pqMaxBufferSizeBytes instead.
   */
  pqMaxBufferSize?: number;
  /** How long (in seconds) to wait for backpressure to resolve before engaging the queue */
  pqMaxBackpressureSec?: number;
  /**
   * The maximum size to store in each queue file before closing and optionally compressing (KB, MB,
   * etc.)
   */
  pqMaxFileSize?: string;
  /**
   * The maximum disk space that the queue can consume (as an average per Worker Process) before
   * queueing stops. Enter a numeral with units of KB, MB, etc.
   */
  pqMaxSize?: string;
  /**
   * The location for the persistent queue files. To this field's value, the system will append:
   * /<worker-id>/<output-id>.
   */
  pqPath?: string;
  /** Codec to use to compress the persisted data */
  pqCompress?: Compression;
  /**
   * How to handle events when the queue is exerting backpressure (full capacity or low disk).
   * 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming data,
   * while leaving the contents of the PQ unchanged.
   */
  pqOnBackpressure?: QueueFullBehavior62;
  /**
   * The maximum size to hold in memory before writing events to disk. Enter a numeral with units of
   * KB, MB, etc. The minimum value is 64KB and the maximum value is 10MB.
   */
  pqMaxBufferSizeBytes?: string;
  /** Persistent queue controls. */
  pqControls?: Record<string, unknown>;
  /** Shared secret token to use when establishing a connection to a Splunk indexer. */
  authToken?: string;
  /** Select or create a stored text secret */
  textSecret?: string;
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
   * Binds 'nestedFields' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'nestedFields' at runtime.
   */
  templateNestedFields?: string;
  /**
   * Binds 'maxS2Sversion' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'maxS2Sversion' at runtime.
   */
  templateMaxS2Sversion?: string;
  /**
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
  /**
   * Binds 'compress' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'compress' at runtime.
   */
  templateCompress?: string;
};

export const outputSplunkSchema: Schema<OutputSplunk> = s.object<OutputSplunk>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("splunk"), "splunk"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  host: s.string(),
  port: s.float64(),
  nestedFields: s.optional(s.lazy(() => nestedFieldSerializationSchema)),
  throttleRatePerSec: s.optional(s.string()),
  connectionTimeout: s.optional(s.float64()),
  writeTimeout: s.optional(s.float64()),
  tls: s.optional(s.lazy(() => tlsSettingsClientSide33Schema)),
  enableMultiMetrics: s.optional(s.boolean()),
  enableAck: s.optional(s.boolean()),
  logFailedRequests: s.optional(s.boolean()),
  maxS2Sversion: s.optional(s.lazy(() => maxS2SVersionSchema)),
  onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
  authType: s.optional(s.lazy(() => authenticationMethod92Schema)),
  description: s.optional(s.string()),
  maxFailedHealthChecks: s.optional(s.float64()),
  compress: s.optional(s.lazy(() => compression102Schema)),
  pqStrictOrdering: s.optional(s.boolean()),
  pqRatePerSec: s.optional(s.float64()),
  pqMode: s.optional(s.lazy(() => mode76Schema)),
  pqMaxBufferSize: s.optional(s.float64()),
  pqMaxBackpressureSec: s.optional(s.float64()),
  pqMaxFileSize: s.optional(s.string()),
  pqMaxSize: s.optional(s.string()),
  pqPath: s.optional(s.string()),
  pqCompress: s.optional(s.lazy(() => compressionSchema)),
  pqOnBackpressure: s.optional(s.lazy(() => queueFullBehavior62Schema)),
  pqMaxBufferSizeBytes: s.optional(s.string()),
  pqControls: s.optional(s.record(s.string(), s.unknown())),
  authToken: s.optional(s.string()),
  textSecret: s.optional(s.string()),
  templateStreamtags: s.optional(s.string()),
  templateHost: s.optional(s.string()),
  templatePort: s.optional(s.string()),
  templateNestedFields: s.optional(s.string()),
  templateMaxS2Sversion: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  templateCompress: s.optional(s.string()),
  _keysMap: {
    enableAck: "enableACK",
    templateStreamtags: "__template_streamtags",
    templateHost: "__template_host",
    templatePort: "__template_port",
    templateNestedFields: "__template_nestedFields",
    templateMaxS2Sversion: "__template_maxS2Sversion",
    templateOnBackpressure: "__template_onBackpressure",
    templateCompress: "__template_compress",
  },
});
