import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GetAnswerRequest = {
  /** The opaque ID of the Answer. */
  id?: number;
  /**
   * Glean Document ID of the Answer. The Glean Document ID is supported for cases where the Answer
   * ID isn't available. If both are available, using the Answer ID is preferred.
   */
  docId?: string;
};

export const getAnswerRequestSchema: Schema<GetAnswerRequest> = s.object<GetAnswerRequest>({
  id: s.optional(s.int()),
  docId: s.optional(s.string()),
});
