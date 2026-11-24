import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget58 = {
  StorageGateway20130630DeleteSnapshotSchedule: "StorageGateway_20130630.DeleteSnapshotSchedule",
} as const;
export type XAmzTarget58 = (typeof XAmzTarget58)[keyof typeof XAmzTarget58] | (string & {});

export const xAmzTarget58Schema: EnumSchema<XAmzTarget58> = s.enumOf<XAmzTarget58>(XAmzTarget58);
