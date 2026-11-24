import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { citationPill11Schema, type CitationPill11 } from "./citation-pill11.js";
import { source18Schema, type Source18 } from "./source18.js";

/** Bing AI Mode response data */
export type Result14 = {
  /** Bing AI Mode's answer as plain text, without citation chips */
  text: string;
  /**
   * Sources for the answer: first the pages Bing read, then any other page that a citation chip
   * links. Empty when the answer has no sources.
   */
  sources: Source18[];
  /**
   * Inline citation chips in the answer. Each entry is one (chip, source) pair: when a chip cites N
   * sources, the array has N entries with the same `citationPillId`. Group by `citationPillId` to
   * get the chips. Empty when the answer has no chips.
   */
  citationPills: CitationPill11[];
  /**
   * The answer formatted in Markdown, with citations as links (included when include.markdown is
   * true)
   */
  markdown?: string;
  /** A URL to the full HTML of the page that Bing rendered (included when include.html is true). */
  html?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result14Properties: s.Shape<Result14> = {
  text: s.string(),
  sources: s.array(s.lazy(() => source18Schema)),
  citationPills: s.array(s.lazy(() => citationPill11Schema)),
  markdown: s.optional(s.string()),
  html: s.optional(s.string()),
};

export const result14InternalSchema: Schema<Result14> = s.object<Result14>(result14Properties, {
  additionalProperties: s.json(),
});

export const result14Schema: Schema<Result14> = s.lazySchema(() =>
  s.object<Result14>(
    {
      ...result14Properties,
      html: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
