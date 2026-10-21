import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Timestamp of the most recent file upload to any folder associated with this workflow (null for
 * non-upload workflows or until a file has been uploaded)
 */
export type LastFolderUploadAt = Date;

export const lastFolderUploadAtSchema: Schema<LastFolderUploadAt> = s.of<LastFolderUploadAt>(
  s.union([s.dateTime()]),
);
