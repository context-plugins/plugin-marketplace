import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Wallets1 = {
  total: number;
  byChain: Record<string, number>;
};

export const wallets1Schema: Schema<Wallets1> = s.object<Wallets1>({
  total: s.int(),
  byChain: s.record(s.string(), s.int()),
  _keysMap: {
    byChain: "by_chain",
  },
});
