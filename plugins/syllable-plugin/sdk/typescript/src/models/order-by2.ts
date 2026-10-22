import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OrderBy2 = {
  UploadFileId: "upload_file_id",
  Status: "status",
  StartedAt: "started_at",
  CreatedAt: "created_at",
} as const;
export type OrderBy2 = (typeof OrderBy2)[keyof typeof OrderBy2] | (string & {});

export const orderBy2Schema: EnumSchema<OrderBy2> = s.enumOf<OrderBy2>(OrderBy2);
