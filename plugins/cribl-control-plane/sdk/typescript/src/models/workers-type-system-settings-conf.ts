import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Worker Process configuration. */
export type WorkersTypeSystemSettingsConf = {
  /**
   * Number of Worker Processes to spawn. Set to <code>0</code> to use the number of available CPU
   * cores.
   */
  count: number;
  /**
   * If <code>true</code>, enable V8 heap snapshot generation on out-of-memory errors. Otherwise,
   * <code>false</code>.
   */
  enableHeapSnapshots?: boolean;
  /** CPU load percentage threshold above which new connections are throttled. */
  loadThrottlePerc?: number;
  /** Maximum memory (in MB) per Worker Process. Set to <code>0</code> for no limit. */
  memory: number;
  /** Minimum number of Worker Processes to keep running. */
  minimum: number;
  /**
   * If <code>true</code>, automatically restart Worker Processes that become unresponsive.
   * Otherwise, <code>false</code>.
   */
  restartUnresponsiveProcesses?: boolean;
  /**
   * Maximum number of connections to accept during Worker Process startup before throttling begins.
   */
  startupMaxConns?: number;
  /**
   * Timeout in milliseconds to wait for Worker Processes to reach idle before ending the startup
   * throttle period.
   */
  startupThrottleTimeout?: number;
  /**
   * If <code>true</code>, run all worker threads in a single V8 isolate. Otherwise,
   * <code>false</code>.
   */
  v8SingleThread?: boolean;
  /** Maximum number of Worker Processes that can reload configuration concurrently. */
  workerProcessConfigUpdateConcurrency?: number;
  /**
   * Timeout in milliseconds to wait for a Worker Process to reload configuration before treating
   * the reload as failed.
   */
  workerProcessReloadTimeout?: number;
  /** Size of the Worker thread pool used for CPU-bound tasks. */
  workerThreadPoolSize?: number;
};

export const workersTypeSystemSettingsConfSchema: Schema<WorkersTypeSystemSettingsConf> =
  s.object<WorkersTypeSystemSettingsConf>({
    count: s.int(),
    enableHeapSnapshots: s.optional(s.boolean()),
    loadThrottlePerc: s.optional(s.int()),
    memory: s.int(),
    minimum: s.int(),
    restartUnresponsiveProcesses: s.optional(s.boolean()),
    startupMaxConns: s.optional(s.int()),
    startupThrottleTimeout: s.optional(s.int()),
    v8SingleThread: s.optional(s.boolean()),
    workerProcessConfigUpdateConcurrency: s.optional(s.int()),
    workerProcessReloadTimeout: s.optional(s.int()),
    workerThreadPoolSize: s.optional(s.int()),
  });
