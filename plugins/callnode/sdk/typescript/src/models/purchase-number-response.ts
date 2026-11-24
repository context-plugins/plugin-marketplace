import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { breakdownSchema, type Breakdown } from "./breakdown.js";
import { phoneNumberInternalSchema, phoneNumberSchema, type PhoneNumber } from "./phone-number.js";
import { walletSchema, type Wallet } from "./wallet.js";

export type PurchaseNumberResponse = {
  number?: PhoneNumber;
  /** Amount deducted from your wallet. 0 for included-in-plan numbers and idempotent replays. */
  charged?: number;
  breakdown?: Breakdown | null;
  wallet?: Wallet | null;
  includedInSubscription?: boolean;
  /** True when you already owned this number and nothing was billed. */
  idempotencyReplay?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const purchaseNumberResponseProperties: s.Shape<PurchaseNumberResponse> = {
  number: s.optional(s.lazy(() => phoneNumberInternalSchema)),
  charged: s.optional(s.float64()),
  breakdown: s.optionalNullable(s.lazy(() => breakdownSchema)),
  wallet: s.optionalNullable(s.lazy(() => walletSchema)),
  includedInSubscription: s.optional(s.boolean()),
  idempotencyReplay: s.optional(s.boolean()),
};

export const purchaseNumberResponseInternalSchema: Schema<PurchaseNumberResponse> =
  s.object<PurchaseNumberResponse>(purchaseNumberResponseProperties, { additionalProperties: s.json() });

export const purchaseNumberResponseSchema: Schema<PurchaseNumberResponse> = s.lazySchema(() =>
  s.object<PurchaseNumberResponse>(
    {
      ...purchaseNumberResponseProperties,
      number: s.optional(s.lazy(() => phoneNumberSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
