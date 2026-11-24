import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Default entity type for all subscriptions */
export const EntityType2 = {
  Contact: "contact",
  Company: "company",
} as const;
export type EntityType2 = (typeof EntityType2)[keyof typeof EntityType2] | (string & {});

export const entityType2Schema: EnumSchema<EntityType2> = s.enumOf<EntityType2>(EntityType2);
