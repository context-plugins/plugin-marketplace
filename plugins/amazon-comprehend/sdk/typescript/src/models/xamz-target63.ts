import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget63 = {
  Comprehend20171127StopPiiEntitiesDetectionJob: "Comprehend_20171127.StopPiiEntitiesDetectionJob",
} as const;
export type XAmzTarget63 = (typeof XAmzTarget63)[keyof typeof XAmzTarget63] | (string & {});

export const xAmzTarget63Schema: EnumSchema<XAmzTarget63> = s.enumOf<XAmzTarget63>(XAmzTarget63);
