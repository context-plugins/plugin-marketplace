import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget = {
  StorageGateway20130630ActivateGateway: "StorageGateway_20130630.ActivateGateway",
} as const;
export type XAmzTarget = (typeof XAmzTarget)[keyof typeof XAmzTarget] | (string & {});

export const xAmzTargetSchema: EnumSchema<XAmzTarget> = s.enumOf<XAmzTarget>(XAmzTarget);
