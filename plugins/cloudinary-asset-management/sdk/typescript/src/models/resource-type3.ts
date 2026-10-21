import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResourceType3 = {
  /** Image files (jpg, png, gif, etc.). */
  Image: "image",
  /** Raw files (documents, text files, etc.). */
  Raw: "raw",
  /** Video files (mp4, webm, etc.). */
  Video: "video",
} as const;
export type ResourceType3 = (typeof ResourceType3)[keyof typeof ResourceType3] | (string & {});

export const resourceType3Schema: EnumSchema<ResourceType3> = s.enumOf<ResourceType3>(ResourceType3);
