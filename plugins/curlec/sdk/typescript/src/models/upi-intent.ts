import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Present only for reverse penny drop (UPI intent flow) */
export type UpiIntent = {
  intentUrl?: string;
  phonepeUrl?: string;
  gpayUrl?: string;
  paytmUrl?: string;
  bhimUrl?: string;
  encodedQrCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const upiIntentSchema: Schema<UpiIntent> = s.object<UpiIntent>(
  {
    intentUrl: s.optional(s.string()),
    phonepeUrl: s.optional(s.string()),
    gpayUrl: s.optional(s.string()),
    paytmUrl: s.optional(s.string()),
    bhimUrl: s.optional(s.string()),
    encodedQrCode: s.optional(s.string()),
    _keysMap: {
      intentUrl: "intent_url",
      phonepeUrl: "phonepe_url",
      gpayUrl: "gpay_url",
      paytmUrl: "paytm_url",
      bhimUrl: "bhim_url",
      encodedQrCode: "encoded_qr_code",
    },
  },
  { additionalProperties: s.json() },
);
