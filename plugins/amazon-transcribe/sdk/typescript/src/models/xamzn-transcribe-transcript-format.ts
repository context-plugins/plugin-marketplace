import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmznTranscribeTranscriptFormat = {
  Spoken: "spoken",
  Written: "written",
} as const;
export type XAmznTranscribeTranscriptFormat =
  | (typeof XAmznTranscribeTranscriptFormat)[keyof typeof XAmznTranscribeTranscriptFormat]
  | (string & {});

export const xAmznTranscribeTranscriptFormatSchema: EnumSchema<XAmznTranscribeTranscriptFormat> =
  s.enumOf<XAmznTranscribeTranscriptFormat>(XAmznTranscribeTranscriptFormat);
