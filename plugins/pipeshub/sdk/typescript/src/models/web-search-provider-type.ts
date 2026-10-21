import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Supported web search provider. crawl4ai only reads pages (it backs up the built-in page reader)
 * and cannot be the default; firecrawl both searches and reads pages. searxng, firecrawl and
 * crawl4ai take a baseUrl; firecrawl defaults to its cloud API.
 */
export const WebSearchProviderType = {
  Duckduckgo: "duckduckgo",
  Serper: "serper",
  Tavily: "tavily",
  Exa: "exa",
  Brave: "brave",
  Searxng: "searxng",
  Firecrawl: "firecrawl",
  Crawl4Ai: "crawl4ai",
} as const;
export type WebSearchProviderType =
  | (typeof WebSearchProviderType)[keyof typeof WebSearchProviderType]
  | (string & {});

export const webSearchProviderTypeSchema: EnumSchema<WebSearchProviderType> =
  s.enumOf<WebSearchProviderType>(WebSearchProviderType);
