import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { wallet1Schema, type Wallet1 } from "./unions/wallet1.js";

export type DlocalUpiOptions = {
  /** Passes `wallet` data to the dLocal API for those connectors that need it. */
  wallet?: Wallet1;
};

export const dlocalUpiOptionsSchema: Schema<DlocalUpiOptions> = s.object<DlocalUpiOptions>({
  wallet: s.optional(s.lazy(() => wallet1Schema)),
});
