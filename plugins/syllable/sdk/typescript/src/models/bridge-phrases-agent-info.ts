import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Information about an agent linked to a bridge phrases config. */
export type BridgePhrasesAgentInfo = {
  /** The ID of the agent. */
  id: number;
  /** The name of the agent. */
  name: string;
};

export const bridgePhrasesAgentInfoSchema: Schema<BridgePhrasesAgentInfo> = s.object<BridgePhrasesAgentInfo>({
  id: s.int(),
  name: s.string(),
});
