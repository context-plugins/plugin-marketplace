import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget48 = {
  Comprehend20171127StartEntitiesDetectionJob: "Comprehend_20171127.StartEntitiesDetectionJob",
} as const;
export type XAmzTarget48 = (typeof XAmzTarget48)[keyof typeof XAmzTarget48] | (string & {});

export const xAmzTarget48Schema: EnumSchema<XAmzTarget48> = s.enumOf<XAmzTarget48>(XAmzTarget48);
