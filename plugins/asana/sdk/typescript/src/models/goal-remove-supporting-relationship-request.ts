import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GoalRemoveSupportingRelationshipRequest = {
  /**
   * The gid of the supporting resource to remove from the parent goal. Must be the gid of a goal,
   * project, or portfolio.
   */
  supportingResource: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalRemoveSupportingRelationshipRequestSchema: Schema<GoalRemoveSupportingRelationshipRequest> =
  s.object<GoalRemoveSupportingRelationshipRequest>(
    {
      supportingResource: s.string(),
      _keysMap: {
        supportingResource: "supporting_resource",
      },
    },
    { additionalProperties: s.json() },
  );
