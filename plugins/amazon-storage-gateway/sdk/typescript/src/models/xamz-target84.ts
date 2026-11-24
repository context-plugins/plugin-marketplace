import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget84 = {
  StorageGateway20130630UpdateSmbSecurityStrategy: "StorageGateway_20130630.UpdateSMBSecurityStrategy",
} as const;
export type XAmzTarget84 = (typeof XAmzTarget84)[keyof typeof XAmzTarget84] | (string & {});

export const xAmzTarget84Schema: EnumSchema<XAmzTarget84> = s.enumOf<XAmzTarget84>(XAmzTarget84);
