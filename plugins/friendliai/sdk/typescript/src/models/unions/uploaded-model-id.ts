import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ID of an uploaded model. Cannot be used when `hfModelRepo` is provided. */
export type UploadedModelId = string;

export const uploadedModelIdSchema: Schema<UploadedModelId> = s.of<UploadedModelId>(s.union([s.string()]));
