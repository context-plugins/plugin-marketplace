import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { button1263InternalSchema, button1263Schema, type Button1263 } from "./unions/button1263.js";

export type Card52 = {
  id?: string;
  title: string;
  subtitle?: string | null;
  imageUrl?: string | null;
  buttons?: Button1263[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const card52Properties: s.Shape<Card52> = {
  id: s.optional(s.string()),
  title: s.string(),
  subtitle: s.optionalNullable(s.string()),
  imageUrl: s.optionalNullable(s.string()),
  buttons: s.optional(s.array(s.lazy(() => button1263InternalSchema))),
};

export const card52InternalSchema: Schema<Card52> = s.object<Card52>(card52Properties, {
  additionalProperties: s.json(),
});

export const card52Schema: Schema<Card52> = s.lazySchema(() =>
  s.object<Card52>(
    {
      ...card52Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(36))),
      title: s.string().check(s.minLength(1), s.maxLength(80)),
      subtitle: s.optionalNullable(s.string().check(s.maxLength(80))),
      imageUrl: s.optionalNullable(s.string().check(s.url())),
      buttons: s.optional(s.array(s.lazy(() => button1263Schema)).check(s.maxLength(3))),
    },
    { additionalProperties: s.json() },
  ),
);
