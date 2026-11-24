import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowTypeInfoSchema, type WorkflowTypeInfo } from "./workflow-type-info.js";

export type WorkflowTypeInfos = {
  /** The list of workflow type information. */
  typeInfos: WorkflowTypeInfo[];
  /**
   * If a NextPageToken was returned by a previous call, there are more results available. To
   * retrieve the next page of results, make the call again using the returned token in
   * nextPageToken. Keep all other arguments unchanged. The configured maximumPageSize determines
   * how many results can be returned in a single call.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowTypeInfosSchema: Schema<WorkflowTypeInfos> = s.object<WorkflowTypeInfos>(
  {
    typeInfos: s.array(s.lazy(() => workflowTypeInfoSchema)),
    nextPageToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
