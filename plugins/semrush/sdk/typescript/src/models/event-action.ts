import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionNotificationSchema, type ActionNotification } from "./action-notification.js";

/** Action that can be taken on event */
export type EventAction = {
  /** Global action identifier */
  id?: string;
  /** Action create time in ISO format */
  ts?: Date;
  /** Action type */
  type?: string;
  /** Did action accomplished */
  finished?: boolean;
  /** Action notification details */
  notification?: ActionNotification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventActionSchema: Schema<EventAction> = s.object<EventAction>(
  {
    id: s.optional(s.string()),
    ts: s.optional(s.dateTime()),
    type: s.optional(s.string()),
    finished: s.optional(s.boolean()),
    notification: s.optional(s.lazy(() => actionNotificationSchema)),
  },
  { additionalProperties: s.json() },
);
