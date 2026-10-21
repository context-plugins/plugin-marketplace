import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { compressionSchema, type Compression } from "./compression.js";
import { modeSchema, type Mode } from "./mode.js";
import { queueFullBehaviorSchema, type QueueFullBehavior } from "./queue-full-behavior.js";

/** Persistent queue settings for this Source. */
export type PqType = {
  /**
   * With Smart mode (deprecated), PQ will write events to the filesystem only when it detects
   * backpressure from the processing engine. Smart mode will have no new development starting July
   * 2026, followed by End of Support and feature removal (auto-migrating to Always On) in January
   * 2027. We recommend using Always On mode instead. With Always On mode, PQ will always write
   * events directly to the queue before forwarding them to the processing engine.
   */
  mode?: Mode;
  /**
   * The maximum size to hold in memory before writing events to disk. Enter a numeral with units of
   * KB, MB, etc. The minimum value is 64KB and the maximum value is 10MB.
   */
  maxBufferSizeBytes?: string;
  /**
   * Maximum number of events to hold in memory before writing the events to disk. Deprecated and
   * only supported in workers < v4.17.0. Use maxBufferSizeBytes instead.
   */
  maxBufferSize?: number;
  /**
   * The number of events to send downstream before committing that Stream has read them. Lower
   * values increase cursor-write IOPS and can add disk pressure, including on shared storage.
   */
  commitFrequency?: number;
  /**
   * The maximum size to store in each queue file before closing and optionally compressing. Enter a
   * numeral with units of KB, MB, etc.
   */
  maxFileSize?: string;
  /**
   * The maximum disk space that the queue can consume (as an average per Worker Process) before
   * queueing stops. Enter a numeral with units of KB, MB, etc.
   */
  maxSize?: string;
  /**
   * The location for the persistent queue files. To this field's value, the system will append:
   * /<worker-id>/inputs/<input-id>
   */
  path?: string;
  /** Codec to use to compress the persisted data */
  compress?: Compression;
  /**
   * Whether to block or drop events when the queue is exerting backpressure (full capacity or low
   * disk). 'Block' is the same behavior as non-PQ blocking. 'Drop new data' throws away incoming
   * data, while leaving the contents of the PQ unchanged.
   */
  onBackpressure?: QueueFullBehavior;
  /** Management controls for the persistent queue. */
  pqControls?: Record<string, unknown>;
};

export const pqTypeSchema: Schema<PqType> = s.object<PqType>({
  mode: s.optional(s.lazy(() => modeSchema)),
  maxBufferSizeBytes: s.optional(s.string()),
  maxBufferSize: s.optional(s.float64()),
  commitFrequency: s.optional(s.float64()),
  maxFileSize: s.optional(s.string()),
  maxSize: s.optional(s.string()),
  path: s.optional(s.string()),
  compress: s.optional(s.lazy(() => compressionSchema)),
  onBackpressure: s.optional(s.lazy(() => queueFullBehaviorSchema)),
  pqControls: s.optional(s.record(s.string(), s.unknown())),
});
