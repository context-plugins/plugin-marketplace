import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The number of processed audio length in milliseconds. Zero when there is no audio usage. */
export type ProcessedAudioLengthMs = number;

export const processedAudioLengthMsSchema: Schema<ProcessedAudioLengthMs> = s.of<ProcessedAudioLengthMs>(
  s.union([s.int()]),
);
