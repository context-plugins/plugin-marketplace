import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget81 = {
  StorageGateway20130630UpdateGatewaySoftwareNow: "StorageGateway_20130630.UpdateGatewaySoftwareNow",
} as const;
export type XAmzTarget81 = (typeof XAmzTarget81)[keyof typeof XAmzTarget81] | (string & {});

export const xAmzTarget81Schema: EnumSchema<XAmzTarget81> = s.enumOf<XAmzTarget81>(XAmzTarget81);
