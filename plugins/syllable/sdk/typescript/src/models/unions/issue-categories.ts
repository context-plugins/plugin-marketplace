import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Descriptions of issues occurring in the labeled call */
export type IssueCategories = string[];

export const issueCategoriesSchema: Schema<IssueCategories> = s.of<IssueCategories>(
  s.union([s.array(s.string())]),
);
