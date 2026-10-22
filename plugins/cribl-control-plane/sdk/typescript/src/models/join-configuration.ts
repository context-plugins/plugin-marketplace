import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { joinConditionSchema, type JoinCondition } from "./join-condition.js";

export type JoinConfiguration = {
  /** Join kind, e.g. inner */
  kind?: string;
  /** Hints passed to the join function */
  hints?: Record<string, string>;
  /** Fields to use when joining */
  fieldConditions?: JoinCondition[];
  /** The id for this search job. */
  searchJobId?: string;
  /** The stage we are joining with. */
  stageId?: string;
};

export const joinConfigurationSchema: Schema<JoinConfiguration> = s.object<JoinConfiguration>({
  kind: s.optional(s.string()),
  hints: s.optional(s.record(s.string(), s.string())),
  fieldConditions: s.optional(s.array(s.lazy(() => joinConditionSchema))),
  searchJobId: s.optional(s.string()),
  stageId: s.optional(s.string()),
});
