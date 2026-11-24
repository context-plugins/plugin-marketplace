import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commitmentTermSchema, type CommitmentTerm } from "./commitment-term.js";
import {
  gcpPurchasePlanStepInternalSchema,
  gcpPurchasePlanStepSchema,
  type GcpPurchasePlanStep,
} from "./gcp-purchase-plan-step.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";
import {
  purchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApiSchema,
  type PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi,
} from "./purchase-approval-status-doi-tperfect-scale-for-commitments-gcp-api.js";
import {
  status1DoiTPerfectScaleForCommitmentsGcpApiSchema,
  type Status1DoiTPerfectScaleForCommitmentsGcpApi,
} from "./status1-doi-tperfect-scale-for-commitments-gcp-api.js";

/** Laddering projection for one product-line and region scope. */
export type GcpPlannedPurchase = {
  /**
   * Region token for this projection scope (`lower_snake_case`, for example `us_east1`). `compute`
   * projections use the cross-region scope `global`; `cloud_sql` projections use concrete regions.
   */
  region: string;
  /**
   * Projection lifecycle state. When the stored document has no `status`, the server returns
   * `valid`.
   */
  status: Status1DoiTPerfectScaleForCommitmentsGcpApi;
  /**
   * Customer commitment approval state for this scope. Absent or unrecognized stored values
   * (including `REJECTED`) are returned as `pending_approval`, except on autonomous automation-mode
   * lines, where they are returned as `approved` since no customer approval is required.
   */
  purchaseApprovalStatus?: PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApi;
  /** Customer-visible pause reason, when purchases are paused. */
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
  /** Target hourly commitment at the end of the laddering cycle. Currency is `USD` in v1. */
  finalCommitment?: Money;
  /** Number of ladder steps remaining to reach the target commitment. */
  weeksToTarget?: number | null;
  /** First day of the planning cycle for this projection. Null when not set. */
  planningCycleStartDate?: string | null;
  /** Last day of the planning cycle for this projection. Null when not set. */
  planningCycleEndDate?: string | null;
  /** Total estimated savings from the underlying recommendation. Currency is `USD` in v1. */
  estimatedSavings?: Money;
  /**
   * Weekly ladder steps from the projection output. Omitted when the stored document has no
   * `output` section.
   */
  steps?: GcpPurchasePlanStep[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpPlannedPurchaseProperties: s.Shape<GcpPlannedPurchase> = {
  region: s.string(),
  status: status1DoiTPerfectScaleForCommitmentsGcpApiSchema,
  purchaseApprovalStatus: s.optional(
    s.lazy(() => purchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApiSchema),
  ),
  pauseNote: s.optionalNullable(s.string()),
  requiresApproval: s.optional(s.boolean()),
  wowViolation: s.optional(s.boolean()),
  profile: s.optional(s.string()),
  term: s.optional(s.lazy(() => commitmentTermSchema)),
  finalCommitment: s.optional(s.lazy(() => moneyInternalSchema)),
  weeksToTarget: s.optionalNullable(s.int()),
  planningCycleStartDate: s.optionalNullable(s.dateOnly()),
  planningCycleEndDate: s.optionalNullable(s.dateOnly()),
  estimatedSavings: s.optional(s.lazy(() => moneyInternalSchema)),
  steps: s.optional(s.array(s.lazy(() => gcpPurchasePlanStepInternalSchema))),
};

export const gcpPlannedPurchaseInternalSchema: Schema<GcpPlannedPurchase> = s.object<GcpPlannedPurchase>(
  gcpPlannedPurchaseProperties,
  { additionalProperties: s.json() },
);

export const gcpPlannedPurchaseSchema: Schema<GcpPlannedPurchase> = s.lazySchema(() =>
  s.object<GcpPlannedPurchase>(
    {
      ...gcpPlannedPurchaseProperties,
      region: s.string().check(s.pattern("^(global|[a-z]+(_[a-z0-9]+)+)$")),
      finalCommitment: s.optional(s.lazy(() => moneySchema)),
      estimatedSavings: s.optional(s.lazy(() => moneySchema)),
      steps: s.optional(s.array(s.lazy(() => gcpPurchasePlanStepSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
