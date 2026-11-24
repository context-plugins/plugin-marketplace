import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source17 = {
  /** The position index of the source in the response */
  position?: number;
  /** The URL of the source */
  url?: string;
  /** The article title of the source */
  label?: string;
  /** A snippet or summary of the source content */
  description?: string;
  /**
   * `false` for a page that the answer links in its text: an inline link, or a page in an inline
   * citation. `true` for a page that ChatGPT used but does not link. Linked pages come first.
   */
  footnote?: boolean;
  /**
   * The publication date of the source. Omitted from the response when the source has no publish
   * date — never emitted as `null`.
   */
  datePublished?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const source17Schema: Schema<Source17> = s.object<Source17>(
  {
    position: s.optional(s.float64()),
    url: s.optional(s.string()),
    label: s.optional(s.string()),
    description: s.optional(s.string()),
    footnote: s.optional(s.boolean()),
    datePublished: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
