import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { composerProviderSchema, type ComposerProvider } from "./composer-provider.js";

/** One result of a Composer recipe — a finding on one affected resource. */
export type ComposerRecipeResult = {
  /** Result ID. */
  id: number;
  /** ID of the recipe the result belongs to. Equal to the `recipeId` path parameter. */
  ruleId: number;
  /** Identifier of the affected resource, as stored by Composer. */
  issuedResourceId: string;
  /**
   * Canonical cloud-provider identifier of the affected resource.
   * - AWS: the resource's ARN when one is available, otherwise the stored identifier (for example,
   *   an EC2 instance ID).
   * - Google Cloud: the API relative resource name (for example,
   *   `projects/my-project/zones/us-central1-a/instances/vm-1`), or the bucket name for Cloud
   *   Storage; otherwise the stored identifier.
   * - Other providers: the provider-native identifier.
   *
   * `null` when no identifier is stored or it could not be resolved; resolving it never fails the
   * request.
   */
  providerIdentifier: string | null;
  /**
   * Cloud-provider tags on the affected resource, as key/value pairs. An empty object means the
   * resource has no tags. `null` means the tags could not be resolved; resolving them never fails
   * the request.
   */
  tags: Record<string, string> | null;
  /** Name of the affected resource. */
  issuedResourceName: string;
  /**
   * Cloud account the affected resource belongs to (for example, an AWS account ID or a Google
   * Cloud project ID).
   */
  accountId: string;
  /** Cloud region of the affected resource. Absent for global resources. */
  region?: string;
  /** Cloud provider or platform, using the Console's provider names. */
  provider: ComposerProvider;
  /** Type of the affected resource. Absent when unknown. */
  resourceClass?: string;
  /** When the result was first detected (RFC 3339, UTC). */
  detectionTime: Date;
  /** When the result was resolved (RFC 3339, UTC). Absent while unresolved. */
  resolvedTime?: Date;
  /** Whether the result is resolved. */
  solved: boolean;
  /**
   * Whether the result is currently snoozed. Present only when `true`; absent means not snoozed.
   */
  snoozed?: boolean;
  /**
   * Whether the result's account was scanned recently. It does not say whether the result is
   * resolved or snoozed; use `solved` and `snoozed` for that, or the `status` filter.
   */
  isActive: boolean;
  /** ID of the most recent Composer scan that reported this result. Absent when unknown. */
  lastFlowId?: string;
  /** ID of the Composer scan that first reported this result. Absent when unknown. */
  firstFlowId?: string;
  /**
   * Potential cost savings — the daily amount in US dollars you would stop paying by acting on this
   * result. The Console **Cost savings** column is this daily US-dollar amount × 365, converted to
   * your organization's currency. Absent when not estimated, and always absent on resolved results.
   */
  costEstimationPotentialSavings?: number;
  /**
   * Cost avoidance — the daily amount in US dollars of a future charge (for example,
   * extended-support fees) you prevent by acting on this result in time. The Console **Cost
   * avoidance** column is this daily US-dollar amount × 365, converted to your organization's
   * currency. Absent when not estimated, and always absent on resolved results.
   */
  costEstimationPotentialIncreasedCosts?: number;
  /**
   * Freed commitments — the daily amount in US dollars of commitment coverage (Savings Plans,
   * Reserved Instances or CUDs) that acting on this result frees up for other usage. The Console
   * **Freed commitments** column is this daily US-dollar amount × 365, converted to your
   * organization's currency. Absent when not estimated, and always absent on resolved results.
   */
  costEstimationPotentialFreedCommitments?: number;
  /**
   * Avoidable commitments — the daily amount in US dollars of extra commitment or overlapping cost
   * you avoid by timing the action, for example to a Reserved Instance's expiry. The Console
   * **Avoidable commitments** column is this daily US-dollar amount × 365, converted to your
   * organization's currency. Absent when not estimated, and always absent on resolved results.
   */
  costEstimationPotentialIncreasedCommitmentsRequired?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const composerRecipeResultSchema: Schema<ComposerRecipeResult> = s.object<ComposerRecipeResult>(
  {
    id: s.int(),
    ruleId: s.int(),
    issuedResourceId: s.string(),
    providerIdentifier: s.nullable(s.string()),
    tags: s.nullable(s.record(s.string(), s.string())),
    issuedResourceName: s.string(),
    accountId: s.string(),
    region: s.optional(s.string()),
    provider: composerProviderSchema,
    resourceClass: s.optional(s.string()),
    detectionTime: s.dateTime(),
    resolvedTime: s.optional(s.dateTime()),
    solved: s.boolean(),
    snoozed: s.optional(s.boolean()),
    isActive: s.boolean(),
    lastFlowId: s.optional(s.string()),
    firstFlowId: s.optional(s.string()),
    costEstimationPotentialSavings: s.optional(s.float64()),
    costEstimationPotentialIncreasedCosts: s.optional(s.float64()),
    costEstimationPotentialFreedCommitments: s.optional(s.float64()),
    costEstimationPotentialIncreasedCommitmentsRequired: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
