import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectCompletedItemSchema, type ProjectCompletedItem } from "./project-completed-item.js";

/** Completion statistics for a week. */
export type WeeklyCompletionItem = {
  /** Start date of the week (Monday, ISO 8601 format: YYYY-MM-DD) */
  from: string;
  /** End date of the week (Sunday, ISO 8601 format: YYYY-MM-DD) */
  to: string;
  /** Per-project completion breakdown for this week */
  items: ProjectCompletedItem[];
  /** Total number of tasks completed across all projects during this week */
  totalCompleted: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const weeklyCompletionItemSchema: Schema<WeeklyCompletionItem> = s.object<WeeklyCompletionItem>(
  {
    from: s.dateOnly(),
    to: s.dateOnly(),
    items: s.array(s.lazy(() => projectCompletedItemSchema)),
    totalCompleted: s.int(),
    _keysMap: {
      totalCompleted: "total_completed",
    },
  },
  { additionalProperties: s.json() },
);
