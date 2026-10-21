import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { backpressureBehaviorSchema, type BackpressureBehavior } from "./backpressure-behavior.js";
import { compressionSchema, type Compression } from "./compression.js";
import { mode76Schema, type Mode76 } from "./mode76.js";
import { queueFullBehavior62Schema, type QueueFullBehavior62 } from "./queue-full-behavior62.js";

export type OutputDatabricksZerobus = {
  /** Unique ID for this output */
  id?: string;
  /** Connector type identifier. @default "databricks_zerobus" */
  type?: "databricks_zerobus";
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
  /**
   * HTTPS URL of the Databricks Workspace, used for OAuth token exchange (example:
   * https://dbc-1234abcd-5e6f.cloud.databricks.com). Must start with https://
   */
  workspaceUrl: string;
  /** Unique identifier for the Databricks Workspace. Scopes the OAuth token to this Workspace. */
  workspaceId: string;
  /**
   * Hostname of the Workspace Zerobus ingest endpoint. Omit the scheme, port, and path (example:
   * 1234567890.zerobus.us-west-2.cloud.databricks.com).
   */
  zerobusEndpoint: string;
  /** OAuth client ID of the service principal authorized to write to the target table */
  clientId: string;
  /** OAuth client secret of the service principal */
  clientTextSecret: string;
  /** Three-part Unity Catalog name of the target table: catalog.schema.table */
  tableName: string;
  /** Maximum size, in KB, of the serialized records in a single ingest batch */
  maxBatchSizeKb?: number;
  /** Maximum number of records to include in a single ingest batch */
  maxBatchRecords?: number;
  /**
   * Maximum size, in KB, of unacknowledged records per Worker Process before blocking. Must be at
   * least the configured Batch size limit. Records larger than this limit are dropped.
   */
  maxBufferedKb?: number;
  /** Maximum number of unacknowledged batches per Worker Process before blocking */
  maxInflightBatches?: number;
  /** Maximum time, in seconds, to hold a batch before sending it */
  flushPeriodSec?: number;
  /**
   * Amount of time, in seconds, to wait for Databricks to acknowledge sent batches before
   * reconnecting
   */
  ackTimeoutSec?: number;
  /** Amount of time, in seconds, to wait for a new ingest stream to open before canceling it */
  connectionTimeoutSec?: number;
  /** How to handle events when all receivers are exerting backpressure */
  onBackpressure?: BackpressureBehavior;
  /** Optional description for this configuration. */
  description?: string;
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

export const outputDatabricksZerobusSchema: Schema<OutputDatabricksZerobus> =
  s.object<OutputDatabricksZerobus>({
    id: s.optional(s.string()),
    type: s.defaulted(s.literal("databricks_zerobus"), "databricks_zerobus"),
    pipeline: s.optional(s.string()),
    systemFields: s.optional(s.array(s.string())),
    environment: s.optional(s.string()),
    streamtags: s.optional(s.array(s.string())),
    workspaceUrl: s.string(),
    workspaceId: s.string(),
    zerobusEndpoint: s.string(),
    clientId: s.string(),
    clientTextSecret: s.string(),
    tableName: s.string(),
    maxBatchSizeKb: s.optional(s.int()),
    maxBatchRecords: s.optional(s.int()),
    maxBufferedKb: s.optional(s.int()),
    maxInflightBatches: s.optional(s.int()),
    flushPeriodSec: s.optional(s.int()),
    ackTimeoutSec: s.optional(s.int()),
    connectionTimeoutSec: s.optional(s.int()),
    onBackpressure: s.optional(s.lazy(() => backpressureBehaviorSchema)),
    description: s.optional(s.string()),
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
      maxBatchSizeKb: "maxBatchSizeKB",
      maxBufferedKb: "maxBufferedKB",
      templateStreamtags: "__template_streamtags",
      templateOnBackpressure: "__template_onBackpressure",
    },
  });
