import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1LinkscraperRequest = {
  /** The URL of the web page to scrape links from */
  url: string;
  /** Maximum number of links to scrape and return */
  maxlinks?: number;
  /** Include query strings in the scraped links */
  includequery?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1LinkscraperRequestSchema: Schema<V1LinkscraperRequest> = s.object<V1LinkscraperRequest>(
  {
    url: s.string(),
    maxlinks: s.optional(s.float64()),
    includequery: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
