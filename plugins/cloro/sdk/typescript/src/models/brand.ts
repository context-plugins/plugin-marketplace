import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Advertiser brand information */
export type Brand = {
  /** Advertiser brand name */
  name: string;
  /** Advertiser brand URL */
  url: string;
  /** Advertiser brand favicon URL */
  favicon?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const brandProperties: s.Shape<Brand> = {
  name: s.string(),
  url: s.string(),
  favicon: s.optional(s.string()),
};

export const brandInternalSchema: Schema<Brand> = s.object<Brand>(brandProperties, {
  additionalProperties: s.json(),
});

export const brandSchema: Schema<Brand> = s.lazySchema(() =>
  s.object<Brand>(
    {
      ...brandProperties,
      url: s.string().check(s.url()),
      favicon: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
