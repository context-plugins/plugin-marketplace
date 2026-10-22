import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResourceType9 = {
  Image: "image",
} as const;
export type ResourceType9 = (typeof ResourceType9)[keyof typeof ResourceType9] | (string & {});

export const resourceType9Schema: EnumSchema<ResourceType9> = s.enumOf<ResourceType9>(ResourceType9);
