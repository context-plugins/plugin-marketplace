import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget9 = {
  StorageGateway20130630DescribeCache: "StorageGateway_20130630.DescribeCache",
} as const;
export type XAmzTarget9 = (typeof XAmzTarget9)[keyof typeof XAmzTarget9] | (string & {});

export const xAmzTarget9Schema: EnumSchema<XAmzTarget9> = s.enumOf<XAmzTarget9>(XAmzTarget9);
