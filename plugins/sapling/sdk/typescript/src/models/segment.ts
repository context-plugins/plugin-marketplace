import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Segment = {
  end?: number;
  score?: number;
  start?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentSchema: Schema<Segment> = s.object<Segment>(
  {
    end: s.optional(s.int()),
    score: s.optional(s.float64()),
    start: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
