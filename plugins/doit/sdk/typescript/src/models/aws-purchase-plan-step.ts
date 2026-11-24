import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";

/** A single weekly ladder step within a projection. */
export type AwsPurchasePlanStep = {
  /** Step sequence number (1-based) within the ladder. */
  order: number;
  /**
   * Calendar date (UTC) when this purchase step is scheduled to execute, with format YYYY-MM-DD.
   */
  scheduledDate: string;
  /** Hourly commitment to purchase on this step. */
  purchaseAmount: Money;
  /** Total hourly commitment after this step executes. */
  cumulativeCommitment: Money;
  /**
   * This step's proportional share of the projection-level `estimatedSavings` (allocated by
   * purchase amount). Zero when the recommendation total is unavailable.
   */
  estimatedSavings: Money;
  /** `true` if this is the initial bootstrap purchase. */
  isBootstrap: boolean;
  /** `true` if this step reaches the target commitment. */
  isFinal: boolean;
  /**
   * `true` when this step's `cumulativeCommitment` exceeds the customer-approved commitment ceiling
   * (`approvedFinalCommitment`). Used for per-step status in the ladder even when the
   * projection-level `purchaseApprovalStatus` is `approved`.
   */
  requiresApproval: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsPurchasePlanStepProperties: s.Shape<AwsPurchasePlanStep> = {
  order: s.int(),
  scheduledDate: s.dateOnly(),
  purchaseAmount: moneyInternalSchema,
  cumulativeCommitment: moneyInternalSchema,
  estimatedSavings: moneyInternalSchema,
  isBootstrap: s.boolean(),
  isFinal: s.boolean(),
  requiresApproval: s.boolean(),
};

export const awsPurchasePlanStepInternalSchema: Schema<AwsPurchasePlanStep> = s.object<AwsPurchasePlanStep>(
  awsPurchasePlanStepProperties,
  { additionalProperties: s.json() },
);

export const awsPurchasePlanStepSchema: Schema<AwsPurchasePlanStep> = s.lazySchema(() =>
  s.object<AwsPurchasePlanStep>(
    {
      ...awsPurchasePlanStepProperties,
      purchaseAmount: moneySchema,
      cumulativeCommitment: moneySchema,
      estimatedSavings: moneySchema,
    },
    { additionalProperties: s.json() },
  ),
);
