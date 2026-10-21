import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { noticeSchema, type Notice } from "./notice.js";
import { taskSchema, type Task } from "./task.js";

/**
 * Envelope for an async generation task — returned by the accepted (202) response and by GET
 * /tasks/{task_id}.
 */
export type TaskResponse = {
  /**
   * An async generation task. Returned when a generation is accepted (202) and from GET
   * /tasks/{task_id} as it progresses. The `result` is filled in once `status` is `completed`.
   */
  data?: Task;
  /**
   * Tips and guidance attached to the response to help you get the most out of the generation. Each
   * entry is plain text you can show to a user or act on as-is. Omitted when there is nothing to
   * add.
   */
  notices?: Notice[];
  /** Unique identifier for this request, for correlation and support. */
  requestId: string;
};

export const taskResponseSchema: Schema<TaskResponse> = s.object<TaskResponse>({
  data: s.optional(s.lazy(() => taskSchema)),
  notices: s.optional(s.array(s.lazy(() => noticeSchema))),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
