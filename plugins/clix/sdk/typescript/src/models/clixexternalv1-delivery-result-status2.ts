import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Delivery status of the push notification. */
export const Clixexternalv1DeliveryResultStatus2 = {
  DeliveryResultStatusSucceed: "DELIVERY_RESULT_STATUS_SUCCEED",
  DeliveryResultStatusFailed: "DELIVERY_RESULT_STATUS_FAILED",
} as const;
export type Clixexternalv1DeliveryResultStatus2 =
  | (typeof Clixexternalv1DeliveryResultStatus2)[keyof typeof Clixexternalv1DeliveryResultStatus2]
  | (string & {});

export const clixexternalv1DeliveryResultStatus2Schema: EnumSchema<Clixexternalv1DeliveryResultStatus2> =
  s.enumOf<Clixexternalv1DeliveryResultStatus2>(Clixexternalv1DeliveryResultStatus2);
