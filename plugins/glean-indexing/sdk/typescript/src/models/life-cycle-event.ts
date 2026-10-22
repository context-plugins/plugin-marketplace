import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type LifeCycleEvent = {
  /** Type of event */
  event?: Event;
  /** Timestamp of the event */
  timestamp?: string;
};

export const lifeCycleEventSchema: Schema<LifeCycleEvent> = s.object<LifeCycleEvent>({
  event: s.optional(s.lazy(() => eventSchema)),
  timestamp: s.optional(s.string()),
});
