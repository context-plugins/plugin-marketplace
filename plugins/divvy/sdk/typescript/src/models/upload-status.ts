import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Document upload status. */
export const UploadStatus = {
  Uploaded: "UPLOADED",
  InProgress: "IN_PROGRESS",
  IvaProcessing: "IVA_PROCESSING",
  Autosaved: "AUTOSAVED",
  Failed: "FAILED",
} as const;
export type UploadStatus = (typeof UploadStatus)[keyof typeof UploadStatus] | (string & {});

export const uploadStatusSchema: EnumSchema<UploadStatus> = s.enumOf<UploadStatus>(UploadStatus);
