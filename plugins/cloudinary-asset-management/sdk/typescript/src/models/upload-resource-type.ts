import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of resource to upload:
 * - "image" for uploading strictly images
 * - "video" for uploading strictly videos
 * - "raw" for uploading non-media files
 * - "auto" for allowing Cloudinary to automatically detect the type of the uploaded file
 */
export const UploadResourceType = {
  Image: "image",
  Video: "video",
  Raw: "raw",
  Auto: "auto",
} as const;
export type UploadResourceType = (typeof UploadResourceType)[keyof typeof UploadResourceType] | (string & {});

export const uploadResourceTypeSchema: EnumSchema<UploadResourceType> =
  s.enumOf<UploadResourceType>(UploadResourceType);
