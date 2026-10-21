import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MigrationSafetyIssueRep = {
  /** The ID of the rule which caused this issue */
  causingRuleId?: string;
  /**
   * A list of the IDs of the rules which are affected by this issue. <code>fallthrough</code> is a
   * sentinel value for the default rule.
   */
  affectedRuleIds?: string[];
  /**
   * A description of the issue that <code>causingRuleId</code> has caused for
   * <code>affectedRuleIds</code>.
   */
  issue?: string;
  /**
   * Whether the changes caused by <code>causingRuleId</code> bring inconsistency to the old system
   */
  oldSystemAffected?: boolean;
};

export const migrationSafetyIssueRepSchema: Schema<MigrationSafetyIssueRep> =
  s.object<MigrationSafetyIssueRep>({
    causingRuleId: s.optional(s.string()),
    affectedRuleIds: s.optional(s.array(s.string())),
    issue: s.optional(s.string()),
    oldSystemAffected: s.optional(s.boolean()),
  });
