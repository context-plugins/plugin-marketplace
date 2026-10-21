import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Client-scoped request for an agent the caller can edit. */
export type PlatformAgentRequestCreate1 = {
  /** Identifier of the agent whose limit the request concerns. */
  agentId: string;
  /**
   * Explicit opaque spend-client ID, retained without normalization and not inferred from the
   * authenticating OAuth application. Control characters and the synthetic __deleted_clients__
   * aggregation ID are not valid spend-client IDs.
   */
  clientId: string;
  /** Optional explanation of why the increase is needed. */
  businessJustification?: string;
};

export const platformAgentRequestCreate1Schema: Schema<PlatformAgentRequestCreate1> =
  s.object<PlatformAgentRequestCreate1>({
    agentId: s.string(),
    clientId: s.string(),
    businessJustification: s.optional(s.string()),
    _keysMap: {
      agentId: "agent_id",
      clientId: "client_id",
      businessJustification: "business_justification",
    },
  });
