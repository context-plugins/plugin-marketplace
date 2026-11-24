import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EpisodeFull = {
  description: string;
  durationSeconds?: number | null;
  enclosureUrl?: string | null;
  id: number;
  /**
   * Pipeline lifecycle of this item: `queued` | `processing` | `completed` | `completed_no_speech`
   * | `failed` | `cancelled`, or `not_transcribed` for catalog items never queued for
   * transcription. `completed_no_speech` means processing finished and the audio contained no
   * speech, so no transcript will ever exist: stop polling for one (GH#435).
   */
  processingStatus: string;
  publishDate: string;
  slug: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const episodeFullSchema: Schema<EpisodeFull> = s.object<EpisodeFull>(
  {
    description: s.string(),
    durationSeconds: s.optionalNullable(s.int()),
    enclosureUrl: s.optionalNullable(s.string()),
    id: s.int(),
    processingStatus: s.string(),
    publishDate: s.string(),
    slug: s.string(),
    title: s.string(),
    _keysMap: {
      durationSeconds: "duration_seconds",
      enclosureUrl: "enclosure_url",
      processingStatus: "processing_status",
      publishDate: "publish_date",
    },
  },
  { additionalProperties: s.json() },
);
