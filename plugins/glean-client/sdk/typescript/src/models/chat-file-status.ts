import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the file. */
export const ChatFileStatus = {
  Processing: "PROCESSING",
  Processed: "PROCESSED",
  PartiallyProcessed: "PARTIALLY_PROCESSED",
  Failed: "FAILED",
  Deleted: "DELETED",
} as const;
export type ChatFileStatus = (typeof ChatFileStatus)[keyof typeof ChatFileStatus] | (string & {});

export const chatFileStatusSchema: EnumSchema<ChatFileStatus> = s.enumOf<ChatFileStatus>(ChatFileStatus);
