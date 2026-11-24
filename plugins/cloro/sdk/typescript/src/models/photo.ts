import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Photo = {
  /** Photo URL */
  url?: string;
  /** Alt text for the photo */
  altText?: string;
  /** Photo provider name */
  providerName?: string;
  /** Photo provider URL */
  providerUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const photoProperties: s.Shape<Photo> = {
  url: s.optional(s.string()),
  altText: s.optional(s.string()),
  providerName: s.optional(s.string()),
  providerUrl: s.optional(s.string()),
};

export const photoInternalSchema: Schema<Photo> = s.object<Photo>(photoProperties, {
  additionalProperties: s.json(),
});

export const photoSchema: Schema<Photo> = s.lazySchema(() =>
  s.object<Photo>(
    {
      ...photoProperties,
      url: s.optional(s.string().check(s.url())),
      providerUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
