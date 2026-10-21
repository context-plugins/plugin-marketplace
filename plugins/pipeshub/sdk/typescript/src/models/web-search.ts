import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Web search provider attached to this agent. Null when none is configured. */
export type WebSearch = {
  /** Provider identifier (e.g. "tavily", "serper", "exa", "duckduckgo") */
  provider: string;
  providerKey?: string;
  providerLabel?: string;
};

export const webSearchSchema: Schema<WebSearch> = s.object<WebSearch>({
  provider: s.string(),
  providerKey: s.optional(s.string()),
  providerLabel: s.optional(s.string()),
});
