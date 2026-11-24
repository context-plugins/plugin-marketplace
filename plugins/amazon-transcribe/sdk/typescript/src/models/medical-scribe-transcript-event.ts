import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  medicalScribeTranscriptSegmentSchema,
  type MedicalScribeTranscriptSegment,
} from "./medical-scribe-transcript-segment.js";

export type MedicalScribeTranscriptEvent = {
  transcriptSegment?: MedicalScribeTranscriptSegment;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeTranscriptEventSchema: Schema<MedicalScribeTranscriptEvent> =
  s.object<MedicalScribeTranscriptEvent>(
    {
      transcriptSegment: s.optional(s.lazy(() => medicalScribeTranscriptSegmentSchema)),
      _keysMap: {
        transcriptSegment: "TranscriptSegment",
      },
    },
    { additionalProperties: s.json() },
  );
