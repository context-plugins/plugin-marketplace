import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A request to instantiate a workflow template. */
export type InstantiateWorkflowTemplateRequest = {
  /**
   * Optional. The version of workflow template to instantiate. If specified, the workflow will be
   * instantiated only if the current version of the workflow template has the supplied version.This
   * option cannot be used to instantiate a previous version of workflow template.
   */
  version?: number;
  /**
   * Optional. A tag that prevents multiple concurrent workflow instances with the same tag from
   * running. This mitigates risk of concurrent instances started due to retries.It is recommended
   * to always set this value to a UUID
   * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The tag must contain only letters
   * (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
   * characters.
   */
  requestId?: string;
  /**
   * Optional. Map from parameter names to values that should be used for those parameters. Values
   * may not exceed 1000 characters.
   */
  parameters?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instantiateWorkflowTemplateRequestSchema: Schema<InstantiateWorkflowTemplateRequest> =
  s.object<InstantiateWorkflowTemplateRequest>(
    {
      version: s.optional(s.int()),
      requestId: s.optional(s.string()),
      parameters: s.optional(s.record(s.string(), s.string())),
    },
    { additionalProperties: s.json() },
  );
