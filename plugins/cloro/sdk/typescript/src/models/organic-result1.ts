import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sitelinks2Schema, type Sitelinks2 } from "./sitelinks2.js";

export type OrganicResult1 = {
  /** Position in search results (1-indexed) */
  position?: number;
  /** Title of the search result */
  title?: string;
  /**
   * URL of the search result. Empty when the link is not resolved yet: read `redirectLink` and
   * resolve it with `POST /v1/monitor/google/goto`.
   */
  link?: string;
  /** Formatted URL as displayed in search results */
  displayedLink?: string;
  /** Text snippet describing the page content */
  snippet?: string;
  /** Publication date if available */
  date?: string;
  /**
   * Engagement counts that Google shows on video, social and forum results, such as views, comments
   * or followers. Present only when Google shows them.
   */
  extensions?: string[];
  /** Page number this result appeared on (1-indexed) */
  page?: number;
  /** Sitelinks displayed under the main result */
  sitelinks?: Sitelinks2;
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

export const organicResult1Schema: Schema<OrganicResult1> = s.object<OrganicResult1>(
  {
    position: s.optional(s.float64()),
    title: s.optional(s.string()),
    link: s.optional(s.string()),
    displayedLink: s.optional(s.string()),
    snippet: s.optional(s.string()),
    date: s.optional(s.string()),
    extensions: s.optional(s.array(s.string())),
    page: s.optional(s.float64()),
    sitelinks: s.optional(s.lazy(() => sitelinks2Schema)),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
