import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ThumbnailCategoryCounts = {
  /** @default 0 */
  all?: number;
  /** @default 0 */
  live?: number;
  /** @default 0 */
  successful?: number;
  /** @default 0 */
  failed?: number;
  /** @default 0 */
  noScore?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const thumbnailCategoryCountsSchema: Schema<ThumbnailCategoryCounts> =
  s.object<ThumbnailCategoryCounts>(
    {
      all: s.defaulted(s.int(), 0),
      live: s.defaulted(s.int(), 0),
      successful: s.defaulted(s.int(), 0),
      failed: s.defaulted(s.int(), 0),
      noScore: s.defaulted(s.int(), 0),
      _keysMap: {
        noScore: "no_score",
      },
    },
    { additionalProperties: s.json() },
  );
