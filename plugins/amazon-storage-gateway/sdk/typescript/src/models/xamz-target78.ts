import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget78 = {
  StorageGateway20130630ListVolumeRecoveryPoints: "StorageGateway_20130630.ListVolumeRecoveryPoints",
} as const;
export type XAmzTarget78 = (typeof XAmzTarget78)[keyof typeof XAmzTarget78] | (string & {});

export const xAmzTarget78Schema: EnumSchema<XAmzTarget78> = s.enumOf<XAmzTarget78>(XAmzTarget78);
