import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Delivery mode for Notifications.<br/><br/> <code>direct</code>: Notification is sent directly to
 * Notification targets that are defined in <code>templateTargetPairs</code>.<br/><br/>
 * <code>policy</code>: Notification is routed through Notification Policies, which match alerts by
 * labels and route them to Notification targets without relying on
 * <code>templateTargetPairs</code>.
 */
export const NotificationMode2 = {
  Direct: "direct",
  Policy: "policy",
} as const;
export type NotificationMode2 = (typeof NotificationMode2)[keyof typeof NotificationMode2] | (string & {});

export const notificationMode2Schema: EnumSchema<NotificationMode2> =
  s.enumOf<NotificationMode2>(NotificationMode2);
