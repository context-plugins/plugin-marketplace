import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Completion statistics for a specific project. */
export type ProjectCompletedItem = {
  /** Project ID (v1 or v2 format depending on API version) */
  id: string;
  /** Number of tasks completed in this project during the time period */
  completed: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectCompletedItemSchema: Schema<ProjectCompletedItem> = s.object<ProjectCompletedItem>(
  {
    id: s.string(),
    completed: s.int(),
  },
  { additionalProperties: s.json() },
);
