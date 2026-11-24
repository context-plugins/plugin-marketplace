import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { composerProviderSchema, type ComposerProvider } from "./composer-provider.js";
import {
  composerRecipeMetadataInternalSchema,
  composerRecipeMetadataSchema,
  type ComposerRecipeMetadata,
} from "./composer-recipe-metadata.js";
import { severitySchema, type Severity } from "./severity.js";
import {
  statusDoiTComposerInsightsBetaApiSchema,
  type StatusDoiTComposerInsightsBetaApi,
} from "./status-doi-tcomposer-insights-beta-api.js";

/**
 * A Composer recipe with findings in your cloud accounts. Counts and savings cover results from
 * recently scanned accounts only.
 */
export type ComposerRecipe = {
  /** Recipe ID. Use it as `recipeId` to list the recipe's results. */
  id: number;
  /** Recipe title, as shown in the Console. */
  title: string;
  /**
   * Longer explanation of what the recipe detects. Fetched on a best-effort basis, so it can be
   * absent even when the recipe has one.
   */
  description?: string;
  /** Cloud provider or platform, using the Console's provider names. */
  provider: ComposerProvider;
  /** Severity of the recipe's results, set by the recipe's author. */
  severity: Severity;
  /** Type of cloud resource the recipe's findings are on. Absent when unknown. */
  affectedResourceType?: string;
  /** Number of active results (not resolved and not snoozed). 0 when the recipe is dismissed. */
  activeResultsCount: number;
  /** Number of results in any status. 0 when the recipe is dismissed. */
  totalResultsCount: number;
  /** Number of resolved results. 0 when the recipe is dismissed. */
  resolvedResultsCount: number;
  /** Number of snoozed results. 0 when the recipe is dismissed. */
  snoozedResultsCount: number;
  /**
   * Recipe status, derived from its results and whether it is dismissed. Absent when unavailable.
   */
  status?: StatusDoiTComposerInsightsBetaApi;
  /** Whether the recipe has been dismissed for your customer. */
  isDismissed: boolean;
  /**
   * When the earliest of the recipe's results was first detected (RFC 3339, UTC). Absent when
   * unavailable.
   */
  detectionTime?: Date;
  /** Estimated time to fix one finding, in minutes. Absent when not estimated. */
  estimatedFixTimeMinutes?: number;
  /**
   * Potential cost savings across the recipe's active results, as a daily amount in US dollars. A
   * decimal string with 2 decimal places (8 for amounts below 0.01), unlike the numeric per-result
   * `costEstimationPotentialSavings`. When no active result has an estimate, it is the total
   * recorded on the recipe's resolved results instead. The Console **Cost savings** column is this
   * daily US-dollar amount × 365, converted to your organization's currency. Absent when not
   * estimated.
   */
  totalPotentialSavings?: string;
  /**
   * Remediation guidance for the recipe. Always present; an empty object means no guidance is
   * available. Each field is present only when the recipe has that content.
   */
  metadata: ComposerRecipeMetadata;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const composerRecipeProperties: s.Shape<ComposerRecipe> = {
  id: s.int(),
  title: s.string(),
  description: s.optional(s.string()),
  provider: composerProviderSchema,
  severity: severitySchema,
  affectedResourceType: s.optional(s.string()),
  activeResultsCount: s.int(),
  totalResultsCount: s.int(),
  resolvedResultsCount: s.int(),
  snoozedResultsCount: s.int(),
  status: s.optional(s.lazy(() => statusDoiTComposerInsightsBetaApiSchema)),
  isDismissed: s.boolean(),
  detectionTime: s.optional(s.dateTime()),
  estimatedFixTimeMinutes: s.optional(s.int()),
  totalPotentialSavings: s.optional(s.string()),
  metadata: composerRecipeMetadataInternalSchema,
};

export const composerRecipeInternalSchema: Schema<ComposerRecipe> = s.object<ComposerRecipe>(
  composerRecipeProperties,
  { additionalProperties: s.json() },
);

export const composerRecipeSchema: Schema<ComposerRecipe> = s.lazySchema(() =>
  s.object<ComposerRecipe>(
    {
      ...composerRecipeProperties,
      activeResultsCount: s.int().check(s.gte(0)),
      totalResultsCount: s.int().check(s.gte(0)),
      resolvedResultsCount: s.int().check(s.gte(0)),
      snoozedResultsCount: s.int().check(s.gte(0)),
      estimatedFixTimeMinutes: s.optional(s.int().check(s.gte(0))),
      metadata: composerRecipeMetadataSchema,
    },
    { additionalProperties: s.json() },
  ),
);
