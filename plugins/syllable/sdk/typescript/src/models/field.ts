import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Field = {
  Id: "id",
  Status: "status",
  CreatedAt: "created_at",
  StartedAt: "started_at",
  Priority: "priority",
  SessionId: "session_id",
  UploadFileId: "upload_file_id",
  EventType: "event_type",
} as const;
export type Field = (typeof Field)[keyof typeof Field] | (string & {});

export const fieldSchema: EnumSchema<Field> = s.enumOf<Field>(Field);
