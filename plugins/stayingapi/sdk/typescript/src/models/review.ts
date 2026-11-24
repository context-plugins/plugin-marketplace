import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { platformSchema, type Platform } from "./platform.js";
import { authorSchema, type Author } from "./unions/author.js";
import { dislikedSchema, type Disliked } from "./unions/disliked.js";
import { languageInternalSchema, languageSchema, type Language } from "./unions/language.js";
import { likedSchema, type Liked } from "./unions/liked.js";
import { ownerResponseSchema, type OwnerResponse } from "./unions/owner-response.js";
import { textSchema, type Text } from "./unions/text.js";
import { titleSchema, type Title } from "./unions/title.js";
import { tripTypeSchema, type TripType } from "./unions/trip-type.js";

export type Review = {
  platform: Platform;
  listingId: string;
  reviewId: string;
  rating: number;
  ratingScale: number;
  title: Title;
  text: Text;
  author: Author;
  date: string;
  tripType: TripType;
  language: Language;
  ownerResponse: OwnerResponse;
  liked: Liked;
  disliked: Disliked;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const reviewProperties: s.Shape<Review> = {
  platform: platformSchema,
  listingId: s.string(),
  reviewId: s.string(),
  rating: s.float64(),
  ratingScale: s.float64(),
  title: titleSchema,
  text: textSchema,
  author: authorSchema,
  date: s.string(),
  tripType: tripTypeSchema,
  language: languageInternalSchema,
  ownerResponse: ownerResponseSchema,
  liked: likedSchema,
  disliked: dislikedSchema,
};

export const reviewInternalSchema: Schema<Review> = s.object<Review>(reviewProperties, {
  additionalProperties: s.json(),
});

export const reviewSchema: Schema<Review> = s.lazySchema(() =>
  s.object<Review>(
    {
      ...reviewProperties,
      listingId: s.string().check(s.minLength(1)),
      reviewId: s.string().check(s.minLength(1)),
      rating: s.float64().check(s.gte(0)),
      ratingScale: s.float64().check(s.gte(0)),
      date: s.string().check(s.pattern("^\\d{4}-\\d{2}-\\d{2}$")),
      language: languageSchema,
    },
    { additionalProperties: s.json() },
  ),
);
