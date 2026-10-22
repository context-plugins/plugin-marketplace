import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Name of file used to create batch */
export type UploadFilename = string;

export const uploadFilenameSchema: Schema<UploadFilename> = s.of<UploadFilename>(s.union([s.string()]));
