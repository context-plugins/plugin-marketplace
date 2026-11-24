import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { clickEventInternalSchema, clickEventSchema, type ClickEvent } from "../click-event.js";
import { leadEventSchema, type LeadEvent } from "../lead-event.js";
import { saleEventInternalSchema, saleEventSchema, type SaleEvent } from "../sale-event.js";

export type EventsResponse =
  | (ClickEvent & { event: "click" })
  | (LeadEvent & { event: "lead" })
  | (SaleEvent & { event: "sale" });

export const eventsResponseInternalSchema: Schema<EventsResponse> = s.discriminatedUnion<EventsResponse>(
  "event",
  {
    click: clickEventInternalSchema,
    lead: leadEventSchema,
    sale: saleEventInternalSchema,
  },
);

export const eventsResponseSchema: Schema<EventsResponse> = s.lazySchema(() =>
  s.discriminatedUnion<EventsResponse>("event", {
    click: clickEventSchema,
    lead: leadEventSchema,
    sale: saleEventSchema,
  }),
);
