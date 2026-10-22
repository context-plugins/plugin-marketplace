import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  notificationSmtpTargetConfig2Schema,
  type NotificationSmtpTargetConfig2,
} from "./notification-smtp-target-config2.js";

export type NotificationTargetConfig = {
  /** Simple Mail Transfer Protocol (SMTP) configuration for the Notification target. */
  conf?: NotificationSmtpTargetConfig2;
  /** The <code>id</code> of the Notification target. */
  id: string;
};

export const notificationTargetConfigSchema: Schema<NotificationTargetConfig> =
  s.object<NotificationTargetConfig>({
    conf: s.optional(s.lazy(() => notificationSmtpTargetConfig2Schema)),
    id: s.string(),
  });
