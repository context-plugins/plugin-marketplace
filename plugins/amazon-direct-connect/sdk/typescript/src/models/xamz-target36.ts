import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget36 = {
  OvertureServiceDescribeDirectConnectGatewayAssociations:
    "OvertureService.DescribeDirectConnectGatewayAssociations",
} as const;
export type XAmzTarget36 = (typeof XAmzTarget36)[keyof typeof XAmzTarget36] | (string & {});

export const xAmzTarget36Schema: EnumSchema<XAmzTarget36> = s.enumOf<XAmzTarget36>(XAmzTarget36);
