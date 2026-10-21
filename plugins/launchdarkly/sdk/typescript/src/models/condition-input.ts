import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConditionInput = {
  scheduleKind?: string;
  executionDate?: number;
  /**
   * For workflow stages whose scheduled execution is relative, how far in the future the stage
   * should start.
   */
  waitDuration?: number;
  waitDurationUnit?: string;
  /** Whether the workflow stage should be executed immediately */
  executeNow?: boolean;
  /** A description of the approval required for this stage */
  description?: string;
  /** A list of member IDs for the members to request approval from for this stage */
  notifyMemberIds?: string[];
  /** A list of team keys for the teams to request approval from for this stage */
  notifyTeamKeys?: string[];
  integrationConfig?: Record<string, Record<string, unknown>>;
  kind?: string;
};

export const conditionInputSchema: Schema<ConditionInput> = s.object<ConditionInput>({
  scheduleKind: s.optional(s.string()),
  executionDate: s.optional(s.int()),
  waitDuration: s.optional(s.int()),
  waitDurationUnit: s.optional(s.string()),
  executeNow: s.optional(s.boolean()),
  description: s.optional(s.string()),
  notifyMemberIds: s.optional(s.array(s.string())),
  notifyTeamKeys: s.optional(s.array(s.string())),
  integrationConfig: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  kind: s.optional(s.string()),
});
