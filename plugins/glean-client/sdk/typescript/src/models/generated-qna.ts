import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { followupActionSchema, type FollowupAction } from "./followup-action.js";
import { status1Schema, type Status1 } from "./status1.js";
import { textRangeSchema, type TextRange } from "./text-range.js";

export type GeneratedQna = {
  /** Search query rephrased into a question. */
  question?: string;
  /** Answer generated for the given query or the generated question. */
  answer?: string;
  /** List of all follow-up prompts generated for the given query or the generated question. */
  followUpPrompts?: string[];
  /** List of follow-up actions generated for the given query or the generated question. */
  followupActions?: FollowupAction[];
  /** Answer subsections to mark with special formatting (citations, bolding etc) */
  ranges?: TextRange[];
  /** Status of backend generating the answer */
  status?: Status1;
  /** An opaque cursor representing the search request */
  cursor?: string;
  /**
   * An opaque token that represents this particular result in this particular query. To be used for
   * /feedback reporting.
   */
  trackingToken?: string;
};

export const generatedQnaSchema: Schema<GeneratedQna> = s.object<GeneratedQna>({
  question: s.optional(s.string()),
  answer: s.optional(s.string()),
  followUpPrompts: s.optional(s.array(s.string())),
  followupActions: s.optional(s.array(s.lazy(() => followupActionSchema))),
  ranges: s.optional(s.array(s.lazy(() => textRangeSchema))),
  status: s.optional(s.lazy(() => status1Schema)),
  cursor: s.optional(s.string()),
  trackingToken: s.optional(s.string()),
});
