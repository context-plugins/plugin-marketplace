import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChannelRequest = {
  /** Channel \@handle, /channel/UC… URL, or UC… ID. */
  channel: string;
  /** Max videos to return per page. Defaults to 5. @default 5 */
  limit?: number;
  /**
   * Opaque pagination cursor from a previous response's next_cursor (max 256 characters). Omit for
   * the first page. Cursors encode a list offset capped at 2000, so pagination cannot reach past
   * the first 2000 items.
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

const channelRequestProperties: s.Shape<ChannelRequest> = {
  channel: s.string(),
  limit: s.defaulted(s.int(), 5),
  cursor: s.optional(s.string()),
  sinceVideoId: s.optional(s.string()),
  _keysMap: {
    sinceVideoId: "since_video_id",
  },
};

export const channelRequestInternalSchema: Schema<ChannelRequest> = s.object<ChannelRequest>(
  channelRequestProperties,
  { additionalProperties: s.json() },
);

export const channelRequestSchema: Schema<ChannelRequest> = s.lazySchema(() =>
  s.object<ChannelRequest>(
    {
      ...channelRequestProperties,
      channel: s.string().check(s.minLength(1), s.maxLength(2000)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 5),
      cursor: s.optional(s.string().check(s.maxLength(256))),
      sinceVideoId: s.optional(s.string().check(s.minLength(1), s.maxLength(2000))),
    },
    { additionalProperties: s.json() },
  ),
);
