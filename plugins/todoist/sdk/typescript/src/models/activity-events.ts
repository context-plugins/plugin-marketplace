import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activityObjectTypeSchema, type ActivityObjectType } from "./activity-object-type.js";

export type ActivityEvents = {
  /**
   * The type of object this activity relates to. Valid values are `"project"`, `"item"`, `"note"`,
   * or `"section"`.
   */
  objectType: ActivityObjectType;
  /**
   * The unique identifier of the object this activity relates to (project, item, note, or section
   * ID).
   */
  objectId: string;
  /**
   * The type of event that occurred. Valid values are: `"added"` (object was created), `"deleted"`
   * (object was removed), `"updated"` (object was modified), `"archived"` (object was archived),
   * `"unarchived"` (object was restored from archive), `"completed"` (task was completed),
   * `"uncompleted"` (task was marked as incomplete), `"shared"` (project was shared with a user),
   * `"left"` (user left a shared project), `"moved"` (task was moved between projects or between
   * sections).
   */
  eventType: string;
  /** The timestamp when this activity occurred. */
  eventDate: Date;
  /** The internal unique identifier for this activity log entry. */
  id?: number | null;
  /**
   * The ID of the project that contains the object this activity relates to. For project
   * activities, this is the project itself. For item and note activities, this is the project
   * containing the item or note.
   */
  parentProjectId?: string | null;
  /**
   * For note (comment) activities, the ID of the item (task) that the note is attached to. `null`
   * for project and item activities.
   */
  parentItemId?: string | null;
  /**
   * The ID of the user who is responsible for the event, which only makes sense in shared projects,
   * items and notes, and is `null` for non-shared objects.
   */
  initiatorId?: string | null;
  /** Internal ID for the extra activity data row. */
  extraDataId?: number | null;
  /**
   * This object contains at least the `name` of the project, or the `content` of an item or
   * comment, and optionally the `last_name` if a project was renamed, the `last_content` if an item
   * or note was renamed, the `due_date` and `last_due_date` if an item's due date changed, the
   * `responsible_uid` and `last_responsible_uid` if an item's responsible uid changed, the
   * `description` and `last_description` if an item's description changed, the `priority` and
   * `last_priority` if an item's priority changed, the `deadline` and `last_deadline` if an item's
   * deadline changed, the `duration`, `last_duration`, `duration_unit`, and `last_duration_unit` if
   * an item's duration changed, the `source_project_id` and `destination_project_id` if a task was
   * moved between projects, the `section_id` on completion snapshots and section-move events, the
   * `last_section_id` on section-move events indicating the previous section, and the `client` that
   * caused the logging of the event
   */
  extraData?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activityEventsSchema: Schema<ActivityEvents> = s.object<ActivityEvents>(
  {
    objectType: activityObjectTypeSchema,
    objectId: s.string(),
    eventType: s.string(),
    eventDate: s.dateTime(),
    id: s.optionalNullable(s.int()),
    parentProjectId: s.optionalNullable(s.string()),
    parentItemId: s.optionalNullable(s.string()),
    initiatorId: s.optionalNullable(s.string()),
    extraDataId: s.optionalNullable(s.int()),
    extraData: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      objectType: "object_type",
      objectId: "object_id",
      eventType: "event_type",
      eventDate: "event_date",
      parentProjectId: "parent_project_id",
      parentItemId: "parent_item_id",
      initiatorId: "initiator_id",
      extraDataId: "extra_data_id",
      extraData: "extra_data",
    },
  },
  { additionalProperties: s.json() },
);
