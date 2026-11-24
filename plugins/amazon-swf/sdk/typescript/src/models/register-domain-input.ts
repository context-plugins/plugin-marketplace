import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceTagSchema, type ResourceTag } from "./resource-tag.js";

export type RegisterDomainInput = {
  /**
   * Name of the domain to register. The name must be unique in the region that the domain is
   * registered in. The specified string must not start or end with whitespace. It must not contain
   * a : (colon), / (slash), | (vertical bar), or any control characters (\u0000-\u001f |
   * \u007f-\u009f). Also, it must not be the literal string arn.
   */
  name: string;
  /** A text description of the domain. */
  description?: string;
  /**
   * The duration (in days) that records and histories of workflow executions on the domain should
   * be kept by the service. After the retention period, the workflow execution isn't available in
   * the results of visibility calls. If you pass the value NONE or 0 (zero), then the workflow
   * execution history isn't retained. As soon as the workflow execution completes, the execution
   * record and its history are deleted. The maximum workflow execution retention period is 90 days.
   * For more information about Amazon SWF service limits, see: Amazon SWF Service Limits in the
   * Amazon SWF Developer Guide.
   */
  workflowExecutionRetentionPeriodInDays: string;
  /**
   * Tags to be added when registering a domain. Tags may only contain unicode letters, digits,
   * whitespace, or these symbols: _ . : / = + - \@.
   */
  tags?: ResourceTag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const registerDomainInputSchema: Schema<RegisterDomainInput> = s.object<RegisterDomainInput>(
  {
    name: s.string(),
    description: s.optional(s.string()),
    workflowExecutionRetentionPeriodInDays: s.string(),
    tags: s.optional(s.array(s.lazy(() => resourceTagSchema))),
  },
  { additionalProperties: s.json() },
);
