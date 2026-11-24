import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agentCardWalletSummarySchema, type AgentCardWalletSummary } from "./agent-card-wallet-summary.js";

export type AgentCardWalletListResponse = {
  wallets: AgentCardWalletSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentCardWalletListResponseSchema: Schema<AgentCardWalletListResponse> =
  s.object<AgentCardWalletListResponse>(
    {
      wallets: s.array(s.lazy(() => agentCardWalletSummarySchema)),
    },
    { additionalProperties: s.json() },
  );
