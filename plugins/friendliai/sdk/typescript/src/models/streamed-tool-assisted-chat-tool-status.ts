import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { toolStatusDataSchema, type ToolStatusData } from "./tool-status-data.js";

export type StreamedToolAssistedChatToolStatus = {
  /** The type of the event. @default "tool_status" */
  event?: "tool_status";
  data: ToolStatusData;
};

export const streamedToolAssistedChatToolStatusSchema: Schema<StreamedToolAssistedChatToolStatus> =
  s.object<StreamedToolAssistedChatToolStatus>({
    event: s.defaulted(s.literal("tool_status"), "tool_status"),
    data: toolStatusDataSchema,
  });
