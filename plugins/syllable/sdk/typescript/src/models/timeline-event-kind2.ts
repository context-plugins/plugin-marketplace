import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Which stream this event came from */
export const TimelineEventKind2 = {
  Transcript: "transcript",
  Tool: "tool",
  Latency: "latency",
} as const;
export type TimelineEventKind2 = (typeof TimelineEventKind2)[keyof typeof TimelineEventKind2] | (string & {});

export const timelineEventKind2Schema: EnumSchema<TimelineEventKind2> =
  s.enumOf<TimelineEventKind2>(TimelineEventKind2);
