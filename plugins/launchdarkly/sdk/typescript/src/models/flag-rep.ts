import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";

export type FlagRep = {
  /** The targeting rule */
  targetingRule?: string;
  /** The rule description */
  targetingRuleDescription?: string;
  /** An array of clauses used for individual targeting based on attributes */
  targetingRuleClauses?: Record<string, unknown>[];
  /** The flag version */
  flagConfigVersion?: number;
  /** The ID of the variation to route traffic not part of the experiment analysis to */
  notInExperimentVariationId?: string;
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const flagRepSchema: Schema<FlagRep> = s.object<FlagRep>({
  targetingRule: s.optional(s.string()),
  targetingRuleDescription: s.optional(s.string()),
  targetingRuleClauses: s.optional(s.array(s.record(s.string(), s.unknown()))),
  flagConfigVersion: s.optional(s.int()),
  notInExperimentVariationId: s.optional(s.string()),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  _keysMap: {
    links: "_links",
  },
});
