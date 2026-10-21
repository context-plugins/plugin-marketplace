import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { notificationSchema, type Notification } from "./notification.js";
import { statusTypeSchema, type StatusType } from "./status-type.js";

/** Source configuration with optional Notifications and runtime status. */
export type InputResponse = {
  /** Notifications attached to the Source. */
  notifications?: Notification[];
  /**
   * Runtime status: health, metrics, and optional persistent-queue info. Fields may be absent when
   * data is unavailable.
   */
  status?: StatusType;
};

export const inputResponseSchema: Schema<InputResponse> = s.object<InputResponse>({
  notifications: s.optional(s.array(s.lazy(() => notificationSchema))),
  status: s.optional(s.lazy(() => statusTypeSchema)),
});
