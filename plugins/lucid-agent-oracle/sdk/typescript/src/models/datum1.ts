import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayNameSchema, type DisplayName } from "./unions/display-name.js";
import { erc8004IdSchema, type Erc8004Id } from "./unions/erc8004-id.js";

export type Datum1 = {
  id: string;
  displayName: DisplayName;
  erc8004Id: Erc8004Id;
  walletCount: number;
  protocolCount: number;
  evidenceCount: number;
  createdAt: string;
};

export const datum1Schema: Schema<Datum1> = s.object<Datum1>({
  id: s.string(),
  displayName: displayNameSchema,
  erc8004Id: erc8004IdSchema,
  walletCount: s.int(),
  protocolCount: s.int(),
  evidenceCount: s.int(),
  createdAt: s.string(),
  _keysMap: {
    displayName: "display_name",
    erc8004Id: "erc8004_id",
    walletCount: "wallet_count",
    protocolCount: "protocol_count",
    evidenceCount: "evidence_count",
    createdAt: "created_at",
  },
});
