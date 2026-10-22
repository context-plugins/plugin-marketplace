import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterOp1Schema, type FilterOp1 } from "./filter-op1.js";

/**
 * A single predicate over one enrichment attribute of an outbound request.
 *
 * ``field`` names a key in the request's enrichment payload (e.g. ``line_type``, ``caller_type``,
 * ``caller_name``, ``carrier_name``, ``mcc``, ``mnc``). Any attribute captured at lookup time can
 * be filtered on with no code change.
 *
 * Which Twilio Lookup data packages get requested (and billed) for a campaign is derived from the
 * fields its rules reference, so a rule on ``caller_type`` / ``caller_name`` is what turns on the
 * separately billed ``caller_name`` package.
 */
export type TargetFilterRule = {
  /** Enrichment attribute to match on (a key in the request enrichment payload). */
  field: string;
  /** Comparison operator. */
  op: FilterOp1;
  /** Values to compare against. Ignored for exists / not_exists. */
  values?: string[];
};

export const targetFilterRuleSchema: Schema<TargetFilterRule> = s.object<TargetFilterRule>({
  field: s.string(),
  op: filterOp1Schema,
  values: s.optional(s.array(s.string())),
});
