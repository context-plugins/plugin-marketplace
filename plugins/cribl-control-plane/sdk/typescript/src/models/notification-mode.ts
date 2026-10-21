import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NotificationMode = {
  Direct: "direct",
  Policy: "policy",
} as const;
export type NotificationMode = (typeof NotificationMode)[keyof typeof NotificationMode] | (string & {});

export const notificationModeSchema: EnumSchema<NotificationMode> =
  s.enumOf<NotificationMode>(NotificationMode);
