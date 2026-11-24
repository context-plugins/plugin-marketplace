import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Reference to the podcast this item is part of, if applicable. */
export type ItemPodcastRef2 = {
  id: number;
  slug: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemPodcastRef2Schema: Schema<ItemPodcastRef2> = s.object<ItemPodcastRef2>(
  {
    id: s.int(),
    slug: s.string(),
    title: s.string(),
  },
  { additionalProperties: s.json() },
);
