import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enum for Check delivery type. */
export const CheckDeliveryTypeResponse = {
  Standard: "STANDARD",
  Ups1Day: "UPS_1DAY",
  Ups2Day: "UPS_2DAY",
  Ups3Day: "UPS_3DAY",
  RtpDelivery: "RTP_DELIVERY",
  Undefined: "UNDEFINED",
} as const;
export type CheckDeliveryTypeResponse =
  | (typeof CheckDeliveryTypeResponse)[keyof typeof CheckDeliveryTypeResponse]
  | (string & {});

export const checkDeliveryTypeResponseSchema: EnumSchema<CheckDeliveryTypeResponse> =
  s.enumOf<CheckDeliveryTypeResponse>(CheckDeliveryTypeResponse);
