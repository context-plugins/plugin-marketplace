import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source = {
  /** Characters scored (and billed). */
  characters?: number;
  contentType?: string;
  title?: string;
  /**
   * Part of the page or document was not scored (over 2MB of HTML, 15MB of document, or 200,000
   * characters).
   */
  truncated?: boolean;
  /** Final URL after redirects. */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceSchema: Schema<Source> = s.object<Source>(
  {
    characters: s.optional(s.int()),
    contentType: s.optional(s.string()),
    title: s.optional(s.string()),
    truncated: s.optional(s.boolean()),
    url: s.optional(s.string()),
    _keysMap: {
      contentType: "content_type",
    },
  },
  { additionalProperties: s.json() },
);
