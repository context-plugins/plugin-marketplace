import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Per-request agent capability toggles. Only meaningful when `chatMode` selects an agent mode;
 * ignored otherwise. Each field falls back to its own `default` below when omitted — a missing flag
 * is not uniformly `true`. Omitting the whole object applies every default.
 */
export type AgentCapabilities = {
  /** Whether the agent may search internal knowledge bases for this turn. @default true */
  internalSearch?: boolean;
  /** Whether the agent may perform web search for this turn. @default true */
  webSearch?: boolean;
  /** Whether the agent may use deeper, higher-latency retrieval for this turn. @default false */
  deepSearch?: boolean;
};

export const agentCapabilitiesSchema: Schema<AgentCapabilities> = s.object<AgentCapabilities>({
  internalSearch: s.defaulted(s.boolean(), true),
  webSearch: s.defaulted(s.boolean(), true),
  deepSearch: s.defaulted(s.boolean(), false),
});
