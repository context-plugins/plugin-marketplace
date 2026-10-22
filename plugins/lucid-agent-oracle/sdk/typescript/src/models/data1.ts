import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conflictsSchema, type Conflicts } from "./conflicts.js";
import { evidenceSchema, type Evidence } from "./evidence.js";
import { protocolsSchema, type Protocols } from "./protocols.js";
import { walletsSchema, type Wallets } from "./wallets.js";

export type Data1 = {
  agentId: string;
  wallets: Wallets;
  evidence: Evidence;
  protocols: Protocols;
  conflicts: Conflicts;
  firstSeen: string;
  lastActive: string;
};

export const data1Schema: Schema<Data1> = s.object<Data1>({
  agentId: s.string(),
  wallets: walletsSchema,
  evidence: evidenceSchema,
  protocols: protocolsSchema,
  conflicts: conflictsSchema,
  firstSeen: s.string(),
  lastActive: s.string(),
  _keysMap: {
    agentId: "agent_id",
    firstSeen: "first_seen",
    lastActive: "last_active",
  },
});
