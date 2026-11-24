import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { transcriptPartial2Schema, type TranscriptPartial2 } from "./transcript-partial2.js";
import { transcriptSegmentSchema, type TranscriptSegment } from "./transcript-segment.js";

export type Transcript = {
  partial?: TranscriptPartial2 | null;
  segments: TranscriptSegment[];
  speakers: string[];
  totalSegments: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transcriptProperties: s.Shape<Transcript> = {
  partial: s.optionalNullable(s.lazy(() => transcriptPartial2Schema)),
  segments: s.array(s.lazy(() => transcriptSegmentSchema)),
  speakers: s.array(s.string()),
  totalSegments: s.int(),
  _keysMap: {
    totalSegments: "total_segments",
  },
};

export const transcriptInternalSchema: Schema<Transcript> = s.object<Transcript>(transcriptProperties, {
  additionalProperties: s.json(),
});

export const transcriptSchema: Schema<Transcript> = s.lazySchema(() =>
  s.object<Transcript>(
    {
      ...transcriptProperties,
      totalSegments: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
