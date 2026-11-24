import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget35 = {
  OvertureServiceDeleteDirectConnectGatewayAssociation:
    "OvertureService.DeleteDirectConnectGatewayAssociation",
} as const;
export type XAmzTarget35 = (typeof XAmzTarget35)[keyof typeof XAmzTarget35] | (string & {});

export const xAmzTarget35Schema: EnumSchema<XAmzTarget35> = s.enumOf<XAmzTarget35>(XAmzTarget35);
