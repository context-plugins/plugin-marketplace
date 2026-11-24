import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortBy = {
  DueDate: "due_date",
  CreatedAt: "created_at",
  CompletedAt: "completed_at",
  Likes: "likes",
  ModifiedAt: "modified_at",
} as const;
export type SortBy = (typeof SortBy)[keyof typeof SortBy] | (string & {});

export const sortBySchema: EnumSchema<SortBy> = s.enumOf<SortBy>(SortBy);
