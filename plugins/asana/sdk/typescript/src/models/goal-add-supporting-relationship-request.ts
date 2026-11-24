import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoalAddSupportingRelationshipRequest = {
  /**
   * The gid of the supporting resource to add to the parent goal. Must be the gid of a goal,
   * project, or portfolio.
   */
  supportingResource: string;
  /**
   * An id of a subgoal of this parent goal. The new subgoal will be added before the one specified
   * here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only
   * supported when adding a subgoal.
   */
  insertBefore?: string;
  /**
   * An id of a subgoal of this parent goal. The new subgoal will be added after the one specified
   * here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only
   * supported when adding a subgoal.
   */
  insertAfter?: string;
  /**
   * The weight that the supporting resource's progress will contribute to the supported goal's
   * progress. This can only be 0 or 1.
   */
  contributionWeight?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalAddSupportingRelationshipRequestSchema: Schema<GoalAddSupportingRelationshipRequest> =
  s.object<GoalAddSupportingRelationshipRequest>(
    {
      supportingResource: s.string(),
      insertBefore: s.optional(s.string()),
      insertAfter: s.optional(s.string()),
      contributionWeight: s.optional(s.float64()),
      _keysMap: {
        supportingResource: "supporting_resource",
        insertBefore: "insert_before",
        insertAfter: "insert_after",
        contributionWeight: "contribution_weight",
      },
    },
    { additionalProperties: s.json() },
  );
