import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { dlocalWalletOptionsSchema, type DlocalWalletOptions } from "../dlocal-wallet-options.js";

/** Passes `wallet` data to the dLocal API for those connectors that need it. */
export type Wallet = DlocalWalletOptions;

export const walletSchema: Schema<Wallet> = s.of<Wallet>(s.union([s.lazy(() => dlocalWalletOptionsSchema)]));
