import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Segment = {
  /** Start time in seconds. */
  start?: number;
  /** Cue duration in seconds. */
  duration?: number;
  text?: string;
  /** Speaker id (0, 1, …) on diarized podcast transcripts only; absent everywhere else. */
  speaker?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentSchema: Schema<Segment> = s.object<Segment>(
  {
    start: s.optional(s.float64()),
    duration: s.optional(s.float64()),
    text: s.optional(s.string()),
    speaker: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
