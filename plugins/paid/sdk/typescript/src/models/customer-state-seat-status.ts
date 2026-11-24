import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomerStateSeatStatus = {
  Assigned: "assigned",
  Unassigned: "unassigned",
} as const;
export type CustomerStateSeatStatus =
  | (typeof CustomerStateSeatStatus)[keyof typeof CustomerStateSeatStatus]
  | (string & {});

export const customerStateSeatStatusSchema: EnumSchema<CustomerStateSeatStatus> =
  s.enumOf<CustomerStateSeatStatus>(CustomerStateSeatStatus);
