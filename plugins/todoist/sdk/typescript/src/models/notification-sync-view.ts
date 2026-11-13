import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

/**
 * A class with fields representing a NotificationView which will be returned to clients in a sync
 * (or sync-like) response.
 */
export type NotificationSyncView = {
  /** String ID of the reminder. */
  id: string;
  /** String ID of the task that owns the reminder. */
  itemId: string;
  /** String ID of the user who receives the reminder. */
  notifyUid: string;
  /** Whether the reminder is deleted. */
  isDeleted: boolean;
  /** Whether the reminder should be delivered urgently. */
  isUrgent: boolean;
  /** Reminder type. */
  type: Type;
  /** Minutes before the task due time for relative reminders. */
  minuteOffset: number | null;
  /** Datetime when the reminder fires, or `null` if unset. */
  due: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationSyncViewSchema: Schema<NotificationSyncView> = s.object<NotificationSyncView>(
  {
    id: s.string(),
    itemId: s.string(),
    notifyUid: s.string(),
    isDeleted: s.boolean(),
    isUrgent: s.boolean(),
    type: typeSchema,
    minuteOffset: s.nullable(s.int()),
    due: s.nullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      itemId: "item_id",
      notifyUid: "notify_uid",
      isDeleted: "is_deleted",
      isUrgent: "is_urgent",
      minuteOffset: "minute_offset",
    },
  },
  { additionalProperties: s.json() },
);
