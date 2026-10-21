import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of resources to include in the archive. "image" for images, "video" for videos, "raw"
 * for non-media files, or "all" for mixed types.
 */
export const ArchiveResourceType = {
  Image: "image",
  Video: "video",
  Raw: "raw",
  All: "all",
} as const;
export type ArchiveResourceType =
  | (typeof ArchiveResourceType)[keyof typeof ArchiveResourceType]
  | (string & {});

export const archiveResourceTypeSchema: EnumSchema<ArchiveResourceType> =
  s.enumOf<ArchiveResourceType>(ArchiveResourceType);
