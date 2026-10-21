import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Rolling upgrade group settings that control how many nodes are upgraded at a time. */
export type UpgradeGroupSettings2 = {
  /**
   * If <code>true</code>, perform a rolling upgrade that updates nodes incrementally. If
   * <code>false</code>, upgrade all nodes simultaneously.
   */
  isRolling?: boolean;
  /** Percentage of nodes to upgrade at a time during a rolling upgrade. */
  quantity?: number;
  /** Number of times to retry upgrading a node before marking it as failed. */
  retryCount?: number;
  /** Delay in milliseconds between upgrade retries when a node fails to upgrade. */
  retryDelay?: number;
};

export const upgradeGroupSettings2Schema: Schema<UpgradeGroupSettings2> = s.object<UpgradeGroupSettings2>({
  isRolling: s.optional(s.boolean()),
  quantity: s.optional(s.int()),
  retryCount: s.optional(s.int()),
  retryDelay: s.optional(s.int()),
});
