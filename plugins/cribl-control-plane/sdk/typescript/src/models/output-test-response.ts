import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OutputTestResponse = {
  /**
   * Additional details about the Destination test, such as per-event results and transport-level
   * information.
   */
  details?: Record<string, unknown>;
  /** Error message that describes a failed Destination test. */
  error?: string;
  /** The <code>id</code> of the Destination that was tested. */
  outputId: string;
  /** If <code>true</code>, the Destination test succeeded. Otherwise, <code>false</code>. */
  success: boolean;
  /** Human-readable description for a successful Destination test result. */
  successDetail?: string;
};

export const outputTestResponseSchema: Schema<OutputTestResponse> = s.object<OutputTestResponse>({
  details: s.optional(s.record(s.string(), s.unknown())),
  error: s.optional(s.string()),
  outputId: s.string(),
  success: s.boolean(),
  successDetail: s.optional(s.string()),
});
