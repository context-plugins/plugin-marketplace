import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sitelinksSchema, type Sitelinks } from "./sitelinks.js";

export type OrganicResult = {
  /** Position in search results (1-indexed) */
  position?: number;
  /** Title of the search result */
  title?: string;
  /** URL of the search result */
  link?: string;
  /** Formatted URL as displayed in search results */
  displayedLink?: string;
  /** Text snippet describing the page content */
  snippet?: string;
  /** Publication date if available */
  date?: string;
  /** Page number this result appeared on (1-indexed) */
  page?: number;
  /** Sitelinks displayed under the main result */
  sitelinks?: Sitelinks;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const organicResultSchema: Schema<OrganicResult> = s.object<OrganicResult>(
  {
    position: s.optional(s.float64()),
    title: s.optional(s.string()),
    link: s.optional(s.string()),
    displayedLink: s.optional(s.string()),
    snippet: s.optional(s.string()),
    date: s.optional(s.string()),
    page: s.optional(s.float64()),
    sitelinks: s.optional(s.lazy(() => sitelinksSchema)),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
