import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { awsSchema, type Aws } from "./unions/aws.js";
import { uploadurlSchema, type Uploadurl } from "./unions/uploadurl.js";

/** Initiate file upload response. */
export type FileInitUploadResponse = {
  /** ID of the file. */
  fileId: string;
  /** Upload URL of the file. `None` if the file is already uploaded. */
  uploadUrl?: Uploadurl;
  /** AWS fields to be uploaded with file. */
  aws?: Aws;
};

export const fileInitUploadResponseSchema: Schema<FileInitUploadResponse> = s.object<FileInitUploadResponse>({
  fileId: s.string(),
  uploadUrl: s.optional(s.lazy(() => uploadurlSchema)),
  aws: s.optional(s.lazy(() => awsSchema)),
});
