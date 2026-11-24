import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget42 = {
  StorageGateway20130630DescribeTapes: "StorageGateway_20130630.DescribeTapes",
} as const;
export type XAmzTarget42 = (typeof XAmzTarget42)[keyof typeof XAmzTarget42] | (string & {});

export const xAmzTarget42Schema: EnumSchema<XAmzTarget42> = s.enumOf<XAmzTarget42>(XAmzTarget42);
