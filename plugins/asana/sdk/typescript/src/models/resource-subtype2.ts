import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but
 * may render differently in Asana or represent resources with different semantic meaning. The
 * `resource_subtype`s for `status` objects represent the type of their parent.
 */
export const ResourceSubtype2 = {
  ProjectStatusUpdate: "project_status_update",
  PortfolioStatusUpdate: "portfolio_status_update",
  GoalStatusUpdate: "goal_status_update",
} as const;
export type ResourceSubtype2 = (typeof ResourceSubtype2)[keyof typeof ResourceSubtype2] | (string & {});

export const resourceSubtype2Schema: EnumSchema<ResourceSubtype2> =
  s.enumOf<ResourceSubtype2>(ResourceSubtype2);
