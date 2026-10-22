import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { autoTranscriptionSchema, type AutoTranscription } from "../auto-transcription.js";

export type AutoTranscription1 = boolean | AutoTranscription;

export const autoTranscription1Schema: Schema<AutoTranscription1> = s.of<AutoTranscription1>(
  s.union([s.boolean(), s.lazy(() => autoTranscriptionSchema)]),
);
