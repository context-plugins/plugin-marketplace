import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TrendingResult = {
  title: string;
  url: string;
  description?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const trendingResultProperties: s.Shape<TrendingResult> = {
  title: s.string(),
  url: s.string(),
  description: s.optionalNullable(s.string()),
};

export const trendingResultInternalSchema: Schema<TrendingResult> = s.object<TrendingResult>(
  trendingResultProperties,
  { additionalProperties: s.json() },
);

export const trendingResultSchema: Schema<TrendingResult> = s.lazySchema(() =>
  s.object<TrendingResult>(
    {
      ...trendingResultProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
