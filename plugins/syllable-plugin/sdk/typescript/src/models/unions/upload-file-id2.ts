import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Unique ID for uploaded file */
export type UploadFileId2 = number;

export const uploadFileId2Schema: Schema<UploadFileId2> = s.of<UploadFileId2>(s.union([s.int()]));
