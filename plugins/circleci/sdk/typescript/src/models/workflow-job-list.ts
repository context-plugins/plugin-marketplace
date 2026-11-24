import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowJobSchema, type WorkflowJob } from "./workflow-job.js";

export type WorkflowJobList = {
  /** List of workflow jobs */
  items?: WorkflowJob[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowJobListSchema: Schema<WorkflowJobList> = s.object<WorkflowJobList>(
  {
    items: s.optional(s.array(s.lazy(() => workflowJobSchema))),
    nextPageToken: s.optional(s.string()),
    _keysMap: {
      nextPageToken: "next_page_token",
    },
  },
  { additionalProperties: s.json() },
);
