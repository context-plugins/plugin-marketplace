import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TranscriptSegment = {
  end: number;
  speaker?: string | null;
  start: number;
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptSegmentSchema: Schema<TranscriptSegment> = s.object<TranscriptSegment>(
  {
    end: s.float64(),
    speaker: s.optionalNullable(s.string()),
    start: s.float64(),
    text: s.string(),
  },
  { additionalProperties: s.json() },
);
