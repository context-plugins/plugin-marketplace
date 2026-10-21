import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Stats1 = {
  agentCount: number;
  walletCount: number;
};

export const stats1Schema: Schema<Stats1> = s.object<Stats1>({
  agentCount: s.int(),
  walletCount: s.int(),
  _keysMap: {
    agentCount: "agent_count",
    walletCount: "wallet_count",
  },
});
