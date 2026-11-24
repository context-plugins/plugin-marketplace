import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  sortOrderAwsCodeBuildCommandExecutionApiSchema,
  type SortOrderAwsCodeBuildCommandExecutionApi,
} from "./sort-order-aws-code-build-command-execution-api.js";

export type ListSandboxesInput = {
  /** The maximum number of sandbox records to be retrieved. */
  maxResults?: number;
  /** The order in which sandbox records should be retrieved. */
  sortOrder?: SortOrderAwsCodeBuildCommandExecutionApi;
  /**
   * The next token, if any, to get paginated results. You will get this value from previous
   * execution of list sandboxes.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSandboxesInputSchema: Schema<ListSandboxesInput> = s.object<ListSandboxesInput>(
  {
    maxResults: s.optional(s.int()),
    sortOrder: s.optional(s.lazy(() => sortOrderAwsCodeBuildCommandExecutionApiSchema)),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
