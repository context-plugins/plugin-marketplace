import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Graceful shutdown configuration. */
export type Shutdown = {
  /**
   * Maximum time in milliseconds to wait for in-flight events to drain before forcing a shutdown.
   */
  drainTimeout?: number;
};

export const shutdownSchema: Schema<Shutdown> = s.object<Shutdown>({
  drainTimeout: s.optional(s.int()),
});
