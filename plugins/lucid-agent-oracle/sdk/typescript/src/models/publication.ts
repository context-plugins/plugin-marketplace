import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseTxSchema, type BaseTx } from "./unions/base-tx.js";
import { solanaTxSchema, type SolanaTx } from "./unions/solana-tx.js";

export type Publication = {
  solanaTx: SolanaTx;
  baseTx: BaseTx;
};

export const publicationSchema: Schema<Publication> = s.object<Publication>({
  solanaTx: solanaTxSchema,
  baseTx: baseTxSchema,
  _keysMap: {
    solanaTx: "solana_tx",
    baseTx: "base_tx",
  },
});
