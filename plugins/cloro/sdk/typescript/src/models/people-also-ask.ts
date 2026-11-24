import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { source3Schema, type Source3 } from "./source3.js";
import { typeSchema, type Type } from "./type.js";

export type PeopleAlsoAsk = {
  /** The question text */
  question?: string;
  /** Type of question result */
  type?: Type;
  /** Answer snippet (for LINK type) */
  snippet?: string;
  /** Result title (for LINK type) */
  title?: string;
  /** Result URL (for LINK type) */
  link?: string;
  /** AI Overview markdown content (for AIOVERVIEW type, when include.paaAioverview is true) */
  markdown?: string;
  /** Cited sources (for AIOVERVIEW type, when include.paaAioverview is true) */
  sources?: Source3[];
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const peopleAlsoAskSchema: Schema<PeopleAlsoAsk> = s.object<PeopleAlsoAsk>(
  {
    question: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeSchema)),
    snippet: s.optional(s.string()),
    title: s.optional(s.string()),
    link: s.optional(s.string()),
    markdown: s.optional(s.string()),
    sources: s.optional(s.array(s.lazy(() => source3Schema))),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
