import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget25 = {
  OvertureServiceAssociateVirtualInterface: "OvertureService.AssociateVirtualInterface",
} as const;
export type XAmzTarget25 = (typeof XAmzTarget25)[keyof typeof XAmzTarget25] | (string & {});

export const xAmzTarget25Schema: EnumSchema<XAmzTarget25> = s.enumOf<XAmzTarget25>(XAmzTarget25);
