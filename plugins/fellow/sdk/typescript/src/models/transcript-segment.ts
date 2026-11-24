import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TranscriptSegment = {
  start: number;
  end: number;
  speaker: string | null;
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptSegmentSchema: Schema<TranscriptSegment> = s.object<TranscriptSegment>(
  {
    start: s.float64(),
    end: s.float64(),
    speaker: s.nullable(s.string()),
    text: s.string(),
  },
  { additionalProperties: s.json() },
);
