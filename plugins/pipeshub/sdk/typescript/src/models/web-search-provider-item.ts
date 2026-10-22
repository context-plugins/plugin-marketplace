import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { webSearchProviderTypeSchema, type WebSearchProviderType } from "./web-search-provider-type.js";

/** Web search provider configuration item returned by getWebSearchProviders */
export type WebSearchProviderItem = {
  /**
   * Supported web search provider. crawl4ai only reads pages (it backs up the built-in page reader)
   * and cannot be the default; firecrawl both searches and reads pages. searxng, firecrawl and
   * crawl4ai take a baseUrl; firecrawl defaults to its cloud API.
   */
  provider: WebSearchProviderType;
  /** Unique key for the provider configuration */
  providerKey: string;
  /**
   * Provider-specific configuration as stored and returned by the gateway (open record). API
   * providers include `apiKey` (masked for non-admins); searxng, firecrawl and crawl4ai include
   * `baseUrl`. Additional keys may be present.
   */
  configuration: Record<string, unknown>;
  isDefault: boolean;
};

export const webSearchProviderItemSchema: Schema<WebSearchProviderItem> = s.object<WebSearchProviderItem>({
  provider: webSearchProviderTypeSchema,
  providerKey: s.string(),
  configuration: s.record(s.string(), s.unknown()),
  isDefault: s.boolean(),
});
