import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A spendable project wallet as the composer needs to show it. */
export type AgentCardWalletSummary = {
  id: string;
  name: string;
  currency: string;
  availableCents: number;
  activeHoldCents: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const agentCardWalletSummarySchema: Schema<AgentCardWalletSummary> = s.object<AgentCardWalletSummary>(
  {
    id: s.string(),
    name: s.string(),
    currency: s.string(),
    availableCents: s.int(),
    activeHoldCents: s.int(),
  },
  { additionalProperties: s.json() },
);
