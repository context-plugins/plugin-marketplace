import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResourceType1 = {
  Group: "Group",
} as const;
export type ResourceType1 = (typeof ResourceType1)[keyof typeof ResourceType1] | (string & {});

export const resourceType1Schema: EnumSchema<ResourceType1> = s.enumOf<ResourceType1>(ResourceType1);
