import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityType1 = {
  People: "PEOPLE",
  Teams: "TEAMS",
  CustomEntities: "CUSTOM_ENTITIES",
} as const;
export type EntityType1 = (typeof EntityType1)[keyof typeof EntityType1] | (string & {});

export const entityType1Schema: EnumSchema<EntityType1> = s.enumOf<EntityType1>(EntityType1);
