import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityType = {
  Story: "story",
  Milestone: "milestone",
  Epic: "epic",
  Iteration: "iteration",
  Objective: "objective",
} as const;
export type EntityType = (typeof EntityType)[keyof typeof EntityType] | (string & {});

export const entityTypeSchema: EnumSchema<EntityType> = s.enumOf<EntityType>(EntityType);
