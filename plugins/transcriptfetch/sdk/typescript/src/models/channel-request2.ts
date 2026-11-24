import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChannelRequest2 = {
  /**
   * YouTube: \@handle, /channel/UC… URL, or UC… ID. TikTok: profile URL (tiktok.com/@user).
   * Instagram: profile URL (instagram.com/user/). Spotify: show URL (open.spotify.com/show/…).
   * Apple Podcasts: show URL (podcasts.apple.com/…/id…). Any other URL is fetched as a podcast
   * RSS/Atom feed.
   */
  channel: string;
  /** Max videos to return per page. Defaults to 5. @default 5 */
  limit?: number;
  /**
   * Opaque pagination cursor from a previous response's next_cursor (max 256 characters). Omit for
   * the first page. Cursors are scoped to the listing (and, for search, the platform) that issued
   * them. Offset-based sources cannot page past the first 2000 items.
   */
  cursor?: string;
  /**
   * Newest video ID you have already seen. The response is trimmed to videos newer than it, and a
   * page with nothing newer costs no credits - so you can poll a channel for new uploads for free.
   */
  sinceVideoId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const channelRequest2Properties: s.Shape<ChannelRequest2> = {
  channel: s.string(),
  limit: s.defaulted(s.int(), 5),
  cursor: s.optional(s.string()),
  sinceVideoId: s.optional(s.string()),
  _keysMap: {
    sinceVideoId: "since_video_id",
  },
};

export const channelRequest2InternalSchema: Schema<ChannelRequest2> = s.object<ChannelRequest2>(
  channelRequest2Properties,
  { additionalProperties: s.json() },
);

export const channelRequest2Schema: Schema<ChannelRequest2> = s.lazySchema(() =>
  s.object<ChannelRequest2>(
    {
      ...channelRequest2Properties,
      channel: s.string().check(s.minLength(1), s.maxLength(2000)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 5),
      cursor: s.optional(s.string().check(s.maxLength(256))),
      sinceVideoId: s.optional(s.string().check(s.minLength(1), s.maxLength(2000))),
    },
    { additionalProperties: s.json() },
  ),
);
