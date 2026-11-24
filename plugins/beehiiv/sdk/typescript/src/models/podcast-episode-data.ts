import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { podcastEpisodeStatus2Schema, type PodcastEpisodeStatus2 } from "./podcast-episode-status2.js";
import { podcastShowData2Schema, type PodcastShowData2 } from "./podcast-show-data2.js";

export type PodcastEpisodeData = {
  /** The prefixed ID of the episode. */
  id: string;
  /** The time the episode was created. Measured in seconds since the Unix epoch. */
  created: number;
  /** The time the episode was last updated. Measured in seconds since the Unix epoch. */
  updated: number;
  /** The title of the episode. */
  title: string;
  /** The web slug where this episode can be accessed. */
  slug: string;
  /**
   * The exact time the system published the episode (when it went live), not the scheduled time the
   * user set for publication. Measured in seconds since the Unix epoch. Null when the episode has
   * not been published.
   */
  publishDate?: number;
  /**
   * The time displayed in place of the `publish_date`. Measured in seconds since the Unix epoch.
   */
  displayedDate: number;
  /**
   * The duration of the episode audio in seconds. Null when no completed audio file is available.
   */
  duration?: number;
  /** A plain-text, truncated version of the episode show notes (max 255 characters). */
  description: string;
  /** The full HTML show notes for the episode. */
  showNotes: string;
  /**
   * The URL of the episode artwork. Falls back to the podcast artwork when the episode has none.
   * Empty string when no artwork is set.
   */
  artworkUrl: string;
  /** The status of the episode. */
  status: PodcastEpisodeStatus2;
  /** The season number for the episode, if set. */
  seasonNumber?: number;
  /** The episode number within the season, if set. */
  episodeNumber?: number;
  /**
   * The public streaming URL for the episode audio. Null when no completed audio file is available.
   */
  audioUrl?: string;
  /**
   * The WebVTT transcript URL for the episode. Null when transcripts are disabled or no completed
   * transcript is available.
   */
  transcriptUrl?: string;
  /** The podcast this episode belongs to. */
  show: PodcastShowData2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastEpisodeDataSchema: Schema<PodcastEpisodeData> = s.object<PodcastEpisodeData>(
  {
    id: s.string(),
    created: s.int(),
    updated: s.int(),
    title: s.string(),
    slug: s.string(),
    publishDate: s.optional(s.int()),
    displayedDate: s.int(),
    duration: s.optional(s.int()),
    description: s.string(),
    showNotes: s.string(),
    artworkUrl: s.string(),
    status: podcastEpisodeStatus2Schema,
    seasonNumber: s.optional(s.int()),
    episodeNumber: s.optional(s.int()),
    audioUrl: s.optional(s.string()),
    transcriptUrl: s.optional(s.string()),
    show: podcastShowData2Schema,
    _keysMap: {
      publishDate: "publish_date",
      displayedDate: "displayed_date",
      showNotes: "show_notes",
      artworkUrl: "artwork_url",
      seasonNumber: "season_number",
      episodeNumber: "episode_number",
      audioUrl: "audio_url",
      transcriptUrl: "transcript_url",
    },
  },
  { additionalProperties: s.json() },
);
