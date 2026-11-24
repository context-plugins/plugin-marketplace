import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Card = {
  /** Card title */
  title: string;
  /** Card description text */
  body: string;
  /** Card destination URL */
  url: string;
  /** Card image URL */
  image?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cardProperties: s.Shape<Card> = {
  title: s.string(),
  body: s.string(),
  url: s.string(),
  image: s.optional(s.string()),
};

export const cardInternalSchema: Schema<Card> = s.object<Card>(cardProperties, {
  additionalProperties: s.json(),
});

export const cardSchema: Schema<Card> = s.lazySchema(() =>
  s.object<Card>(
    {
      ...cardProperties,
      url: s.string().check(s.url()),
      image: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
