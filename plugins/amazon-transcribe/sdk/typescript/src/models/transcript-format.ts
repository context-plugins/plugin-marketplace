import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Provides the transcript format that you specified in your request. */
export const TranscriptFormat = {
  Spoken: "spoken",
  Written: "written",
} as const;
export type TranscriptFormat = (typeof TranscriptFormat)[keyof typeof TranscriptFormat] | (string & {});

export const transcriptFormatSchema: EnumSchema<TranscriptFormat> =
  s.enumOf<TranscriptFormat>(TranscriptFormat);
