import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The event type */
export const EventType = {
  Started: "started",
  Failed: "failed",
  Finished: "finished",
  Custom: "custom",
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType] | (string & {});

export const eventTypeSchema: EnumSchema<EventType> = s.enumOf<EventType>(EventType);
