import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget62 = {
  OvertureServiceUpdateVirtualInterfaceAttributes: "OvertureService.UpdateVirtualInterfaceAttributes",
} as const;
export type XAmzTarget62 = (typeof XAmzTarget62)[keyof typeof XAmzTarget62] | (string & {});

export const xAmzTarget62Schema: EnumSchema<XAmzTarget62> = s.enumOf<XAmzTarget62>(XAmzTarget62);
