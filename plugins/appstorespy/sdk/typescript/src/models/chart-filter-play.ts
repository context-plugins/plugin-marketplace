import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { collectionSchema, type Collection } from "./collection.js";
import { playCategorySchema, type PlayCategory } from "./play-category.js";

export type ChartFilterPlay = {
  /** An enumeration. */
  collection?: Collection;
  country: string;
  date?: string;
  /** An enumeration. */
  category: PlayCategory;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chartFilterPlaySchema: Schema<ChartFilterPlay> = s.object<ChartFilterPlay>(
  {
    collection: s.optional(s.lazy(() => collectionSchema)),
    country: s.string(),
    date: s.optional(s.string()),
    category: playCategorySchema,
  },
  { additionalProperties: s.json() },
);
