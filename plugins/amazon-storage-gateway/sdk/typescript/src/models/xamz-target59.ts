import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget59 = {
  StorageGateway20130630DescribeSnapshotSchedule: "StorageGateway_20130630.DescribeSnapshotSchedule",
} as const;
export type XAmzTarget59 = (typeof XAmzTarget59)[keyof typeof XAmzTarget59] | (string & {});

export const xAmzTarget59Schema: EnumSchema<XAmzTarget59> = s.enumOf<XAmzTarget59>(XAmzTarget59);
