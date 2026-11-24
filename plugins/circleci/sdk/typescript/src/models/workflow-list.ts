import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowSchema, type Workflow } from "./workflow.js";

export type WorkflowList = {
  /** List of workflows */
  items?: Workflow[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowListSchema: Schema<WorkflowList> = s.object<WorkflowList>(
  {
    items: s.optional(s.array(s.lazy(() => workflowSchema))),
    nextPageToken: s.optional(s.string()),
    _keysMap: {
      nextPageToken: "next_page_token",
    },
  },
  { additionalProperties: s.json() },
);
