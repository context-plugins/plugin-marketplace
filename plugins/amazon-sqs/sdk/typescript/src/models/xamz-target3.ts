import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget3 = {
  AmazonSqsListMessageMoveTasks: "AmazonSQS.ListMessageMoveTasks",
} as const;
export type XAmzTarget3 = (typeof XAmzTarget3)[keyof typeof XAmzTarget3] | (string & {});

export const xAmzTarget3Schema: EnumSchema<XAmzTarget3> = s.enumOf<XAmzTarget3>(XAmzTarget3);
