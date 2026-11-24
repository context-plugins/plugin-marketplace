import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectCompactSchema, type ProjectCompact } from "./project-compact.js";
import {
  resourceSubtypeAsanaGoalRelationshipsApiSchema,
  type ResourceSubtypeAsanaGoalRelationshipsApi,
} from "./resource-subtype-asana-goal-relationships-api.js";

export type GoalRelationshipCompact = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /**
   * The subtype of this resource. Different subtypes retain many of the same fields and behavior,
   * but may render differently in Asana or represent resources with different semantic meaning.
   */
  resourceSubtype?: ResourceSubtypeAsanaGoalRelationshipsApi;
  supportingResource?: ProjectCompact;
  /**
   * The weight that the supporting resource's progress contributes to the supported goal's
   * progress. This can only be 0 or 1.
   */
  contributionWeight?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalRelationshipCompactSchema: Schema<GoalRelationshipCompact> =
  s.object<GoalRelationshipCompact>(
    {
      gid: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      resourceSubtype: s.optional(s.lazy(() => resourceSubtypeAsanaGoalRelationshipsApiSchema)),
      supportingResource: s.optional(s.lazy(() => projectCompactSchema)),
      contributionWeight: s.optional(s.float64()),
      _keysMap: {
        resourceType: "resource_type",
        resourceSubtype: "resource_subtype",
        supportingResource: "supporting_resource",
        contributionWeight: "contribution_weight",
      },
    },
    { additionalProperties: s.json() },
  );
