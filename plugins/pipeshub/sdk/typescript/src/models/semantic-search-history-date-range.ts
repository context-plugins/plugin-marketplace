import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { currentSchema, type Current } from "./current.js";

export type SemanticSearchHistoryDateRange = {
  type: string;
  description: string;
  format: string;
  current: Current;
  applied: boolean;
};

export const semanticSearchHistoryDateRangeSchema: Schema<SemanticSearchHistoryDateRange> =
  s.object<SemanticSearchHistoryDateRange>({
    type: s.string(),
    description: s.string(),
    format: s.string(),
    current: currentSchema,
    applied: s.boolean(),
  });
