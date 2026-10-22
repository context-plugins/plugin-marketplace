import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The file ID of the uploaded file against which to run the tool */
export type UploadFileId = number | string;

export const uploadFileIdSchema: Schema<UploadFileId> = s.of<UploadFileId>(s.union([s.int(), s.string()]));
