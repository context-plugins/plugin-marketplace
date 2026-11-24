import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget39 = {
  OvertureServiceDeleteInterconnect: "OvertureService.DeleteInterconnect",
} as const;
export type XAmzTarget39 = (typeof XAmzTarget39)[keyof typeof XAmzTarget39] | (string & {});

export const xAmzTarget39Schema: EnumSchema<XAmzTarget39> = s.enumOf<XAmzTarget39>(XAmzTarget39);
