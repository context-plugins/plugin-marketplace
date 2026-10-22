import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventTypeSchema, type EventType } from "./event-type.js";
import { timeIntervalSchema, type TimeInterval } from "./time-interval.js";

/** A generic, light-weight calendar event. */
export type AnonymousEvent = {
  time?: TimeInterval;
  /** The nature of the event, for example "out of office". */
  eventType?: EventType;
};

export const anonymousEventSchema: Schema<AnonymousEvent> = s.object<AnonymousEvent>({
  time: s.optional(s.lazy(() => timeIntervalSchema)),
  eventType: s.optional(s.lazy(() => eventTypeSchema)),
});
