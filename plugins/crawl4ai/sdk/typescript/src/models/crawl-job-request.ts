import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CrawlJobRequest = {
  /** List of URLs to crawl */
  urls: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const crawlJobRequestSchema: Schema<CrawlJobRequest> = s.object<CrawlJobRequest>(
  {
    urls: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
