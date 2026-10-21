import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protocolSchema, type Protocol } from "./protocol.js";
import { statsSchema, type Stats } from "./stats.js";
import { displayNameSchema, type DisplayName } from "./unions/display-name.js";
import { erc8004IdSchema, type Erc8004Id } from "./unions/erc8004-id.js";
import { lucidTenantSchema, type LucidTenant } from "./unions/lucid-tenant.js";
import { reputation1Schema, type Reputation1 } from "./unions/reputation1.js";
import { walletSchema, type Wallet } from "./wallet.js";

export type AgentProfile = {
  id: string;
  displayName: DisplayName;
  erc8004Id: Erc8004Id;
  lucidTenant: LucidTenant;
  reputation: Reputation1;
  wallets: Wallet[];
  protocols: Protocol[];
  stats: Stats;
  createdAt: string;
  updatedAt: string;
};

export const agentProfileSchema: Schema<AgentProfile> = s.object<AgentProfile>({
  id: s.string(),
  displayName: displayNameSchema,
  erc8004Id: erc8004IdSchema,
  lucidTenant: lucidTenantSchema,
  reputation: reputation1Schema,
  wallets: s.array(s.lazy(() => walletSchema)),
  protocols: s.array(s.lazy(() => protocolSchema)),
  stats: statsSchema,
  createdAt: s.string(),
  updatedAt: s.string(),
  _keysMap: {
    displayName: "display_name",
    erc8004Id: "erc8004_id",
    lucidTenant: "lucid_tenant",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
});
