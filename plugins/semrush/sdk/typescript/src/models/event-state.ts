import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * State of event processing.
 * * 1 - Event has been registered and awaiting processing
 * * 2 - Event processing was delayed
 * * 3 - Event was processed
 * * 4 - Event has nothing to do with
 * * 5 - Event processing was blocked by internal rules
 */
export const EventState = {
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
  _5: 5,
} as const;
export type EventState = (typeof EventState)[keyof typeof EventState] | (number & {});

export const eventStateSchema: EnumSchema<EventState> = s.enumOf<EventState>(EventState);
