import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WalletPaymentOptionContext = {
  merchantName: string;
  supportedSchemes: string[];
};

export const walletPaymentOptionContextSchema: Schema<WalletPaymentOptionContext> =
  s.object<WalletPaymentOptionContext>({
    merchantName: s.string(),
    supportedSchemes: s.array(s.string()),
    _keysMap: {
      merchantName: "merchant_name",
      supportedSchemes: "supported_schemes",
    },
  });
