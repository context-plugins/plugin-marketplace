import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  commitmentPolicyAssignmentInternalSchema,
  commitmentPolicyAssignmentSchema,
  type CommitmentPolicyAssignment,
} from "./commitment-policy-assignment.js";

export type CommitmentPolicyDetail = {
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
  /** When the policy was created, RFC 3339 UTC. `null` if unknown. */
  createdTime: Date | null;
  /**
   * When the policy was last written, RFC 3339 UTC. For custom policies this is the last edit; for
   * built-in policies it also advances when DoiT re-publishes the catalog, even if the parameters
   * did not change. `null` if unknown.
   */
  updatedTime: Date | null;
  /**
   * Scopes explicitly assigned to this policy across AWS and GCP, sorted by `cloud`, `accountId`,
   * `service`, `region`. Empty when the policy is not assigned anywhere.
   */
  assignments: CommitmentPolicyAssignment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const commitmentPolicyDetailProperties: s.Shape<CommitmentPolicyDetail> = {
  id: s.string(),
  name: s.string(),
  isBuiltIn: s.boolean(),
  targetCoverage: s.float64(),
  lookbackDays: s.int(),
  ladderStepPercent: s.float64(),
  ladderIntervalDays: s.int(),
  bootstrapPercent: s.float64(),
  createdTime: s.nullable(s.dateTime()),
  updatedTime: s.nullable(s.dateTime()),
  assignments: s.array(s.lazy(() => commitmentPolicyAssignmentInternalSchema)),
};

export const commitmentPolicyDetailInternalSchema: Schema<CommitmentPolicyDetail> =
  s.object<CommitmentPolicyDetail>(commitmentPolicyDetailProperties, { additionalProperties: s.json() });

export const commitmentPolicyDetailSchema: Schema<CommitmentPolicyDetail> = s.lazySchema(() =>
  s.object<CommitmentPolicyDetail>(
    {
      ...commitmentPolicyDetailProperties,
      targetCoverage: s.float64().check(s.gte(1), s.lte(100)),
      lookbackDays: s.int().check(s.gte(1)),
      ladderStepPercent: s.float64().check(s.gte(1), s.lte(100)),
      ladderIntervalDays: s.int().check(s.gte(1)),
      bootstrapPercent: s.float64().check(s.gte(1), s.lte(100)),
      assignments: s.array(s.lazy(() => commitmentPolicyAssignmentSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
