import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type S3VmUploadRequest = {
  /** The S3 URL of the file to upload */
  s3Url: string;
  /** Original name of the file */
  fileName: string;
  /** MIME type of the file */
  fileType?: string;
  /** Target path on the VM (defaults to Users/Administrator/Desktop/{file_name}) */
  targetPath?: string;
};

export const s3VmUploadRequestSchema: Schema<S3VmUploadRequest> = s.object<S3VmUploadRequest>({
  s3Url: s.string(),
  fileName: s.string(),
  fileType: s.optional(s.string()),
  targetPath: s.optional(s.string()),
  _keysMap: {
    s3Url: "s3_url",
    fileName: "file_name",
    fileType: "file_type",
    targetPath: "target_path",
  },
});
