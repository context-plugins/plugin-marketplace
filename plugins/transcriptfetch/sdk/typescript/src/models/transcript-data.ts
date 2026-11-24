import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { podcastInternalSchema, podcastSchema, type Podcast } from "./podcast.js";
import { segmentSchema, type Segment } from "./segment.js";

export type TranscriptData = {
  /** @default "transcript" */
  kind?: "transcript";
  videoId?: string;
  title?: string | null;
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

const transcriptDataProperties: s.Shape<TranscriptData> = {
  kind: s.defaulted(s.literal("transcript"), "transcript"),
  videoId: s.optional(s.string()),
  title: s.optionalNullable(s.string()),
  thumbnailUrl: s.optionalNullable(s.string()),
  diarized: s.optional(s.boolean()),
  text: s.optionalNullable(s.string()),
  segments: s.optionalNullable(s.array(s.lazy(() => segmentSchema))),
  podcast: s.optional(s.lazy(() => podcastInternalSchema)),
  _keysMap: {
    videoId: "video_id",
  },
};

export const transcriptDataInternalSchema: Schema<TranscriptData> = s.object<TranscriptData>(
  transcriptDataProperties,
  { additionalProperties: s.json() },
);

export const transcriptDataSchema: Schema<TranscriptData> = s.lazySchema(() =>
  s.object<TranscriptData>(
    {
      ...transcriptDataProperties,
      podcast: s.optional(s.lazy(() => podcastSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
