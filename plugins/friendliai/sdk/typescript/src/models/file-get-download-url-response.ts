import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Get download URL response. */
export type FileGetDownloadUrlResponse = {
  /** ID of the file. */
  fileId: string;
  /** S3 URI of the file. */
  s3Uri: string;
  /** Download URL of the file. */
  downloadUrl: string;
};

export const fileGetDownloadUrlResponseSchema: Schema<FileGetDownloadUrlResponse> =
  s.object<FileGetDownloadUrlResponse>({
    fileId: s.string(),
    s3Uri: s.string(),
    downloadUrl: s.string(),
  });
