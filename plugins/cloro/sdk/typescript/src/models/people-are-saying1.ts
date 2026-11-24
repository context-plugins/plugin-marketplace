import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PeopleAreSaying1 = {
  /** Position within the module (1-indexed) */
  position: number;
  /** Card title as displayed on the SERP */
  title: string;
  /** Destination URL the card points to (often a Reddit, Quora, or community forum thread) */
  link: string;
  /**
   * Google's raw relative-time text (e.g., "5 days ago", "2 weeks ago"). Free-form string — not
   * normalized to a timestamp.
   */
  date: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect. The sibling link field holds
   * the destination cloro resolved it to, or is empty, missing or a `google.com/goto` URL when the
   * link is not resolved yet. In that case, resolve this value with `POST /v1/monitor/google/goto`.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const peopleAreSaying1Schema: Schema<PeopleAreSaying1> = s.object<PeopleAreSaying1>(
  {
    position: s.float64(),
    title: s.string(),
    link: s.string(),
    date: s.string(),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
