import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Supported ordering options for action items. */
export const ActionItemOrderBy = {
  CreatedAtDesc: "created_at_desc",
  CreatedAtAsc: "created_at_asc",
  UpdatedAtDesc: "updated_at_desc",
  UpdatedAtAsc: "updated_at_asc",
  DueDate: "due_date",
} as const;
export type ActionItemOrderBy = (typeof ActionItemOrderBy)[keyof typeof ActionItemOrderBy] | (string & {});

export const actionItemOrderBySchema: EnumSchema<ActionItemOrderBy> =
  s.enumOf<ActionItemOrderBy>(ActionItemOrderBy);
