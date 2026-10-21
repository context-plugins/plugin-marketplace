import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Wallets = {
  total: number;
  byChain: Record<string, number>;
  byLinkType: Record<string, number>;
};

export const walletsSchema: Schema<Wallets> = s.object<Wallets>({
  total: s.int(),
  byChain: s.record(s.string(), s.int()),
  byLinkType: s.record(s.string(), s.int()),
  _keysMap: {
    byChain: "by_chain",
    byLinkType: "by_link_type",
  },
});
