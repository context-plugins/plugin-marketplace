import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { button3InternalSchema, button3Schema, type Button3 } from "./unions/button3.js";

export type Card = {
  id: string;
  title: string;
  subtitle?: string | null;
  imageUploadId?: string | null;
  buttons?: Button3[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const cardProperties: s.Shape<Card> = {
  id: s.string(),
  title: s.string(),
  subtitle: s.optionalNullable(s.string()),
  imageUploadId: s.optionalNullable(s.string()),
  buttons: s.optional(s.array(s.lazy(() => button3InternalSchema))),
};

export const cardInternalSchema: Schema<Card> = s.object<Card>(cardProperties, {
  additionalProperties: s.json(),
});

export const cardSchema: Schema<Card> = s.lazySchema(() =>
  s.object<Card>(
    {
      ...cardProperties,
      id: s.string().check(s.minLength(1), s.maxLength(36)),
      title: s.string().check(s.minLength(1), s.maxLength(80)),
      subtitle: s.optionalNullable(s.string().check(s.maxLength(80))),
      imageUploadId: s.optionalNullable(s.string().check(s.minLength(1))),
      buttons: s.optional(s.array(s.lazy(() => button3Schema)).check(s.maxLength(3))),
    },
    { additionalProperties: s.json() },
  ),
);
