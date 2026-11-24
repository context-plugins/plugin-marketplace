import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The current status of the order. */
export const Status = {
  BrandNew: "brand_new",
  Acknowledged: "acknowledged",
  Picking: "picking",
  Staging: "staging",
  Delivering: "delivering",
  Delivered: "delivered",
  Canceled: "canceled",
  Rescheduled: "rescheduled",
} as const;
export type Status = (typeof Status)[keyof typeof Status] | (string & {});

export const statusSchema: EnumSchema<Status> = s.enumOf<Status>(Status);
