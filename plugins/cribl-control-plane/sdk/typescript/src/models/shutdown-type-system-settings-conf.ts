import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Graceful shutdown configuration. */
export type ShutdownTypeSystemSettingsConf = {
  /**
   * Maximum time in milliseconds to wait for in-flight events to drain before forcing a shutdown.
   */
  drainTimeout: number;
};

export const shutdownTypeSystemSettingsConfSchema: Schema<ShutdownTypeSystemSettingsConf> =
  s.object<ShutdownTypeSystemSettingsConf>({
    drainTimeout: s.int(),
  });
