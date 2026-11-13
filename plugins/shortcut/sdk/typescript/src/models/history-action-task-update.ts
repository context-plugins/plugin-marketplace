import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { historyChangesTaskSchema, type HistoryChangesTask } from "./history-changes-task.js";

/** An action representing a Task being updated. */
export type HistoryActionTaskUpdate = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "update" */
  action?: "update";
  /** The changes that have occurred as a result of the action. */
  changes: HistoryChangesTask;
  /** Whether or not the Task is complete. */
  complete?: boolean;
  /** The description of the Task. */
  description: string;
  /** The Story ID that contains the Task. */
  storyId: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyActionTaskUpdateSchema: Schema<HistoryActionTaskUpdate> =
  s.object<HistoryActionTaskUpdate>(
    {
      id: s.int(),
      entityType: s.string(),
      action: s.defaulted(s.literal("update"), "update"),
      changes: historyChangesTaskSchema,
      complete: s.optional(s.boolean()),
      description: s.string(),
      storyId: s.int(),
      _keysMap: {
        entityType: "entity_type",
        storyId: "story_id",
      },
    },
    { additionalProperties: s.json() },
  );
