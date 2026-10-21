import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SemanticSearchHistoryPaginationField = {
  type: string;
  current: number;
  min: number;
  max: number;
  default: number;
  description: string;
  applied: boolean;
};

export const semanticSearchHistoryPaginationFieldSchema: Schema<SemanticSearchHistoryPaginationField> =
  s.object<SemanticSearchHistoryPaginationField>({
    type: s.string(),
    current: s.int(),
    min: s.int(),
    max: s.int(),
    default: s.int(),
    description: s.string(),
    applied: s.boolean(),
  });
