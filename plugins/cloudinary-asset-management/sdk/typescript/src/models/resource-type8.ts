import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Cloudinary resource type of the stored asset. */
export const ResourceType8 = {
  Image: "image",
  Video: "video",
  Raw: "raw",
} as const;
export type ResourceType8 = (typeof ResourceType8)[keyof typeof ResourceType8] | (string & {});

export const resourceType8Schema: EnumSchema<ResourceType8> = s.enumOf<ResourceType8>(ResourceType8);
