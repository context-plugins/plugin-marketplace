import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dlocalUpiWalletOptionsSchema, type DlocalUpiWalletOptions } from "../dlocal-upi-wallet-options.js";

/** Passes `wallet` data to the dLocal API for those connectors that need it. */
export type Wallet1 = DlocalUpiWalletOptions;

export const wallet1Schema: Schema<Wallet1> = s.of<Wallet1>(
  s.union([s.lazy(() => dlocalUpiWalletOptionsSchema)]),
);
