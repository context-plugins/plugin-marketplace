import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget72 = {
  StorageGateway20130630UpdateMaintenanceStartTime: "StorageGateway_20130630.UpdateMaintenanceStartTime",
} as const;
export type XAmzTarget72 = (typeof XAmzTarget72)[keyof typeof XAmzTarget72] | (string & {});

export const xAmzTarget72Schema: EnumSchema<XAmzTarget72> = s.enumOf<XAmzTarget72>(XAmzTarget72);
