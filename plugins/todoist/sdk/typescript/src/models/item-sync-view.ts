import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { durationSchema, type Duration } from "./unions/duration.js";

/**
 * A class with fields representing an ItemView which will be returned to clients in a sync (or
 * sync-like) response.
 */
export type ItemSyncView = {
  /** String ID of the user who owns the task. */
  userId: string;
  /** String ID of the task. */
  id: string;
  /** String ID of the project that contains the task. */
  projectId: string;
  /** String ID of the section that contains the task, or `null` if the task is not in a section. */
  sectionId: string | null;
  /** String ID of the parent task, or `null` if this is a top-level task. */
  parentId: string | null;
  /** String ID of the user who created the task, or `null` if unknown. */
  addedByUid: string | null;
  /** String ID of the user who assigned the task, or `null` if unassigned. */
  assignedByUid: string | null;
  /** String ID of the user responsible for the task, or `null` if unassigned. */
  responsibleUid: string | null;
  /** Names of labels attached to the task. */
  labels: string[];
  /** Deadline details for the task, or `null` when the task has no deadline. */
  deadline: Record<string, string | null> | null;
  /** Task duration details, or `null` when the task has no duration. */
  duration: Record<string, Duration> | null;
  /** Whether the task is collapsed in the user's view. */
  isCollapsed: boolean;
  /** Whether the task is completed. */
  checked: boolean;
  /** Whether the task is deleted. */
  isDeleted: boolean;
  /** Date and time when the task was created, or `null` if unknown. */
  addedAt: Date | null;
  /** Date and time when the task was completed, or `null` if active. */
  completedAt: Date | null;
  /** String ID of the user who completed the task, or `null` if active. */
  completedByUid: string | null;
  /** Date and time when the task was last updated, or `null` if unknown. */
  updatedAt: Date | null;
  /** Due date details for the task, or `null` when the task has no due date. */
  due: Record<string, unknown> | null;
  /** Task priority from 1 (normal) to 4 (urgent). */
  priority: number;
  /** Position of the task among sibling tasks. */
  childOrder: number;
  /**
   * Fractional-indexing order key: tasks sort by comparing keys lexicographically among siblings
   * sharing the same project, section and parent task. May be `null` for tasks not yet migrated.
   */
  orderKey: string | null;
  /** Task content. */
  content: string;
  /** Task description. */
  description: string;
  /** **Deprecated**: only returns 0 and is marked for removal. */
  noteCount: number;
  /** Task order for day-based views. */
  dayOrder: number;
  /**
   * Number of times the task has been marked as completed. Increments on every completion,
   * including recurring occurrences and re-completions of a previously reopened task. Decremented
   * when a recurring completion is undone.
   */
  completedCount: number;
  /**
   * Number of times the task's due date has been rescheduled by the user. Increments on any
   * due-date change between two set dates (forward or backward); recurring completions and undos
   * are not counted.
   */
  postponedCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemSyncViewSchema: Schema<ItemSyncView> = s.object<ItemSyncView>(
  {
    userId: s.string(),
    id: s.string(),
    projectId: s.string(),
    sectionId: s.nullable(s.string()),
    parentId: s.nullable(s.string()),
    addedByUid: s.nullable(s.string()),
    assignedByUid: s.nullable(s.string()),
    responsibleUid: s.nullable(s.string()),
    labels: s.array(s.string()),
    deadline: s.nullable(s.record(s.string(), s.nullable(s.string()))),
    duration: s.nullable(
      s.record(
        s.string(),
        s.lazy(() => durationSchema),
      ),
    ),
    isCollapsed: s.boolean(),
    checked: s.boolean(),
    isDeleted: s.boolean(),
    addedAt: s.nullable(s.dateTime()),
    completedAt: s.nullable(s.dateTime()),
    completedByUid: s.nullable(s.string()),
    updatedAt: s.nullable(s.dateTime()),
    due: s.nullable(s.record(s.string(), s.unknown())),
    priority: s.int(),
    childOrder: s.int(),
    orderKey: s.nullable(s.string()),
    content: s.string(),
    description: s.string(),
    noteCount: s.int(),
    dayOrder: s.int(),
    completedCount: s.int(),
    postponedCount: s.int(),
    _keysMap: {
      userId: "user_id",
      projectId: "project_id",
      sectionId: "section_id",
      parentId: "parent_id",
      addedByUid: "added_by_uid",
      assignedByUid: "assigned_by_uid",
      responsibleUid: "responsible_uid",
      isCollapsed: "is_collapsed",
      isDeleted: "is_deleted",
      addedAt: "added_at",
      completedAt: "completed_at",
      completedByUid: "completed_by_uid",
      updatedAt: "updated_at",
      childOrder: "child_order",
      orderKey: "order_key",
      noteCount: "note_count",
      dayOrder: "day_order",
      completedCount: "completed_count",
      postponedCount: "postponed_count",
    },
  },
  { additionalProperties: s.json() },
);
