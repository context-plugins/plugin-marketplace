import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityType = {
  Contacts: "contacts",
  Companies: "companies",
} as const;
export type EntityType = (typeof EntityType)[keyof typeof EntityType] | (string & {});

export const entityTypeSchema: EnumSchema<EntityType> = s.enumOf<EntityType>(EntityType);
