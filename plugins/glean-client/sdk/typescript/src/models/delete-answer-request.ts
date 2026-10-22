import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DeleteAnswerRequest = {
  /** The opaque ID of the Answer. */
  id: number;
  /**
   * Glean Document ID of the Answer. The Glean Document ID is supported for cases where the Answer
   * ID isn't available. If both are available, using the Answer ID is preferred.
   */
  docId?: string;
};

export const deleteAnswerRequestSchema: Schema<DeleteAnswerRequest> = s.object<DeleteAnswerRequest>({
  id: s.int(),
  docId: s.optional(s.string()),
});
