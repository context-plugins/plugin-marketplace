import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PurchaseDidlogicComPurchasesApi = {
  /** DID phone number */
  number: string;
  /** Number of channels */
  channels: number;
  /** DID country */
  country: string;
  /** DID area */
  area: string;
  /** Audio codec */
  codec: Record<string, unknown>;
  /** DID status */
  checkState: string;
  /** Free minutes included */
  freeMinutes: number;
  /** Activation fee */
  activation: number;
  /** Monthly cost for the DID */
  monthlyFee: number;
  /** Per minute rate */
  perMinute: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const purchaseDidlogicComPurchasesApiSchema: Schema<PurchaseDidlogicComPurchasesApi> =
  s.object<PurchaseDidlogicComPurchasesApi>(
    {
      number: s.string(),
      channels: s.int(),
      country: s.string(),
      area: s.string(),
      codec: s.record(s.string(), s.unknown()),
      checkState: s.string(),
      freeMinutes: s.int(),
      activation: s.float64(),
      monthlyFee: s.float64(),
      perMinute: s.float64(),
      _keysMap: {
        checkState: "check_state",
        freeMinutes: "free_minutes",
        monthlyFee: "monthly_fee",
        perMinute: "per_minute",
      },
    },
    { additionalProperties: s.json() },
  );
