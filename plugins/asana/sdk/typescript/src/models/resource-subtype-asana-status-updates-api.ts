import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but
 * may render differently in Asana or represent resources with different semantic meaning. The
 * `resource_subtype`s for `status` objects represent the type of their parent.
 */
export const ResourceSubtypeAsanaStatusUpdatesApi = {
  ProjectStatusUpdate: "project_status_update",
  PortfolioStatusUpdate: "portfolio_status_update",
  GoalStatusUpdate: "goal_status_update",
} as const;
export type ResourceSubtypeAsanaStatusUpdatesApi =
  | (typeof ResourceSubtypeAsanaStatusUpdatesApi)[keyof typeof ResourceSubtypeAsanaStatusUpdatesApi]
  | (string & {});

export const resourceSubtypeAsanaStatusUpdatesApiSchema: EnumSchema<ResourceSubtypeAsanaStatusUpdatesApi> =
  s.enumOf<ResourceSubtypeAsanaStatusUpdatesApi>(ResourceSubtypeAsanaStatusUpdatesApi);
