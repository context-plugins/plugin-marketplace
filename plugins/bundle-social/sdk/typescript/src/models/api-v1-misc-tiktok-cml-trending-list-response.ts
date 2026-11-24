import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fullDurationSongClipInternalSchema,
  fullDurationSongClipSchema,
  type FullDurationSongClip,
} from "./full-duration-song-clip.js";
import { trendingHistorySchema, type TrendingHistory } from "./trending-history.js";
import {
  trendingSongClipInternalSchema,
  trendingSongClipSchema,
  type TrendingSongClip,
} from "./trending-song-clip.js";

export type ApiV1MiscTiktokCmlTrendingListResponse = {
  /** The name of the commercial music track. */
  commercialMusicName?: string | null;
  /** Track duration in seconds. */
  duration?: number | null;
  /** Thumbnail image URL for the track. */
  thumbnailUrl: string;
  /** Artist name. */
  artist: string;
  /** Track preview URL (valid for six hours). */
  previewUrl?: string | null;
  /** List of genres associated with the track. */
  genres?: string[];
  /** Current rank position in the selected region. */
  rankPosition: string;
  /** Historical ranking data (up to 30 days). */
  trendingHistory?: TrendingHistory[];
  fullDurationSongClip?: FullDurationSongClip | null;
  trendingSongClip?: TrendingSongClip | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1MiscTiktokCmlTrendingListResponseProperties: s.Shape<ApiV1MiscTiktokCmlTrendingListResponse> = {
  commercialMusicName: s.optionalNullable(s.string()),
  duration: s.optionalNullable(s.int()),
  thumbnailUrl: s.string(),
  artist: s.string(),
  previewUrl: s.optionalNullable(s.string()),
  genres: s.optional(s.array(s.string())),
  rankPosition: s.string(),
  trendingHistory: s.optional(s.array(s.lazy(() => trendingHistorySchema))),
  fullDurationSongClip: s.optionalNullable(s.lazy(() => fullDurationSongClipInternalSchema)),
  trendingSongClip: s.optionalNullable(s.lazy(() => trendingSongClipInternalSchema)),
  _keysMap: {
    commercialMusicName: "commercial_music_name",
    thumbnailUrl: "thumbnail_url",
    previewUrl: "preview_url",
    rankPosition: "rank_position",
    trendingHistory: "trending_history",
    fullDurationSongClip: "full_duration_song_clip",
    trendingSongClip: "trending_song_clip",
  },
};

export const apiV1MiscTiktokCmlTrendingListResponseInternalSchema: Schema<ApiV1MiscTiktokCmlTrendingListResponse> =
  s.object<ApiV1MiscTiktokCmlTrendingListResponse>(apiV1MiscTiktokCmlTrendingListResponseProperties, {
    additionalProperties: s.json(),
  });

export const apiV1MiscTiktokCmlTrendingListResponseSchema: Schema<ApiV1MiscTiktokCmlTrendingListResponse> =
  s.lazySchema(() =>
    s.object<ApiV1MiscTiktokCmlTrendingListResponse>(
      {
        ...apiV1MiscTiktokCmlTrendingListResponseProperties,
        thumbnailUrl: s.string().check(s.url()),
        previewUrl: s.optionalNullable(s.string().check(s.url())),
        fullDurationSongClip: s.optionalNullable(s.lazy(() => fullDurationSongClipSchema)),
        trendingSongClip: s.optionalNullable(s.lazy(() => trendingSongClipSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
