import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { digitalWalletSchema, type DigitalWallet } from "./digital-wallet.js";

export type DigitalWallets = {
  /** A list of items returned for this request. */
  items: DigitalWallet[];
};

export const digitalWalletsSchema: Schema<DigitalWallets> = s.object<DigitalWallets>({
  items: s.array(s.lazy(() => digitalWalletSchema)),
});
