import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget13 = {
  OvertureServiceConfirmTransitVirtualInterface: "OvertureService.ConfirmTransitVirtualInterface",
} as const;
export type XAmzTarget13 = (typeof XAmzTarget13)[keyof typeof XAmzTarget13] | (string & {});

export const xAmzTarget13Schema: EnumSchema<XAmzTarget13> = s.enumOf<XAmzTarget13>(XAmzTarget13);
