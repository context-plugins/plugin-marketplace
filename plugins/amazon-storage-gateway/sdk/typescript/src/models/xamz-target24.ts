import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget24 = {
  StorageGateway20130630CancelRetrieval: "StorageGateway_20130630.CancelRetrieval",
} as const;
export type XAmzTarget24 = (typeof XAmzTarget24)[keyof typeof XAmzTarget24] | (string & {});

export const xAmzTarget24Schema: EnumSchema<XAmzTarget24> = s.enumOf<XAmzTarget24>(XAmzTarget24);
