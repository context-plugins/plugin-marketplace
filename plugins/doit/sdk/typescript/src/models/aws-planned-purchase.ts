import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsPurchasePlanStepInternalSchema,
  awsPurchasePlanStepSchema,
  type AwsPurchasePlanStep,
} from "./aws-purchase-plan-step.js";
import { commitmentTermSchema, type CommitmentTerm } from "./commitment-term.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";
import { paymentOption3Schema, type PaymentOption3 } from "./payment-option3.js";
import { purchaseApprovalStatusSchema, type PurchaseApprovalStatus } from "./purchase-approval-status.js";
import { serviceSchema, type Service } from "./service.js";
import {
  statusDoiTPerfectScaleForCommitmentsAwsApiSchema,
  type StatusDoiTPerfectScaleForCommitmentsAwsApi,
} from "./status-doi-tperfect-scale-for-commitments-aws-api.js";

export type AwsPlannedPurchase = {
  /** 12-digit account number of the AWS organization's management (payer) account. */
  managementAccountId: string;
  /** Commitment type this projection belongs to (`compute` or `database`). */
  service: Service;
  /**
   * Projection lifecycle state. `expired` means the planning cycle has lapsed and a new projection
   * should be triggered by the automated scheduler. When the stored document has no `status`, the
   * server returns `valid`.
   */
  status: StatusDoiTPerfectScaleForCommitmentsAwsApi;
  /**
   * Approval state for purchases of this commitment type. Approve or pause on the Planned Purchases
   * tab in the DoiT Console. Absent or unrecognized stored values are returned as
   * `pending_approval`, except on autonomous automation-mode lines, where they are returned as
   * `approved` since no customer approval is required.
   */
  purchaseApprovalStatus?: PurchaseApprovalStatus;
  /**
   * Customer-visible pause reason when `purchaseApprovalStatus` is `paused`. Null when purchases
   * are not paused.
   */
  pauseNote?: string | null;
  /**
   * `true` when the projection as a whole requires customer approval before the planner stores a
   * purchase plan: the target `finalCommitment` exceeds the approved ceiling, and/or
   * `purchaseApprovalStatus` is not `approved`. Distinct from step-level
   * `steps[].requiresApproval`, which flags individual ladder rows that exceed the ceiling.
   */
  requiresApproval?: boolean;
  /** `true` when week-over-week eligible spend dropped beyond the allowed threshold. */
  wowViolation?: boolean;
  /**
   * Coverage target policy used to generate this projection (built-in or customer-defined). Omitted
   * when the projection predates policy tracking.
   */
  profile?: string;
  /** Commitment term used for projected purchases. */
  term?: CommitmentTerm;
  /**
   * Payment structure for projected purchases. May be null when not set on the stored projection.
   */
  paymentOption?: PaymentOption3 | null;
  /** Target hourly commitment at the end of the laddering cycle. Currency is `USD`. */
  finalCommitment?: Money;
  /** Number of ladder steps remaining to reach the target commitment. */
  weeksToTarget?: number | null;
  /** First day of the planning cycle for this projection. Null when not set. */
  planningCycleStartDate?: string | null;
  /** Last day of the planning cycle for this projection. Null when not set. */
  planningCycleEndDate?: string | null;
  /** Total estimated savings from the underlying recommendation. Currency is `USD`. */
  estimatedSavings?: Money;
  /**
   * Weekly ladder steps from the projection output. Omitted when the stored document has no
   * `output` section.
   */
  steps?: AwsPurchasePlanStep[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsPlannedPurchaseProperties: s.Shape<AwsPlannedPurchase> = {
  managementAccountId: s.string(),
  service: serviceSchema,
  status: statusDoiTPerfectScaleForCommitmentsAwsApiSchema,
  purchaseApprovalStatus: s.optional(s.lazy(() => purchaseApprovalStatusSchema)),
  pauseNote: s.optionalNullable(s.string()),
  requiresApproval: s.optional(s.boolean()),
  wowViolation: s.optional(s.boolean()),
  profile: s.optional(s.string()),
  term: s.optional(s.lazy(() => commitmentTermSchema)),
  paymentOption: s.optionalNullable(s.lazy(() => paymentOption3Schema)),
  finalCommitment: s.optional(s.lazy(() => moneyInternalSchema)),
  weeksToTarget: s.optionalNullable(s.int()),
  planningCycleStartDate: s.optionalNullable(s.dateOnly()),
  planningCycleEndDate: s.optionalNullable(s.dateOnly()),
  estimatedSavings: s.optional(s.lazy(() => moneyInternalSchema)),
  steps: s.optional(s.array(s.lazy(() => awsPurchasePlanStepInternalSchema))),
};

export const awsPlannedPurchaseInternalSchema: Schema<AwsPlannedPurchase> = s.object<AwsPlannedPurchase>(
  awsPlannedPurchaseProperties,
  { additionalProperties: s.json() },
);

export const awsPlannedPurchaseSchema: Schema<AwsPlannedPurchase> = s.lazySchema(() =>
  s.object<AwsPlannedPurchase>(
    {
      ...awsPlannedPurchaseProperties,
      finalCommitment: s.optional(s.lazy(() => moneySchema)),
      estimatedSavings: s.optional(s.lazy(() => moneySchema)),
      steps: s.optional(s.array(s.lazy(() => awsPurchasePlanStepSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
