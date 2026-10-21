import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of resource being uploaded. This field may be omitted if resource_type is not known at
 * the time of the call.
 */
export const ResourceType1 = {
  Image: "image",
  Video: "video",
  Raw: "raw",
} as const;
export type ResourceType1 = (typeof ResourceType1)[keyof typeof ResourceType1] | (string & {});

export const resourceType1Schema: EnumSchema<ResourceType1> = s.enumOf<ResourceType1>(ResourceType1);
