import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reminderDueAttributeSchema, type ReminderDueAttribute } from "./reminder-due-attribute.js";
import { reminderServiceTypeSchema, type ReminderServiceType } from "./reminder-service-type.js";
import { ReminderType, reminderTypeSchema } from "./reminder-type.js";

export type Body28 = {
  /** String ID of the task */
  taskId: string;
  /** Type of the reminder: 'relative' or 'absolute' @default ReminderType.Relative */
  reminderType?: ReminderType;
  /** Minutes before due time to trigger (for relative reminders) */
  minuteOffset?: number | null;
  /** Due date dictionary for absolute reminders. */
  due?: ReminderDueAttribute | null;
  service?: ReminderServiceType;
  /** @default false */
  isUrgent?: boolean;
  /**
   * String ID of the user who receives the reminder. Must be a collaborator of the task's project.
   * Defaults to the user creating the reminder. To find User IDs, use [Get
   * user](#operation/user_info_api_v1_user_get) for your own ID or [Get all
   * collaborators](#operation/get_project_collaborators_api_v1_projects__project_id__collaborators_get)
   * for project members.
   */
  notifyUid?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body28Schema: Schema<Body28> = s.object<Body28>(
  {
    taskId: s.string(),
    reminderType: s.defaulted(reminderTypeSchema, ReminderType.Relative),
    minuteOffset: s.optionalNullable(s.int()),
    due: s.optionalNullable(s.lazy(() => reminderDueAttributeSchema)),
    service: s.optional(s.lazy(() => reminderServiceTypeSchema)),
    isUrgent: s.defaulted(s.boolean(), false),
    notifyUid: s.optionalNullable(s.string()),
    _keysMap: {
      taskId: "task_id",
      reminderType: "reminder_type",
      minuteOffset: "minute_offset",
      isUrgent: "is_urgent",
      notifyUid: "notify_uid",
    },
  },
  { additionalProperties: s.json() },
);
