import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity = {
  Collection: "collection",
} as const;
export type Entity = (typeof Entity)[keyof typeof Entity] | (string & {});

export const entitySchema: EnumSchema<Entity> = s.enumOf<Entity>(Entity);
