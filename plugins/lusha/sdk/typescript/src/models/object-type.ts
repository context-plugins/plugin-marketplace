import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ObjectType = {
  Contact: "contact",
  Company: "company",
} as const;
export type ObjectType = (typeof ObjectType)[keyof typeof ObjectType] | (string & {});

export const objectTypeSchema: EnumSchema<ObjectType> = s.enumOf<ObjectType>(ObjectType);
