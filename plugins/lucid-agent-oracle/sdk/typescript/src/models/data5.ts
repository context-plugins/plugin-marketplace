import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentsSchema, type Agents } from "./agents.js";
import { evidenceSchema, type Evidence } from "./evidence.js";
import { wallets1Schema, type Wallets1 } from "./wallets1.js";

export type Data5 = {
  protocolId: string;
  agents: Agents;
  wallets: Wallets1;
  evidence: Evidence;
  recentRegistrations7D: number;
  activeConflicts: number;
};

export const data5Schema: Schema<Data5> = s.object<Data5>({
  protocolId: s.string(),
  agents: agentsSchema,
  wallets: wallets1Schema,
  evidence: evidenceSchema,
  recentRegistrations7D: s.int(),
  activeConflicts: s.int(),
  _keysMap: {
    protocolId: "protocol_id",
    recentRegistrations7D: "recent_registrations_7d",
    activeConflicts: "active_conflicts",
  },
});
