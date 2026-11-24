import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { card52InternalSchema, card52Schema, type Card52 } from "./card52.js";

export type Carousel52 = {
  cards: Card52[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const carousel52Properties: s.Shape<Carousel52> = {
  cards: s.array(s.lazy(() => card52InternalSchema)),
};

export const carousel52InternalSchema: Schema<Carousel52> = s.object<Carousel52>(carousel52Properties, {
  additionalProperties: s.json(),
});

export const carousel52Schema: Schema<Carousel52> = s.lazySchema(() =>
  s.object<Carousel52>(
    {
      ...carousel52Properties,
      cards: s.array(s.lazy(() => card52Schema)).check(s.minLength(1), s.maxLength(10)),
    },
    { additionalProperties: s.json() },
  ),
);
