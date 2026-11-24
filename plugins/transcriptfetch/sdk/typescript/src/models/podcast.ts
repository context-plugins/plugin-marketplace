import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resolvedViaSchema, type ResolvedVia } from "./resolved-via.js";

/**
 * Present only when the input was a podcast link. Spotify and Apple do not host podcast audio; both
 * read the publisher's RSS feed, so the link is resolved to that feed and the episode's own audio
 * file. These fields say which show and episode were matched, so you can verify the resolution was
 * correct.
 */
export type Podcast = {
  show?: string | null;
  episode?: string | null;
  publishedAt?: Date | null;
  feedUrl?: string | null;
  audioUrl?: string;
  resolvedVia?: ResolvedVia;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const podcastProperties: s.Shape<Podcast> = {
  show: s.optionalNullable(s.string()),
  episode: s.optionalNullable(s.string()),
  publishedAt: s.optionalNullable(s.dateTime()),
  feedUrl: s.optionalNullable(s.string()),
  audioUrl: s.optional(s.string()),
  resolvedVia: s.optional(s.lazy(() => resolvedViaSchema)),
  _keysMap: {
    publishedAt: "published_at",
    feedUrl: "feed_url",
    audioUrl: "audio_url",
    resolvedVia: "resolved_via",
  },
};

export const podcastInternalSchema: Schema<Podcast> = s.object<Podcast>(podcastProperties, {
  additionalProperties: s.json(),
});

export const podcastSchema: Schema<Podcast> = s.lazySchema(() =>
  s.object<Podcast>(
    {
      ...podcastProperties,
      feedUrl: s.optionalNullable(s.string().check(s.url())),
      audioUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
