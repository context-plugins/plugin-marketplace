import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Recipe = {
  /** Position within the carousel (1-indexed) */
  position: number;
  /** Recipe title as displayed on the SERP */
  title: string;
  /** URL of the recipe page */
  link: string;
  /** Name of the site that publishes the recipe */
  source?: string;
  /** Average star rating (0–5) */
  rating?: number;
  /**
   * Review count as displayed by Google (e.g. "7.1K"). Free-form string — not normalized to a
   * number.
   */
  reviews?: string;
  /**
   * Total time as displayed by Google, in the language of the SERP (e.g. "1 hr 10 min", "15 Min.").
   * Free-form string — not normalized to a duration.
   */
  totalTime?: string;
  /**
   * The ingredients Google shows on the card. This is a short selection, not the full list of the
   * recipe.
   */
  ingredients?: string[];
  /** Recipe image: an image URL or an inline `data:` URI */
  thumbnail?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect. The sibling link field holds
   * the destination cloro resolved it to, or is empty, missing or a `google.com/goto` URL when the
   * link is not resolved yet. In that case, resolve this value with `POST /v1/monitor/google/goto`.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recipeSchema: Schema<Recipe> = s.object<Recipe>(
  {
    position: s.float64(),
    title: s.string(),
    link: s.string(),
    source: s.optional(s.string()),
    rating: s.optional(s.float64()),
    reviews: s.optional(s.string()),
    totalTime: s.optional(s.string()),
    ingredients: s.optional(s.array(s.string())),
    thumbnail: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
