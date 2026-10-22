import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchHistoryPaginationFieldSchema,
  type SemanticSearchHistoryPaginationField,
} from "./semantic-search-history-pagination-field.js";

export type Pagination5 = {
  page: SemanticSearchHistoryPaginationField;
  limit: SemanticSearchHistoryPaginationField;
};

export const pagination5Schema: Schema<Pagination5> = s.object<Pagination5>({
  page: semanticSearchHistoryPaginationFieldSchema,
  limit: semanticSearchHistoryPaginationFieldSchema,
});
