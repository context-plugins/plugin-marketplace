import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but
 * may render differently in Asana or represent resources with different semantic meaning. The
 * resource_subtype `milestone` represent a single moment in time. This means tasks with this
 * subtype cannot have a start_date.
 */
export const ResourceSubtype1AsanaProjectsApi = {
  DefaultTask: "default_task",
  Milestone: "milestone",
  Section: "section",
  Approval: "approval",
} as const;
export type ResourceSubtype1AsanaProjectsApi =
  | (typeof ResourceSubtype1AsanaProjectsApi)[keyof typeof ResourceSubtype1AsanaProjectsApi]
  | (string & {});

export const resourceSubtype1AsanaProjectsApiSchema: EnumSchema<ResourceSubtype1AsanaProjectsApi> =
  s.enumOf<ResourceSubtype1AsanaProjectsApi>(ResourceSubtype1AsanaProjectsApi);
