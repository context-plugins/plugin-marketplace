import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { destination9Schema, type Destination9 } from "./destination9.js";

/**
 * Instant Payments specific transaction details for both RTP and FedNow networks. Applies to items
 * where processingChannel.destination is set to instant or real-time-payments. Only destination is
 * supported; there is no sender-side remittance field. Use destination.remittanceData to convey
 * payment context to the receiver. The metadata and correlationId fields are for your own
 * reconciliation and are not transmitted over the payment network.
 */
export type InstantDetails1 = {
  /** Instant payment details for the destination */
  destination?: Destination9;
};

export const instantDetails1Schema: Schema<InstantDetails1> = s.object<InstantDetails1>({
  destination: s.optional(s.lazy(() => destination9Schema)),
});
