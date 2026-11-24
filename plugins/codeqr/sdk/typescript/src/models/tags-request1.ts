import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { color2Schema, type Color2 } from "./color2.js";

export type TagsRequest1 = {
  name: string;
  /** The color of the tag */
  color?: Color2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const tagsRequest1Properties: s.Shape<TagsRequest1> = {
  name: s.string(),
  color: s.optional(s.lazy(() => color2Schema)),
};

export const tagsRequest1InternalSchema: Schema<TagsRequest1> = s.object<TagsRequest1>(
  tagsRequest1Properties,
  { additionalProperties: s.json() },
);

export const tagsRequest1Schema: Schema<TagsRequest1> = s.lazySchema(() =>
  s.object<TagsRequest1>(
    {
      ...tagsRequest1Properties,
      name: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
