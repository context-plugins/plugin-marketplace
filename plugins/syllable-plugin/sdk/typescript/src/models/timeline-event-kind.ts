import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TimelineEventKind = {
  Transcript: "transcript",
  Tool: "tool",
  Latency: "latency",
} as const;
export type TimelineEventKind = (typeof TimelineEventKind)[keyof typeof TimelineEventKind] | (string & {});

export const timelineEventKindSchema: EnumSchema<TimelineEventKind> =
  s.enumOf<TimelineEventKind>(TimelineEventKind);
