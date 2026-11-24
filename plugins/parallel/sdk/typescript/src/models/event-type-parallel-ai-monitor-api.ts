import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Discriminant for the event_stream event variant. */
export const EventTypeParallelAiMonitorApi = {
  EventStream: "event_stream",
} as const;
export type EventTypeParallelAiMonitorApi =
  | (typeof EventTypeParallelAiMonitorApi)[keyof typeof EventTypeParallelAiMonitorApi]
  | (string & {});

export const eventTypeParallelAiMonitorApiSchema: EnumSchema<EventTypeParallelAiMonitorApi> =
  s.enumOf<EventTypeParallelAiMonitorApi>(EventTypeParallelAiMonitorApi);
