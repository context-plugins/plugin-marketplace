import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A commitment-laddering policy, either built-in or defined by the tenant. Percentages are
 * `1`–`100`, as entered in the DoiT Console, not the 0–1 fractions used by the recommendation and
 * inventory coverage fields.
 */
export type CommitmentPolicy = {
  /**
   * Policy identifier. Built-in policies use the fixed ids `conservative`, `balanced` and
   * `max_savings`; custom policies have an opaque id.
   */
  id: string;
  /** Display name. Built-in names are fixed; custom names are chosen by the tenant. */
  name: string;
  /** `true` for the three immutable built-in policies, `false` for tenant-defined policies. */
  isBuiltIn: boolean;
  /** Share of the optimal commitment the engine aims to purchase, as a percentage. */
  targetCoverage: number;
  /** Days of historical usage analyzed to build the recommendation baseline. */
  lookbackDays: number;
  /** Size of each incremental laddering step, as a percentage of the target commitment. */
  ladderStepPercent: number;
  /** Days between consecutive laddering steps. */
  ladderIntervalDays: number;
  /** Share of the target commitment purchased in the first (immediate) step, as a percentage. */
  bootstrapPercent: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const commitmentPolicyProperties: s.Shape<CommitmentPolicy> = {
  id: s.string(),
  name: s.string(),
  isBuiltIn: s.boolean(),
  targetCoverage: s.float64(),
  lookbackDays: s.int(),
  ladderStepPercent: s.float64(),
  ladderIntervalDays: s.int(),
  bootstrapPercent: s.float64(),
};

export const commitmentPolicyInternalSchema: Schema<CommitmentPolicy> = s.object<CommitmentPolicy>(
  commitmentPolicyProperties,
  { additionalProperties: s.json() },
);

export const commitmentPolicySchema: Schema<CommitmentPolicy> = s.lazySchema(() =>
  s.object<CommitmentPolicy>(
    {
      ...commitmentPolicyProperties,
      targetCoverage: s.float64().check(s.gte(1), s.lte(100)),
      lookbackDays: s.int().check(s.gte(1)),
      ladderStepPercent: s.float64().check(s.gte(1), s.lte(100)),
      ladderIntervalDays: s.int().check(s.gte(1)),
      bootstrapPercent: s.float64().check(s.gte(1), s.lte(100)),
    },
    { additionalProperties: s.json() },
  ),
);
