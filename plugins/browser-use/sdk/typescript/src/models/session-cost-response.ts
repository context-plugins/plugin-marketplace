import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Everything a session cost, split by what it was spent on.
 *
 * Recorded usage, not an invoice total — promotional waivers and credits are applied downstream in
 * billing.
 *
 * Browser time and proxy bandwidth are metered against the session's browser, which outlives any
 * single run, so they have no per-run number — only `RunSummary.total_cost_usd`, the LLM (and web
 * search) charge, does.
 *
 * All amounts are fixed-6-decimal strings for the same reason as `RunSummary.total_cost_usd`: JS
 * clients lose precision on float.
 */
export type SessionCostResponse = {
  sessionId: string;
  numRuns: number;
  llmCostUsd: string;
  searchCostUsd: string;
  browserCostUsd: string;
  proxyCostUsd: string;
  proxyUsedMb: string;
  totalCostUsd: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionCostResponseSchema: Schema<SessionCostResponse> = s.object<SessionCostResponse>(
  {
    sessionId: s.string(),
    numRuns: s.int(),
    llmCostUsd: s.string(),
    searchCostUsd: s.string(),
    browserCostUsd: s.string(),
    proxyCostUsd: s.string(),
    proxyUsedMb: s.string(),
    totalCostUsd: s.string(),
  },
  { additionalProperties: s.json() },
);
