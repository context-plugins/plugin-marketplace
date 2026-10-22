import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GooglePayPaymentOptionContext = {
  merchantName: string;
  supportedSchemes: string[];
  gateway: string;
  gatewayMerchantId: string;
};

export const googlePayPaymentOptionContextSchema: Schema<GooglePayPaymentOptionContext> =
  s.object<GooglePayPaymentOptionContext>({
    merchantName: s.string(),
    supportedSchemes: s.array(s.string()),
    gateway: s.string(),
    gatewayMerchantId: s.string(),
    _keysMap: {
      merchantName: "merchant_name",
      supportedSchemes: "supported_schemes",
      gatewayMerchantId: "gateway_merchant_id",
    },
  });
