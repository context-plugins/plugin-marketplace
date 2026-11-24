import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi = {
  SimpleWorkflowServiceDeleteActivityType: "SimpleWorkflowService.DeleteActivityType",
} as const;
export type XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi =
  | (typeof XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi)[keyof typeof XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi]
  | (string & {});

export const xAmzTarget20AmazonSimpleWorkflowServiceOperationsApiSchema: EnumSchema<XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi> =
  s.enumOf<XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi>(
    XAmzTarget20AmazonSimpleWorkflowServiceOperationsApi,
  );
