import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Delivery status */
export const StatusDidlogicComSmsApi = {
  Created: "created",
  Failed: "failed",
  Sent: "sent",
  DlrError: "dlr_error",
  Delivered: "delivered",
  NotDelivered: "not_delivered",
  Interrupted: "interrupted",
} as const;
export type StatusDidlogicComSmsApi =
  | (typeof StatusDidlogicComSmsApi)[keyof typeof StatusDidlogicComSmsApi]
  | (string & {});

export const statusDidlogicComSmsApiSchema: EnumSchema<StatusDidlogicComSmsApi> =
  s.enumOf<StatusDidlogicComSmsApi>(StatusDidlogicComSmsApi);
