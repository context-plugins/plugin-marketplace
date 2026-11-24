import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Variant within a message variable (Public API) */
export type DecisionEngineVariableVariant = {
  /** The default (non-localized) value for this variant */
  value: string;
  /** Key-value tags for categorizing this variant */
  tags?: Record<string, string>;
  /** Earliest date this variant is eligible to be sent (ISO 8601) */
  firstEligibleSendDate?: string;
  /** Latest date this variant is eligible to be sent (ISO 8601) */
  lastEligibleSendDate?: string;
  userAudienceFilter?: Record<string, unknown>;
  /**
   * Localized values for this variant, keyed by locale code (e.g. "en-US", "de-DE"). These are only
   * used at runtime when `localizationEnabled` is true on the parent variable. You can stage
   * translations by providing localeValues while leaving localizationEnabled unset or false.
   */
  localeValues?: Record<string, string>;
};

export const decisionEngineVariableVariantSchema: Schema<DecisionEngineVariableVariant> =
  s.object<DecisionEngineVariableVariant>({
    value: s.string(),
    tags: s.optional(s.record(s.string(), s.string())),
    firstEligibleSendDate: s.optional(s.string()),
    lastEligibleSendDate: s.optional(s.string()),
    userAudienceFilter: s.optional(s.record(s.string(), s.unknown())),
    localeValues: s.optional(s.record(s.string(), s.string())),
  });
