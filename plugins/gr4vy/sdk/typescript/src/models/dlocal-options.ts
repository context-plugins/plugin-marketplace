import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { walletSchema, type Wallet } from "./unions/wallet.js";

export type DlocalOptions = {
  /** Passes `wallet` data to the dLocal API for those connectors that need it. */
  wallet?: Wallet;
};

export const dlocalOptionsSchema: Schema<DlocalOptions> = s.object<DlocalOptions>({
  wallet: s.optional(s.lazy(() => walletSchema)),
});
