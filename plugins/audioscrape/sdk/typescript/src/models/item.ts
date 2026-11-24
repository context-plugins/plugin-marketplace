import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemPodcastRef2Schema, type ItemPodcastRef2 } from "./item-podcast-ref2.js";

export type Item = {
  datasetId?: number | null;
  durationSeconds?: number | null;
  hasTranscript: boolean;
  id: number;
  podcast?: ItemPodcastRef2 | null;
  publishDate?: string | null;
  slug: string;
  /** `podcast_episode`, `upload`, `youtube`, etc. */
  sourceType: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemSchema: Schema<Item> = s.object<Item>(
  {
    datasetId: s.optionalNullable(s.int()),
    durationSeconds: s.optionalNullable(s.int()),
    hasTranscript: s.boolean(),
    id: s.int(),
    podcast: s.optionalNullable(s.lazy(() => itemPodcastRef2Schema)),
    publishDate: s.optionalNullable(s.string()),
    slug: s.string(),
    sourceType: s.string(),
    title: s.string(),
    _keysMap: {
      datasetId: "dataset_id",
      durationSeconds: "duration_seconds",
      hasTranscript: "has_transcript",
      publishDate: "publish_date",
      sourceType: "source_type",
    },
  },
  { additionalProperties: s.json() },
);
