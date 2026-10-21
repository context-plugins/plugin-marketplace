import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Wallet = {
  chain: string;
  address: string;
  linkType: string;
  confidence: number;
};

export const walletSchema: Schema<Wallet> = s.object<Wallet>({
  chain: s.string(),
  address: s.string(),
  linkType: s.string(),
  confidence: s.float64(),
  _keysMap: {
    linkType: "link_type",
  },
});
