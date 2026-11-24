import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAmazonSimpleWorkflowServiceOperationsApiSchema,
  type StatusAmazonSimpleWorkflowServiceOperationsApi,
} from "./status-amazon-simple-workflow-service-operations-api.js";

export type CloseStatusFilterAmazonSimpleWorkflowServiceOperationsApi = {
  /**
   * The close status that must match the close status of an execution for it to meet the criteria
   * of this filter.
   */
  status: StatusAmazonSimpleWorkflowServiceOperationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const closeStatusFilterAmazonSimpleWorkflowServiceOperationsApiSchema: Schema<CloseStatusFilterAmazonSimpleWorkflowServiceOperationsApi> =
  s.object<CloseStatusFilterAmazonSimpleWorkflowServiceOperationsApi>(
    {
      status: statusAmazonSimpleWorkflowServiceOperationsApiSchema,
    },
    { additionalProperties: s.json() },
  );
