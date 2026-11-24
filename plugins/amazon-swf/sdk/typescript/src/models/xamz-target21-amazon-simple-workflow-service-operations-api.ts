import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi = {
  SimpleWorkflowServiceDeleteWorkflowType: "SimpleWorkflowService.DeleteWorkflowType",
} as const;
export type XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi =
  | (typeof XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi)[keyof typeof XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi]
  | (string & {});

export const xAmzTarget21AmazonSimpleWorkflowServiceOperationsApiSchema: EnumSchema<XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi> =
  s.enumOf<XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi>(
    XAmzTarget21AmazonSimpleWorkflowServiceOperationsApi,
  );
