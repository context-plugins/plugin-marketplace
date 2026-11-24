import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PlaylistRequest2 = {
  /**
   * YouTube: playlist URL or PL… ID. TikTok: playlist URL (tiktok.com/@user/playlist/name-id).
   * Spotify: playlist URL (open.spotify.com/playlist/…).
   */
  playlist: string;
  /** Max videos to return per page. Defaults to 5. @default 5 */
  limit?: number;
  /**
   * Opaque pagination cursor from a previous response's next_cursor (max 256 characters). Omit for
   * the first page. Cursors are scoped to the listing (and, for search, the platform) that issued
   * them. Offset-based sources cannot page past the first 2000 items.
   */
  cursor?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const playlistRequest2Properties: s.Shape<PlaylistRequest2> = {
  playlist: s.string(),
  limit: s.defaulted(s.int(), 5),
  cursor: s.optional(s.string()),
};

export const playlistRequest2InternalSchema: Schema<PlaylistRequest2> = s.object<PlaylistRequest2>(
  playlistRequest2Properties,
  { additionalProperties: s.json() },
);

export const playlistRequest2Schema: Schema<PlaylistRequest2> = s.lazySchema(() =>
  s.object<PlaylistRequest2>(
    {
      ...playlistRequest2Properties,
      playlist: s.string().check(s.minLength(1), s.maxLength(2000)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(50)), 5),
      cursor: s.optional(s.string().check(s.maxLength(256))),
    },
    { additionalProperties: s.json() },
  ),
);
