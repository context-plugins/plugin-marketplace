import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminant for the completion event variant. */
export const EventType2 = {
  Completion: "completion",
} as const;
export type EventType2 = (typeof EventType2)[keyof typeof EventType2] | (string & {});

export const eventType2Schema: EnumSchema<EventType2> = s.enumOf<EventType2>(EventType2);
