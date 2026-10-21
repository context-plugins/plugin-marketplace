import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Orphan file recovery */
export type OrphanFileRecovery = {
  /**
   * Periodically scan the staging directory for files not tracked by any Worker manifest to recover
   * them
   */
  disabled?: boolean;
  /** Minimum interval between reconciliation runs */
  periodMin?: number;
};

export const orphanFileRecoverySchema: Schema<OrphanFileRecovery> = s.object<OrphanFileRecovery>({
  disabled: s.optional(s.boolean()),
  periodMin: s.optional(s.float64()),
});
