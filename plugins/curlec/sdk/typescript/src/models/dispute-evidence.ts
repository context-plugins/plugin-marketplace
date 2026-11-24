import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisputeEvidence = {
  /** Contested amount in currency subunits. */
  amount?: number;
  /** Your explanation of why the dispute should be resolved in your favour. Max 1000 characters. */
  summary?: string;
  /** Document IDs proving product shipment. */
  shippingProof?: string[];
  /** Order confirmation document IDs. */
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
  /** Unix timestamp of last evidence submission. Null for drafts. */
  submittedAt?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputeEvidenceSchema: Schema<DisputeEvidence> = s.object<DisputeEvidence>(
  {
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
    submittedAt: s.optionalNullable(s.int()),
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
      submittedAt: "submitted_at",
    },
  },
  { additionalProperties: s.json() },
);
