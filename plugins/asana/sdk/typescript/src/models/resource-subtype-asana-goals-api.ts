import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but
 * may render differently in Asana or represent resources with different semantic meaning.
 */
export const ResourceSubtypeAsanaGoalsApi = {
  Number: "number",
} as const;
export type ResourceSubtypeAsanaGoalsApi =
  | (typeof ResourceSubtypeAsanaGoalsApi)[keyof typeof ResourceSubtypeAsanaGoalsApi]
  | (string & {});

export const resourceSubtypeAsanaGoalsApiSchema: EnumSchema<ResourceSubtypeAsanaGoalsApi> =
  s.enumOf<ResourceSubtypeAsanaGoalsApi>(ResourceSubtypeAsanaGoalsApi);
