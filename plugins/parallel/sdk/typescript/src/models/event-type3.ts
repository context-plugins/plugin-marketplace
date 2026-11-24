import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminant for the error event variant. */
export const EventType3 = {
  Error: "error",
} as const;
export type EventType3 = (typeof EventType3)[keyof typeof EventType3] | (string & {});

export const eventType3Schema: EnumSchema<EventType3> = s.enumOf<EventType3>(EventType3);
