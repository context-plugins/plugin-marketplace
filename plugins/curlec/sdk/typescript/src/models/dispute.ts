import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { disputeEvidenceSchema, type DisputeEvidence } from "./dispute-evidence.js";
import {
  entityRazorpayDisputesApiSchema,
  type EntityRazorpayDisputesApi,
} from "./entity-razorpay-disputes-api.js";
import { phaseSchema, type Phase } from "./phase.js";
import { statusSchema, type Status } from "./status.js";

export type Dispute = {
  /** Unique dispute identifier. Prefix: disp_ */
  id?: string;
  entity?: EntityRazorpayDisputesApi;
  /** The payment against which the dispute was raised (pay_*). */
  paymentId?: string;
  /** Disputed amount in currency subunits. */
  amount?: number;
  currency?: string;
  /** Amount deducted from your balance when dispute is lost. */
  amountDeducted?: number;
  /** Code identifying the dispute reason. */
  reasonCode?: string;
  /** Human-readable explanation of the dispute cause. */
  reasonDescription?: string;
  /** Unix timestamp by which you must respond. Missing this forfeits the dispute. */
  respondBy?: number;
  /**
   * open: action required. under_review: evidence submitted, awaiting bank decision. won: resolved
   * in your favour. lost: resolved against you. closed: resolved without chargeback.
   */
  status?: Status;
  /** Escalation stage of the dispute process. */
  phase?: Phase;
  createdAt?: number;
  evidence?: DisputeEvidence;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputeSchema: Schema<Dispute> = s.object<Dispute>(
  {
    id: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entityRazorpayDisputesApiSchema)),
    paymentId: s.optional(s.string()),
    amount: s.optional(s.int()),
    currency: s.optional(s.string()),
    amountDeducted: s.optional(s.int()),
    reasonCode: s.optional(s.string()),
    reasonDescription: s.optional(s.string()),
    respondBy: s.optional(s.int()),
    status: s.optional(s.lazy(() => statusSchema)),
    phase: s.optional(s.lazy(() => phaseSchema)),
    createdAt: s.optional(s.int()),
    evidence: s.optional(s.lazy(() => disputeEvidenceSchema)),
    _keysMap: {
      paymentId: "payment_id",
      amountDeducted: "amount_deducted",
      reasonCode: "reason_code",
      reasonDescription: "reason_description",
      respondBy: "respond_by",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
