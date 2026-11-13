import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectCompletedItemSchema, type ProjectCompletedItem } from "./project-completed-item.js";

/** Completion statistics for a single day. */
export type DailyCompletionItem = {
  /** Date for this daily completion data (ISO 8601 format: YYYY-MM-DD) */
  date: string;
  /** Per-project completion breakdown for this day */
  items: ProjectCompletedItem[];
  /** Total number of tasks completed across all projects on this day */
  totalCompleted: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dailyCompletionItemSchema: Schema<DailyCompletionItem> = s.object<DailyCompletionItem>(
  {
    date: s.dateOnly(),
    items: s.array(s.lazy(() => projectCompletedItemSchema)),
    totalCompleted: s.int(),
    _keysMap: {
      totalCompleted: "total_completed",
    },
  },
  { additionalProperties: s.json() },
);
