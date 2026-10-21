import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NotificationTargetDetails = {
  /** The <code>id</code> of the Notification target. */
  id: string;
  /** The type of the Notification target. */
  type: string;
};

export const notificationTargetDetailsSchema: Schema<NotificationTargetDetails> =
  s.object<NotificationTargetDetails>({
    id: s.string(),
    type: s.string(),
  });
