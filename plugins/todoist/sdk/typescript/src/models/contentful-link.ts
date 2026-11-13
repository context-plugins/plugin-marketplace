import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContentfulLink = {
  /** Display title. */
  title: string;
  /** Resource URL. */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contentfulLinkSchema: Schema<ContentfulLink> = s.object<ContentfulLink>(
  {
    title: s.string(),
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
