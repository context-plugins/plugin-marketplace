import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AnswerDocId = {
  /**
   * Glean Document ID of the Answer. The Glean Document ID is supported for cases where the Answer
   * ID isn't available. If both are available, using the Answer ID is preferred.
   */
  docId?: string;
};

export const answerDocIdSchema: Schema<AnswerDocId> = s.object<AnswerDocId>({
  docId: s.optional(s.string()),
});
