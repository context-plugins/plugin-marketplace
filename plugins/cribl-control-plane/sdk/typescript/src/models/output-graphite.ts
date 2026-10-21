import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import { destinationProtocolSchema, type DestinationProtocol } from "./destination-protocol.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";

export type OutputGraphite = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "graphite" */
  type?: "graphite";
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
  /** Protocol to use when communicating with the destination. */
  protocol: DestinationProtocol;
  /** The hostname of the destination. */
  host: string;
  /** Destination port. */
  port: number;
  /**
   * When protocol is UDP, specifies the maximum size of packets sent to the destination. Also known
   * as the MTU for the network path to the destination system.
   */
  mtu?: number;
  /**
   * When protocol is TCP, specifies how often buffers should be flushed, resulting in records sent
   * to the destination.
   */
  flushPeriodSec?: number;
  /**
   * How often to resolve the destination hostname to an IP address. Ignored if the destination is
   * an IP address. A value of 0 means every batch sent will incur a DNS lookup.
   */
  dnsResolvePeriodSec?: number;
  /** Optional description for this configuration. */
  description?: string;
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
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
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
  /**
   * Binds 'streamtags' to a variable for dynamic value resolution. Set to variable ID (pack-scoped)
   * or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides 'streamtags' at
   * runtime.
   */
  templateStreamtags?: string;
  /**
   * Binds 'onBackpressure' to a variable for dynamic value resolution. Set to variable ID
   * (pack-scoped) or 'cribl.'/'edge.' prefixed ID (group-scoped). Variable value overrides
   * 'onBackpressure' at runtime.
   */
  templateOnBackpressure?: string;
};

export const outputGraphiteSchema: Schema<OutputGraphite> = s.object<OutputGraphite>({
  id: s.optional(s.string()),
  type: s.defaulted(s.literal("graphite"), "graphite"),
  pipeline: s.optional(s.string()),
  systemFields: s.optional(s.array(s.string())),
  environment: s.optional(s.string()),
  streamtags: s.optional(s.array(s.string())),
  protocol: destinationProtocolSchema,
  host: s.string(),
  port: s.float64(),
  mtu: s.optional(s.float64()),
  flushPeriodSec: s.optional(s.float64()),
  dnsResolvePeriodSec: s.optional(s.float64()),
  description: s.optional(s.string()),
  throttleRatePerSec: s.optional(s.string()),
  connectionTimeout: s.optional(s.float64()),
  writeTimeout: s.optional(s.float64()),
  onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
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
  templateStreamtags: s.optional(s.string()),
  templateOnBackpressure: s.optional(s.string()),
  _keysMap: {
    templateStreamtags: "__template_streamtags",
    templateOnBackpressure: "__template_onBackpressure",
  },
});
