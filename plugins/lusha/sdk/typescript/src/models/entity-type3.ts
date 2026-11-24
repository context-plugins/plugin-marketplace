import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Overrides default entityType */
export const EntityType3 = {
  Contact: "contact",
  Company: "company",
} as const;
export type EntityType3 = (typeof EntityType3)[keyof typeof EntityType3] | (string & {});

export const entityType3Schema: EnumSchema<EntityType3> = s.enumOf<EntityType3>(EntityType3);
