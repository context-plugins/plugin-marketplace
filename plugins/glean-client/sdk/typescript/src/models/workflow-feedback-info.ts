import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { source2Schema, type Source2 } from "./source2.js";

export type WorkflowFeedbackInfo = {
  /** Where the feedback of the workflow originated from */
  source?: Source2;
};

export const workflowFeedbackInfoSchema: Schema<WorkflowFeedbackInfo> = s.object<WorkflowFeedbackInfo>({
  source: s.optional(s.lazy(() => source2Schema)),
});
