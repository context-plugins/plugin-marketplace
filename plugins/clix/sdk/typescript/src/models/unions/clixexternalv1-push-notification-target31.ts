import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  clixexternalv1PushNotificationTargetSchema,
  type Clixexternalv1PushNotificationTarget,
} from "../clixexternalv1-push-notification-target.js";
import {
  clixexternalv1PushNotificationTarget1Schema,
  type Clixexternalv1PushNotificationTarget1,
} from "../clixexternalv1-push-notification-target1.js";
import {
  clixexternalv1PushNotificationTarget2Schema,
  type Clixexternalv1PushNotificationTarget2,
} from "../clixexternalv1-push-notification-target2.js";

/**
 * Target information for the push notification. Only one of project_user_id, device_id, or user_id
 * should be present.
 */
export type Clixexternalv1PushNotificationTarget31 =
  | Clixexternalv1PushNotificationTarget
  | Clixexternalv1PushNotificationTarget1
  | Clixexternalv1PushNotificationTarget2;

export const clixexternalv1PushNotificationTarget31Schema: Schema<Clixexternalv1PushNotificationTarget31> =
  s.of<Clixexternalv1PushNotificationTarget31>(
    s.union([
      s.lazy(() => clixexternalv1PushNotificationTargetSchema),
      s.lazy(() => clixexternalv1PushNotificationTarget1Schema),
      s.lazy(() => clixexternalv1PushNotificationTarget2Schema),
    ]),
  );
