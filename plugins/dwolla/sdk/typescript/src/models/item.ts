import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achDetails3Schema, type AchDetails3 } from "./ach-details3.js";
import { clearing2Schema, type Clearing2 } from "./clearing2.js";
import { instantDetails1Schema, type InstantDetails1 } from "./instant-details1.js";
import { links36Schema, type Links36 } from "./links36.js";
import { processingChannel1Schema, type ProcessingChannel1 } from "./processing-channel1.js";
import { transferAmountSchema, type TransferAmount } from "./transfer-amount.js";

export type Item = {
  links?: Links36;
  amount?: TransferAmount;
  processingChannel?: ProcessingChannel1;
  metadata?: Record<string, unknown>;
  clearing?: Clearing2;
  achDetails?: AchDetails3;
  /**
   * Instant Payments specific transaction details for both RTP and FedNow networks. Applies to
   * items where processingChannel.destination is set to instant or real-time-payments. Only
   * destination is supported; there is no sender-side remittance field. Use
   * destination.remittanceData to convey payment context to the receiver. The metadata and
   * correlationId fields are for your own reconciliation and are not transmitted over the payment
   * network.
   */
  instantDetails?: InstantDetails1;
  correlationId?: string;
};

export const itemSchema: Schema<Item> = s.object<Item>({
  links: s.optional(s.lazy(() => links36Schema)),
  amount: s.optional(s.lazy(() => transferAmountSchema)),
  processingChannel: s.optional(s.lazy(() => processingChannel1Schema)),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  clearing: s.optional(s.lazy(() => clearing2Schema)),
  achDetails: s.optional(s.lazy(() => achDetails3Schema)),
  instantDetails: s.optional(s.lazy(() => instantDetails1Schema)),
  correlationId: s.optional(s.string()),
  _keysMap: {
    links: "_links",
  },
});
