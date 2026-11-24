import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";

export type DisputesContestRequest = {
  /**
   * draft: save evidence without submitting. submit: send for bank review. Minimum one document
   * required for submit.
   */
  action?: Action;
  /** Amount being contested (paise). Defaults to full dispute amount. */
  amount?: number;
  /** Your explanation of why the dispute should be resolved in your favour. Max 1000 characters. */
  summary?: string;
  /** Document IDs proving product shipment. */
  shippingProof?: string[];
  billingProof?: string[];
  cancellationProof?: string[];
  customerCommunication?: string[];
  proofOfService?: string[];
  explanationLetter?: string[];
  refundConfirmation?: string[];
  accessActivityLog?: string[];
  refundCancellationPolicy?: string[];
  termAndConditions?: string[];
  others?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputesContestRequestSchema: Schema<DisputesContestRequest> = s.object<DisputesContestRequest>(
  {
    action: s.optional(s.lazy(() => actionSchema)),
    amount: s.optional(s.int()),
    summary: s.optional(s.string()),
    shippingProof: s.optional(s.array(s.string())),
    billingProof: s.optional(s.array(s.string())),
    cancellationProof: s.optional(s.array(s.string())),
    customerCommunication: s.optional(s.array(s.string())),
    proofOfService: s.optional(s.array(s.string())),
    explanationLetter: s.optional(s.array(s.string())),
    refundConfirmation: s.optional(s.array(s.string())),
    accessActivityLog: s.optional(s.array(s.string())),
    refundCancellationPolicy: s.optional(s.array(s.string())),
    termAndConditions: s.optional(s.array(s.string())),
    others: s.optional(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      shippingProof: "shipping_proof",
      billingProof: "billing_proof",
      cancellationProof: "cancellation_proof",
      customerCommunication: "customer_communication",
      proofOfService: "proof_of_service",
      explanationLetter: "explanation_letter",
      refundConfirmation: "refund_confirmation",
      accessActivityLog: "access_activity_log",
      refundCancellationPolicy: "refund_cancellation_policy",
      termAndConditions: "term_and_conditions",
    },
  },
  { additionalProperties: s.json() },
);
