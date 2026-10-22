import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { uploadStatusEnumSchema, type UploadStatusEnum } from "./upload-status-enum.js";

/** Describes the user status response body */
export type UserStatusResponse = {
  /** Whether the user is active or not */
  isActiveUser?: boolean;
  /** Upload status, enum of NOT_UPLOADED, UPLOADED, STATUS_UNKNOWN */
  uploadStatus?: UploadStatusEnum;
  /** Time of last successful upload for the user, in ISO 8601 format */
  lastUploadedAt?: string;
};

export const userStatusResponseSchema: Schema<UserStatusResponse> = s.object<UserStatusResponse>({
  isActiveUser: s.optional(s.boolean()),
  uploadStatus: s.optional(s.lazy(() => uploadStatusEnumSchema)),
  lastUploadedAt: s.optional(s.string()),
});
