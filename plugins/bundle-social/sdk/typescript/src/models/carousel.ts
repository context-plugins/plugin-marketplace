import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { cardInternalSchema, cardSchema, type Card } from "./card.js";

export type Carousel = {
  cards: Card[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const carouselProperties: s.Shape<Carousel> = {
  cards: s.array(s.lazy(() => cardInternalSchema)),
};

export const carouselInternalSchema: Schema<Carousel> = s.object<Carousel>(carouselProperties, {
  additionalProperties: s.json(),
});

export const carouselSchema: Schema<Carousel> = s.lazySchema(() =>
  s.object<Carousel>(
    {
      ...carouselProperties,
      cards: s.array(s.lazy(() => cardSchema)).check(s.minLength(1), s.maxLength(10)),
    },
    { additionalProperties: s.json() },
  ),
);
