import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workflowTemplateSchema, type WorkflowTemplate } from "./workflow-template.js";

/** A response to a request to list workflow templates in a project. */
export type ListWorkflowTemplatesResponse = {
  /**
   * Output only. List of workflow templates that could not be included in the response. Attempting
   * to get one of these resources may indicate why it was not included in the list response.
   */
  unreachable?: string[];
  /** Output only. WorkflowTemplates list. */
  templates?: WorkflowTemplate[];
  /**
   * Output only. This token is included in the response if there are more results to fetch. To
   * fetch additional results, provide this value as the page_token in a subsequent
   * ListWorkflowTemplatesRequest.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listWorkflowTemplatesResponseSchema: Schema<ListWorkflowTemplatesResponse> =
  s.object<ListWorkflowTemplatesResponse>(
    {
      unreachable: s.optional(s.array(s.string())),
      templates: s.optional(s.array(s.lazy(() => workflowTemplateSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
