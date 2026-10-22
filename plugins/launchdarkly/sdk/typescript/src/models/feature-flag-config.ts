import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { flagConfigEvaluationSchema, type FlagConfigEvaluation } from "./flag-config-evaluation.js";
import {
  flagConfigMigrationSettingsRepSchema,
  type FlagConfigMigrationSettingsRep,
} from "./flag-config-migration-settings-rep.js";
import { flagSummarySchema, type FlagSummary } from "./flag-summary.js";
import { linkSchema, type Link } from "./link.js";
import { prerequisiteSchema, type Prerequisite } from "./prerequisite.js";
import { ruleSchema, type Rule } from "./rule.js";
import { targetSchema, type Target } from "./target.js";
import { variationOrRolloutRepSchema, type VariationOrRolloutRep } from "./variation-or-rollout-rep.js";

export type FeatureFlagConfig = {
  /** Whether the flag is on */
  on: boolean;
  /** Boolean indicating if the feature flag is archived */
  archived: boolean;
  salt: string;
  sel: string;
  lastModified: number;
  /** Version of the feature flag */
  version: number;
  /**
   * An array of the individual targets that will receive a specific variation based on their key.
   * Individual targets with a context kind of 'user' are included here.
   */
  targets?: Target[];
  /**
   * An array of the individual targets that will receive a specific variation based on their key.
   * Individual targets with context kinds other than 'user' are included here.
   */
  contextTargets?: Target[];
  /**
   * An array of the rules for how to serve a variation to specific targets based on their
   * attributes
   */
  rules?: Rule[];
  fallthrough?: VariationOrRolloutRep;
  /** The ID of the variation to serve when the flag is off */
  offVariation?: number;
  /**
   * An array of the prerequisite flags and their variations that are required before this flag
   * takes effect
   */
  prerequisites?: Prerequisite[];
  site: Link;
  access?: Access;
  /** The environment name */
  environmentName: string;
  /** Whether LaunchDarkly tracks events for the feature flag, for all rules */
  trackEvents: boolean;
  /** Whether LaunchDarkly tracks events for the feature flag, for the default rule */
  trackEventsFallthrough: boolean;
  debugEventsUntilDate?: number;
  summary?: FlagSummary;
  evaluation?: FlagConfigEvaluation;
  migrationSettings?: FlagConfigMigrationSettingsRep;
};

export const featureFlagConfigSchema: Schema<FeatureFlagConfig> = s.object<FeatureFlagConfig>({
  on: s.boolean(),
  archived: s.boolean(),
  salt: s.string(),
  sel: s.string(),
  lastModified: s.int(),
  version: s.int(),
  targets: s.optional(s.array(s.lazy(() => targetSchema))),
  contextTargets: s.optional(s.array(s.lazy(() => targetSchema))),
  rules: s.optional(s.array(s.lazy(() => ruleSchema))),
  fallthrough: s.optional(s.lazy(() => variationOrRolloutRepSchema)),
  offVariation: s.optional(s.int()),
  prerequisites: s.optional(s.array(s.lazy(() => prerequisiteSchema))),
  site: linkSchema,
  access: s.optional(s.lazy(() => accessSchema)),
  environmentName: s.string(),
  trackEvents: s.boolean(),
  trackEventsFallthrough: s.boolean(),
  debugEventsUntilDate: s.optional(s.int()),
  summary: s.optional(s.lazy(() => flagSummarySchema)),
  evaluation: s.optional(s.lazy(() => flagConfigEvaluationSchema)),
  migrationSettings: s.optional(s.lazy(() => flagConfigMigrationSettingsRepSchema)),
  _keysMap: {
    site: "_site",
    access: "_access",
    environmentName: "_environmentName",
    debugEventsUntilDate: "_debugEventsUntilDate",
    summary: "_summary",
  },
});
