import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Primary crawler that was used by Google to crawl your site. */
export const CrawledAs = {
  CrawlingUserAgentUnspecified: "CRAWLING_USER_AGENT_UNSPECIFIED",
  Desktop: "DESKTOP",
  Mobile: "MOBILE",
} as const;
export type CrawledAs = (typeof CrawledAs)[keyof typeof CrawledAs] | (string & {});

export const crawledAsSchema: EnumSchema<CrawledAs> = s.enumOf<CrawledAs>(CrawledAs);
