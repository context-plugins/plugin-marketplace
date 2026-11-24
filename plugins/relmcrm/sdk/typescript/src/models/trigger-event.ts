import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TriggerEvent = {
  ContactCreated: "contact.created",
  ContactUpdated: "contact.updated",
  DealCreated: "deal.created",
  DealUpdated: "deal.updated",
  DealStageChanged: "deal.stage_changed",
} as const;
export type TriggerEvent = (typeof TriggerEvent)[keyof typeof TriggerEvent] | (string & {});

export const triggerEventSchema: EnumSchema<TriggerEvent> = s.enumOf<TriggerEvent>(TriggerEvent);
