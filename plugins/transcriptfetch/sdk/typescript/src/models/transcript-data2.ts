import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { podcastInternalSchema, podcastSchema, type Podcast } from "./podcast.js";
import { segmentSchema, type Segment } from "./segment.js";
import { sourceSchema, type Source } from "./source.js";

export type TranscriptData2 = {
  /** @default "transcript" */
  kind?: "transcript";
  videoId?: string;
  title?: string | null;
  /**
   * Where the words came from: an existing caption track, or AI transcription of the audio (billed
   * by length, see usage.credits_spent).
   */
  source?: Source;
  /**
   * Poster image for the video. TikTok and Instagram serve signed, expiring URLs, so copy the image
   * rather than hotlinking it.
   */
  thumbnailUrl?: string | null;
  /**
   * True when speaker diarization produced labels (podcast transcriptions only); segments then
   * carry `speaker` ids.
   */
  diarized?: boolean;
  text?: string | null;
  segments?: Segment[] | null;
  /**
   * Present only when the input was a podcast link. Spotify and Apple do not host podcast audio;
   * both read the publisher's RSS feed, so the link is resolved to that feed and the episode's own
   * audio file. These fields say which show and episode were matched, so you can verify the
   * resolution was correct.
   */
  podcast?: Podcast;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const transcriptData2Properties: s.Shape<TranscriptData2> = {
  kind: s.defaulted(s.literal("transcript"), "transcript"),
  videoId: s.optional(s.string()),
  title: s.optionalNullable(s.string()),
  source: s.optional(s.lazy(() => sourceSchema)),
  thumbnailUrl: s.optionalNullable(s.string()),
  diarized: s.optional(s.boolean()),
  text: s.optionalNullable(s.string()),
  segments: s.optionalNullable(s.array(s.lazy(() => segmentSchema))),
  podcast: s.optional(s.lazy(() => podcastInternalSchema)),
  _keysMap: {
    videoId: "video_id",
  },
};

export const transcriptData2InternalSchema: Schema<TranscriptData2> = s.object<TranscriptData2>(
  transcriptData2Properties,
  { additionalProperties: s.json() },
);

export const transcriptData2Schema: Schema<TranscriptData2> = s.lazySchema(() =>
  s.object<TranscriptData2>(
    {
      ...transcriptData2Properties,
      podcast: s.optional(s.lazy(() => podcastSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
