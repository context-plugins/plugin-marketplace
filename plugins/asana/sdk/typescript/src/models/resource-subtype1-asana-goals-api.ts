import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but
 * may render differently in Asana or represent resources with different semantic meaning. The
 * `resource_subtype`s for `status` objects represent the type of their parent.
 */
export const ResourceSubtype1AsanaGoalsApi = {
  ProjectStatusUpdate: "project_status_update",
  PortfolioStatusUpdate: "portfolio_status_update",
  GoalStatusUpdate: "goal_status_update",
} as const;
export type ResourceSubtype1AsanaGoalsApi =
  | (typeof ResourceSubtype1AsanaGoalsApi)[keyof typeof ResourceSubtype1AsanaGoalsApi]
  | (string & {});

export const resourceSubtype1AsanaGoalsApiSchema: EnumSchema<ResourceSubtype1AsanaGoalsApi> =
  s.enumOf<ResourceSubtype1AsanaGoalsApi>(ResourceSubtype1AsanaGoalsApi);
