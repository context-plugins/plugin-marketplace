import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminant for the snapshot event variant. */
export const EventType1 = {
  Snapshot: "snapshot",
} as const;
export type EventType1 = (typeof EventType1)[keyof typeof EventType1] | (string & {});

export const eventType1Schema: EnumSchema<EventType1> = s.enumOf<EventType1>(EventType1);
