import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CitationFeedback = {
  /** Auto-generated sub-document identifier */
  id?: string;
  citationId?: string;
  isRelevant?: boolean;
  relevanceScore?: number;
  comment?: string;
};

export const citationFeedbackSchema: Schema<CitationFeedback> = s.object<CitationFeedback>({
  id: s.optional(s.string()),
  citationId: s.optional(s.string()),
  isRelevant: s.optional(s.boolean()),
  relevanceScore: s.optional(s.int()),
  comment: s.optional(s.string()),
  _keysMap: {
    id: "_id",
  },
});
