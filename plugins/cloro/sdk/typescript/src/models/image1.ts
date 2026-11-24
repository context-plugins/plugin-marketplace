import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Image1 = {
  mainUrl: string;
  thumbnailUrl?: string;
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const image1Properties: s.Shape<Image1> = {
  mainUrl: s.string(),
  thumbnailUrl: s.optional(s.string()),
  title: s.optional(s.string()),
};

export const image1InternalSchema: Schema<Image1> = s.object<Image1>(image1Properties, {
  additionalProperties: s.json(),
});

export const image1Schema: Schema<Image1> = s.lazySchema(() =>
  s.object<Image1>(
    {
      ...image1Properties,
      mainUrl: s.string().check(s.url()),
      thumbnailUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
