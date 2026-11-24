import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessagingStatus = {
  Disabled: "DISABLED",
  Enabled: "ENABLED",
  DisablePending: "DISABLE_PENDING",
} as const;
export type MessagingStatus = (typeof MessagingStatus)[keyof typeof MessagingStatus] | (string & {});

export const messagingStatusSchema: EnumSchema<MessagingStatus> = s.enumOf<MessagingStatus>(MessagingStatus);
