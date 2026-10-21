import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Checkpoint settings used to resume processing after an interruption. Not applied when fan-out is
 * enabled.
 */
export type Checkpointing1 = {
  /** Resume processing files after an interruption */
  enabled: boolean;
  /**
   * The number of times to retry processing when a processing error occurs. If Skip file on error
   * is enabled, this setting is ignored.
   */
  retries?: number;
};

export const checkpointing1Schema: Schema<Checkpointing1> = s.object<Checkpointing1>({
  enabled: s.boolean(),
  retries: s.optional(s.float64()),
});
