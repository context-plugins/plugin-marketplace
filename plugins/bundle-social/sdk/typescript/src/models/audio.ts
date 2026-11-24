import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioTypeSchema, type AudioType } from "./audio-type.js";

export type Audio = {
  audioId: string;
  coverArtworkThumbnailUri?: string | null;
  coverArtworkThumbnailUrl?: string | null;
  displayArtist?: string | null;
  durationInMs?: number | null;
  audioType: AudioType;
  title?: string | null;
  downloadUrl?: string | null;
  igUsername?: string | null;
  profilePictureUrl?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const audioSchema: Schema<Audio> = s.object<Audio>(
  {
    audioId: s.string(),
    coverArtworkThumbnailUri: s.optionalNullable(s.string()),
    coverArtworkThumbnailUrl: s.optionalNullable(s.string()),
    displayArtist: s.optionalNullable(s.string()),
    durationInMs: s.optionalNullable(s.int()),
    audioType: audioTypeSchema,
    title: s.optionalNullable(s.string()),
    downloadUrl: s.optionalNullable(s.string()),
    igUsername: s.optionalNullable(s.string()),
    profilePictureUrl: s.optionalNullable(s.string()),
    _keysMap: {
      audioId: "audio_id",
      coverArtworkThumbnailUri: "cover_artwork_thumbnail_uri",
      coverArtworkThumbnailUrl: "cover_artwork_thumbnail_url",
      displayArtist: "display_artist",
      durationInMs: "duration_in_ms",
      audioType: "audio_type",
      downloadUrl: "download_url",
      igUsername: "ig_username",
      profilePictureUrl: "profile_picture_url",
    },
  },
  { additionalProperties: s.json() },
);
