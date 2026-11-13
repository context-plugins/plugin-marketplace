import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Upload processing state. */
export const UploadState = {
  Pending: "pending",
  Completed: "completed",
} as const;
export type UploadState = (typeof UploadState)[keyof typeof UploadState] | (string & {});

export const uploadStateSchema: EnumSchema<UploadState> = s.enumOf<UploadState>(UploadState);
