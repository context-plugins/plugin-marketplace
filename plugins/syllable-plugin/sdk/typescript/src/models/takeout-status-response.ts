import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { takeoutRequestStatusSchema, type TakeoutRequestStatus } from "./takeout-request-status.js";
import { fileNamesSchema, type FileNames } from "./unions/file-names.js";

export type TakeoutStatusResponse = {
  jobId: string;
  /** Status of a takeout request. */
  status: TakeoutRequestStatus;
  updatedAt: Date;
  fileNames?: FileNames;
};

export const takeoutStatusResponseSchema: Schema<TakeoutStatusResponse> = s.object<TakeoutStatusResponse>({
  jobId: s.string(),
  status: takeoutRequestStatusSchema,
  updatedAt: s.dateTime(),
  fileNames: s.optional(s.lazy(() => fileNamesSchema)),
  _keysMap: {
    jobId: "job_id",
    updatedAt: "updated_at",
    fileNames: "file_names",
  },
});
