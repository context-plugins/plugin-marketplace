import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transcriptWordConfidenceSchema,
  type TranscriptWordConfidence,
} from "../transcript-word-confidence.js";

export type Words = TranscriptWordConfidence[];

export const wordsSchema: Schema<Words> = s.of<Words>(
  s.union([s.array(s.lazy(() => transcriptWordConfidenceSchema))]),
);
