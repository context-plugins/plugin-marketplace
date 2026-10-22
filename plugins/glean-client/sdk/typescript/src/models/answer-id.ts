import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AnswerId = {
  /** The opaque ID of the Answer. */
  id?: number;
};

export const answerIdSchema: Schema<AnswerId> = s.object<AnswerId>({
  id: s.optional(s.int()),
});
