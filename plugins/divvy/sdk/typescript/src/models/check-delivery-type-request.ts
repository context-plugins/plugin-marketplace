import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for Check delivery type. */
export const CheckDeliveryTypeRequest = {
  Standard: "STANDARD",
  Ups1Day: "UPS_1DAY",
  Ups2Day: "UPS_2DAY",
  Ups3Day: "UPS_3DAY",
  RtpDelivery: "RTP_DELIVERY",
} as const;
export type CheckDeliveryTypeRequest =
  | (typeof CheckDeliveryTypeRequest)[keyof typeof CheckDeliveryTypeRequest]
  | (string & {});

export const checkDeliveryTypeRequestSchema: EnumSchema<CheckDeliveryTypeRequest> =
  s.enumOf<CheckDeliveryTypeRequest>(CheckDeliveryTypeRequest);
