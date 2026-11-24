import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget49 = {
  Comprehend20171127StopEntitiesDetectionJob: "Comprehend_20171127.StopEntitiesDetectionJob",
} as const;
export type XAmzTarget49 = (typeof XAmzTarget49)[keyof typeof XAmzTarget49] | (string & {});

export const xAmzTarget49Schema: EnumSchema<XAmzTarget49> = s.enumOf<XAmzTarget49>(XAmzTarget49);
