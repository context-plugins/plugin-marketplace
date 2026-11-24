import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ItemPodcastRef = {
  id: number;
  slug: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemPodcastRefSchema: Schema<ItemPodcastRef> = s.object<ItemPodcastRef>(
  {
    id: s.int(),
    slug: s.string(),
    title: s.string(),
  },
  { additionalProperties: s.json() },
);
