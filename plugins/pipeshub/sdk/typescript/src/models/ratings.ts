import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Ratings = {
  /** How accurate was the information (1-5) */
  accuracy?: number;
  /** How relevant was the response (1-5) */
  relevance?: number;
  /** How complete was the answer (1-5) */
  completeness?: number;
  /** How clear was the explanation (1-5) */
  clarity?: number;
};

export const ratingsSchema: Schema<Ratings> = s.object<Ratings>({
  accuracy: s.optional(s.int()),
  relevance: s.optional(s.int()),
  completeness: s.optional(s.int()),
  clarity: s.optional(s.int()),
});
