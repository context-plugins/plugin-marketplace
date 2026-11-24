import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but
 * may render differently in Asana or represent resources with different semantic meaning.
 */
export const ResourceSubtypeAsanaGoalRelationshipsApi = {
  Subgoal: "subgoal",
  SupportingWork: "supporting_work",
} as const;
export type ResourceSubtypeAsanaGoalRelationshipsApi =
  | (typeof ResourceSubtypeAsanaGoalRelationshipsApi)[keyof typeof ResourceSubtypeAsanaGoalRelationshipsApi]
  | (string & {});

export const resourceSubtypeAsanaGoalRelationshipsApiSchema: EnumSchema<ResourceSubtypeAsanaGoalRelationshipsApi> =
  s.enumOf<ResourceSubtypeAsanaGoalRelationshipsApi>(ResourceSubtypeAsanaGoalRelationshipsApi);
