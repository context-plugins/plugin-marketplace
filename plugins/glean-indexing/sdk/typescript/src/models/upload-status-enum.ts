import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Upload status, enum of NOT_UPLOADED, UPLOADED, STATUS_UNKNOWN */
export const UploadStatusEnum = {
  Uploaded: "UPLOADED",
  NotUploaded: "NOT_UPLOADED",
  StatusUnknown: "STATUS_UNKNOWN",
} as const;
export type UploadStatusEnum = (typeof UploadStatusEnum)[keyof typeof UploadStatusEnum] | (string & {});

export const uploadStatusEnumSchema: EnumSchema<UploadStatusEnum> =
  s.enumOf<UploadStatusEnum>(UploadStatusEnum);
