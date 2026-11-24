import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formatSchema, type Format } from "./format.js";

export type Subtitles = {
  /**
   * Specify the output format for your subtitle file; if you select both WebVTT (vtt) and SubRip
   * (srt) formats, two output files are generated.
   */
  formats?: Format[];
  /**
   * Specify the starting value that is assigned to the first subtitle segment. The default start
   * index for Amazon Transcribe is 0, which differs from the more widely used standard of 1. If
   * you're uncertain which value to use, we recommend choosing 1, as this may improve compatibility
   * with other services.
   */
  outputStartIndex?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subtitlesSchema: Schema<Subtitles> = s.object<Subtitles>(
  {
    formats: s.optional(s.array(s.lazy(() => formatSchema))),
    outputStartIndex: s.optional(s.int()),
    _keysMap: {
      formats: "Formats",
      outputStartIndex: "OutputStartIndex",
    },
  },
  { additionalProperties: s.json() },
);
