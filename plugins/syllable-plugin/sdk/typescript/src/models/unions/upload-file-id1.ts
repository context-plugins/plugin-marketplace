import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Upload file ID processed by this execution, if applicable */
export type UploadFileId1 = number;

export const uploadFileId1Schema: Schema<UploadFileId1> = s.of<UploadFileId1>(s.union([s.int()]));
