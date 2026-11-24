import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget38 = {
  StorageGateway20130630ListTapePools: "StorageGateway_20130630.ListTapePools",
} as const;
export type XAmzTarget38 = (typeof XAmzTarget38)[keyof typeof XAmzTarget38] | (string & {});

export const xAmzTarget38Schema: EnumSchema<XAmzTarget38> = s.enumOf<XAmzTarget38>(XAmzTarget38);
