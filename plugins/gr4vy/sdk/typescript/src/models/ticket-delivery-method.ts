import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TicketDeliveryMethod = {
  Electronic: "electronic",
  Other: "other",
} as const;
export type TicketDeliveryMethod =
  | (typeof TicketDeliveryMethod)[keyof typeof TicketDeliveryMethod]
  | (string & {});

export const ticketDeliveryMethodSchema: EnumSchema<TicketDeliveryMethod> =
  s.enumOf<TicketDeliveryMethod>(TicketDeliveryMethod);
