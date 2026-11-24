import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ads1InternalSchema, ads1Schema, type Ads1 } from "./ads1.js";

/** Sponsored ad section extracted from the response */
export type Ads = {
  /** Section title for the ads */
  title?: string;
  /** Array of sponsored ads */
  ads?: Ads1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const adsProperties: s.Shape<Ads> = {
  title: s.optional(s.string()),
  ads: s.optional(s.array(s.lazy(() => ads1InternalSchema))),
};

export const adsInternalSchema: Schema<Ads> = s.object<Ads>(adsProperties, {
  additionalProperties: s.json(),
});

export const adsSchema: Schema<Ads> = s.lazySchema(() =>
  s.object<Ads>(
    {
      ...adsProperties,
      ads: s.optional(s.array(s.lazy(() => ads1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
