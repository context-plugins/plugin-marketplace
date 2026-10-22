import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { textRangeSchema, type TextRange } from "./text-range.js";

export type RelatedQuestion = {
  /** The text of the related question */
  question?: string;
  /** The answer for the related question */
  answer?: string;
  /**
   * Subsections of the answer string to which some special formatting should be applied (eg. bold)
   */
  ranges?: TextRange[];
};

export const relatedQuestionSchema: Schema<RelatedQuestion> = s.object<RelatedQuestion>({
  question: s.optional(s.string()),
  answer: s.optional(s.string()),
  ranges: s.optional(s.array(s.lazy(() => textRangeSchema))),
});
