import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Stats = {
  walletCount: number;
  protocolCount: number;
  evidenceCount: number;
};

export const statsSchema: Schema<Stats> = s.object<Stats>({
  walletCount: s.int(),
  protocolCount: s.int(),
  evidenceCount: s.int(),
  _keysMap: {
    walletCount: "wallet_count",
    protocolCount: "protocol_count",
    evidenceCount: "evidence_count",
  },
});
