import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Clixexternalv1DeliveryResultStatus = {
  DeliveryResultStatusSucceed: "DELIVERY_RESULT_STATUS_SUCCEED",
  DeliveryResultStatusFailed: "DELIVERY_RESULT_STATUS_FAILED",
} as const;
export type Clixexternalv1DeliveryResultStatus =
  | (typeof Clixexternalv1DeliveryResultStatus)[keyof typeof Clixexternalv1DeliveryResultStatus]
  | (string & {});

export const clixexternalv1DeliveryResultStatusSchema: EnumSchema<Clixexternalv1DeliveryResultStatus> =
  s.enumOf<Clixexternalv1DeliveryResultStatus>(Clixexternalv1DeliveryResultStatus);
