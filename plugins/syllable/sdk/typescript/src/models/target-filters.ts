import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Match, matchSchema } from "./match.js";
import { OnUnknown, onUnknownSchema } from "./on-unknown.js";
import { targetFilterRuleSchema, type TargetFilterRule } from "./target-filter-rule.js";

/**
 * Generic target filter for an outbound campaign: a flat list of rules over request enrichment.
 *
 * A request is *dialable* when it matches the ruleset (``match='all'`` -> every rule; ``'any'`` ->
 * at least one rule); non-matching requests are skipped. ``on_unknown`` decides the fate of
 * requests whose enrichment never resolved (no lookup / lookup failed). An empty ``rules`` list
 * means no filter (all numbers dialed), matching the pre-filter behavior.
 */
export type TargetFilters = {
  /** How to combine rules: 'all' (AND) or 'any' (OR). @default Match.All */
  match?: Match;
  /**
   * Whether to dial requests whose enrichment is unresolved (no lookup data). Applied per rule: it
   * decides what a rule contributes when *that rule's* attribute is unresolved, and never overrides
   * a rule the request definitively failed -- so a request that fails one rule is still skipped
   * even if a different rule's attribute is missing. "Unresolved" covers a missing value and also
   * the value Twilio returns to mean "looked up, could not answer": for line_type that is 'unknown'
   * (a valid number whose line type it could not determine), and for caller_type both no CNAM data
   * at all (non-US numbers) and 'UNDETERMINED' (a US number it looked up but could not classify).
   *
   * @default OnUnknown.Include
   */
  onUnknown?: OnUnknown;
  /** Predicates over request enrichment attributes. Empty means no filter. */
  rules?: TargetFilterRule[];
};

export const targetFiltersSchema: Schema<TargetFilters> = s.object<TargetFilters>({
  match: s.defaulted(matchSchema, Match.All),
  onUnknown: s.defaulted(onUnknownSchema, OnUnknown.Include),
  rules: s.optional(s.array(s.lazy(() => targetFilterRuleSchema))),
  _keysMap: {
    onUnknown: "on_unknown",
  },
});
