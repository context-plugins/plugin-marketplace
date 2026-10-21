import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RollbackSettings = {
  /**
   * If <code>true</code>, enable automatic rollback if an upgrade fails. Otherwise,
   * <code>false</code>.
   */
  rollbackEnabled: boolean;
  /** Number of times to retry a rollback before marking it as failed. */
  rollbackRetries?: number;
  /**
   * Maximum duration in milliseconds to wait for a rollback to complete before marking it as
   * failed.
   */
  rollbackTimeout?: number;
};

export const rollbackSettingsSchema: Schema<RollbackSettings> = s.object<RollbackSettings>({
  rollbackEnabled: s.boolean(),
  rollbackRetries: s.optional(s.int()),
  rollbackTimeout: s.optional(s.int()),
});
