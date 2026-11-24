import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget61 = {
  OvertureServiceUntagResource: "OvertureService.UntagResource",
} as const;
export type XAmzTarget61 = (typeof XAmzTarget61)[keyof typeof XAmzTarget61] | (string & {});

export const xAmzTarget61Schema: EnumSchema<XAmzTarget61> = s.enumOf<XAmzTarget61>(XAmzTarget61);
