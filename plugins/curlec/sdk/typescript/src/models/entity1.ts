import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity1 = {
  Customer: "customer",
} as const;
export type Entity1 = (typeof Entity1)[keyof typeof Entity1] | (string & {});

export const entity1Schema: EnumSchema<Entity1> = s.enumOf<Entity1>(Entity1);
