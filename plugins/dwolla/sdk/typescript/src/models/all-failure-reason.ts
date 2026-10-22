import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AllFailureReason = {
  /** Failure reason code */
  reason: string;
  /** Human-readable explanation of the failure reason */
  description: string;
};

export const allFailureReasonSchema: Schema<AllFailureReason> = s.object<AllFailureReason>({
  reason: s.string(),
  description: s.string(),
});
