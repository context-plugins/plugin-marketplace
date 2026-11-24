import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { collectionSchema, type Collection } from "./collection.js";
import { iosCategorySchema, type IosCategory } from "./ios-category.js";
import { iosPlatformSchema, type IosPlatform } from "./ios-platform.js";

export type ChartFilterIos = {
  /** An enumeration. */
  collection?: Collection;
  country: string;
  date?: string;
  /** An enumeration. */
  category?: IosCategory;
  /** An enumeration. */
  platform: IosPlatform;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chartFilterIosSchema: Schema<ChartFilterIos> = s.object<ChartFilterIos>(
  {
    collection: s.optional(s.lazy(() => collectionSchema)),
    country: s.string(),
    date: s.optional(s.string()),
    category: s.optional(s.lazy(() => iosCategorySchema)),
    platform: iosPlatformSchema,
  },
  { additionalProperties: s.json() },
);
