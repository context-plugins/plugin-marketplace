import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AcceptedOfferPriceStatus = {
  Found: "found",
  Pending: "pending",
  NotAvailable: "not_available",
  Unknown: "unknown",
} as const;
export type AcceptedOfferPriceStatus =
  | (typeof AcceptedOfferPriceStatus)[keyof typeof AcceptedOfferPriceStatus]
  | (string & {});

export const acceptedOfferPriceStatusSchema: EnumSchema<AcceptedOfferPriceStatus> =
  s.enumOf<AcceptedOfferPriceStatus>(AcceptedOfferPriceStatus);
