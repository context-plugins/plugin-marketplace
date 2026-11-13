import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reminderDueAttributeSchema, type ReminderDueAttribute } from "./reminder-due-attribute.js";
import { reminderServiceTypeSchema, type ReminderServiceType } from "./reminder-service-type.js";

export type Body3 = {
  /** Minutes before due time to trigger (for relative reminders). */
  minuteOffset?: number | null;
  /** Due date dictionary for absolute reminders. */
  due?: ReminderDueAttribute | null;
  /** Notification service type: 'email', 'push'. */
  service?: ReminderServiceType;
  /**
   * Whether the reminder is an urgent reminder. Urgent reminders trigger an alarm notification on
   * the user's designated urgent reminder device. Omit this field to keep it unchanged.
   */
  isUrgent?: boolean;
  /**
   * String ID of the user who receives the reminder. Must be a collaborator of the task's project.
   * To find User IDs, use [Get user](#operation/user_info_api_v1_user_get) for your own ID or [Get
   * all
   * collaborators](#operation/get_project_collaborators_api_v1_projects__project_id__collaborators_get)
   * for project members. Passing null or omitting this field will leave it unchanged.
   */
  notifyUid?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body3Schema: Schema<Body3> = s.object<Body3>(
  {
    minuteOffset: s.optionalNullable(s.int()),
    due: s.optionalNullable(s.lazy(() => reminderDueAttributeSchema)),
    service: s.optional(s.lazy(() => reminderServiceTypeSchema)),
    isUrgent: s.optional(s.boolean()),
    notifyUid: s.optionalNullable(s.string()),
    _keysMap: {
      minuteOffset: "minute_offset",
      isUrgent: "is_urgent",
      notifyUid: "notify_uid",
    },
  },
  { additionalProperties: s.json() },
);
