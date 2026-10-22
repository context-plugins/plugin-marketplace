import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clauseSchema, type Clause } from "./clause.js";
import { rolloutSchema, type Rollout } from "./rollout.js";

export type Rule = {
  /** The flag rule ID */
  id?: string;
  /** Whether the rule is disabled */
  disabled?: boolean;
  /** The index of the variation, from the array of variations for this flag */
  variation?: number;
  rollout?: Rollout;
  /** An array of clauses used for individual targeting based on attributes */
  clauses: Clause[];
  /** Whether LaunchDarkly tracks events for this rule */
  trackEvents: boolean;
  /** The rule description */
  description?: string;
  ref?: string;
};

export const ruleSchema: Schema<Rule> = s.object<Rule>({
  id: s.optional(s.string()),
  disabled: s.optional(s.boolean()),
  variation: s.optional(s.int()),
  rollout: s.optional(s.lazy(() => rolloutSchema)),
  clauses: s.array(s.lazy(() => clauseSchema)),
  trackEvents: s.boolean(),
  description: s.optional(s.string()),
  ref: s.optional(s.string()),
  _keysMap: {
    id: "_id",
  },
});
