import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GooglePaySession = {
  /** The gateway ID for the merchant as assigned by our platform. */
  gatewayMerchantId: string;
  /** The session token for Google Pay. */
  token: string;
};

export const googlePaySessionSchema: Schema<GooglePaySession> = s.object<GooglePaySession>({
  gatewayMerchantId: s.string(),
  token: s.string(),
  _keysMap: {
    gatewayMerchantId: "gateway_merchant_id",
  },
});
