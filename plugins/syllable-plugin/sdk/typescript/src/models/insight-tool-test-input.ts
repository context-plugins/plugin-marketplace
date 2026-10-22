import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sessionId2Schema, type SessionId2 } from "./unions/session-id2.js";
import { uploadFileIdSchema, type UploadFileId } from "./unions/upload-file-id.js";

/** Request model to test an insight tool. */
export type InsightToolTestInput = {
  /** Human readable name of insight tool configuration */
  toolName: string;
  /** The session ID of the session against which to run the tool */
  sessionId?: SessionId2;
  /** The file ID of the uploaded file against which to run the tool */
  uploadFileId?: UploadFileId;
};

export const insightToolTestInputSchema: Schema<InsightToolTestInput> = s.object<InsightToolTestInput>({
  toolName: s.string(),
  sessionId: s.optional(s.lazy(() => sessionId2Schema)),
  uploadFileId: s.optional(s.lazy(() => uploadFileIdSchema)),
  _keysMap: {
    toolName: "tool_name",
    sessionId: "session_id",
    uploadFileId: "upload_file_id",
  },
});
