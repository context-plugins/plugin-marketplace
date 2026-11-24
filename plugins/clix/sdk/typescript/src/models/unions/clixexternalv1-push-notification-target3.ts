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

/** Target device and/or user for the push notification. */
export type Clixexternalv1PushNotificationTarget3 =
  | Clixexternalv1PushNotificationTarget
  | Clixexternalv1PushNotificationTarget1
  | Clixexternalv1PushNotificationTarget2;

export const clixexternalv1PushNotificationTarget3Schema: Schema<Clixexternalv1PushNotificationTarget3> =
  s.of<Clixexternalv1PushNotificationTarget3>(
    s.union([
      s.lazy(() => clixexternalv1PushNotificationTargetSchema),
      s.lazy(() => clixexternalv1PushNotificationTarget1Schema),
      s.lazy(() => clixexternalv1PushNotificationTarget2Schema),
    ]),
  );
