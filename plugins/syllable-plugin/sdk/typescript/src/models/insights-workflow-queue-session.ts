import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileIdListSchema, type FileIdList } from "./unions/file-id-list.js";
import { sessionIdListSchema, type SessionIdList } from "./unions/session-id-list.js";

/** Session identifier for workflow queue. */
export type InsightsWorkflowQueueSession = {
  /** Unique name for workflow */
  workflowName: string;
  /** List of session identifiers */
  sessionIdList?: SessionIdList;
  /** List of file IDs to be processed. This is only applicable for upload folders */
  fileIdList?: FileIdList;
};

export const insightsWorkflowQueueSessionSchema: Schema<InsightsWorkflowQueueSession> =
  s.object<InsightsWorkflowQueueSession>({
    workflowName: s.string(),
    sessionIdList: s.optional(s.lazy(() => sessionIdListSchema)),
    fileIdList: s.optional(s.lazy(() => fileIdListSchema)),
    _keysMap: {
      workflowName: "workflow_name",
      sessionIdList: "session_id_list",
      fileIdList: "file_id_list",
    },
  });
