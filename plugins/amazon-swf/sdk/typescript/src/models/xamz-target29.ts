import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget29 = {
  SimpleWorkflowServiceDescribeWorkflowExecution: "SimpleWorkflowService.DescribeWorkflowExecution",
} as const;
export type XAmzTarget29 = (typeof XAmzTarget29)[keyof typeof XAmzTarget29] | (string & {});

export const xAmzTarget29Schema: EnumSchema<XAmzTarget29> = s.enumOf<XAmzTarget29>(XAmzTarget29);
