import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source6 = {
  /** The position index of the source in the response */
  position?: number;
  /** The URL of the source */
  url?: string;
  /** The display label for the source */
  label?: string;
  /** A description of the source content */
  description?: string;
  /** Preview text snippet from the source */
  preview?: string;
  /** Search engine display text */
  searchEngineText?: string;
  /** Website name */
  siteName?: string;
  /** Source metadata title */
  metadataTitle?: string;
  /** Content creator/author */
  creator?: string;
  /** Source image URL */
  image?: string;
  /** Website favicon URL */
  favicon?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const source6Properties: s.Shape<Source6> = {
  position: s.optional(s.float64()),
  url: s.optional(s.string()),
  label: s.optional(s.string()),
  description: s.optional(s.string()),
  preview: s.optional(s.string()),
  searchEngineText: s.optional(s.string()),
  siteName: s.optional(s.string()),
  metadataTitle: s.optional(s.string()),
  creator: s.optional(s.string()),
  image: s.optional(s.string()),
  favicon: s.optional(s.string()),
};

export const source6InternalSchema: Schema<Source6> = s.object<Source6>(source6Properties, {
  additionalProperties: s.json(),
});

export const source6Schema: Schema<Source6> = s.lazySchema(() =>
  s.object<Source6>(
    {
      ...source6Properties,
      image: s.optional(s.string().check(s.url())),
      favicon: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
