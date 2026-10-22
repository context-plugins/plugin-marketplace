import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderBy = {
  Id: "id",
  Status: "status",
  CreatedAt: "created_at",
  StartedAt: "started_at",
  Priority: "priority",
  SessionId: "session_id",
  UploadFileId: "upload_file_id",
  EventType: "event_type",
} as const;
export type OrderBy = (typeof OrderBy)[keyof typeof OrderBy] | (string & {});

export const orderBySchema: EnumSchema<OrderBy> = s.enumOf<OrderBy>(OrderBy);
