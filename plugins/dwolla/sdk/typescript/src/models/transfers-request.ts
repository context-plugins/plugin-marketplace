import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { achDetails2Schema, type AchDetails2 } from "./ach-details2.js";
import { clearingSchema, type Clearing } from "./clearing.js";
import { feeSchema, type Fee } from "./fee.js";
import { instantDetailsSchema, type InstantDetails } from "./instant-details.js";
import { links33Schema, type Links33 } from "./links33.js";
import { processingChannel2Schema, type ProcessingChannel2 } from "./processing-channel2.js";
import { rtpDetails1Schema, type RtpDetails1 } from "./rtp-details1.js";
import { transferAmountSchema, type TransferAmount } from "./transfer-amount.js";

export type TransfersRequest = {
  links: Links33;
  amount: TransferAmount;
  metadata?: Record<string, unknown>;
  fees?: Fee[];
  clearing?: Clearing;
  achDetails?: AchDetails2;
  /** Real-Time Payments (RTP) specific transaction details. */
  rtpDetails?: RtpDetails1;
  /**
   * Instant Payments specific transaction details for both RTP and FedNow networks. Only
   * destination is supported; there is no sender-side remittance field. Use
   * destination.remittanceData to convey payment context to the receiver. The metadata and
   * correlationId fields are for your own reconciliation and are not transmitted over the payment
   * network.
   */
  instantDetails?: InstantDetails;
  correlationId?: string;
  processingChannel?: ProcessingChannel2;
};

export const transfersRequestSchema: Schema<TransfersRequest> = s.object<TransfersRequest>({
  links: links33Schema,
  amount: transferAmountSchema,
  metadata: s.optional(s.record(s.string(), s.unknown())),
  fees: s.optional(s.array(s.lazy(() => feeSchema))),
  clearing: s.optional(s.lazy(() => clearingSchema)),
  achDetails: s.optional(s.lazy(() => achDetails2Schema)),
  rtpDetails: s.optional(s.lazy(() => rtpDetails1Schema)),
  instantDetails: s.optional(s.lazy(() => instantDetailsSchema)),
  correlationId: s.optional(s.string()),
  processingChannel: s.optional(s.lazy(() => processingChannel2Schema)),
  _keysMap: {
    links: "_links",
  },
});
