import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget46 = {
  OvertureServiceCreatePublicVirtualInterface: "OvertureService.CreatePublicVirtualInterface",
} as const;
export type XAmzTarget46 = (typeof XAmzTarget46)[keyof typeof XAmzTarget46] | (string & {});

export const xAmzTarget46Schema: EnumSchema<XAmzTarget46> = s.enumOf<XAmzTarget46>(XAmzTarget46);
