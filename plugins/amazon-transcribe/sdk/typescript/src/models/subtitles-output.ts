import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { formatSchema, type Format } from "./format.js";

export type SubtitlesOutput = {
  /**
   * Provides the format of your subtitle files. If your request included both WebVTT (vtt) and
   * SubRip (srt) formats, both formats are shown.
   */
  formats?: Format[];
  /**
   * The Amazon S3 location of your transcript. You can use this URI to access or download your
   * subtitle file. Your subtitle file is stored in the same location as your transcript. If you
   * specified both WebVTT and SubRip subtitle formats, two URIs are provided. If you included
   * OutputBucketName in your transcription job request, this is the URI of that bucket. If you also
   * included OutputKey in your request, your output is located in the path you specified in your
   * request. If you didn't include OutputBucketName in your transcription job request, your
   * subtitle file is stored in a service-managed bucke
   */
  subtitleFileUris?: string[];
  /**
   * Provides the start index value for your subtitle files. If you did not specify a value in your
   * request, the default value of 0 is used.
   */
  outputStartIndex?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subtitlesOutputSchema: Schema<SubtitlesOutput> = s.object<SubtitlesOutput>(
  {
    formats: s.optional(s.array(s.lazy(() => formatSchema))),
    subtitleFileUris: s.optional(s.array(s.string())),
    outputStartIndex: s.optional(s.int()),
    _keysMap: {
      formats: "Formats",
      subtitleFileUris: "SubtitleFileUris",
      outputStartIndex: "OutputStartIndex",
    },
  },
  { additionalProperties: s.json() },
);
